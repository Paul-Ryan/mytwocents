export const createTip = tip => {
  return $.ajax({
    url: `/api/tips`,
    method: 'POST',
    data: { tip }
  });
};

export const removeTip = id => {
  return $.ajax({
    url: `/api/tips`,
    method: 'DELETE',
  });
};
