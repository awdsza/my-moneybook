const getMoneyBookList = userId => {
  const moneybookList = JSON.parse(
    localStorage.getItem('moneyBookList') || '[]',
  );
  return userId
    ? moneybookList
    : moneybookList.filter(({ _userId }) => _userId === userId);
};
const createMoneyBookData = bookData => {
  try {
    const myMoneyBookData = getMoneyBookList();
    const lastID = myMoneyBookData[myMoneyBookData.length - 1]['id'];
    localStorage.setItem(
      'moneyBookList',
      JSON.stringify([...myMoneyBookData, { ...bookData, id: lastID + 1 }]),
    );
  } catch (e) {
    console.error(e);
  }
};
export { getMoneyBookList, createMoneyBookData };
