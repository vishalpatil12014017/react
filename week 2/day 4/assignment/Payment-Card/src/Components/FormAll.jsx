import Forms from './Forms';
import { useState } from 'react';
import Card from './Card';

function FormAll() {
  const [theme,setTheme] = useState("false")
  const [name,setName] = useState("")
  const [Number,setNumber] = useState("")
  const [cvv,setcvv] = useState("")
  const [month,setmonth] = useState("")
  const [year,setyear] = useState("")
  
  const [data,setData]=useState({
         name:name,
         number:Number,
          ex_month:month,
          ex_year:year,
          cvv:cvv
  })
  const handleSubmit =(e)=>{
        e.preventDefault()
         setData({
          name:name,
          number:Number,
          ex_month:month,
          ex_year:year,
          cvv:cvv
        })
     setTheme(true)
    console.log("submiitttingg",data)
  }
  
  return (
    <div className="App">
      
      <div style={{display:"flex"}}>
      {theme===true ? <Card prop={data}> </Card>:""}
        <div>
          <div style={{textAlign:"center",marginLeft:"55%"}}>Payment Details</div>
        <Forms onsubmit={handleSubmit}>
          <lable className="d2">Card Holder Name</lable>
          <br/>
          <br/>
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYgFgCxqXilismw82MGRMdkSLMbR8Tj_FnUgBxIx_Qn_-WOOHb4H8bW4sq0f3eoMK8s&usqp=CAU" alt="card name" />
        <input 
          placeholder='e.g Vishal Patil' 
          name='name'
          onChange={(e)=>{setName(e.target.value)}} 
         />
           <br/>
           <br/>
           <lable className="d2">Card Number</lable>
           <br/>
           <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6kPjESXss1de6Zqp5DJJB5jIya35K-PsRXlyiNoMJHfhM5-5V2tN1OME8mNLp_K2XC3c&usqp=CAU" alt="card number" />
          <input type="number" placeholder="e.g 123456479802" name="num"
          onChange={(e)=>{setNumber(e.target.value)}}/>
          <br/>
          <br/>
          <lable className="d2">Expiry Month</lable>
          <lable className="d2">Expiry Year</lable>
          <lable className="d2">CVV</lable>
          <br/>
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfG-6_DBVtBOMex3OcW0ckr016H5kYU6gwDfra-MnyVMSIfmBwavM83mDZ7asNiP_t9I&usqp=CAU" alt="month" />
          <input type="number" onChange={(e)=>{setmonth(e.target.value)}} placeholder="08" name="month" className="d"/>
         
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYfG-6_DBVtBOMex3OcW0ckr016H5kYU6gwDfra-MnyVMSIfmBwavM83mDZ7asNiP_t9I&usqp=CAU" alt="card year" />
          <input type="number" onChange={(e)=>{setyear(e.target.value)}} className="d" placeholder="2021" name="year"/>
          
          <img className="icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGoxbI34TWuNa84i0PevAkSbkTsx_Tjh5woGJ40NNv2z2ZjDTkcp6oQdTc-ZkU_x0Uqk&usqp=CAU" alt="card cvv" />
          <input type="number" onChange={(e)=>{setcvv(e.target.value)}} className="d" placeholder="123" name="cvv"/>
          <br/>
          <br/>
          <input type="submit" value="Pay" id="pay"/>
        </Forms>
        </div>
      </div>
    </div>
  );
}

export default FormAll;
