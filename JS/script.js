
document.addEventListener('DOMContentLoaded', ()=>{
  
    //Book Library
    const library =[Book(
      "Rich Dad poor Dad",
    "Robert Kiyosaki",
    1000,
    "ok"
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
    function Book(title, author, pages, isRead){  
        return {title, author, pages, isRead}
    }

    /* clear the book form */
    function clearForm(){
      document.getElementById("author").value="";
      document.getElementById("title").value="";
      document.getElementById("pages").value="";
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
      library.forEach((book) =>{
        content+=`
        <div class="book">
        <h2 class="book-title">${book.title}</h2>
        <h3 class="book-author"> By: ${book.author}</h3>
        <h4 class="book-page">Number of pages ${book.pages}</h4>
        <h4>${book.isRead? "Read" : "Not Read"}</h4>
        </div>`
      });

      // add the content as inner Html for the book container
      bookContainer.innerHTML=content;
      }
    }

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

