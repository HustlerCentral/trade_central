import React, { Component } from "react";
import { render } from "react-dom";
import CanvasJSReact from "./canvasjs.react";
// eslint-disable-next-line no-unused-vars
import {getJson} from "./Tabs/Inventory.mjs";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


class App extends Component {
    
  async render() {
    getJson();
    var test = getJson();
    let testw = await test;
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{				
                type: "column",
        dataPoints: [
          { label: "Apple", y: 2 }, 
                    { label: "Orange", y: 200  },
                    { label: "Banana", y: 25  },
                    { label: "Mango",  y: 30  },
                    { label: "Grape",  y: 28  }
                ]
       }]
   }
		
   return (
      <div>
       <CanvasJSChart options={options}

            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

export default App;
export {test};