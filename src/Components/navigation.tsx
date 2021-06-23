import * as React from "react"
// make navigation withlay out mean heder and footer nhai hai use link like ancer tag

import {Link} from 'gatsby' 

import * as style from './navigation.module.css'
const Navigate = () => {
  return (
    <div className={style.nav}>
    <Link to="/">
      <h1>
      Gatsby Blog Site
      </h1> 
    </Link>
   
    </div>
  )
}

export default Navigate
