import { IconBrandTwitter, IconBrandFacebook, IconBrandAlpineJs, IconBrandGithub } from '@tabler/icons-react';
import Button from './components/Button'
import Card from './components/Card';
import { useEffect, useRef, useState } from 'react';
import Counter from './components/Counter';
import Input from './components/Input';
import Label from './components/Label';
import PlaceContentCenter from './components/PlaceCountentCenter';
import Todo from './components/Todo';
import TodoLocal from './components/TodoLocal';
import UseEffect from './components/UseEffect';
import axios from 'axios';
import useJoke from './hooks/useJoke';

function App() {
  const nameRef = useRef('')
  const [name, setName] = useState('')
  const joke = useJoke(name)

  const handleName = (e) => {
    e.preventDefault()
    setName(nameRef.current.value)
  }

  return (
    <PlaceContentCenter >
      <Card>
        <Card.Title>
          Joke
        </Card.Title>
        <Card.Body>
          <p className='mb-2'>
          {joke.value}
          </p>
          <Input ref={nameRef}></Input>
          <Button onClick={handleName}>Change Name</Button>
        </Card.Body>
        
      </Card>
        
      </PlaceContentCenter>
  );
}


export default App;
