import { useState, useCallback,useRef } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [charAllowed, setcharAllowed] = useState(false) 
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [password, setpassword] = useState("")
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (charAllowed) str += '!#$%^&*(){}[]`"';
    if (numberAllowed) str += '1234567890';

    for (let i = 1; i <= length; i++) {pass += str.charAt(Math.floor(Math.random() * str.length + 1))}
    
    setpassword(pass)

  }, [length, charAllowed, numberAllowed, setpassword])


  const Copy = ()=>{ passwordRef.current?.select(), window.navigator.clipboard.writeText(password)}

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4'>
        
        <div className=' bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl w-full max-w-md border border-white/20 hover:border-white/30 transition-all duration-300'>
          
          <h1 className='text-5xl font-bold text-center bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-10'>
            Password Generator
          </h1>

          <div className='space-y-8'>
            
            <div className='flex shadow-lg'>
              <input type="text" className='flex-1 px-6 py-4 rounded-l-xl bg-white/5 border border-white/10 text-white text-xl font-mono tracking-wider' value={password} readOnly ref={passwordRef} placeholder="Your password "/>
              <button onClick={Copy} className='px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 rounded-r-xl font-medium transition-all duration-300 text-white shadow-lg'>Copy</button>
            </div>

            <div className='space-y-4'>
              
              <div className='flex items-center gap-6 bg-white/5 p-4 rounded-xl'>                
                <input type="range" className='flex-1 h-3 bg-sky-300/13 rounded-lg appearance-none cursor-pointer accent-sky-500' min={1} max={30} value={length} onChange={(e) => setlength(e.target.value)}/>
                <span className='text-white text-lg font-medium min-w-[5rem]'>Length: {length}</span>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <label className='flex items-center gap-3 text-white cursor-pointer bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                  <input type="checkbox" className='w-5 h-5 rounded accent-purple-500' checked={charAllowed} onChange={() => setcharAllowed(prev => !prev)}/>
                  <span className="text-lg">Characters</span>
                </label>
                
                <label className='flex items-center gap-3 text-white cursor-pointer bg-white/5 p-4 rounded-xl hover:bg-white/10 transition-colors'>
                  <input type="checkbox" className='w-5 h-5 rounded accent-purple-500' checked={numberAllowed} onChange={() => setnumberAllowed(prev => !prev)}/>
                  <span className="text-lg">Numbers</span>
                </label>
              </div>

            </div>

            <button onClick={passwordGenerator} className='w-full py-4 bg-gradient-to-r from-pink-500  via-fuchsia-500 to-purple-500 hover:from-pink-600 active:from-pink-500  hover:via-fuchsia-600 active:via-fuchsia-500 hover:to-purple-600 active:to-purple-500 rounded-xl font-medium text-xl text-white hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer'>Generate Password</button>
          
          </div>
        
        </div>
        
        <p className='fixed bottom-10 text-white' style={{fontFamily:'cursive'}}>Developer By: Ahmed_Khan</p>
      
      </div>
    </>
  )
}

export default App
