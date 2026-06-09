import React from 'react'

function Conmapping ({data}) {

  return (
    <>
    <div>
        {data.map((a)=>(
            
         a.age == 20 &&
        <div>
            <li>Name:{a.name}</li>
            <li>Age:{a.age}</li>
            <li>City:{a.city}</li>
        </div>
    ))}
    </div>
    </> 
  )
}

export default Conmapping
