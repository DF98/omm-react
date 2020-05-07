import React from 'react';
import logo from './omm-logo-white.png';

function NavBar() {
    return (
        <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div class="text-sm lg:flex-grow">
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                        Products
            </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-4">
                        Contact Us
            </a>
                    <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500">
                        Events
            </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;