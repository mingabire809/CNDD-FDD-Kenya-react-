import React, { useEffect, useState } from "react";
import { Wrapper, Content, Text, Image } from "./ArticleDetails.styles";
import flagLogo from '../../images/Flag_of_the_CNDD-FDD.svg.png'
import PierreEtEvariste from '../../images/evariste.jpg';
import EvaristeNdayishimiye from '../../images/evaristendayishimiye.jpg';
import Thumb from "../Thumb";
import Ambassadrice from '../../images/ambassadrice.jpeg';
import axios from "axios";
import { useParams } from "react-router";
import Spinner from "../Spinner";

const ArticleDetails = () => {
const[articles, setArticle] = useState("");
const {id} = useParams();



const getArticle = async () => {
    fetch(`http://127.0.0.1:8000/activity/activity/${id}/`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
        setArticle(data);
       
      })
    
}
useEffect(() => {
    getArticle();
}, [])

return(
    <div>
    {articles.length > 0 ? (
    <Wrapper>
        {articles.map(article => (
    <Content>
        
    <Image src={article.picture}/>
    <Text>
        <h1>{article.title}</h1>
        <h4>{article.date}</h4>
        <p>Content</p>
    </Text>
    </Content>
    ))}
</Wrapper>
): <Spinner/>}
<Text>Next</Text>
</div>
);

}
export default ArticleDetails