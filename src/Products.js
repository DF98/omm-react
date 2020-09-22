import React from 'react';
import ProductList from './ProductList';

import sausageImg from './sausages.jpg';

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

let steaksHeaders = ["Steaks", "Description"];

let steaks = [
    {
        name: "T-bone",
        description: "beef with a bone that's shaped like the letter 'T'"
    },
    {
        name: "Porterhouse",
        description: "very nice juicy steak"
    },
    {
        name: "Scotch Fillet",
        description: "expensive tender steak"
    },
    {
        name: "Eye Fillet",
        description: "very expensive piece of beef"
    },
    {
        name: "Porterhouse",
        description: "very nice juicy steak"
    },
    {
        name: "Rib-eye",
        description: "nice steak with a bone."
    }
]

let porkHeaders = ["Pork", "Description"];

let porks = [
    {
        name: "Pork chops",
        description: "classic pork chops"
    },
    {
        name: "Pork Fillet",
        description: "very lean pork good for skewers"
    },
    {
        name: "Pork Belly",
        description: "make nice pancheta with this"
    },
    {
        name: "Pork Shoulder",
        description: "Shoulder off the pig"
    }
]

function Products() {
    return (
        <div>
            <div class="flex flex-col bg-gray-500 m-10 h-64">
    <div class="h-full w-full bg-fixed text-center">Sausages</div>
            </div>

            {/* <ProductList products={sausages} tableHeaders={sausageHeaders} />
            <p class="text-xl text-center"> Steaks</p>
            <ProductList products={steaks} tableHeaders={steaksHeaders} />
            <p class="text-xl text-center"> Pork</p>
            <ProductList products={porks} tableHeaders={porkHeaders} /> */}
        </div>

    );
}

export default Products;