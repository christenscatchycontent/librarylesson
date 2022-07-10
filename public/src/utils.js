/* Helper methods to use a reusable code throughout the local library project */

const sortBy = (itemA, itemB, isAscending) => {
  if(isAscending === false) {
    return itemB - itemA;
  }

  // Default to sort in ascending order
  return itemA - itemB;
}

module.exports = {
  sortBy
}