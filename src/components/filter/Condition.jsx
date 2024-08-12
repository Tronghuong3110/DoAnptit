import React from 'react';

const Condition = (props) => {
    return (
        <>
            <div className='border-[1px] solid px-7 py-3 rounded-[30px] hover:bg-[#ccc] cursor-pointer'>
                <span>{props.title}</span>
                {props.children}
            </div>
        </>
    );
};

export default Condition;