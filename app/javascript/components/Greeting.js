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
    <div className="greeting-container">
      <h1 className="greeting-title">Welcome to our Hello Rails-React in one app !</h1>
      <div className="greeting-content">
        <p className="greeting-text">{greeting}</p>
        <button className="greeting-button" onClick={handleClick}>Get New Greeting</button>
      </div>
    </div>
  );
}
export default Greeting;
