import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import BikeService from './js/bike-Service.js';


function getElements(response) {
  if (response.bikes) {
    response.bikes.forEach(function(bike){
      $(".showBikes").append(`<div>${bike.title}</div>`)
    })
  } else {
    $(".showErrors").text(`There was an error: ${response.message}`)
  }
}


$(document).ready(function(){
  $("#searchButton").click(function(event) {
    event.preventDefault();
    let zip = $("#zipCode").val();
    let distance = $("#distance").val(); 
    BikeService.getBikeInfo(zip,distance)  
      .then(function(response){
        getElements(response);
      })
  });
});