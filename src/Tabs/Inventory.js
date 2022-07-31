import fetch from "node-fetch";


async function getJson() {
  let response = await fetch("https://prayola.myshopify.com/admin/api/2020-07/products.json", {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': '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'
  }});
  let data = await response.json();
  for (let index = 0; index < data["products"].length; index++) {
    const element = data["products"][index];
    console.log(element);
  }
}

fetchText();