import React from 'react'
import LoadingIcons from 'react-loading-icons'
import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  return (
    <>
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      {/* <span className='canvas-loader'></span> */}
      <p
        style={{
          fontSize: 25,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
         <LoadingIcons.BallTriangle/>
      </p>
    </Html>
    
    
    
    </>
  
  )
}

export default Loader