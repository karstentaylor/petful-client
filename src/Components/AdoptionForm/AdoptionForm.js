import React from 'react';
import './AdoptionForm.css';

function AdoptionForm(props) {
  return (
    <form className='adoption-Form' onSubmit={(event)=>props.onSubmit(event)}>

        <legend>Let's get YOU a new furry friend!</legend>
        
        <label htmlFor='name'>What's your name?</label>
        <input type='type' id='name' name='name' placeholder='Jane Doe' required />

        <button type='submit'>Submit</button>

    </form>
  )
}

export default AdoptionForm;