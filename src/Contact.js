import React from 'react';
import {ReactComponent as PhoneIcon} from '../node_modules/bootstrap-icons/icons/telephone-fill.svg';

function Contact() {
    return (
        <div class="grid grid-cols-1">
            <div class=" bg-green-800 text-xl text-center grid grid-cols-2">
                <div class="bg-blue-500"><PhoneIcon height='50px' width='50px'/></div> 
                <div class="bg-purple-400"><p class="break-words">0431 348 509</p></div>
            </div>
            <div>
                <p class="break-all bg-red-700 text-xl">Email<br/>oakleighmarketmeat@gmail.com</p>
            </div>
            <div class="bg-yellow-600 text-xl">
               <p>Address<br/> Shop 13, 12-18 Chester Street <br/>Oakleigh 3166</p>
            </div>
        </div>
    );
}

export default Contact;