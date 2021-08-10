import React from "react"

import "./styles.css"

export default function RepoItem({ repo }) {
    const { full_name, html_url, description, owner } = repo

    return (
        <li className="repo-item">
            <header>
                <img src={owner.avatar_url} alt="" />
                <h3>
                    <a
                        href={html_url}
                        rel="noopener noreferrer"
                        target="_blank">
                        {full_name}
                    </a>
                </h3>
            </header>
            <main>
                <h4>{description}</h4>
            </main>
        </li>
    )
}
