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

function getTotalNumberOfBorrows(account, books) {}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
