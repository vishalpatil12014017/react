import styled from "styled-components";

const Cards = styled.div`
    font-size: 18px;
    margin:4% 5%;
    padding:30px;
    width: 450px;
    border-radius:25px;
    background-color: #8d8d8d;
    border: 2px solid #131212;
    color: white;
   text-align: left;
    & .flex{
        display: flex;
        div{
                margin: 3%;
            }
    }
    & .visa{
        font-size: 35px;
        text-align: right;   
    }
    & .bolder{
        font-size: 20px;
    }
    & .num{
        font-size:25px;
    }
    p{
        margin: 0%;
        padding: 0%;
    }
    & .icon {

  
color: white;
min-width: 70px;
max-height: 30px;
text-align: center;
}
   
`
export default function Card({ children, prop }) {

    return <Cards >
        <div className="visa">Visa</div>
        <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEzuqpiKEpQYG6e51AMfl3ddebMRdzGzFp_j-u4BpiMnlf_V5Mp7p6noF884wncKATUcE&usqp=CAU" alt="chip" />
        <div className="num"> {prop.number} </div>
        <br />
        <div className="flex">
            <div> Card Holder Name <br /><p className="bolder">{prop.name}</p></div>
            <div> Expires <br />{prop.ex_month}/{prop.ex_year} </div>
            <div> CVV <br />{prop.cvv} </div>
        </div>
    </Cards>
}