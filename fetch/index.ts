const response = await fetch(
  "https://conduit.productionready.io/api/articles?limit=10&offset=0"
)

const json = await response.json()

console.log(json)