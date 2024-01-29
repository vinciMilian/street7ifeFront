import React from 'react';
import './home.scss';

class Home extends React.Component {
 render() {
    return (
        <div className="containerHome">
            <div className="content">
                <div className="box">
                   <div className="contentBox">
                   <h1 >Em breve !</h1>
                   </div>
                </div>

                <div className="fotos">
                    <div className="gallery">
                        <img src="/assets/angulo.png" alt="" />
                        <img src='/assets/perfil.png'  alt="" />
                    </div>
                </div>

                <div className="intro">
                    <div id='flipContainer'>
                      <div id='flip'>
                        <div><div>Novo Estilo</div></div>
                        <div><div>Nova Onda</div></div>
                        <div><div>Nova Moda</div></div>
                    </div>
                    </div> 
                </div>
            </div>
        </div>
    );
 }
}

export default Home;