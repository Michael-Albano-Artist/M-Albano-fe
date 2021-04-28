export const arrangeDate = (date: string) => {
  const dateArr = date.split('-');
  return [dateArr[1], '-', dateArr[2], '-', dateArr[0]].join('');
}


