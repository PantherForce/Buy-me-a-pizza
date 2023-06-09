import React from 'react'

const cards = () => {
    React.useEffect (()=>{
        fetch ('')
        .then ( Response => Response.json)
        .then ( json => console.log(json.items))
    })
  return (
    <div>cards</div>
  )
}

export default cards