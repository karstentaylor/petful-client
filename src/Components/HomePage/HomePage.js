import React from 'react';
import './HomePage.css';

function HomePage() {
  return(
    <div className='home'>
      <header className='homepage-Header'>
        <h1 className='homepage-H1'>Welcome to Petful</h1>
        <h2 className='homepage-H2'>Your pet is excited to meet you!</h2>
      </header>

      <main className='homepage-Main'>

        <img className='homepage-IMG' alt='SOME CUTE CATS AND DOGS' src=''></img>

        <p>Here at Petful, our adoption process works on a "First-In, First-Out" basis.</p>
        <p>It's a philosophy we've developed with our local animal rescues to ensure that every cat and dog gets a loving "FURever" home.</p>
        <p>Simply sign-up on the next page to be put into our queue of loving families wanting to adopt</p>

        <p>So what are you waiting for...?</p> 

        <p>Click the button below</p>

        <button className='button' type='submit'>Let's Find That Pet!!!</button>
        


        
      </main>
    </div>
  );
}

export default HomePage;