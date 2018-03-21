const axios = require("axios");
const router = require("express").Router();


const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";


router.get("/results", (req, res) => {
  console.log(req.query);
  const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + req.query.q
  console.log("query URL: " , queryURL);
  axios
    .get(queryURL)
    .then(({ data: { results } }) => {
      console.log("here router");
      console.log(results);
      
      res.json(results);
    })
    .catch(err => {
      console.log("error");
      res.status(422).json(err);
    });
});

module.exports = router;
