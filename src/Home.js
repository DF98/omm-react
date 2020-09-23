import React from 'react';
import logo from './omm-logo-white.png';
import cabinetimg from './meat-cabinet.jpg'


function Home() {
    return (
        <div class="relative">
            <div class="absolute grid grid-cols-2 z-10 mt-12 rounded-full" >
                <div class="bg-gray-900">
                    <img src={logo}></img></div>
                <div class="bg-gray-800">
                    <p class="text-5xl font-highlight">Welcome to Oakleigh Market Meat. We have the very finest meat cut to perfection.</p>
                </div>

            </div>
            <img class="z-0" src={cabinetimg}></img>
        </div>
    );
}

export default Home;