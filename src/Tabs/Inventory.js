import fetch from "node-fetch";


async function fetchText() {
  let response = await fetch("https://prayola.myshopify.com/admin/api/2020-07/products.json", {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': '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'
  }});
  let data = await response.json();
  console.log(data["products"]);
}

fetchText();