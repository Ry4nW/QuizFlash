// const Room = () => {
//     function checkInput(button) {
//         console.log(document.querySelector('button'));
//         const i = button.value;
//         console.log(i);
//         const regExp = /[A-Z]/g;
//         if (i.length != 4 ||
//             i.toUpperCase() != i || 
//             regExp.test(regExp)) {

//         } 
//         console.log('amog');
//     }
//     return (
//     <>
//         <h1>Game Room</h1>
//         <div className="form_container">
//             <form>
//                 <input 
//                     type="text"
//                     id="new-todo-input"
//                     className="main-input"
//                     name="text"
//                     autoComplete="off"
//                 />
//                 <button type="submit" 
//                     className="btn_primary"
//                     onClick={checkInput(document.getElementsByClassName('.btn_primary'))}>Enter</button>
//             </form>
//         </div>
//     </>
//     )
//   };
  
// export default Room;

import React, { useState } from "react";

const Room = () => {
    const [values, setValues] = useState({
        roomCode: ''
    });

    const handleFirstNameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            roomCode: event.target.value,
        }));
    };

    const [submitted, setSubmitted] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
    <>
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Room Code"
          name="email"
          value={values.email}
          onChange={handleFirstNameInputChange}
        />
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Join
        </button>
      </form>
    </div>

    </>
    );
    
}

export default Room;
