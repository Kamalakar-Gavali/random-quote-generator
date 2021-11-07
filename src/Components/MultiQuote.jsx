import styled from "styled-components";

const QuoteContainer=styled.div`

&>h1{
    color: #333333;
    font-family: 'Raleway';
    font-size: 36px;
}
&>.quote-text{
    border-left:10px solid #F7DF94;
    text-align:left;
    font-size:36px;
    padding:20px;
    font-family:Raleway;
    color:black;
    width: 100%;
    margin-top:40px;
}
`;

const MultiQuote=(props)=>{
    return(
        <QuoteContainer>

            <h1>{props.multiQuoteData[0]?.author}</h1>
            {
                props.multiQuoteData?.map((quote)=>

                    <div className='quote-text'>
                        {
                            quote.content
                        }
                    </div>
                    )
            }

        </QuoteContainer>
    )

}
export default MultiQuote;