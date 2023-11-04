import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup, Button} from 'react-bootstrap';  
import axios from 'axios';

// import Images from '../Images/images3.jpeg';
  

const Anu=()=>{  
  const getData=async()=>{
  //   const axios = require('axios');
    const options = {
    //  method: 'GET',
    //  url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
    // headers: {
    //    'X-RapidAPI-Key': 'e58f253f35msh9e1be64ca55dd0bp121682jsn3cccff813a94',
    //    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    //  }
    headers: {
      'X-RapidAPI-Key': 'e58f253f35msh9e1be64ca55dd0bp121682jsn3cccff813a94',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
    // headers: {
    //   'X-RapidAPI-Key': 'e58f253f35msh9e1be64ca55dd0bp121682jsn3cccff813a94',
    //   'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    // }
   };
  //  console.log('abhinav');
  //  try {
  //    const response = await axios.get('https://cricket-live-data.p.rapidapi.com/fixtures');
  //    console.log(response);
  //  } catch (error) {
  //    console.error(error);
  //  }
  // const url = 'https://cricket-live-data.p.rapidapi.com/fixtures';
    const url = 'https://cricket-live-data.p.rapidapi.com/match/2768865';
    //  const url = 'https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2023-11-04';
  const response = await fetch(url,options);
  const jsonResponse = await response.json();
  console.log(jsonResponse);
  }
  
  return (  
    
    <div className="App">
      <button onClick={getData}>GET DATA</button> 
   <Container className='p-4'>  
<CardGroup>  
<Card >  
  <Card.Body>  
    <Card.Title>Match 1</Card.Title>  
    <Card.Text>  
   Ind Vs SL 
    </Card.Text>  
    <Button variant="primary">Go somewhere</Button>  
  </Card.Body>  
</Card>  
<Card >  
  <Card.Body>  
    <Card.Title>Match 2</Card.Title>  
    <Card.Text>  
      AUS Vs SA 
    </Card.Text>  
    <Button variant="primary">Go somewhere</Button>  
  </Card.Body>  
</Card>  
<Card >  
  <Card.Body>  
    <Card.Title>Match 3</Card.Title>  
    <Card.Text>  
      ENG Vs NZ
    </Card.Text>  
    <Button variant="primary">Go somewhere</Button>  
  </Card.Body>  
</Card> 
</CardGroup>  
</Container>  
    </div>  
  );  
}  
export default Anu;  