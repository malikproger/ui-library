import { useState } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Modal from './components/Modal/Modal';
import SortableTable from './components/Table/Table';
import data from './data.json';

function App() {
  const [nameInput, setNameInput] = useState('');
  const onChange = (str: string) => {
    setNameInput(str);
  };

  const [modalActive, setModalActive] = useState(false);

  const submit = () => {
    setModalActive(false);
    alert('Submit!');
  };

  return (
    <div className="App">
      <Button onClick={() => alert('You clicked on the button')} children="I'm a button!" />
      <Input onChange={onChange} name="name" placeholder="Input" value={nameInput} />
      <Modal active={modalActive} setActive={setModalActive}>
        <div className="close_button" onClick={() => setModalActive(false)}>
          X
        </div>
        <h1>Title</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime sint, non tenetur quasi
          recusandae nobis amet quae beatae, aperiam aliquid, corrupti id delectus hic ratione
          quidem maiores. Alias maxime accusantium inventore velit doloribus repellendus? Error
          harum, facere deleniti sint vitae ad? Sed ratione dicta officia voluptatem qui cupiditate
          ipsa eos.
        </p>
        <Button className="submit_button" onClick={submit}>
          Submit
        </Button>
      </Modal>
      <SortableTable data={data} />
    </div>
  );
}

export default App;
