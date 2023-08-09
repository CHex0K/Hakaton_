
async function myClick1() {
  alert(await eel.print_text()());
  }

 async function myClick() {
    document.querySelector(".description").value = await eel.generate_textJS()();
  }
