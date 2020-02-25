import React from 'react';
import { useState } from 'react';

const App = () => {
  const [trueOfFalse, setTrueOrFalse] = useState(false);

  return (
    <div>{trueOfFalse === true ? <h1>I'm true</h1> : <h1>I'm false</h1>}</div>
  );
};

export default App;
