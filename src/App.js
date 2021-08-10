import React, { useState, useEffect } from "react"

import api from "./services/api"
import RepoItem from "./components/RepoItem"

import "./App.css"
import "./global.css"
import "./Header.css"

function App() {
    const [repos, setRepos] = useState([])
    const [query, setQuery] = useState("")
    const [load, setLoad] = useState(false)

    useEffect(() => {
        async function loadRepos() {
            const response = await api.get(`/repos?q=${query}`)

            setRepos(response.data)
        }

        loadRepos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [load])

    return (
        <>
            <header>
                <input
                    type="text"
                    className="query"
                    placeholder="Search repositories"
                    onChange={(e) => setQuery(e.target.value)}
                />
                <input
                    type="button"
                    value="Search"
                    className="button"
                    onClick={() => setLoad(!load)}
                />
            </header>
            <div className="App">
                <ul>
                    {repos.map((repo) => (
                        <RepoItem key={repo.id} repo={repo} />
                    ))}
                </ul>
            </div>
        </>
    )
}

export default App
