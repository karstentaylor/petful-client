import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AdoptionPage from './AdoptionPage';


class App extends React.Component {

    state = {

    };

    render() {
        return(
            <div className='App'>

                <Route exact path='/' component={HomePage} />
                <Route path='/adopt' component={AdoptionPage} />

            </div>
        );
    }




}


export default App;