import React from 'react';


export default function DecimalDisplay(value: number)  {
  // Function to format the number with up to 2 decimal places
  const formatNumber = (num: number) => {
    return num.toFixed(2); // Rounds the number to 2 decimal places and returns it as a string
  };

  return <span>{formatNumber(value)}</span>;
};
