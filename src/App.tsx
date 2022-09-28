import { useState } from "react"
import reactLogo from "./assets/react.svg"
import type { Person, Address } from "./Model"
import { foo, type Foo } from "./foo"

import "./App.css"

class Employee implements Person {
  name: string
  surname: string

  age: number
  sex: string
  address: Address

  constructor(
    name: string,
    surname: string,
    age: number,
    sex: string,
    address: Address,
  ) {
    this.name = name
    this.surname = surname
    this.age = age
    this.sex = sex
    this.address = address
  }
}

const employee = new Employee("Jordan", "Doe", 25, "male", {
  street: "Calle Martagina",
  zip: 29691,
})

function App() {
  const [count, setCount] = useState(0)

  foo<Person>(employee)

  foo<Foo>({ foo: "100", bar: "200" })

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank' rel='noreferrer noopener'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
