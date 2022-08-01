import fetch from "node-fetch";

var element, test3;

let getJson = async function getter() {
  let response = await fetch("https://prayola.myshopify.com/admin/api/2020-07/products.json", {
  headers: {
    'Content-Type': 'application/json',
    'X-Shopify-Access-Token': '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'
  }});
  let data = await response.json();
    element =  data["products"][1]["variants"][0]["inventory_quantity"];
    let el2 = element;
    return el2;
  }

// let test2 = getJson();

// test2.then(function (data) { 
//     test3 = data;
//     console.log(test3 + "OK");
// }
// )


export  {getJson};