import React from 'react'
import Body from './Body'


const Container = ({name,_id}) => {
  // console.log(name)
  return (
    <>
      <Body name={name} _id={_id} />
    </> 

    
  );
}

export default Container