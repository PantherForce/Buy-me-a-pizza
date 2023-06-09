import React from 'react'

const filter = () => {
    const prod = ["All items" , "Rice items" , "Coco-Cola" , "Deserts"];
    const [filter , SetFilter] = React.useState("All items" )
  return (

    <div>
        <center>
            <span className='h4'>filter</span>
            <select name='filter' onClick={(e)=> SetFilter (e.target,value) }>
                {prod.map((item , index )=>{
                    <option value={item} key={index}>{item}</option>
                })}

            </select>
            <button className='btn btn-primary m-2'>Submit</button>
        </center>
    </div>
  )
}

export default filter