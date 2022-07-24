import React from 'react'
import ReactDom from 'react-dom'


let values = [];
let currenthook = 0;
function useState (initialState) {
  if(typeof values[currenthook] === 'undefined') values[currenthook] = initialState
    
    let hookIndex = currenthook;
    function setState(nextValue) {
      values[hookIndex] = nextValue;
      ReactDom.render( <MyAdi />,  document.getElementById('root'))
    }


    return [ values[currenthook++], setState ]
}

function MyAdi () { 

  currenthook = 0;

  const [ name, setName ] = useState('')
  const [ lastName, setLastName ] = useState('')

  function handleChange (evt) {
      setName(evt.target.value)
  }

  function handleLastMinuteChange (evt) {
    setLastName(evt.target.value)
  }

  return(
    <div>
      <h1>My App name is {name} {lastName}</h1>
      <input type="text" value={name} onChange={handleChange}></input>
      <br />
      <br />
      <input type="text" value={lastName} onChange={handleLastMinuteChange}></input>
    </div>
  )
}



export default MyAdi