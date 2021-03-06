import React from 'react';
import { Header } from './components';
import Home from "./pages/Home";
import {Route} from "react-router-dom";
import Cart from "./pages/Cart";

const App = () => {

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path='/' component={Home} />
                <Route exact path='/cart' component={Cart} />
            </div>
        </div>
    );
}

export default App;
