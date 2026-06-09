import React from 'react'
import Conmapping from './Conmapping';

const Conditionalmap = () => {
    var condition = [
        {
            name:"Ram",
            age:25,
            city:"rjpm"
        },
        {
            name:"Kavya",
            age:20,
            city:"ttl"
        },
        {
            name:"Soundharya",
            age:20,
            city:"ttl"
        },
        {
            name:"Kishore",
            age:25,
            city:"srivi"
        },
        {
            name:"Gayu",
            age:19,
            city:"rjpm"
        },
        {
            name:"Sumithra",
            age:22,
            city:"svks"
        },
        {
            name:"Raja",
            age:21,
            city:"srivi"
        },
        {
            name:"Sai",
            age:23,
            city:"svks"
        }
    ];

  return (
    <div>
      <Conmapping data={condition}/>
    </div>
  )
}

export default Conditionalmap
