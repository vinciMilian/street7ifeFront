import React from 'react';
import './contatct.scss';

class Contact extends React.Component {
 render() {
    return (
        <div className="contactContainer">
            <div className="content">
                <div className="textCont">
                    <img src="assets/logo.jpg" alt="" />
                    <div className="txt">
                        <h2>Não fique apenas na espera</h2>
                        <h1>Entre em contato com a loja e peça já o seu!</h1>
                    </div>
                </div>

                <div className="boxes">
                    <div className="box">
                        <a href="https://www.instagra.com/street7ife"><img src="assets/insta.png" alt="" /></a>
                    </div>
                    <div className="box">
                        <a href="https://www.tiktok.com/street7ife"><img src="assets/tik.png" alt="" /></a>
                    </div>
                    <div className="box">
                        <a href="mailto:street7ife@gmail.com"><img src="assets/gmail.png" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
 }
}

export default Contact;