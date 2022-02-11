import React from "react";
import ReactScrollableFeed from'react-scrollable-feed';
import SimpleImageSlider from "react-simple-image-slider";
import PierreNkurunziza from '../../images/burundi.jpg';
import PierreEtEvariste from '../../images/evariste.jpg';
import EvaristeNdayishimiye from '../../images/evaristendayishimiye.jpg';
import ReverienNdikuriyo from '../../images/Reverien-Ndikuriyo.jpg';
import Ambassadrice from '../../images/ambassadrice.jpeg';
import Kenya from '../../images/Kenya.jpeg';

import { Wrapper, Image, Content,Text1} from "../Pictures/Pictures.styles";

const Image1 =[
    
    
        {url: PierreNkurunziza}, 
        {url:PierreEtEvariste}, 
       {url:EvaristeNdayishimiye}, 
        {url:ReverienNdikuriyo},
        
        {url:Kenya},  
    
];

const Images = () => (
    
    <Wrapper>
        
        <Content>
        <SimpleImageSlider width={1300}
        height={704} showBullets={true}
        showNavs={false} slideDuration={2} autoPlay={true}
        images={Image1} 
        />
        
        </Content>
        
    </Wrapper>
    
    
);



export default Images;