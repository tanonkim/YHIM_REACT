const convertDate = (date: string) => {
  const pattern = /^(\d{4})(\d{2})?(\d{2})?$/;
  const match = date.replace('-', '').match(pattern);

  if (match) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [_, year, month, day] = match;
    if (year && !month) return `${year}-`;
    if (month && !day) return `${year}-${month}-`;
    if (day) return `${year}-${month}-${day}`;
  }

  return date;
};

export default convertDate;
