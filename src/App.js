import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


const gifts = [
  'lap',
  'phone',
  'moto',
  'oto',
]

function App() {
//Use state

//=================================//================================================
  //update information

  // const [info, setInfo] = useState({
  //   name: 'F8',
  //   age: 20,
  //   address: 'Ha Noi'
  // })
  // const handleUpdate = () => {
  //   setInfo({
  //     ...info,
  //     bio: 'Hello',
  //   }
  //   )
  // };
  // return (
  //   <div className="App">
  //     <h1>{JSON.stringify(info)}</h1>
  //     <button onClick={handleUpdate}>Udate</button>
  //   </div>
  // );


// Radom gifts

  // const [gift , setGift] = useState()
  
  // const randomGift = () => {
  //     const index = Math.floor(Math.random() * gifts.length); 

  //     setGift(gifts[index]);

  // };

  // return (
  //   <div className="App">
  //       <h1>{gift ||'Chua co phan thuong'}</h1>
  //       <button onClick = {randomGift} >Nhan phan thuong</button>
  //   </div>
  // );
//=================================//================================================
  const [name , setName] = useState('');
  const [email , setEmail] = useState('');


  const handleSupmit = () => {
      console.log({
        name,
        email,
      })
  }

  console.log(name);
  console.log(email);

  return (
    <div className="App">
        <input
         value = {name}
        onChange = {e => setName(e.target.value)}
        /> 

         <input
         value = {email}
        onChange = {e => setEmail(e.target.value)}
        />
        <button onClick = {handleSupmit}>Edit</button>
    </div>
  );
}

export default App;
