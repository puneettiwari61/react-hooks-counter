import React, {useState} from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(100)
  return (<>
<div className='ctrl'>
  <div className='ctrl__button ctrl__button--decrement' onClick={() => setCount(count - 1)}>&ndash;</div>
  <div className='ctrl__counter'>
    <input className='ctrl__counter-input' maxLength='10' type='text' value='0' />
  <div className='ctrl__counter-num'>{count}</div>
  </div>
  <div className='ctrl__button ctrl__button--increment' onClick={() => setCount(count + 1)} >+</div>
</div>
</>);
}

export default App;

