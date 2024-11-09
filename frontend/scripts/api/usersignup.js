const signup_name = document.getElementById("signup-name").value;
const signup_password = document.getElementById("signup-password").value;
const signupDiv = document.getElementById("signup-div");
const signup_btn = document.getElementById("signup");
const login_link = document.getElementById("login-link");

const signup = async (name, password) => {
  const body = new FormData();
  body.append("name", name);
  body.append("password", password);

  try {
    const response = await axios(
      "http://localhost/Expense-Tracker-Serverside/server-side/createUser.php",
      {
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: body,
      }
    );
    console.log(response.data.id);
    if (response.data.message === "Successful creating new user") {
      console.log("Div is", loginDiv);
      localStorage.setItem("userId", response.data.id);
      showContent();
    }
  } catch (error) {
    console.log(error);
  }
};

login_btn.addEventListener("click", async () => {
  const login_name = document.getElementById("login-name").value;
  const login_password = document.getElementById("login-password").value;
  await login(login_name, login_password);
});
signup_link.addEventListener("click", () => {
  showSignup();
});

const showContent = () => {
  window.location.reload();
  signupDiv.style.display = "none";
  loginDiv.style.display = "none";
  content.style.display = "block";
};
const showLogin = () => {
  window.location.reload();
  signupDiv.style.display = "none";
  loginDiv.style.display = "block";
  content.style.display = "none";
};
const showSignup = () => {
  window.location.reload();
  signupDiv.style.display = "block";
  loginDiv.style.display = "none";
  content.style.display = "none";
};
