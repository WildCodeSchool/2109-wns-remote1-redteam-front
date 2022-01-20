import React from 'react';

interface IcontextProps{
  icon: any;
  text: string;
}

function  IconText({icon, text} : IcontextProps) { 
  return (
    <div>
      {icon} 
      <p>{text}</p>
    </div>
  )} 
    
  
 
export default IconText;