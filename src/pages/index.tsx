import * as React from "react"
import Layout from "../Components/layout";

import {Link} from 'gatsby' 


const Homepage = () => {
  return (
    <>
    <Layout>
    <h1 style={{
      fontFamily:"sans-serif",

    }}>
    Hi people

    </h1>
    <h3 style={{color:"GrayText"}}>
    Welcome to your new Gatsby site.
    </h3>
    <h3 style={{color:"GrayText"}} >
      Now go build something great.

    </h3>

    <img src="https://gatsby-contentful-blogsite.netlify.app/static/6d91c86c0fde632ba4cd01062fd9ccfa/630fb/gatsby-astronaut.png" alt="" />
    
        <br/>
        <br/>

        <Link to="/blog">
       Visit the Blog Page
    </Link>
   
        <br/>
    </Layout>
    </>
  )
}

export default Homepage
