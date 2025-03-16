import * as basicLightbox from 'basiclightbox';

export const createCardHtml = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>{

  const arrayOfTags = tags.split(',')
  const filteredTags = arrayOfTags.filter((tag, index, array)=> index === array.indexOf(tag)).join(',')

  return `<li>
      <a class ="link" href="${largeImageURL}">
          <img class="image" src = "${webformatURL}" alt="${filteredTags}"/>
          <div class= "wrapper">
              <div class ="container">
                  <p>Likes</p>
                  <p class="numbers">${likes}</p>
              </div>
              <div class ="container">
                  <p>Views</p>
                  <p class="numbers">${views}</p>
              </div>
               <div class ="container">
                  <p>Comments</p>
                  <p class="numbers">${comments}</p>
              </div>
              <div class ="container">
                  <p>Downloads</p>
                  <p class="numbers">${downloads}</p>
              </div>
          </div>
      </a>
</li>`
}

export const instance = basicLightbox.create(`<span class="loader"></span>`)

