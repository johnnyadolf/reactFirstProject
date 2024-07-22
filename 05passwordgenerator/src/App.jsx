import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(10);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() =>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+"

    for (let i = 0; i < length; i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,4)
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])


  return (
    <div className = 'w-full max-w-md mx-auto shadow-md rounded-lg px-20 py-12 my-14 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-10'>
        Password Generator
      </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy
        </button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min = {6}
          max = {24}
          value = {length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name = ""
          id = ""
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
      </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prevValue) => !prevValue);
          }}
          name = ""
          id = ""
          />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox" 
          defaultChecked={charAllowed}
          onChange={() => {
            setCharAllowed((prevValue) => !prevValue);
          }}
          name = ""
          id = ""
          />
          <label htmlFor="specialChar">Special Characters</label>
        </div>
    </div>
  )
}

export default App
