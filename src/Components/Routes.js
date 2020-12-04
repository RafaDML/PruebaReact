import React from 'react';
import{ Switch, Route} from 'react-router-dom';
import Encabezado from './Encabezado';
import Peliculas from './Peliculas';

const Routes = () => {
    return(
        <Switch>
            <Route exact path = '/index.html' component={Encabezado}/>
            <Route exact path = '/blog.html' component={Peliculas}/>
        </Switch>
    )
}

export default Routes;