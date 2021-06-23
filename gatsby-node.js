var path=require('path'); // use node js for create a new path


exports.createPages=async  ({actions,graphql})=>{
    const {createPage}=actions;
    const result =await graphql( // form graph ql http://localhost:8000/___graphql
        `{
            allContentfulBlog {
                nodes {
                  blogTitle
                  postedDate
                  description {
                    raw
                  }
                }
              }
        }`
    )


console.log("The Result ",JSON.stringify(result)); // beacuse data is not is json escepially texr area wala

result.data.allContentfulBlog.nodes.forEach((obj)=>{
    createPage({
        path:`/blog/${obj.blogTitle}`, // page create according to name
        component:path.resolve('./src/template/newblog.tsx'),
        context:{
            itemDetails: obj
        }
    
    })
})

    createPage({
        path:`/blog`, // page create according to name
        component:path.resolve('./src/template/blog.tsx'),
        context:{
            itemDetails:result.data.allContentfulBlog.nodes
        }
    
    })

}