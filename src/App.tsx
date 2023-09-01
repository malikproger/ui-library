import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [nameInput, setNameInput] = useState('');
  const onChange = (str: string) => {
    setNameInput(str);
  };

  return (
    <div className="App">
      <Button
        onClick={() => alert('You clicked on the pink circle!')}
        children="I'm a pink circle!"
      />
      <Input onChange={onChange} name="name" placeholder="Input" value={nameInput} />
    </div>
  );
}

export default App;
