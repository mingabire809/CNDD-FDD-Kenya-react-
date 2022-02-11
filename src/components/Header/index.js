import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import { Dropdown, Icon, DropdownMenu } from 'semantic-ui-react'
import flagLogo from '../../images/Flag_of_the_CNDD-FDD.svg.png'
import Logo from '../../images/logo.png'
import FacebookLogo from '../../images/facebook.png'
import TwitterLogo from '../../images/twitter.png'
import InstagramLogo from '../../images/instagram.jpeg'
import {useHook} from '../../Hook'


import { Div, Wrapper, Content, Content2,FlagLogoImg, Text, LogoImg,FacebookImg, TwitterImg, InstagramImg, Text2, Text3 } from "./Header.styles";



export default function Header  ()  {
    
    const  [isShown, setIsShown] = useState(false);
    const  [isShown2, setIsShown2] = useState(false);
    
    
    return( <Wrapper>
        <Content>
            
            <FlagLogoImg src={flagLogo} all = 'flag-logo'/>
            <Link to='/'>
            <Text>CNDD-FDD Section Kenya</Text>
            </Link>
            <LogoImg src={Logo} all = 'logo'/>
            
        </Content>
        <Content2>
            <Text2>Follow us on :</Text2>
            <FacebookImg src={FacebookLogo} all = 'facebook-logo'/>
            <TwitterImg src={TwitterLogo} all = 'twitter-logo'/>
            <InstagramImg src={InstagramLogo} all = 'instagram-logo'/>
            <Text3 onMouseEnter={()=> setIsShown(true)}
             onMouseLeave={() => setIsShown(false)}>
            Home</Text3>
            {isShown && (
        <Div>
          <Text2>I'll appear when you hover over the button.</Text2>
          <Text2>I'll appear when you hover over the button.</Text2>
          <Text2>I'll appear when you hover over the button.</Text2>
        </Div>
      )}
            <Text3 onMouseEnter={()=> setIsShown2(true)}
             onMouseLeave={() => setIsShown2(false)}>Gallery</Text3>{isShown2 && (
        <Div>
          <Text2>I'll appear when you hover over the buttons.</Text2>
          <Text2>I'll appear when you hover over the buttons.</Text2>
          <Text2>I'll appear when you hover over the buttons.</Text2>
        </Div>
      )}
            <Text3>Events</Text3>
            <Text3>About</Text3>
        </Content2>
        
    </Wrapper>);
   
            }



