const request = require("request");

function fetchBreedDescription(breed, callback) {
  const options = {
    url: `https://api.thecatapi.com/v1/breeds/search?q=${breed}`,
  };

  request(options, (err, resp, body) => {
    if (!err) {
      if (resp.statusCode !== 200) {
        return callback(
          `Could not connect to the server. statusCode ${resp.statusCode}`
        );
      } else {
        if (body) {
          body = JSON.parse(body);
          if (body.length) {
            if (body[0].description) {
              return callback(null, body[0].description);
            } else {
              return callback(
                `There is no description for this breed: ${breed}.`
              );
            }
          } else {
            return callback(`Could not find this ${breed}.`);
          }
        } else {
          return callback(`Empty response.`);
        }
      }
    } else {
      return callback(`Could not find this '${breed}' cat.`);
    }
  });
}
module.exports = fetchBreedDescription;
