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

function getBooksBorrowedCount(books) {
  let total = 0;
  books.forEach((book) => {
  if (!book.borrows[0].returned) {
  total++;
    }
  })
return total;
}

function getMostCommonGenres(books) {
const result = books.reduce((accum, book) => {
const genre = book.genre;
const genreInfo = accum.find((element) => element.name === genre);
if (!genreInfo) {
const newGenreInfo = 
{name: genre,
count: 1,};
accum.push(newGenreInfo);
} else {
genreInfo.count++; }
return accum;
}, 
[]);
result.sort((genreA, genreB) => genreB.count - genreA.count);
result.splice(5);
return result;
}

function getMostPopularBooks(books) {
const result = books.map((book) => {
const popularityInfo = {
name: book.title,
count: book.borrows.length,
};
return popularityInfo;
});
result.sort((titleA, titleB) => 
titleB.count - titleA.count);
result.splice(5);
return result;
}

function getMostPopularAuthors(books, authors) {
  const getBooksByAuthorId = (books, authorId) => {
    return books.filter((book) => book.authorId === authorId);
  };
const result = authors.map((author) => {
const fullName = `${author.name.first} ${author.name.last}`;
const booksByAuthor = getBooksByAuthorId(books, author.id);
const totalBorrows = booksByAuthor.reduce((accum, book) => accum + book.borrows.length, 0);
const newAuthorInfo = {
name: fullName,
count: totalBorrows,
};
return newAuthorInfo;
});
result.sort((authorA, authorB) => authorB.count - authorA.count);
result.splice(5);
return result;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
