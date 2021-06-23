import * as React from "react"

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import {BLOCKS,INLINES} from '@contentful/rich-text-types';
import {Link} from 'gatsby' ;
import Layout from "../Components/layout"

const RICHTEXT_OPTIONS={
  renderNode:{
    
    [BLOCKS.PARAGRAPH]:(node,children)=>{
      // console.log(node.content[0].value);

      // var image=node.content[0].value.split("https://");
      // var imagecheck=node.content[0].value.split(".png");
      // console.log(node)
      // if(image.length>1 && imagecheck.length >1 ){
      //   return(
      //     <img src={node.content[0].value} alt="Not Image Link"  />
      //   )
      // }
      // else
      return (
      <div >
          <p  style={{textAlign:"left",fontSize:"20px"}}>{children}</p>
      </div>
      )
     
  },
  [INLINES.HYPERLINK]:(node,children)=>{
    console.log(node)
    return(
      <img style={{width:"100%"}} src={node.data.uri} alt=""  />
    )
  }


}
}

const Newblog = ({pageContext}) => {

    console.log(pageContext)

            const blogdetail=pageContext.itemDetails
              // var arrow='\a'
              // arrow=arrow.replace('a','');
            var data=blogdetail.description.raw;
            // console.log(data)
            data=JSON.parse(data);
          





            return (
      <Layout>
    <>
              <div  style={{margin: "0 auto", maxWidth: "900px"}} >
              <Link to="/blog">
      <h3>
      Visit the blog page
      </h3>
    </Link>
   <h2 style={{textAlign:"center",fontSize:"50px"}}>
      {blogdetail.blogTitle}
   </h2>
   <h3 style={{textAlign:"center",fontSize:"15px",color:"grey"}}>
      {blogdetail.postedDate}
   </h3>
   <div>
     {documentToReactComponents(data,RICHTEXT_OPTIONS)}
        
   </div>
   </div>
    </>

    </Layout>
  )
}

export default Newblog