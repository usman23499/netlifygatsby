import * as React from "react"
import Nav from './navigation'
import * as style from './layout.module.css'
import Footer from "./footer";
const Layout = ({children}) => {
  return (
    <div >
    <Nav />
      <div className={style.main}>
      {children} 
    {/* malt lab ye as a component use ho baq kab is ke neche aae and you can aslo add footer here */}


    
      <Footer/>
      </div>


    
    </div>
  )
}

export default Layout
