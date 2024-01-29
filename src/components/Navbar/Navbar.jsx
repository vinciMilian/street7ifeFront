import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss'

class Navbar extends React.Component {
 render() {
    return (
        <div className="containerNav">
            <div className="content">
                <div className="nome">
                    <img src="assets/S.png" alt="" />
                    <h1>Street</h1>
                    <h1>7ife</h1>
                </div>
                <div className="links">
                    <Link className="dotlink" to='/'><p>Home</p></Link>
                    <Link className="dotlink" to='/contacts'><p>Contatos</p></Link>
                    <Link className="dotlink" to='/vitrine'><p>Vitrine</p></Link>
                    <Link className="dotlink" to='/account'><p>Conta</p></Link>
                </div>
            </div>
        </div>
    );
 }
}

export default Navbar;