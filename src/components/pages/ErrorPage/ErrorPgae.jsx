import React from 'react';
import './errorpage.scss'

class ErrorPage extends React.Component {
 render() {
    return (
        <div className="containerError">
            <div className="content">
                <div className="error">
                    <h1>ERRO</h1>
                    <h1>404</h1>
                </div>
                <div className="dots">
                    <h2 className='a1'>!</h2>
                    <h2 className='a2'>!</h2>
                    <h2 className='a1'>!</h2>
                </div>
                <div className="breve">
                    <h2>Em breve esta página estará em ótima forma!</h2>
                </div>
            </div>
        </div>
    );
 }
}

export default ErrorPage;