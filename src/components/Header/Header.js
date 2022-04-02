import React, { useState } from 'react';
import './Header.css';
import { ShoppingCartIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const Header = () => {
    const [open, setOpen]= useState(false);

    return (
        <div className='flex justify-between px-10 bg-green-100 header'>

                <h1 className="text-3xl font-bold p-3 flex my-1" style={{color:"#FFBA43"}}> 
                <ShoppingCartIcon className='w-8 h-8 mr-2'></ShoppingCartIcon> 
                <span style={{color:'#3BB67E'}}>G</span>Store</h1>

            <nav className={`relative md:flex sm:static justify-center ease-in ${open===true ? 'top-6': 'hidden'}`}>
                <Link to='/home'>Home</Link>
                <Link to='/store'>Store</Link>
                <Link to='/store'>Store</Link>
                <Link to='/store'>Store</Link>
                <Link to='/store'>Store</Link>
            </nav>
            <div onClick={()=>setOpen(!open)}  className='menu-icon w-8 h-8 my-1 menu md:hidden text-green-500 pr-0 pt-3'>
                {open ? <XIcon></XIcon> : <MenuAlt1Icon></MenuAlt1Icon>}
            </div>
        </div>
    );
};

export default Header;