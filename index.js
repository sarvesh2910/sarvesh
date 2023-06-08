let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = form.elements.name.value;
  const email = form.elements.email.value;
  const message = form.elements.message.value;
  if (!name || !email || !message) {
    alert("Please fill all fields");
  } else {
    alert("This doesn't work yet. Why not connect on LinkedIn?");
    form.reset();
  }
});
