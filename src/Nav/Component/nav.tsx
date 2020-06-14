import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to={'/'}  className="navbar-brand esper-icon">Esper</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav options-layout">
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/devices'}> Devices </Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to={'/groups'}>Groups </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}