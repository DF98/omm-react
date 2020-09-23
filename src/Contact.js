import React from 'react';
import { ReactComponent as PhoneIcon } from '../node_modules/bootstrap-icons/icons/telephone-fill.svg';
import { ReactComponent as EmailIcon } from '../node_modules/bootstrap-icons/icons/envelope-fill.svg';
import { ReactComponent as LocationIcon } from '../node_modules/bootstrap-icons/icons/geo-fill.svg';
function Contact() {
    return (
        <div class="grid grid-cols-10 grid-rows-5 mt-10">
            <div class="col-span-10 row-start-1 row-end-1 mt-6"><p class="text-6xl text-center">Contact Us</p></div>
            <div class="col-start-3 col-end-3 row-start-3 row-end-3"><PhoneIcon height='100px' width='100px'/></div>
            <div class="col-start-4 col-end-10 row-start-3 row-end-3"><p class="break-words text-4xl text-center">0431 348 509</p></div>
            <div class="col-start-3 col-end-3 row-start-4 row-end-4"><EmailIcon height='100px' width='100px'/></div>
            <div class="col-start-4 col-end-10 row-start-4 row-end-4">
                <p class="break-all text-4xl text-center">oakleighmarketmeat@gmail.com</p>
            </div>
            <div class="col-start-3 col-end-3 row-start-5 row-end-5"><LocationIcon height='100px' width='100px' /></div>
            <div class="col-start-4 col-end-10 row-start-5 row-end-5">
                <p class="text-4xl text-center">Shop 13, 12-18 Chester Street <br />Oakleigh 3166 VIC</p>
            </div>
        </div>
    );
}

export default Contact;