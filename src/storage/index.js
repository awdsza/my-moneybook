const outGoingPurposeCodeList = [
  { value: '001', name: '식사' },
  { value: '002', name: '카페/간식' },
  { value: '003', name: '교통' },
  { value: '004', name: '여가활동' },
  { value: '005', name: '병원진료' },
  { value: '006', name: '모임' },
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

export { outGoingPurposeCodeList, getOutGoingPurpose };
