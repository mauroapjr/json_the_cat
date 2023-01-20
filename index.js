const fetchBreedDescription = require("./breedFetcher");
console.log(fetchBreedDescription);
if (process.argv.length > 2) {
  process.argv.slice(2).forEach((breed) => {
    fetchBreedDescription(breed, (err, description) => {
      if (!err) {
        console.log(`\r\n${breed} Info:`);
        console.log(description);
      } else {
        console.log(`\r\n${err}`);
      }
    });
  });
} else {
  console.log("Try node index Siberian or Chartreux");
}
