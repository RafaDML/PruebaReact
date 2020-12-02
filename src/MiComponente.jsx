import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './MiComponente.css';


class MyComponent extends Component{
    render(){
        return(
            <>
            <div className='<'>
                <h1>Prueba de saludo</h1>
            </div>
            
            </>
        );
    }

}
export default MyComponent;

