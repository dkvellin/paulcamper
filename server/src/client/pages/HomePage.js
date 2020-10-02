import React from 'react';

const Home = () => {
  return (
    <div>
      <div>I am rendered from Home component</div>
      <button onClick={() => console.log('Onclick was called')}>
        Click Me!
      </button>
    </div>
  );
};

export default {
  component: Home,
};
