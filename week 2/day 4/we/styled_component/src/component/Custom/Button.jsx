import styled from 'styled-components'


export const Button = styled.button`
background:${(props) => (props.theme === "light" ? "aqua" : "black")};
color: ${(props) => (props.theme === "light" ? "black" : "aqua")};;
padding: 20px;
font-size:15px;
margin-top:30px;
margin-bottom:10px;
border:1px solid red;
border-radius:10px;

&:hover{
box-shadow: 2px 1px 5px gray ;

}

`