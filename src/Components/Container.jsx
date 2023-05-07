import React from 'react'
import Body from './Body'


const Container = ({ name, _id, setShouldRefresh }) => {
  // console.log(name)
  return (
    <>
      <Body name={name} _id={_id} setShouldRefresh={setShouldRefresh} />
    </>
  );
};

export default Container