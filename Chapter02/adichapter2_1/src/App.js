import React from 'react'
import ReactDom from 'react-dom'

function MyAdi () { 

  const [ name, setName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  function handleChange (evt) {
      setName(evt.target.value)
  }

  return(
    <div>
      <h1>My App name is {name} {lastName}</h1>
      <input type="text" value={name} onChange={handleChange}></input>
      <input type="text" value={lastName} onChange={handleChange}></input>
    </div>
  )
}

// Impolementing hooks
let value;
function useState (initialState) {
  if(typeof value === 'undefined') value = initialState

    function setState(nextValue) {
      value = nextValue;
      ReactDom.render( <MyAdi />,  document.getElementById('root'))
    }

    return [ value, setState ]
}

export default MyAdi