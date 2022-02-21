import React from "react";
import { Link } from "react-router-dom";
//styles
import { Image } from "./Thumb.styles";
import { H5 } from "./Thumb.styles";

const Thumb = ({image, id, title,clickable, date}) =>(
    <div>
        {clickable ? (
            <Link to={`/${image}`}>
                <Image src={image} alt='article-thumb'/>
            </Link>
        ) : (
            <Image src={image} alt='article-thumb'/>
        )}
        <h2>{title}</h2>
        <h5>Date of publication: {date}</h5>
        {clickable ? (<Link to={`/${id}`}>
        <H5>Read article</H5>
        </Link>): (<h5>Read article</h5>)}
        
        
    </div>
);

export default Thumb;