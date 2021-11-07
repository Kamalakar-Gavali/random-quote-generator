import styled from "styled-components";
import CachedIcon from '@mui/icons-material/Cached';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react";

import SingleQuote from "./SingleQuote";
import MultiQuote from "./MultiQuote";
import { useEffect } from "react";

const Wrapper=styled.div`
// padding:20px 60px;
padding:5% 10%;
height:100%;
box-sizing:inherit;
// display:flex;
// align-items:center;

max-width:2000px;
`;
const NewQuoteBar=styled.div`
display:flex;
justify-content:flex-end;   
box-sizing:inherit;
&>div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95px;
    cursor:pointer;

font-family: Raleway;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 120%;
color: #333333;

}

`;
const Footer = styled.footer`
font-family: Montserrat;
font-style: normal;
font-weight: 500;
font-size: 14px;
text-align: center;
color: #A9A9A9;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;
&>span{
    color:tomato;
    margin:0px 5px;
}`;

const Container=()=>{

    const[singleQuote,setSingleQuote]=useState(true)
    const [singleQuoteData,setSingleQuoteData]=useState({});    
    const [multiQuoteData,setMultiQuoteData]=useState([])                
    const API_URL = "https://api.quotable.io";
    
    const getQuote=  ()=>{
         fetch(`${API_URL}/random`).then(data=>data.json()).then(data=>setSingleQuoteData(data));

    }
const getQuotesByAuthor=()=>{
         fetch(`${API_URL}/quotes?author=${singleQuoteData.author}`).then(data=>data.json()).then(data=>setMultiQuoteData(data.results));
}
    useEffect( ()=>{

       getQuote();
    },[])
    return (
        <>
    <Wrapper>
    <NewQuoteBar onClick={()=>{getQuote();setSingleQuote(true)}}>
        <div>
random <CachedIcon/>
        </div>
    </NewQuoteBar>
    

    {
        singleQuote?<SingleQuote singleQuoteData={singleQuoteData} getQuotesByAuthor={getQuotesByAuthor} setSingleQuote={setSingleQuote}/>:<MultiQuote multiQuoteData={multiQuoteData} />
    }
    <Footer>Created with <span><FavoriteIcon /></span> by Kamalakar Gavali</Footer>
    </Wrapper>
    
    </>
    )
    
}
export default Container;