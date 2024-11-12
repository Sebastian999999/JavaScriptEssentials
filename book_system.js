let books = [];
function addBook(){
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)){
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showBooks();
        clearInputs();
    }
    else{
        alert("Fill all input fields");
    }
}

function showBooks(){
    let book = '';
    books.forEach((bk , index) => {
        book += ` <h1>book Number ${index + 1}</h1>
                  <p><b>Book Name:</b> ${bk.name}</p><br/>
                  <p><b>Author Name:</b> ${bk.authorName}</p><br/>
                  <p><b>Book Description:</b> ${bk.bookDescription}</p><br/>
                  <p><b>No. of Pages:</b> ${bk.pagesNumber}</p><br/>
                  <button onclick="DeleteBook(${index})">Delete</button>
        `
    });
    document.getElementById('books').innerHTML = book;
}

function clearInputs(){
    document.getElementById('bookName').value='';
    document.getElementById('authorName').value='';
    document.getElementById('bookDescription').value='';
    document.getElementById('pagesNumber').value='';
}

function DeleteBook(IndexId){
    books.splice(IndexId,1);
    showBooks();
}