const formSubmit = () => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("message").value;
  if (!name || !email || !date) {
    alert("Please fill all fields");
  } else {
    alert("This doesn't work yet. Why not connect on LinkedIn?");
    document.getElementById("form").reset();
  }
};
