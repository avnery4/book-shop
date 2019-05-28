'use strict';

var gBookId = 0;
var gBooks = createBooks();

function createBooks() {
    return [
        createBook('Conversations With God', 29.99, './img/conversations_with_god.jpg'),
        createBook('Peaceful Warrior', 9.99, './img/peaceful_warrior.jpg'),
        createBook('How To Win Friends & Influence People', 15.99, './img/win_friends.jpg'),
        createBook('Mr. Vertigo', 21.99, './img/mr_vertigo.jpg')
    ]
}

function createBook(title, price, imgUrl='./img/unknown_book.png') {
    return {
        id: ++gBookId,
        title: title,
        price: price,
        imgUrl: imgUrl
    }
}

function deleteBook(bookId) {
    var res = findBookIdxById(bookId)
    gBooks.splice(res,1);
}

function addNewBook(title, price) {
    console.log('adding new book');
    var newBook = createBook(title, price)
    gBooks.unshift(newBook);
}

function updateBook(bookId, newPrice) {
    var res = findBookIdxById(bookId)
    gBooks[res].price = newPrice;
    gModalUpdateBookId = null;
}

function findBookIdxById(bookId) {
    return gBooks.findIndex(function(book) {return (book.id === bookId)})
}