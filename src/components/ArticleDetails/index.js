import React, { useEffect, useState } from "react";
import { Wrapper, Content, Text, Image, Control} from "./ArticleDetails.styles";
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


let {id} = useParams();

{/*const [buttonLikes, setButtonLikes] = useState(parseInt(id))
const handleClickLikeButton = (id) => {
  setButtonLikes((prevValue) => prevValue - 1)
  console.log(buttonLikes)

}
id = buttonLikes.toString()*/}
const [articleId, setArticleId] = React.useState(parseInt(id));


const loadNextArticle = () => (articleId > articles.length) ? setArticleId(articleId + 1) : setArticleId(1)
const loadPrevArticle = () => (articleId > articles.length) ? setArticleId(articleId - 1) : setArticleId(1)
const getArticle = async () => {
  fetch(`http://127.0.0.1:8000/activity/activity/${articleId}/`)
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
}, [articleId])
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
        
    </Text>
    <p>{article.content}</p>
    </Content>
    ))}
</Wrapper>
): <Spinner/>}
<Control>
<h3 onClick={loadNextArticle}>Previous</h3>
<h3 onClick={loadPrevArticle}>Next</h3>
</Control>

</div>
);

}
export default ArticleDetails