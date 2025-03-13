export const createCardHtml = ({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) =>{
  return `<li>
      <a class ="link" href="${largeImageURL}">
          <img class="image" src = "${webformatURL}" alt="${tags}"/>
          <div class= "wrapper">
              <div class ="container">
                  <p>Likes</p>
                  <p>${likes}</p>
              </div>
              <div class ="container">
                  <p>Views</p>
                  <p>${views}</p>
              </div>
               <div class ="container">
                  <p>Comments</p>
                  <p>${comments}</p>
              </div>
              <div class ="container">
                  <p>Downloads</p>
                  <p>${downloads}</p>
              </div>
          </div>
      </a>
</li>`
}