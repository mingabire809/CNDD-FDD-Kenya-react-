import React from "react";
import {P ,Wrapper, Content1, Content2, FlagLogoImg, BottomFooterContent, DaystarLogo} from "./Footer.styles";
import Logo from '../../images/logo.png'
import daystarlogo from "../../images/daystarlogo.jpg";

const Footer = () => (
    <Wrapper>
        <Content1>
            <div>
            <FlagLogoImg src={Logo} all = 'flag-logo'/>
                <P>CNDD-FDD section Kenya est la representation du partie</P>
                  <P>CNDD-FDD au Kenya</P>
            </div>
            <div>
                <h2>Lien utiles</h2>
                <h4>cndd-fdd.org</h4>
                <h4>CNDD-FDD Section Russie</h4>
            </div>
        </Content1>
         
        <Content2>
            <BottomFooterContent>
            @2022 Developped and tested by Dita Club under Daystar University
            
            </BottomFooterContent>
            <DaystarLogo src={daystarlogo} all = 'daystar-logo'/>
            
            
            
        </Content2>
    </Wrapper>
);

export default Footer;