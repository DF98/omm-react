import React from 'react';
import ReactDOM from 'react-dom';
import './output.css';
import App from './App';
import ProductList from './ProductList';
import NavBar from './NavBar';
import Header from './Header';
import Card from './Card';
import * as serviceWorker from './serviceWorker';
import phoneIcon from './phone.svg';
import emailIcon from './email.svg';
import locationIcon from './location.svg';

let sausageHeaders = ["Sausage", "Description", "Price"];

let sausages = [
  {
    name: "BBQ",
    description: "Classic aussie snags.",
    price: "$7.99/KG"
  },
  {
    name: "Continental",
    description: "Fantastic beef and pork german style sausages.",
    price: "$13.99/KG"
  },
  {
    name: "Spanish Chorizo",
    description: "Smokey beef spanish sausages.",
    price: "$13.99/KG"
  },
  {
    name: "Red Wine and Fennel",
    description: "Pork infused with red wine and fennel.",
    price: "$17.99/KG"
  },
  {
    name: "Pork and Leek",
    description: "Greek style pork sausage with leek.",
    price: "$16.99/KG"
  },
  {
    name: "Loukaniko",
    description: "Greek style beef sausages with garlic and a hint of orange",
    price: "$13.99/KG"
  },
  {
    name: "Pork and Fennel",
    description: "Italian style pork sausages with Fennel",
    price: "$16.99/KG"
  },
  {
    name: "Mild Pork",
    description: "Italian style pork sausages with salt and pepper",
    price: "$16.99/KG"
  },
  {
    name: "Hot Pork",
    description: "Italian style hot pork sausages",
    price: "$16.99/KG"
  },
  {
    name: "Party-Size Mild Pork",
    description: "Smaller variation of the Mild Pork sausages",
    price: "$17.99/KG"
  },
  {
    name: "Party-Size Pork and Fennel",
    description: "Smaller variation of the Pork and Fennel sausages",
    price: "$17.99/KG"
  },
  {
    name: "Party-Size Hot Pork",
    description: "Smaller variation of the Hot Pork sausages",
    price: "$17.99/KG"
  }
]

ReactDOM.render(
  <React.StrictMode>

    {/* <NavBar /> */}
    <Header />
    {/* <div className="flex justify-center bg-green-500">
      <div>
        <ProductList products={sausages} tableHeaders={sausageHeaders} />
      </div>
    </div> */}

    <div className="flex flex-wrap bg-gray-500 py-10 px-5">
      <div className="w-full">
        <h1 className="text-4xl text-center">Contact Us</h1>
      </div>

      <div className="flex flex-col justify-center w-1/3 py-20">
        <div className="flex justify-center bg-gray-500">
          <img src={phoneIcon} className="w-16" />
        </div>
        <div className="py-5">
          <p className="text-3xl text-center">0431 348 509</p>
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/3 py-20">
        <div className="flex justify-center bg-gray-500">
          <img src={emailIcon} className="w-20" />
        </div>
        <div className="py-5">
          <p className="text-lg text-center">oakleighmarketmeat<br />@gmail.com</p>
        </div>
      </div>

      <div className="flex flex-col justify-center w-1/3 py-20">
        <div className="flex justify-center bg-gray-500">
          <img src={locationIcon} className="w-20" />
        </div>
        <div className="py-5">
          <p className="text-lg text-center">Shop 13, 12-18 Chester Street Oakleigh 3166</p>
        </div>
      </div>



    </div>

    <div className="flex flex-col bg-gray-600 py-24 px-5">
      <div>Phone Icon made by
          <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div>Email Icon made by
          <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
      <div>Location Icon made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
      </div>
    </div>

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
