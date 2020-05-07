import React from 'react';
import meatImg from './meat.jpg';
import logoImg from './omm-logo.jpg';

function Header() {
    return (
        <div className="py-10 bg-fixed bg-cover bg-black h-full w-full " style={{backgroundImage: `url(${meatImg})`}}>
            <img src={logoImg} className="mx-auto object-cover rounded-full h-64 w-64" />
        </div>
    )
}

export default Header;