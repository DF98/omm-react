import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
//import App from './App';
import ProductList from './ProductList';
import NavBar from './NavBar';
import Header from './Header';
import Card from './Card';
import * as serviceWorker from './serviceWorker';

let sausageHeaders = ["Sausage", "Description"];

let sausages = [
  {
    name: "BBQ",
    description: "Classic aussie snags."
  },
  {
    name: "Continental",
    description: "Fantastic beef and pork german style sausages."
  },
  {
    name: "Spanish Chorizo",
    description: "Smokey beef spanish sausages."
  },
  {
    name: "Red Wine and Fennel",
    description: "Pork infused with red wine and fennel."
  },
  {
    name: "Pork and Leek",
    description: "Greek style pork sausage with leek."
  },
  {
    name: "Loukaniko",
    description: "Greek style beef sausages with garlic and a hint of orange"
  },
  {
    name: "Pork and Fennel",
    description: "Italian style pork sausages with Fennel"
  },
  {
    name: "Mild Pork",
    description: "Italian style pork sausages with salt and pepper"
  },
  {
    name: "Hot Pork",
    description: "Italian style hot pork sausages"
  },
  {
    name: "Party-Size Mild Pork",
    description: "Smaller variation of the Mild Pork sausages"
  },
  {
    name: "Party-Size Pork and Fennel",
    description: "Smaller variation of the Pork and Fennel sausages"
  },
  {
    name: "Party-Size Hot Pork",
    description: "Smaller variation of the Hot Pork sausages"
  }
]

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <Header />
    {/* <div className="flex flex-wrap">
      <div className="w-full">
        <ProductList products={sausages} tableHeaders={sausageHeaders} />
      </div>
    </div> */}

      <div className="flex flex-wrap mt-10">
        <div className="w-1/3 pl-8">
          <Card title="Phone" info="0431 348 509" />
        </div>
        <div className="w-1/3 pl-8">
          {/* passing in html found:https://stackoverflow.com/questions/33381029/react-how-to-pass-html-tags-in-props */}
          <Card title="Email" info= {["oakleighmarketmeat", <br></br>,  "@gmail.com"]} />
        </div>
        <div className="w-1/3 pl-8">
          <Card title="Address" info="Shop 13, 12-18 Chester Street Oakleigh 3166" />
        </div>
      </div>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
