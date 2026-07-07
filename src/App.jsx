import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  const x = 4;
  let y = 'Apple';

  if (x < 10) {
    y = 'Banana';
  }

  const happy = true;

  return (
    <section className="container my-2">
      <p>Fruit: {y}</p>

      <p>Fruit: {(x < 5) ? 'Pear' : 'Orange'}</p>

      <hr/>

      <p>{happy ? 1 : 0}</p>
    </section>
  )
}

export default App
