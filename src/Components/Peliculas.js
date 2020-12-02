import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';

class Peliculas extends Component{
    render(){
        return(
            <>
            <h1>Soy un componente de peliculas</h1>
            <MensajeEstatico/>
            </>
        )
    }
}

export default Peliculas;