import React from 'react';
import Card from './components/Card'
import './components/Card.css'
function App() {

  return (
    <>
    <Card date="28/10/2021" url="https://cdn3.iconfinder.com/data/icons/glypho-social-and-other-logos/64/logo-amazon-512.png" heading="Amezon Gift" subheading="Pay" device="Moto" color="orange"></Card>
    <Card date="28 sap 2021" url="https://cdn3.iconfinder.com/data/icons/picons-social/57/56-apple-512.png" heading="Apple Gift" subheading="Payment" device="Iphone" color="silver"></Card>
    </>

  );
}

export default App;
