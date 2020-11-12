import React from 'react';

export default function CharCard({character}) {
    return (
        <div className="charCard">
            <p>Name: {character.name}</p>
            <p>Species: {character.species}</p>
            <p>Status: {character.status}</p>
        </div>
    );
}