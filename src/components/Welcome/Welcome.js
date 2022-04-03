import React from 'react';
import './Welcome.css';
import { CheckIcon, PhoneIcon, EmojiHappyIcon} from '@heroicons/react/solid';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();
    return (
        <section className='pb-10'>

            <div className='welcome-section pt-10 flex my-auto mx-auto pb-24 bg-green-100'>
                <div className='w-50 welcome-text my-auto mx-auto py-3 px-5'>
                    <h1 className='text-6xl font-semibold'><span style={{color:"#FFBA43"}}>Happy</span> Shopping in <span style={{color:"#3BB67E"}}>GStore</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur aliquid deserunt, fugiat illum laudantium quidem harum eum pariatur consectetur odio quos expedita atque quia aliquam, excepturi velit asperiores quisquam blanditiis</p>
                    <button onClick={()=>navigate('/store')} className='go-to-store'>Go To Store</button>
                </div>

                <div className='w-50 welcome-img my-auto mx-auto'>
                    <img src="vegetables.png" alt="" />
                </div>
            </div>

            <div className='benefits flex items-center'>
                <div className='flex'>
                    <EmojiHappyIcon className='icon'></EmojiHappyIcon>
                    <h3>Satisfaction</h3>
                </div>
                <div className='flex'>
                    <PhoneIcon className='icon'></PhoneIcon>
                    <h3>24/7 Support</h3>
                </div>
                <div className='flex'>
                    <CheckIcon className='icon'></CheckIcon>
                    <h3>Good Service</h3>
                </div>
            </div>

            <div className='categories flex gap-5 my-10'>
                <div>
                    <h1> <span>50</span>% off</h1>
                    <p>Get it now!!!</p>
                    <img style={{bottom:'-20px'}} src="tomatoes.png" alt="" />
                    <button onClick={()=>navigate('/store')} className='go-to-store'>Go To Store</button>
                </div>
                <div>
                    <h1> <span>40</span>% off</h1>
                    <p>Get it now!!!</p>
                    <img src="vegetables.png" alt=""></img>
                    <button onClick={()=>navigate('/store')} className='go-to-store'>Go To Store</button>
                </div>
                <div>
                    <h1> <span>45</span>% off</h1>
                    <p>Get it now!!!</p>
                    <img style={{height:'250px', bottom:'-40px'}} src="https://i0.wp.com/woolly.io/wp-content/uploads/2021/01/blueberry-1.png?fit=1280%2C1280&ssl=1" alt=""></img>
                    <button onClick={()=>navigate('/store')} className='go-to-store'>Go To Store</button>
                </div>
            </div>
        </section>
    );
};

export default Welcome;