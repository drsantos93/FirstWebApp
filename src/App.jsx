import { useEffect, useState } from 'react'
import './App.css'
import { Box, Button } from '@mui/material'
import { Accessibility } from '@mui/icons-material'
import StyledInput from './components/CustomComponents'


// needs to be an object
// global css styling, initialize an object variable
const anyStyle = {
  backgroundColor: 'navy',
  border: '5px solid white',
  height: 500,
  width: 500
}

function App() {
  // useState structure, eerily looks like a class object
  // const [variable, mutator] = useState([defaultValue])
  const [ hidden, setHidden ] = useState(false)
  // <></> -> this is a fragment in ReactJS

  //apply any code after the page loaded
  // pansinin kapag nag load ang page nagpapakita pa ung icon tapos biglang nagtago
  //if the 2nd argument of an useEffect is empty, the code inside will run once on page load
  // useEffect(()=>{
  //   setHidden(true)
  // },[])

  //if the 2nd argument has a state inside, the code inside the useEffect will trigger every time the variable state changes, or the pages loads
  useEffect(()=>{
    if(hidden){
      console.log("I am hidden")
    }else{
      console.log("I am visible")
    }
  },[hidden])

  //functions within the parent function must be an arrow function
  const handleHide = () =>{
    if(hidden){
      setHidden(false)
    }else{
      setHidden(true)
    }
  }

  return (
   <>
    <Box mb={5} p={10} sx={{backgroundColor: 'white'}}>
      {/* Custom components with props */}
      <StyledInput placeholder="I have Brain Damage" gulle="standard"/>
    </Box>
    <Box mb={2}>
      <Button variant='contained' onClick={handleHide}>
        {
          hidden ? 'Show' : 'Hide'
        }
      </Button>
    </Box>
    {/* Treat <Box> as a <div> of HTML */}
    {/* then apply the global css variable in any sx attributes */}
      <Box sx={anyStyle}>
          {/* use sx, who is sx? It is just style attribute of html */}
          {/* sx={{css attributes here}} 
          
            note: css attributes are camel cased instead of dashed
            >do not use px for fonts use pt for fonts
            >font-size = fontSize in sx={{}}
          */}
          {/* if number, inside length type attribute: 
              > pure number = px still but it multiplies by 8, lol math
              > with string literal ('') = any unit you want
          */}
        <Accessibility sx={
          [ 
            { fontSize: 500 }, 
            hidden ? {display: 'none'} : {}
          ]
          }
          />
        
      </Box>
      
   </>
  )
}

// this line just exports our JS file to be used on other components/pages
export default App
