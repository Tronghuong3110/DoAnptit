import React from 'react';

const Info = () => {
    return (
        <div className='p-1 sm:p-2 md:py-2 md:pl-4 md:pr-3 border border-neutral-200 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition'>
            {/* <div className='flex'> */}
                <div className='user-name'>
                    Xin chào, Nguyễn Trọng Hướng
                </div>

                <div className='flex-shrink-0'>
                    <img src='https://i0.wp.com/sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png?ssl=1' alt='ảnh đại diện' className='rounded-full aspect-square object-cover w-8 h-8'/>
                </div>
            {/* </div> */}
        </div>
    );
};

export default Info;