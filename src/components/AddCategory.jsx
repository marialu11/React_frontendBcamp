import React, { useState } from 'react'

export const AddCategory = () => {

const [inputValue, setInputValue] = useState('')

const onInputChange = (e) => {
  setInputValue('Hola mundo')
}

  return (
    <input type="text" value={inputValue} placeholder="Buscar Gifs" onChange={(e)=>onInputChange(e)}/>
  )
}
