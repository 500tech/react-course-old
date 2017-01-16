export const addRecipe = (title, favorite = false) => ({
  type: 'ADD_RECIPE',
  title: title.trim(),
  favorite
});