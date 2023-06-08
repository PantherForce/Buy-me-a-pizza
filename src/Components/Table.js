import React from 'react'

const Table = () => {
    const numbers = [1 ,2 ,3 ,4 ,5 ,6, 7 ,8 ,9 ,10 , 11 ,12 ]
  return (
    <div>
        <center>
           {numbers.map((num ,index)=>{
            <div style={{display : 'inline'}} key={index}> 
                <button  className=' btn btn-outline-primary'>
                      {num}
                </button>
            </div>

           })}
        </center>
    </div>
  )
}

export default Table