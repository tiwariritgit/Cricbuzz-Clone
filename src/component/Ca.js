import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container ,Card, CardGroup, Button} from 'react-bootstrap';  
import axios from 'axios';
import { useState } from 'react';

// import Images from '../Images/images3.jpeg';
  

const Anu=()=>{  

  const [liveMatches, setLiveMatches] = useState([]);
  const teams = ['IND', 'AUS', 'NZL', 'ENG', 'PAK', 'RSA', 'AFG', 'SRL', 'NED', 'BAN'];

  const getNumericMonth = (month) =>  {
    if(month == 'Jan') return '01';
    else if(month == 'Feb') return '02';
    else if(month == 'Mar') return '03';
    else if(month == 'Apr') return '04';
    else if(month == 'May') return '05';
    else if(month == 'Jun') return '06';
    else if(month == 'Jul') return '07';
    else if(month == 'Aug') return '08';
    else if(month == 'Sep') return '09';
    else if(month == 'Oct') return '10';
    else if(month == 'Nov') return '11';
    else return '12';
  }

  const getLiveMatches = async () => {
    const options = {
      headers: {
        'X-RapidAPI-Key': '4f125e75c2msh2781c5dba20edcdp17a359jsn173c12c37926',
        'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
      }
    };

    const date = new Date();
    const dateInfo = date.toString().split(' ');
    let currentDate = `${dateInfo[3]}-${getNumericMonth(dateInfo[1])}-${dateInfo[2]}`;
    console.log("date = "+currentDate);

    const url = `https://cricket-live-data.p.rapidapi.com/fixtures-by-date/${currentDate}`;

    const resp = await fetch(url, options);
    const data = await resp.json();
    const fixtures = data['results'];
    console.log(fixtures);

    const matches = [];

    for(let fixture of fixtures) {
      //console.log(fixture);
      if(teams.includes(fixture['away']['code']) && teams.includes(fixture['home']['code'])) {
        matches.push(fixture['id']);
        //console.log("id = "+fixture['id']);
      }
      //console.log("matches = "+matches);
    }
    //console.log(matches);
    setLiveMatches(matches);
  }

  const getData=async()=>{
  //   const axios = require('axios');
    const options = {
    //  method: 'GET',
    //  url: 'https://cricket-live-data.p.rapidapi.com/fixtures',
    // headers: {
    //    'X-RapidAPI-Key': 'e58f253f35msh9e1be64ca55dd0bp121682jsn3cccff813a94',
    //    'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    //  }
    // headers: {
    //   'X-RapidAPI-Key': 'e58f253f35msh9e1be64ca55dd0bp121682jsn3cccff813a94',
    //   'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    // }
    headers: {
      'X-RapidAPI-Key': '4f125e75c2msh2781c5dba20edcdp17a359jsn173c12c37926',
      'X-RapidAPI-Host': 'cricket-live-data.p.rapidapi.com'
    }
   };
  //  console.log('abhinav');
  //  try {
  //    const response = await axios.get('https://cricket-live-data.p.rapidapi.com/fixtures');
  //    console.log(response);
  //  } catch (error) {
  //    console.error(error);
  //  }
  // const url = 'https://cricket-live-data.p.rapidapi.com/fixtures';
    //const url = 'https://cricket-live-data.p.rapidapi.com/match/2768865';
    // const url = 'https://cricket-live-data.p.rapidapi.com/fixtures-by-date/2023-10-30';
    // const response = await fetch(url,options);
    // const data = await response.json();
    //console.log(data['results'][4]);
    console.log(liveMatches);
  }

  getLiveMatches();
  //console.log(liveMatches);
  //getData();
  
  return (  
    
    <div className="App">
      {/* <button onClick={getData}>GET DATA</button>  */}
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