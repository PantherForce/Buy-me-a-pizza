import React from 'react'

const Table = () => {
    const numbers = [1 ,2 ,3 ,4 ,5 ,6, 7 ,8 ,9 ,10 , 11 ,12, 13 , 14 , 15 , 16]
    const inActiveBtn = "btn btn-outline-primary m-2"
    const ActiveBtn = "btn btn-outline-primary m-2 active"

    const [ number , SetNumber] = React.useState(null)
  return (
    <div>
        <center>
           {numbers.map((num ,index)=>{
            <div style={{display : 'inline'}} key={index}> 
                <button  className = {number ===num? ActiveBtn : inActiveBtn} onClick={()=> SetNumber(num) }>
                      {num}
                </button>
            </div>

           })}
        </center>
    </div>
  )
}

export default Table