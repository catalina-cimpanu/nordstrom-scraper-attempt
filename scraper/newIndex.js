const request = require("request-promise").defaults({
  headers: {
    Authorization: "apikey 8ea31c48-95c3-4bcf-9db1-d6ada47565f2",
    NordApiVersion: 2,
    Host: "<calculated when request is sent>",
  },
});

async function getJson() {
  const url =
    "https://query.ecommerce.api.nordstrom.com/api/queryresults/keywordsearch/?top=5&Keyword=pink%20dress";
  console.log(url);
  const json = request.get(url);
  console.log(json);
}

getJson();
