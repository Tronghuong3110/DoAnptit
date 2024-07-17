import React from 'react';

const Input = ( {title, children, style} ) => {
    return (
        <div class="relative mt-5 border-[1px]">
            <input type="text" id="title" placeholder=" " required class="block w-full px-2.5 pb-2.5 pt-4 text-16 text-gray-900 bg-white rounded-lg appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"/>
            <label for="title" class="absolute text-gray-500 duration-300 transform -translate-y-4 scale-75 top-0 z-10 origin-[0] bg-white px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 peer-focus:scale-75 peer-focus:-translate-y-5 left-2.5 text-[16px]">
                {title}
                {children}
            </label>
        </div>
    );
};

export default Input;