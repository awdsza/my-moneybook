const outGoingPurposeCodeList = [
  { value: '001', name: '식사' },
  { value: '002', name: '카페/간식' },
  { value: '003', name: '건강관련' },
  { value: '004', name: '교통' },
  { value: '006', name: '모임회비' },
  { value: '007', name: '경조사' },
  { value: '008', name: '계좌이체' },
  { value: '009', name: '육아' },
  { value: '999', name: '기탸' },
];
const getOutGoingPurpose = outGoingCode => {
  return outGoingPurposeCodeList.filter(
    ({ value }) => value === outGoingCode,
  )?.[0]?.name;
};
const getMoneyBookList = userId => {
  let moneybookList = JSON.parse(localStorage.getItem('moneyBookList') || '[]');
  moneybookList = moneybookList.map(moneybook => {
    return {
      ...moneybook,
      outGoingPurposeText: getOutGoingPurpose(moneybook.outGoingPurpose),
    };
  });
  return userId
    ? moneybookList
    : moneybookList.filter(({ _userId }) => _userId === userId);
};
const createMoneyBookData = bookData => {
  try {
    const myMoneyBookData = getMoneyBookList();
    const lastID = myMoneyBookData[myMoneyBookData.length - 1]
      ? myMoneyBookData[myMoneyBookData.length - 1]['id']
      : 1;
    localStorage.setItem(
      'moneyBookList',
      JSON.stringify([...myMoneyBookData, { ...bookData, id: lastID + 1 }]),
    );
  } catch (e) {
    console.error(e);
  }
};
export {
  outGoingPurposeCodeList,
  getMoneyBookList,
  createMoneyBookData,
  getOutGoingPurpose,
};
