export const getData = (data, status, tag, sort) => {
  const result = data.filter((e) => e.status === status);

  const filter = tag === '' ? result : result.filter((e) => e.tag === tag);

  return filter.sort((a, b) => {
    if (sort === 'desc') {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });
};

export const getFilterData = (data, status) => {
  console.log(status);
  const result = data.filter((e) => e.status === status);

  return result;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};
