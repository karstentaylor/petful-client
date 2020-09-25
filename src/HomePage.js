import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CatDog from './images/cat&dog.jpg';
import ApiServices from './ApiServices';

import '../src/index.css';

function HomePage(props) {
	const [state, setState] = useState({ input: '' });
	let history = useHistory();

	const handleSubmit = (event) => {
		event.preventDefault();

		props.setPerson(state.input);
		ApiServices.addPerson({ name: state.input });
		history.push('/adopt');
	};

	return (
		<div className="homepage">
			<header className="homepageHeader">
				<h1 className="homepageH1">Welcome to the Paws Welfare League</h1>

				<h2 className="homepageH2">a Petful Project</h2>
			</header>

			<main className="homepageMain">
				<p className="paragraph">
					Here at "Paws Welfare League", our adoption process works on a "FIFO"
					("First-In, First-Out") basis. It's a philosophy we've developed with
					our local animal rescues to ensure that every cat and dog gets a
					loving home.
				</p>

				<p className="emphatic">So what's holding you up...?</p>

				<p className="paragraph">
					ENTER your name and CLICK the button below to JOIN our waiting list.
					Then once your name is pulled to the "#1 spot", you can ADOPT one of
					the pets in the available list.
				</p>

				<form
					className="homepageForm"
					onSubmit={(event) => handleSubmit(event)}
				>
					<input
						className="formInput"
						type="text"
						placeholder="Enter Your Name"
						onChange={(event) => setState({ input: event.target.value })}
						required
					/>

					<button className="formButton" type="submit">
						Let's Find That Friend!!!
					</button>
				</form>
			</main>

			<img className="homepageIMG" alt="CATDOG" src={CatDog} />
		</div>
	);
}

export default HomePage;
