import React, {Component} from 'react';
import MensajeEstatico from './MensajeEstatico';
import Encabezado from './Encabezado';
class Peliculas extends Component{
    render(){
        return(
            <>
             <Encabezado/>
            <h1>Soy un componente de peliculas hijuesu</h1>
            <MensajeEstatico/>
            </>
        )
    }
}

export default Peliculas;