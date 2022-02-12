import React from "react";
import PierreNkurunziza from '../../images/burundi.jpg';
import PierreEtEvariste from '../../images/evariste.jpg';
import EvaristeNdayishimiye from '../../images/evaristendayishimiye.jpg';
import ReverienNdikuriyo from '../../images/Reverien-Ndikuriyo.jpg';
import Ambassadrice from '../../images/ambassadrice.jpeg';
import Kenya from '../../images/Kenya.jpeg';
import Daystar from '../../images/Daystar.jpeg'
import Thumb from '../Thumb';
import { Axios } from "axios";
import Spinner from "../Spinner";
import { useState, useEffect, useCallback } from "react";
import { Wrapper2, Content2, Text,Div,Wrapper, Content, Image} from "../Articles/Articles.styles";
import { Link } from "react-router-dom";

export default function Article() {
    
    const  [isBigger, setIsBigger] = useState(false);
    const axios = require('axios');
   // const sendGet = async() =>{
   //     try {
            
   //         const resp = await axios.get('http://127.0.0.1:8000/activity/activity/');
    //        console.log(resp.data);
    //    }catch(err){
    //        console.error(err);
    //    }
     //   };
     let [responseData, setResponseData] = React.useState('')
    axios.get('http://127.0.0.1:8000/activity/activity/',{ mode: 'no-cors'}).then(response => {setResponseData(response.data)
    console.log(response);
        }).catch(err => {
        console.error(err);
    });
   // sendGet();
   const [articles, setArticles] = useState([])
   const datas = articles.slice(0,6);
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

    return(

      <>
        <h1>Recent Activity</h1>
      
        <Wrapper>

        
            
            
            {datas.length > 0 ? (
        <>
          {datas.map(article => (

              <Content>

                <div>

                    <Image src={article.picture} alt='image'/> 
                  <h2>{article.title}</h2>
                  <h5>Date of publication: {article.date}</h5>


            </div>
            
            
            
            
            
            </Content>
          ))}
          <Link to='/all-articles'>
          <h5>See all the activities</h5>
          </Link>
        </>
      ): <Spinner/>}
            
            
            
        
    </Wrapper>

  </>
    )
}


