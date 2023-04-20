import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'

function GameList() {
    const [games, setGames] = useState([])

    const fetchGames = async () => {
        const options = {
            method: 'GET',
            url: 'https://free-to-play-games-database.p.rapidapi.com/api/games',
            headers: {
                'X-RapidAPI-Key':
                    'c0ae747bf4mshe0e8001c57d23b3p19ffe4jsn71922886b978',
                'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
            },
            params: {
                'page-size': 50 // the API only supports page sizes up to 50
            }
        }

        try {
            const response = await axios.request(options)
            const shuffledGames = shuffle(response.data)
            const randomGames = shuffledGames.slice(0, 12) // get the first 12 games from the shuffled list
            setGames(randomGames)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchGames()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleRefresh = () => {
        fetchGames()
    }

    const shuffle = (array) => {
        // Fisher-Yates shuffle algorithm
        let currentIndex = array.length
        let temporaryValue, randomIndex

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1

            // And swap it with the current element.
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }

        return array
    }

    return (
        <div>
            <button className="refresh-btn" onClick={handleRefresh}>
                Refresh
            </button>
            <div className="game-list">
                {games.map((game) => (
                    <div className="game-card" key={game.id}>
                        <img src={game.thumbnail} alt={game.title} />
                        <h3>{game.title}</h3>
                        <p>{game.short_description}</p>
                        <a href={game.game_url}>Play now</a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameList
