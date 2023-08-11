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
