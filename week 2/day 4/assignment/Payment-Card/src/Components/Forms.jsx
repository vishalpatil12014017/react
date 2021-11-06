import styled from "styled-components";

const Form = styled.form`
    font-size: 18px;
    margin:4% 25%;
    padding:5px;
    width:500px;
    
    & input{
        border: none;
        
        margin-bottom: 10px;
        border-bottom: 2px solid palevioletred;
    }
    & .d{
        width: 55px;
        margin: 4%;
    }
    & .d2{
        width: 55px;
        margin: 4%;
        
        text-align: left;
    }
    & #pay{
        width: 100px;
        height: 25px;
        border-radius: 10px;
        background-color: palevioletred;
        color: white;
    }
   & .icon {
      
       background-color:#8d8d8d;
  color: white;
  min-width: 27px;
  max-height: 27px;
  text-align: center;
}
    
`
export default function Forms({children,onsubmit}){
    
    return <Form onSubmit={onsubmit} >
             {children}
       </Form>
     
    ;

}