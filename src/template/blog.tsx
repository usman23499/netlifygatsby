import * as React from "react"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS,INLINES} from '@contentful/rich-text-types';
import {Link} from 'gatsby' ;
import Layout from "../Components/layout"
import * as style from "../Components/navigation.module.css"

var checkcontent=0;
const RICHTEXT_OPTIONS={
    renderNode:{
      
      [BLOCKS.PARAGRAPH]:(node,children)=>{
        if(checkcontent < 20){
            checkcontent=checkcontent+1;
            return (
                <div >
                    <p  style={{textAlign:"left",fontSize:"20px"}}>{children}</p>
                </div>
                )
                
        }
        
       
    },
    [INLINES.HYPERLINK]:(node,children)=>{
        checkcontent=checkcontent+1;
        if(checkcontent < 3){
            return(
                <img style={{width:"100%"}} src={node.data.uri} alt=""  />
              )
        }
      
    }
  
      }
      

  
    }



const blog = ({pageContext}) => {

    console.log(pageContext.itemDetails)



            return (
      <Layout>
    <>
    <Link to="/">
      <h3>
      Go back to the Homepage
      </h3>
    </Link>
                {
                    pageContext.itemDetails.map((value,index)=>{
                        
                        checkcontent=0;

                         return(
                            <div key={index} style={{margin: "0 auto", maxWidth: "900px",textAlign:"center"}}>
                            <h1 style={{textDecoration:"underline",color:"#555555",textAlign:"center"}}>
                              {value.blogTitle}
                            </h1>
                            <h3 style={{textAlign:"center",fontSize:"15px",color:"grey"}}>
                           {value.postedDate}
                            </h3>
                            
                          
                               <div >
                               {documentToReactComponents(JSON.parse(value.description.raw),RICHTEXT_OPTIONS)}      
                             </div>
                          
                             <br />
                             <br />
                            <Link to={`/blog/${value.blogTitle}`} className={style.button1} >
                              Read More
                            </Link>

                            <br />
                            <br />
                          </div>
                         )


                    })
                }

  
              
              
    </>

    </Layout>
  )
}

export default blog;
