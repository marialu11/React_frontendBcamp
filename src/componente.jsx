import React from 'react'

/*
import {heroes} from './heroes'
import ViewInfo from './ViewInfo'

const HelloWorld = () => {
  const ApiKey = 'DPGOUlVLfhCzrAPs3sNu0FHD2VIeB3A7'
  const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`)
  peticion.then((resp)=>{
      let data;
      resp.json().then((data)=>{
        console.log(data)
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url.original
        document.body.append(img)
      })
      console.log(data)
    })
    .catch(console.warn)
}

const HelloWorld = () => {
  const ApiKey = 'DPGOUlVLfhCzrAPs3sNu0FHD2VIeB3A7'
  const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ApiKey}`)
  peticion.then((resp)=>{
      let data;
      resp.json().then((data)=>{
        console.log(data)
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url.original
        document.body.append(img)
      })
      console.log(data)
    })
    .catch(console.warn)
}

const HelloWorld = () => {
  //new Promise es la instancia del objeto promesa
  const promesa = new Promise ((resolve,reject)=>{
    setTimeout(()=>{
      console.log('Pasaron dos segundos')
      resolve()
    },2000)
  })

  promesa.then(()=>{
    console.log('Me cumplí como promesa')
  })
}

const HelloWorld = () => {
  return(
    <div>
        {
            heroes.map((heroe))=>{
                heroe.id && <ViewInfo heroes={heroe}/>
            }
        }
    </div>
  )
}

const HelloWord = () => {
  return (
  const [value,setValue]= useState(false)
  console.log("🚀 ~ file: HelloWord.jsx:3 ~ heroes", heroes)
  const getHeroes =(id)=> {
    setValue(true)
    return heroes.find((heroe)=> heroe.id === id)
  }

  const getOwner = (owner)=>{
    return heroes.filter((heroe)=> heroe.owner === owner)
  }
  console.log(getHeroes(2))
  return (
    <div onclick={()=>setValue()}>
      holaa
      {
        value && <div>grupo</div>
      }
      {
        heroes.map((id)=>(
          id.id && <div></div>
        ))}

    </div>
  )
  )
}
*/
/*
const HelloWord = ({title, fecha}) => {
  //estado= contenedor con un valor y un set que es el que cambia el value (el estado) 
  const [value, setValue] = useState()
  const [validate,setValidate] = useState(false)
  console.log("🚀 ~ file: HelloWord.jsx:5 ~ HelloWord ~ value", value)

  //funcion
  const validateValue =()=>{
    setValue("hola grupo soy un estado")
    setValidate(!validate)
    //setValidate{<h1>hola grupo soy un estado</h1>}
  }
  return (
    <div className='formApre'>
      <h1>{title}</h1>
      <span className="fechaDate">{fecha}</span>
      <form>
        <div onClick={validateValue}>
          <label>
            { //Si validate es true entonce muestre value
              validate && value
            }
            Name:Nombre
            <input type="text" name="nombre" />
          </label>
        </div>
        <div>
          <label>
            Name:Cedula
            <input type="number" name="cedula" />
          </label>
        </div>
        <div>
          <label>
            Segundo Nombre
            <input type="text" name="segundoNombre" />
          </label>
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
        </form>
    </div>
  )
}
*/

export default HelloWord