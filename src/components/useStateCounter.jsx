import React, {useEffect, useState} from 'react';

const Importer = () => {
  const [counter, setCounter] = useState(0)

  useEffect(()=>{
    console.error('Page loaded')
  },[])

  return (
    <div className="App">
      <h1 onClick = {()=>{
        setCounter(counter + 1)
      }}>{counter}</h1>
    </div>
  );
}

export default Importer;
