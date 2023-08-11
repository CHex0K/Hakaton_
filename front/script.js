async function myClick() {
  let brand = document.querySelector(".name").value;
  let product = document.querySelector(".product").value;
  let sostav = document.querySelector(".sostavA").value;
  let category = document.querySelector(".category").value;
  document.querySelector(".description").value = await eel.generate_descriptionJS(category,product,brand,sostav)();
  }


async function Click_gen_feedback() {
  let description = document.querySelector(".description").value;
  document.querySelector(".feedback").value = await eel.generate_feedbackJS(discription)();
  }
function getPrediction() {
  let cost = document.querySelector(".cost").value;
  let discount = document.querySelector(".discount").value;
  let rating = document.querySelector(".rating").value;
  let inStock = document.querySelector(".inStock").value;
  let Feedback = document.querySelector(".Feedback").value;
}
