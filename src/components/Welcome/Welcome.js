import React from 'react';
import './Welcome.css';
import { ShoppingCartIcon, CheckIcon, PhoneIcon, EmojiHappyIcon} from '@heroicons/react/solid';

const Welcome = () => {
    return (
        <section className='pb-10'>
            <div className='welcome-section flex my-auto mx-auto pb-24 bg-green-100'>
                <div className='w-50 welcome-text my-auto mx-auto py-3 px-5'>
                    <h1 className='text-6xl font-semibold'><span style={{color:"#FFBA43"}}>Happy</span> Shopping in <span style={{color:"#3BB67E"}}>GStore</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid deserunt, fugiat illum laudantium quidem harum eum pariatur consectetur odio quos expedita atque quia aliquam, excepturi velit asperiores quisquam blanditiis</p>
                    <button className='go-to-store'>Go To Store</button>
                </div>

                <div className='w-50 welcome-img my-auto mx-auto'>
                    <img src="vegetables.png" alt="" />
                </div>
            </div>
            <div className='benefits flex'>
                <div className='flex'>
                    <ShoppingCartIcon className='icon'></ShoppingCartIcon>
                    <h3>Lorem ipsum dolor, sit amet .</h3>
                </div>
                <div className='flex'>
                    <EmojiHappyIcon className='icon'></EmojiHappyIcon>
                    <h3>Lorem ipsum dolor, </h3>
                </div>
                <div className='flex'>
                    <PhoneIcon className='icon'></PhoneIcon>
                    <h3>Lorem ipsum dolor, .</h3>
                </div>
                <div className='flex'>
                    <CheckIcon className='icon'></CheckIcon>
                    <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem, voluptatibus.</h3>
                </div>
            </div>
        </section>
    );
};

export default Welcome;