function findAccountById(accounts, id) {
return accounts.find((account) => account.id === id);
}
/* 
It returns the account object that has the matching ID.
*/

function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => {
  const nameLastA = accountA.name.last;
  const nameLastB = accountB.name.last;
  return nameLastA.toLowerCase() <  nameLastB.toLowerCase() ? -1 : 1;
}
);
}
/* It returns a sorted array of the provided account objects. The objects are sorted alphabetically by last name. */

function getTotalNumberOfBorrows(account, books) {
  let result = 0
  const {id} = account
  for (let book in books) {
    const {borrows} = books[book];
    borrows.forEach((element) => { if (element.id === id) {
      result++
    }})
  }
  return result
}
/* It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array. */

function getBooksPossessedByAccount(account, books, authors) {
  const AuthorsById = (authors, id) => {
    return authors.find((author) => author.id === id);
  };
  const accountId = account.id;
  let result = [];
  result = books.filter((book) => {
    return book.borrows.some((borrow) => borrow.id === accountId && !borrow.returned);
  });
  result = result.map((book) => {
    const author = AuthorsById(authors, book.authorId);
    const newBook = {
      ...book,
      author,
    };

    return newBook;
  });

  return result;
}


/* It returns an array of book objects, including author information, that represents all books _currently checked out_ by the given account. 
_Look carefully at the object below,_ as it's not just the book object; the author object is nested inside of it. */

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
