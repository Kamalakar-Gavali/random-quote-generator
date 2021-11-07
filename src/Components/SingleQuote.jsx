import styled from "styled-components";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from "react";
const QuoteContainer=styled.div`

display:flex;
justify-content:center;
align-items:center;
// height:90%;
width:100%;
flex-direction:column;
box-sizing:border-box;
padding:100px;
@media screen and (max-width:600px){
    padding:50px;
}

&>.quote-text{
    border-left:10px solid #F7DF94;
    text-align:left;
    font-size:36px;
    padding:20px;
    font-family:Raleway;
    color:black;
    width: 100%;
}
&>.quote-author{
    
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    border:10px solid tranparent;
    text-align:left;
    font-family:Raleway;
    color:#4F4F4F;
    margin-top:50px;
    &:hover{
        background:#333333;
        color:#F2F2F2;
    }

    &>div:first-child{
        cursor:pointer;
        
        &>p{
        font-family:Raleway;
    font-style: normal;
    color:inherit;
        // &:hover{
        //     color:#F2F2F2;
        // }
    &:first-child{
    
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    
    }
    
    &:last-child{
        
        font-weight: 500;
        font-size: 14px;
        line-height: 16px;
        
    }
}
}

}
`;
const SingleQuote=(props)=>{

    const [showArrow,setShowArrow]=useState(false)
return(

<QuoteContainer>
    <div className='quote-text'>
     {props.singleQuoteData.content}
    </div>
    <div className='quote-author' onClick={()=>{props.setSingleQuote(false);props.getQuotesByAuthor()}} onMouseEnter={()=>setShowArrow(true)} onMouseLeave={()=>setShowArrow(false)}>
        <div>
      <p>{props.singleQuoteData.author}</p>  
      <p>{props.singleQuoteData.tags?.join(',')}</p>
      </div>
      {
      showArrow &&
      <div>
      <ArrowRightAltIcon/>
      </div>
        }
    </div>
</QuoteContainer>
)
}
export default SingleQuote;