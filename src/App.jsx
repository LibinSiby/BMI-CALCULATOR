import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [height, setHeight]=useState(0)
  const [weight,setWeight]=useState(0)
  const [category,setcategory]=useState(0)
  const [color,setColor]=useState(0)
  const [bmi,setBmi]=useState(0)

  const [isHeight,setisHeight]=useState(true)
  const [isWeight,setisWeight]=useState(true)

  const validate=(e)=>{
    
      let name=e.target.name
      let value=e.target.value

      

   if(!!value.match(/^[0-9]*$/)){
    if(name==='height'){
      setHeight(value)
      setisHeight(true)
    }
    else{
      setWeight(value)
      setisWeight(true)
    }
   }
   else{
    if(name=='height'){
      setisHeight(false)
    }
    else{
      setisWeight(false)
    }
   }
  } 

  const handleReset=()=>{
    setHeight(0)
    setWeight(0)
    setBmi(0)
    setisHeight(true)
    setisWeight(true)
    setBmi(0)
    setcategory("")
    setColor('white')
  }

  const calculate = () => {
    const bmivalue = ((weight / ((height / 100) ** 2)).toFixed(2));
    setBmi(bmivalue);

    if(bmivalue<=18.5){
      setcategory('underweight');
      setColor('blue')
    }
      else if
        (bmivalue >=18.5 && bmivalue<=24.9){
          setcategory('Normal');
          setColor('green')
        }
        else if
        (bmivalue >=25 && bmivalue<=29.9){
          setcategory('Over Weight');
          setColor('yellow')
        }
        else if
        (bmivalue >=30 && bmivalue<=34.9){
          setcategory('Obese');
          setColor('orange')
        }
      else{
        setcategory('Extremly obese');
        setColor('red')
      }
    }
  
  

  



  return (
    <>
      <div className='d-flex justify-content-center align-items-center' style={{width:'100', height:'100vh'}}>
      <div className='rounded p-5 border border-dark' style={{width:'500' }}>
      <div className='text-center'>
        <h1>BODY MASS INDEX</h1>
        <p>Calculate your BMI here</p>
        
        <div className='p-4 rounded shadow flex-column mt-4 d-flex justify-content-center align-items-center' style={{backgroundColor:color}}>
        <h5>YOUR BMI:</h5>
        <h2 className='fw-bolder fs-1'>{bmi}</h2>
        <h4>{category}</h4>
        </div>
        <form className='mt-3'>
          <div className='mb-3'>
          <TextField className='w-100' name='height' value={height || ""} id="standard-basic" label="Height in CM" variant="standard" onChange={(e)=> validate(e)} />
          {!isHeight &&
            <p className='text-danger'>*Invalid input</p>}
          </div>
          <div className='mb-3'>
          <TextField className='w-100' name='weight' value={weight || ""} id="standard-basic"  label="Weight in KG" variant="standard" onChange={(e)=> validate(e)} />
          {!isWeight &&
            <p className='text-danger'>*Invalid input</p>}

          </div>
          <div className='d-flex justify-content-between w-100'>
          <Button color='success' variant="contained" disabled={isHeight && isWeight?false:true} onClick={calculate}>Calculate</Button>
          <Button color='error' variant="outlined" onClick={handleReset}>Reset</Button>
          </div>
        </form>
      </div>
      </div>
      </div>
    </>
  )
}



export default App
