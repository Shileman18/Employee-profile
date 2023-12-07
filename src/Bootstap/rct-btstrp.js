import React, { useState } from "react";
import {Container,Row,Col,Form,Button,Alert} from "react-bootstrap"

function App(){
  
 const[city ,setCity]=useState("")
  const[weatherData ,setweatherdata]=useState(null)
  const[error ,setError]=useState(null)

  const fetchWeather=async ()=>{
    try{
        const apiKey="b714210d1f78d0b861ba76f17d6d4f88"
      const  response=await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        ) ;
   if(response.ok){
   throw new  Error("city not found")
   }
   const data=await response.json();
   setweatherdata(data)
   setError(null)
    }catch(err){
        setweatherdata(null)
        setError("city not found,please enter a valid city name")
    }
  }
    return (
        <Container className="mt-4">
            <Row>
                <Col>
                <h1 >Weather App</h1>
                <Form>
                    <Form.Group controlId="cityForm">
                        <Form.Label>Enter City:</Form.Label>
                        <Form.Control 
                        type="text"
                         placeholder="Enter city"
                         value={city}
                          onChange={(e)=>setCity(e.target.value)}
                         />
                    </Form.Group>
                    <Button variant="primary mt-2" onClick={fetchWeather}>
                        Get Weather
                        </Button>
                </Form>
                </Col>
            </Row>

            {
                error&&(
                   <Row className="mt-3" >
                    <Col>
                    <Alert variant="danger">{error}</Alert>
                    </Col>
                   </Row>
                )
            }
            {weatherData &&(
          <Row className="mt-3">
            <col>
            <h2>
                {weatherData.name}, {weatherData.sys.country}
            </h2>
            <p>Temparature: {weatherData.main.temp}C</p>
            <p>Weather: {weatherData.weather[0].description}</p>
            </col>
          </Row>      
            )}
            </Container>
    )
}
export default App;