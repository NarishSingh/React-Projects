import React from 'react';
import CharCard from "./CharCard";

//retrieving a prop from App is like taking it in as a parameter
export default function CharPage({charList, getCharacters}) {
    return (
        <div className="charPage">
            <h1>Characters from Rick and Morty</h1>

            {/*<button onClick={getCharacters}>Get Characters</button>*/}

            <div className="char-flex">
                {charList.map(character => {
                    return <CharCard character={character}/> //map is used bc its just like forEach, but it always returns
                })}
            </div>
        </div>
    );
}