const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

const breedPics = document.getElementById('dog-image-container');

console.log('%c What are you doing, Dave?', 'color: firebrick')

function fetchBreedPics(imgUrl) {
    
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(json => renderBreedPics(json))
}

function renderBreedPics(pics) {
    //debugger
    const picsDiv = document.getElementById('dog-image-container');
    pics.message.forEach(pic => {
      const img = document.createElement('img');
      img.src = pic
      picsDiv.appendChild(img)

      // const h2 = document.createElement('h2');
      // h2.innerHTML = pics
      // picsDiv.appendChild(h2)
      
    }); 
}

document.addEventListener('DOMContentLoaded', function() {
    fetchBreedPics(imgUrl)
})

/*** someBullshitAboutPajamas-fetch-lab
 *
 * - Incidentally, this is THE ONLY PLACE WITH THIS INFORMATION. 
 * - I know, I checked. 
 *  
  
function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => renderBooks(json)); 
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

 * 
 * 
 * 
 *  */