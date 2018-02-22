export const fetchTipLedger = id => {
  return $.ajax({
    url: 'api/tip_ledgers/${id}',
    method: 'GET',
  });
};

export const createTipLedger = tipLedger => {
  return $.ajax({
    url: `/api/tip_ledgers`,
    method: 'POST',
    data: { tipLedger }
  });
};

export const updateTipLedger = update => {
  return $.ajax({
    url: `api/tip_ledgers/${update.id}`,
    method: 'PATCH',
    data: { update }
  });
};
