import styled from "styled-components";

const ToolBar = styled.header`
margin-top:0px;
position: relative;
width:100%;
height: 75px;
background-color: #f5f9fa;
font-size: 20px;
margin:auto;
margin-top: 10px;
@media all and (max-width:620px){
    width: 500px;
}
`

const LogoItem = styled.div`
position: absolute;
top: 18px;
@media all and (max-width:620px){
    width: 0%;
    position: none;
}
&>img {
    width: 40px;
    @media all and (max-width:620px){
        display: none;
        width: 0px;
    }
}

`
const DrawerItem = styled.div`
position: absolute;
right: 10px;
padding: 25px 0px;
width: 580px;
@media all and (max-width:620px){
    width: 370px;
    left: 50px;
}
`

const A = styled.a`
margin-left: 30px;
text-decoration: none;
color:black;
cursor:pointer;
@media all and (max-width:620px){
    margin-left: 15px;
    font-size: 15px;
}
`
function ToolbarMedia() {
    return (
        <ToolBar>
            <LogoItem>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLVDisGlpaPzBYnHyATNmUYaz51o4AONAhqg&usqp=CAU" alt="amazon" />
            </LogoItem>
            <DrawerItem>
                <A>About Us</A>
                <A>Prices</A>
                <A>Start Page</A>
                <A href="https://www.facebook.com/">Facebook</A>
                <A href="https://www.google.com/">Google</A>
            </DrawerItem>
        </ToolBar>
    )
}

export default ToolbarMedia