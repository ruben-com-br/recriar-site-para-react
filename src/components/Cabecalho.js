import React from 'react'
import { Link } from 'react-router-dom';

function Cabecalho() {
    return (
        <div>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                            <span className="icon-bar" />
                        </button>
                        <Link to='/' className="navbar-brand" >Logo</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/sobre">ABOUT</Link></li>
                            <li><Link to="/servicos">SERVICES</Link></li>
                            <li><Link to="/portifolio">PORTFOLIO</Link></li>
                            <li><Link to="/precos">PRICING</Link></li>
                            <li><Link to="/contato">CONTACT</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Cabecalho;
