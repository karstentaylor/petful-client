import React from 'react';
import './HomePage.css';

function HomePage() {
  return(
    <div>
      <header className='homepage-Header'>
        <h1 className='homepage-H1'>Welcome to Petful</h1>
        <h2 className='homepage-H2'>Your pet is excited to meet you!</h2>
      </header>

      <main className='homepage-Main'>

        <img className='homepage-IMG' alt='SOME CUTE CATS AND DOGS' src=''></img>

        <p>
          Here at Petful, our adoption process works on a "First-In, First-Out" basis. It's a philosophy we've developed with our local animal rescues to ensure that every cat and dog gets a loving "FURever" home.
        </p>

        <p>So what are you waiting for...?</p> 
        <p>Fill out the form below...</p>

        <form className='homepage-AdoptForm'>
          <legend>Let's get YOU a new furry friend!</legend>

          <label htmlFor='name'>What's your name?</label>
          <input type='type' id='name' name='name' required />

          <p>Are you looking to adopt:</p>
          <label htmlFor='cat'>
            <input type='radio' id='cat' value='cats' name='pet' required />
            Cat
          </label>

          <label htmlFor='cat'>
            <input type='radio' id='dog' value='dogs' name='pet' required />
            Dog
          </label>

          <button className='button' type='submit'>Let's Find That Pet!!!</button>
        </form>
        
      </main>
    </div>
  );
}

export default HomePage;