import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header'
import BgImage from './components/BgImage';
import About from './components/About';
import CharPage from "./components/CharPage";

function App() {
    /*STATE*/
    // let name = "Narish"; //this is regular var decl, don't use
    const [dev, setDev] = useState("Narish"); //using state, init's a var with a setter

    const [name, setName] = useState("");
    const [nameInput, setNameInput] = useState("");
    const [showInput, setShowInput] = useState(true); /*Will control if input shows or hides*/
    const [charList, setCharList] = useState([]); //will hold list of chars

    /*Methods/handlers*/
    const changeDev = () => {
        setDev("Singh");
    }

    const handleNameInput = (e) => {
        const newName = e.target.value;
        setNameInput(newName);
    }

    const changeName = () => {
        setName(nameInput);
        setShowInput(false);
    }

    const getCharacters = async () => {
        const response = await Axios.get('https://rickandmortyapi.com/api/character/'); //async and await bc of API call
        setCharList(response.data.results);
    }

    //runs are soon as the app mounts
    //triggers on load
    useEffect(() => {
        getCharacters();
    },[]);

    //bc of the dependency array, will run every time nameInput changes
    useEffect(() =>{
        console.log("Typing...")
    },[nameInput]);

    /*App main*/
    return (
        <div className='App'>
            <Header/>
            <BgImage/>

            <p>Page by {dev}!</p>
            <button onClick={changeDev}>Change Dev</button>

            <p>What's your name?</p>
            {showInput === true ?
                (<input type="text" name="name-input" id="name-input" value={nameInput} onChange={handleNameInput}/>)
                : null //use a ternary statement as a if-else statement to show/hide input
            }
            <button onClick={changeName}>Enter Name</button>
            <p>What's up {name}?</p>

            <About/>

            <CharPage charList={charList} getCharacters={getCharacters}/> {/*Passing a prop so App and CharPage comp's can share data AND/OR methods*/}

        </div>
    );
}

export default App;
