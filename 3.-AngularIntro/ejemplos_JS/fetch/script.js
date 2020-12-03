fetch ('https://pokeapi.co/api/v2/pokemon')
.then((res)=>{
  return res.json()
})
.then(data =>{
   // console.log(data.results)
    data.results.forEach(element => {
        console.log(element.name)
      })
})
.catch(error => console.log(error))