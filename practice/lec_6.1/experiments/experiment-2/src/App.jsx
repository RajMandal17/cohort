import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 
  return (    <div>
            <HeaderWithButton></HeaderWithButton>
           <Header title="Raj2"></Header>
           <Header title="Raj2"></Header>
           <Header title="Raj3"></Header>
           <Header title="Raj4"></Header>
    
  </div>
  )
}
function HeaderWithButton(){

  const [title , setTitle]= useState("my name is Raj");
 
  function updateTitle(){
    setTitle("my number is "+ Math.random());
  }

return <div>
          <button onClick={updateTitle}>Update the title</button>
           <Header title={title}></Header>

</div>
}

function Header({title}){
  return <div>
    {title}
  </div>
}
export default App
