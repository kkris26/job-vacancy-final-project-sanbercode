import React from 'react'

const Heading = ({children, size="xl"}) => {
  return <h3 className={`font-bold text-md md:text-${size}`}>{children}</h3>;
}

export default Heading