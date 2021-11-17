function getTotalBooksCount(books) {
  return books.length;
}

/* It returns a _number_ that represents the number of account objects inside of the array. */
function getTotalAccountsCount(accounts) {
  return accounts.length; 
}
/* It returns a _number_ that represents the number of books _that are currently checked out of the library.
 This number can be found by looking at the first transaction object in the `borrows` array of each book. 
If the transaction says the book has not been returned (i.e. `returned: false`), the book is currently being borrowed.*/
function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
