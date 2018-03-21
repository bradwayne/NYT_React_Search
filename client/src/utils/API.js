import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  getResultsList: function(query) {
    const authKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
    console.log("query", query);
    //const queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + 
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + query);
    //return axios.get('/results');
  }
};
