// components/Dialog.js
import React, { forwardRef } from 'react';

const Dialog = forwardRef(({ isVisible, children, className, style }, ref) => {
  return (
    <dialog
      ref={ref}
      className={`menu rounded-3xl w-full bg-white text-sm z-10 left-0 top-8 px-4 py-6 sm:px-6 ${isVisible ? 'block' : 'hidden'} ${className}`}
      style={style}
    >
      {children}
    </dialog>
  );
});

export default Dialog;
