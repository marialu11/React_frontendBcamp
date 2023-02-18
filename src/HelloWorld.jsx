//import React from 'react'
import {useState} from 'react'
import { AddCategory } from './components/AddCategory'


const HelloWorld = () => {
const [categorias, setCategorias]= useState(['One Punch','Dragon Ball'])
console.log(categorias)

const agregarCategorias =()=>{
  setCategorias([...categorias,'HERO'])
}
return(
  <div>
    <AddCategory/>


    <ol>
      {
        //map recorre todo el arreglo
        categorias.map(category=>{
          return <li key={category}>{category}</li>
        })

      }
    </ol>
  </div>
)
}

//export default Primer llama todo el componente, no como el export const que exporta sólo esa función
export default HelloWorld