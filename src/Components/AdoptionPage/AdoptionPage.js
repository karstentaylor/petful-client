import React from 'react';
import './AdoptionPage.css';
import AdoptionForm from '../AdoptionForm/AdoptionForm';
import PeopleQueue from '../PeopleQueue/PeopleQueue';
import DogsQueue from   '../DogsQueue/DogsQueue';
import CatsQueue from '../CatsQueue/CatsQueue';

class AdoptionPage extends React.Component {

    state = {

    }

    componentDidMount() {
        console.log('componentDidMount')
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');

    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit button works');
    }


    render() {

        return(
            <div className='adoption'>

                <h1>Petful</h1>
                <AdoptionForm onSubmit={this.handleSubmit} />

                <PeopleQueue />

                <h2>Ready for Adoption</h2>
                <DogsQueue />
                <CatsQueue />

            </div>
        );
    }

}

export default AdoptionPage;

/*
USER STORY #2:
As a user interested in adopting pets, I want to get more information 
on each pet so that I can make an informed decision about who to adopt.

Acceptance criteria

When I visit the adoption page, I can see:

* An image of the pet;
* A physical description of the pet;
* The pet's name, gender, age, and breed.
* A story of the pet's journey to the shelter
USER STORY #3:
As a user interested in adopting pets, 
I want to see the pets that I can adopt.

Acceptance criteria

When I visit the adoption page, I can only see the 
pet that is next in line to be adopted.
USER STORY #4:
As a user interested in adopting pets, I want to get in line to adopt.

Acceptance criteria

When I visit the adoption page:

* I can see a list of other people currently in line.
* I can submit my name and be added to the end of the line.
* When I am not at the beginning of the line, I cannot see an option to adopt a pet.
* For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.
    * Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.
    * When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.
USER STORY #5:
As a user interested in adopting pets, I want to adopt a pet.

Acceptance criteria

When I am at the front of the line:

* I can see an option to adopt a pet.
* When I choose to adopt a pet: 
    * I see a confirmation that I have adopted the pet.
    * I see my name removed from the line.
    * I see the pet I adopted is removed from view and replaced with another pet.
*/