const request = require("request");
const typeOfCat = require("process");
let nameOfCat = process.argv[2];

const options = {
  url: `https://api.thecatapi.com/v1/breeds/search?q=${nameOfCat}`,
};

request(options, (error, response, body) => {
  if (error) {
    console.log("error:", error);
  }
  if (!error) {
    const data = JSON.parse(body);
    console.log(data);
    console.log(typeof data);
  }
  if (body.length) {
  }

  console.log(nameOfCat.length);
});

//////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// } else {
//     if (body) {
//     body = JSON.parse(body);
//       if (body.length) {
//         if (body[0].description) {
//       return callback(null, body[0].description);
//             } else {
//               return callback(`No description for this breed, ${breed}, is provided.`);
//             }
//           } else {
//             return callback(`Could not find that breed, ${breed}.`);
//           }
//         } else {
//           return callback(`Recieved empty response from server`);
//         }
//       }
//     } else {
//       return callback(`Could not fetch info about '${breed}' cat breed from the server.`);
//     }
//   });
// };

//const request = require("request");

//
//   fs.writeFile(`${path}`, body, function (error) {
//     if (error) {
//       console.log("error:", error);
//     } else {
//       console.log(
//         `Downloaded and saved ${response.headers["content-length"]} bytes to ${path}`
//       );
//     }
//   });
// });
//module.exports = (breed, callback) => {

// headers: {
//   "x-api-key": "7e2cb31f-5f9d-4b4b-b872-dd2b2b7a2b9a",
// },
