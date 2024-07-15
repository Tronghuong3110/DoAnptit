import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faYoutube, faFacebook, faSquareInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"; 
import { Icon } from '@iconify/react/dist/iconify.js';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const SubHeader = () => {
    return (
        <div className='h-6 bg-[#2C2C2C] flex justify-evenly'>
            <div className='flex w-1/2 justify-center'>
                {/* icon youtube */}
                <div className='youtube mr-3'>
                    <FontAwesomeIcon icon={faYoutube} style={{color: "#ffffff"}}/>
                </div>
                {/* icon facebook */}
                <div className='facebook mr-3'>
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff"}}/>
                </div>
                {/* icon instagram */}
                <div className='instagram mr-3'>
                    <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#ffffff"}}/>
                </div>
                {/* icon tiktok */}
                <div className='tiktok'>
                    <FontAwesomeIcon icon={faTiktok} style={{color: "#ffffff"}}/>
                </div>
            </div>

            <div className='flex w-1/2 justify-center'>
                <div className='login flex items-center'>
                    <Icon className='text-2xl' icon="lets-icons:key-light"  style={{color: "#ffffff"}} />
                    <p className='text-white ml-1'>Sign in</p>
                </div>
                {/*  */}
                <div className='w-[1px] ml-3 mr-3 mt-1 mb-1 bg-[#716a6a]'></div>
                {/* icon register */}
                <div className='register flex items-center'>
                    <FontAwesomeIcon icon={faUserPlus} style={{color: "#ffffff"}}/>
                    <p className='text-white ml-2'>Register</p>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;