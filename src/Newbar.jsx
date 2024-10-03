import React from 'react'

const Newbar = () => {
   let a=12;
  return (
    
    <div style={{display:"flex",justifyContent:"space-around",height:"60px",alignItems:"center"}}>
         
         <h2>portfolio</h2>

       <div style={{display:"flex",justifyContent:"space-between",width:"30%"}}>
        
    <h3>about</h3>
    <h3>skill</h3>
    <h3>contact</h3>
    <h3>feedback</h3>
    <h3>{a}</h3>
    </div> 
        </div>


  )
}

export default Newbar