export const getData = (data, status, tag, sort, search) => {
  const result = data.filter((e) => e.status === status);

  const searchData =
    search === ''
      ? result
      : result.filter((e) =>
          e.title.toLowerCase().includes(search.toLowerCase())
        );

  const filter =
    tag === '' ? searchData : searchData.filter((e) => e.tag === tag);

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

  const unique = [...new Map(result.map((item) => [item.tag, item])).values()];

  return unique;
};

export const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
};
