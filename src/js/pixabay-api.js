export const getData = (name) =>{
  const params = new URLSearchParams ({
    key: '49325952-cafcda966d997e584839964e4',
    q: name,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true
  }).toString()

 return fetch(`https://pixabay.com/api/?${params}`)
   .then(response => {
     if(!response.ok){
       throw new Error (`Помилка HTTP ${response.status}`)
     }
     return response.json()
   })

}

