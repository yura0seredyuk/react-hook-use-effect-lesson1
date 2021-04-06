import React, { useEffect } from 'react';

export const Child = () => {
  // useEffect(() => {
  //   console.log('Effect');
  // })

  // useEffect(() => {
  //   console.log('Mounted');
  // },[])

  useEffect(() => {
    console.log('Mount');

    return () => {
      console.log('Unmount')
    }
  },[])

  console.log('Rendering');

  return(
    <h2>Child value</h2>
  );
};