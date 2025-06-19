import React from 'react'

export const MovieInfo= ({title, year,director,actors,language}) => {
    return (
        <div>
            <p>{title}</p>
            <p>{year}</p>
            <p>{director}</p>
            <p>{actors}</p>
            <p>{language}</p>
        </div>
    )
}

