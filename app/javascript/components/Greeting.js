// import React, { useEffect } from 'react';
//  import { useSelector, useDispatch } from 'react-redux';
// import { randomgreeting } from '../Redux/slice/greetingSlice';

// function Greeting() {
//   const dispatch = useDispatch();
//   const greeting = useSelector(state => state.greetingSlice.greeting);

//   useEffect(() => {
//     dispatch(randomgreeting());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Hello chacha!</h1>
//       <p>{greeting}</p> 
//     </div>
//   );
// }

// export default Greeting;

// components/Greeting.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { randomGreeting } from '../Redux/slice/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const greeting = useSelector(state => state.greetingSlice.greeting);

  useEffect(() => {
    dispatch(randomGreeting());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(randomGreeting());
  };


  return (
    <div>
      <h1>Hello chacha!</h1>
      <p>{greeting}</p> 
      <button onClick={handleClick}>Get New Greeting</button>
    </div>
  );
}

export default Greeting;
