'use strict'; 

$(document).ready(onInit)
var gModalUpdateBookId = null;

function onInit() {
    renderBooks();
    addEventListeners();
    $('.final-action').click(onFinalAdd)
    $('.modal').hide();
}

function addEventListeners() {
    $('.add').click(onAdd)
    $('.read').click(onRead)
    $('.update').click(onUpdate)
    $('.delete').click(onDelete)
}

function renderBooks() {
    var elTable = $('tbody');
    var strHtml = '';
    gBooks.forEach(function(book) {
        strHtml += `<tr><td>${book.id}</td><td><img src="${book.imgUrl}"></td><td>${book.title}</td><td>${book.price}</td>
        <td class="actions"><button data-id="${book.id}" class="read btn-info">Read</button>
        <button data-id="${book.id}" class="update btn-success">Update</button>
        <button data-id="${book.id}" class="delete btn-danger">Delete</button></td>
        </tr>`
    })
    elTable.html(strHtml);
}

function onRead(event) {
    var bookId = parseInt(event.target.dataset.id);
    addEventListeners();
}

function onUpdate(event) {
    gModalUpdateBookId = parseInt(event.target.dataset.id)
    $('.modal').show();
    $('.main-container').addClass('opacity');
    $('.modal-title').text('Update Book:')
    $('.final-action').text('Update')
    $('.title').hide();
    $('.price').text('New Price');
    $('.title-input').hide();
}

function onDelete(event) {
    var bookId = parseInt(event.target.dataset.id);
    deleteBook(bookId);
    renderBooks();
    addEventListeners();
}

function onAdd() {
    $('.modal').show();
    $('.main-container').addClass('opacity');
}

function onFinalAdd() {
    if (gModalUpdateBookId) {
        var bookId = gModalUpdateBookId;
        var $bookPrice = $('.price-input').val()
        updateBook(bookId, $bookPrice)
    } else {
        var $bookTitle = $('.title-input').val()
        var $bookPrice = $('.price-input').val()
        addNewBook($bookTitle, $bookPrice);
    }
    $('.modal').hide();
    $('.main-container').removeClass('opacity');
    renderBooks();
    addEventListeners();
}