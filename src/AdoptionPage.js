import React from 'react';
//import './AdoptionPage.css';

class AdoptionPage extends React.Component {

    state = {

    };

    render() {
        return(
            <div>
                <section>
                    <h2>USER STORY #2: ADOPTION PAGE</h2>
                    <p>As a user interested in adopting pets, I want to get more information on each pet so that I can make an informed decision about who to adopt.</p>
                    <p>When I visit the adoption page, I can see:</p>
                    <ul>
                        <li>An image of the pet;</li>
                        <li>A physical description of the pet;</li>
                        <li>The pet's name, gender, age, and breed.</li>
                        <li>A story of the pet's journey to the shelter</li>
                    </ul>
                </section>


                <section>
                    <h2>USER STORY #3: ADOPTION PAGE</h2>
                    <p>As a user interested in adopting pets, I want to see the pets that I can adopt.</p>
                    <p>When I visit the adoption page, I can only see the pet that is next in line to be adopted.</p>
                </section>


                <section>
                    <h2>USER STORY #4: ADOPTION PAGE</h2>
                    <p>As a user interested in adopting pets, I want to get in line to adopt.</p>
                    <p>When I visit the adoption page:</p>
                    <ul>
                        <li>I can see a list of other people currently in line.</li>
                        <li>I can submit my name and be added to the end of the line.</li>
                        <li>When I am not at the beginning of the line, I cannot see an option to adopt a pet.</li>
                        <li>For demo purposes: Once I join the line, I can see other pets being adopted until I am at the front of the line.</li>
                        <li>Every five seconds, the user at the front of the line should be removed from the line and one of the pets up for adoption should disappear.</li>
                        <li>When I am at the front of the line, a new user should be added to the line behind me every five seconds until there are a total of five users in line.</li>
                    </ul>
                </section>


                <section>
                    <h2>USER STORY #5: ADOPTION PAGE</h2>
                    <p>As a user interested in adopting pets, I want to adopt a pet.</p>
                    <p>When I am at the front of the line:</p>
                    <ul>
                        <li>I can see an option to adopt a pet.</li>
                        <li>When I choose to adopt a pet: </li>
                        <li>I see a confirmation that I have adopted the pet.</li>
                        <li>I see my name removed from the line.</li>
                        <li>I see the pet I adopted is removed from view and replaced with another pet.</li>
                    </ul>
                </section>

            </div>
        );
    }

}

export default AdoptionPage;


/*
import AdoptionPet from './AdoptionPet';
import PetThumbnail from './PetThumbnail';

*/