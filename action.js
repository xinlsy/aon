/*JS for Recipes.html */

//------- Display recipe when the ingredient is clicked ----------
function showRecipe(itemId) {
  // Hide all content elements
  var contents = document.getElementsByClassName("recipe_content");
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = "none";
  }
  
  // Show the selected content
  var selectedContent = document.getElementById(itemId);
  selectedContent.style.display = "block";
}
