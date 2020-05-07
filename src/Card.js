import React from 'react';


function Card(props) {
    return (
        <div class="max-w-sm h-64 rounded-lg overflow-hidden shadow-lg bg-gray-900">
            {/* <img class="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            <div class="px-6 py-4">
                <div class="font-bold text-3xl text-white text-center mb-2">{props.title}</div>
                <p class="text-white text-center text-4xl">
                    {props.info}
                </p>
            </div>
        </div>
    )
}

export default Card;