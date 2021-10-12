
document.addEventListener('DOMContentLoaded', ()=>{
  
    //BOOK LIST
    const library =[];

    function toggleIt(){
        var formCon = document.querySelector('.form-container');
        formCon.classList.toggle('toggle');
        
    }
 
    function Book(title, author, pages, isRead){  
        return {title, author, pages, isRead}
    }

    function addBook(book){
        library.add(book)
    }

    document.getElementById('form-data').onsubmit = function(e){
        e.preventDefault()
        let data = new FormData(this)
        console.log(data)


    }

   // Add an event listener to the add-book button
    document.getElementById('add-book').onclick = toggleIt;
    // document.querySelector('#add').onclick = toggleIt;
    
})

