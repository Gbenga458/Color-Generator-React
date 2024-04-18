import React, {useState} from 'react'
import SingleColor from './SingleColor'
import values from 'values.js'

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new values('#f15025').all(10))

  const handleSubmit =(e)=>{
 e.preventDefault()
 try {
let colors = new values(color).all(10)
setList(colors)
 }
 catch(error){
console.log(error)
setError(true)
 }
  }

  return(
    <>
    <section className='container'>
      <h3>Color Generator</h3>
      <form onSubmit={handleSubmit}>
      <input 
      type='text'
      placeholder='#f15025'
      className={`${error? 'error': null}`}
      value={color}
      onChange={(e) => setColor(e.target.value)}
      />
      <button type='submit' className='btn'>Submit</button>
      </form>
      </section>
      <section className='colors'>
        {list.map((color, index)=>{
        return (<SingleColor
         key={index} 
         {...color} 
         index={index} 
         hexColor={color.hex}/>
        )
        })}
    </section>
    </>
  )
}
export default App;