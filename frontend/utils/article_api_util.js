export const createArticle = article => {
  return $.ajax({
    url: `/api/articles`,
    method: 'POST',
    data: { article }
  });
};
