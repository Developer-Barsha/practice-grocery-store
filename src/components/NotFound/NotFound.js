import React from 'react';

const NotFound = () => {
    return (
        <div>
            <img width={'600px'} src="notfound.gif" className='mx-auto px-auto' alt="" />
            <h2 className='text-7xl text-center text-red-500' style={{fontFamily:'Dongle, sans-serif'}}>Page Not Found!!</h2>
        </div>
    );
};

export default NotFound;