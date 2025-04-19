import React, { Children } from 'react'

const Button = ({action, children, color}) => {
    let bgColor = "";
    let bgHover = ""
    if(color == 'edit'){
            bgColor = "bg-green-600";
            bgHover = "hover:bg-green-800";

    }else if( color == 'delete'){
                    bgColor = "bg-red-600";
                    bgHover = "hover:bg-red-800";

    }else{
                    bgColor = "bg-blue-600";
                    bgHover = "hover:bg-blue-800";

    }
  return (
    <button
      onClick={action}
      className={`text-white ${bgColor}   p-1 rounded cursor-pointer   ${bgHover}`}
    >
      {children}
    </button>
  );
}

export default Button