import React from "react";
import {P ,Wrapper, Content1, Content2, FlagLogoImg, BottomFooterContent, DaystarLogo} from "./Footer.styles";
import Logo from '../../images/logo.png'
import daystarlogo from "../../images/daystarlogo.jpg";
import { Link } from "react-router-dom";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

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
                <div>
                <a href='https://cndd-fdd.org/'>cndd-fdd.org</a>
                </div>
                <div>
                <a href='https://cnddfdd-russia.ru/'>CNDD-FDD Section Russie</a>
                </div>
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