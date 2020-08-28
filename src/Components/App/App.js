import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from '../HomePage/HomePage';
import AdoptionPage from '../AdoptionPage/AdoptionPage';


class App extends React.Component {

    state = {

    };

    render() {
        return(
            <div className='app'>

                <Route exact path='/' component={HomePage} />
                <Route path='/adopt' component={AdoptionPage} />

            </div>
        );
    }




}


export default App;