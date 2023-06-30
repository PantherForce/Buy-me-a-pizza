import { AppBar, Container, Link, Typography, makeStyles  } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'

const usestyles = makeStyles (()=>({
       nav : {
        display : 'flex',
        justifyContent : "center" ,
        alignItems : "center",
        flexDirection : 'row' , 
       }
}))
const Header = () => {

  const  classes = makeStyles () ;

  return (
  <AppBar variant='static'>
    <Container>
      <Typography variant='h3'>
        Pizza Man 
      </Typography>

      <div className ={classes.nav}>
       <NavLink>
        
        <Link to ='./'>
          Home
        </Link>

        <Link to ='./'>
          Order
        </Link>
        <Link to ='./'>
          Table
        </Link>
        <Link to ='./'>
          Contact us
        </Link>

       </NavLink>
      </div>

    </Container>
  </AppBar>
  )
}

export default Header