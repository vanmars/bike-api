// ASYNC and AWAIT

export default class BikeService {
  static async getBikeInfo(location,distance) {
    try {
      const response = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=stolen`);
      if (!response.ok) {
        throw Error(response.status)
      }
     return response.json();
    } catch(error) {
      return error.message
    }
  }
}

// FETCH API METHOD
// export default class BikeService {
//   static getBikeInfo(location, distance) {
//     return fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=${location}&distance=${distance}&stolenness=stolen`)
//       .then(function(response){
//         if (!response.ok) {
//           throw Error(response.status);
//         }
//         return response.json();
//       })
//       .catch(function(error) {
//         return error;
//       })
//   }
// }

