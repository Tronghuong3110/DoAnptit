// components/DistrictListDialog.js
import React, { forwardRef } from 'react';
import Dialog from './Dialog';

const DistrictListDialog = forwardRef(({ isVisible, districts, onDistrictClick }, ref) => {
  console.log(districts);
  return (
    <Dialog
      ref={ref}
      isVisible={isVisible}
      className="district-dialog" // You can add more custom styles if needed
    >
      <ul className="district-list">
        {districts.map((district, index) => (
          <li
            key={index}
            className="district-item hover:bg-gray-200 cursor-pointer px-3 py-2"
            onClick={() => onDistrictClick(district)}
          >
            {district}
          </li>
        ))}
      </ul>
    </Dialog>
  );
});

export default DistrictListDialog;
