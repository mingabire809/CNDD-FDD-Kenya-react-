import React from "react";
import Spinner from "./Spinner";
import { useState, useEffect, useCallback } from "react";
import Thumb from "./Thumb";
import ArticleDetails from "./ArticleDetails";
import { Wrapper2, Content2, Text,Div,Wrapper, Content, Image} from "../components/Articles/Articles.styles";


const AllArticles = () =>{

    const [articles, setArticles] = useState([])

   const [loading, setLoading] = useState(false);
    
    const fetchData = () => {
      setLoading(true);
     fetch("http://127.0.0.1:8000/activity/activity/")
       .then(response => {
         return response.json()
       })
       .then(data => {
         setArticles(data);
         setLoading(false)
       })
   }
   useEffect(() => {
     fetchData()
   }, [])



   return (
       <>
       <h2>All Activities</h2>
       
    <Wrapper>
   
        
            
            
    {articles.length > 0 ? (
<>
  {articles.map(article => (

      <Content>
        <Thumb 
                    key={article.id} 
                    clickable 
                    image={
                        article.picture 
                        
                        
                    }
                    title={article.title}
                    date={article.date}
                    id={article.id}
                    /> 
        <div>
          
         { /*  <Image src={article.picture} alt='image'/> 
          <h2>{article.title}</h2>
          <h5>Date of publication: {article.date}</h5>
                  <h5>Read article</h5>*/}


    </div>
    
    
    
    
    
    </Content>
  ))}
  
</>
): <Spinner/>}
    
    
    

</Wrapper>

</>
   )

}

export default AllArticles;