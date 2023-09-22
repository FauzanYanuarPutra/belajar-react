import { useEffect, useState } from "react"
import Card from "./Card";
import Input from "./Input";
import Button from "./Button";

export default function UseEffect() {
  const [name, setName] = useState();
  const [online, setOnline] = useState(false);

  useEffect(() => {
    console.log('always render')
  })

  useEffect(() => {
    console.log('first render only')
  }, [])

  useEffect(() => {
    console.log(`gua lagi ${online ? 'online' : 'offline'}`)
  }, [online])


  return (
    <div>
      <Card>
        <Card.Title>
          UseEffect
        </Card.Title>
        <Card.Body>
          <Input  value={name} onChange={(e) => setName(e.target.value)}></Input>
          <Button onClick={() => setOnline(online =>  !online)}>Button</Button>
        </Card.Body>
      </Card>
    </div>
  )
}