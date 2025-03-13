import { getData } from './js/pixabay-api.js';
import {createCardHtml} from './js/render-functions.js'
import iziToast from "izitoast";

const refs = {
  form: document.querySelector('.form'),
  gallery: document.querySelector('.gallery')
}


const handleSubmit = (event) =>{
  event.preventDefault()
  const inputValue = event.target.elements['search-text'].value
  if (!inputValue.trim()) return
  getData(inputValue)
    .then(data => {
      if(data.hits.length === 0){
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
      }
     const cardsMarkup = data.hits.map(obj => createCardHtml(obj)).join('')
      refs.gallery.innerHTML = cardsMarkup
    })
    .catch(error => console.log(error.message))

  event.target.reset()

}

refs.form.addEventListener('submit', handleSubmit)