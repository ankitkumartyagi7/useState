import { useState } from 'react';

export default function BatchUpdate() {
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(false);

  console.log('Component Rerender count is : ', count);

  const handleIncrement = () => {
    // batch update (queue updated)
    console.log('Trigger phase Before count update:', count);
    setCount(count + 1);
    console.log('Still Trigger phase After count update:', count);
    setActive(!active);
  };

  return (
    <>
      <div>Counter : {count}</div>
      <div>Active value :{` ${active}`}</div>
      <button type="button" onClick={() => handleIncrement()}>
        Increment
      </button>
    </>
  );
}

// Trigger phase
// Render phase
// Commit Phase

// How setCount update works
// 1. You call setCount(count + 1) (trigger phase)
// 2. React marks your component as needing an update (trigger phase)
// 3. React calls your component function again (render phase)
// 4. Your function returns new JSX with the updated count (render phase)
// 5. React compares this render with the previous one and figures out what
// changed (render phase)
// 6. React updates only what changed in the actual DOM (commit phase)
