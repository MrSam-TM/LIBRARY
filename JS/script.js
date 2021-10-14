
document.addEventListener('DOMContentLoaded', ()=>{
  
    //Book Library
    var library =[Book(
      "Rich Dad poor Dad",
    "Robert Kiyosaki",
    1000,

    )];

    // initialises the display to denote content of the library
    displayLibrary()

    // toggles the display of the book form
    function toggleIt(){
        var formCon = document.querySelector('.form-container');
        formCon.classList.toggle('toggle');
        
    }

    // hide the book form
    document.getElementById("cancel").onclick=toggleIt;

    /* Book class to make new Book object */
    function Book(title, author, pages, read){ 
      var data = {value: read? true : false};
      const isRead =function (){
        return data["value"]
      }
      const  readBook = () =>{
        data=Object.assign(data,{value:!data.value});   
      }
        return {title, author, pages, isRead,readBook}
    }

    /* clear the book form */
    function clearForm(){
      document.getElementById("author").value="";
      document.getElementById("title").value="";
      document.getElementById("pages").value="";
    }

    // toggle the read property of book to either read or 
    // not read
    function readBook(id){
      library[id].readBook();
      displayLibrary();
    }

    function removeBook(id){
      let book = library[id];
      let del = confirm(`delete\n ${book.title}?`);
      if(del){
       let lib1=library.slice(0,id)
       let lib2=library.slice(id+1,library.length)
       library=[...lib1, ...lib2]
       displayLibrary();
      }
    }

    function displayLibrary(){
      let bookContainer = document.getElementById("book-container");
      if(library.length === 0){
        bookContainer.innerHTML='<h1> The Library is Empty</>'
      }
      else{
        // holds the content of each book
        let content='';
        
        // loops over the library to process the 
        // the content of each book 
        // Note: the index (id) of the book is the second argument
        // we have from the forEach function
      library.forEach((book,id) =>{
        content+=`
        <div class="book">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author"> By: ${book.author}</h3>
        <h4 class="book-page">Number of pages: (${book.pages})</h4>
        <h4 class="book-read">${(book.isRead())? "Read" : "Not Read"}</h4>
        <div class="slider">
        <div data-name="readit" class=${book.isRead()? "slider-icon-read" : "slider-icon"}  data-id=${id}> </div>
        </div>
        <input class="remove" type="button" data-name="remove" data-id=${id} value= "remove book">
        </div>`
      });

      // add the content as inner Html for the book container
      bookContainer.innerHTML=content;

      }
      
    }

    /* Add click event listener to the document, but this
     * is just to target either the "remove book" button or
     * the "read icon" button"
     */
    document.addEventListener('click',(evt)=>{
      // get the dataset attribute which was set only for
      // the two buttons we want to target

      const data = evt.target.dataset;
      if(!data.name) return;  // other element has been clicked

      // at this point we are sure that either the remove button
      // or the read button has been clicked

      if(data.name==="readit"){   // read button was clicked

        // call the readBook function passing the index of the 
        // book in the library
        readBook(parseInt(data.id));
      }
      else if(data.name==="remove"){  // remove button was clicked

        // call the remove function passing the index of the 
        // book in the library
        removeBook(parseInt(data.id));
      }
    })

    

    /* adds Book to the Library */
    function addBook(){
      let form = document.getElementById('form-data');
      let formData= new FormData(form);
      let title=formData.get("title");
      let author=formData.get("author");
      let pages=formData.get("pages");
      let read=formData.get("read");

      // add new book to the library Array
        library.push(Book(title,author,pages,read));
        // update the display of the library
        displayLibrary();

        // clear the book form to take new entry
        clearForm();
    }

   

    document.getElementById('form-data').onsubmit = function(e){
        e.preventDefault();
        addBook();


    }
  




   // Add an event listener to the add-book button
    document.getElementById('add-book').onclick = toggleIt;
    // document.querySelector('#add').onclick = toggleIt;
    
})

