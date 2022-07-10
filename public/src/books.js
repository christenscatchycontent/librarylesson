function findAuthorById(authors, id) {
return authors.find((author) => author.id === id); }
/* It returns the author object that has the matching ID. */

function findBookById(books, id) {
  return books.find((book) => book.id === id) }
// It returns the book object that has the matching ID.

function partitionBooksByBorrowedStatus(books) {
const returned = books.filter((book) => book.borrows[0].returned);
const notReturned = books.filter((book) => !book.borrows[0].returned);
return [notReturned, returned];}


/* It returns an array with two arrays inside of it. 
All of the inputted books are present in either the first or second array.
The first array contains book objects that represent the books _that are currently checked out_, 
while the second array contains book objects that represent the books _that have been returned._ 
You can check for the return status by looking at the first transaction object in the `borrows` array. */

function getBorrowersForBook(book, accounts) {
  const borrows = book.borrows;
  return borrows.map((borrow) => {
    const foundAccount = (accounts.find((account) => account.id === borrow.id));
    return { ...foundAccount, ...borrow };
  }).slice(0, 10); }
/*
It should return an array of ten or fewer account objects that represents the accounts given 
by the IDs in the provided book's `borrows` array. 
However, each account object should include the `returned` entry from the corresponding transaction object in 
the `borrows` array */

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};

