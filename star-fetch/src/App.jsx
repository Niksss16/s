import { useState } from 'react'
import './App.css'

function App() {
  
const [search, setSearch] = useState({
  name:"",
})
const [info, setinfo] = useState({
  name:"",
  birthYear:""
})
const [planet, setplanet] = useState({
  planetName:"",
  population:"",
  terrain:""
})



// მემაპატიეთ ეს ერორები და რარაცეები ვეღარ მოვტვინე <3




  const demofetch = ()=>{

      fetch(`https://swapi.dev/api/people/?search=${search.name}`)
      .then(function(response){
        response.json().then((data2)=>{
          // setplanet({
          //   planetinfo:data2.homeworld,
          // })
          setinfo({
            name: data2.results[0].name,
            birthYear:data2.results[0].birth_year
          })
          console.log(response)
          // console.log(data2)
          fetch(data2.results[0].homeworld)
          .then((response)=>{
            response.json().then((planets)=>{
              setplanet({
                planetName:planets.name,
                population:planets.population,
                terrain:planets.terrain,
              })
            })
          })
        })
      })
   
  }
  const change = (event)=>{
    setSearch({
      name: event.target.value,
    })
  }
  return (
    <>
     <input type="text" name='input' value={search.input} onChange={change}/>
     <button className='btn' onClick={demofetch}>Search</button>
     <div className='div'>
      <p>Name:  {info.name}</p>
      <p>birth-year:  {info.birthYear}</p>
      <p>home-planet:  {planet.planetName}</p>
      <p>Population:  {planet.population}</p>
      <p>Terrain:  {planet.terrain}</p>
     </div>
    </>
  )
}

export default App
