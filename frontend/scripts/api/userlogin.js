const login_name = document.getElementById("login-name").value;
const login_password = document.getElementById("login-password").value;
const loginDiv = document.getElementById("login-div");
const content = document.getElementById("content");
const login_btn = document.getElementById("login");
const signup_link = document.getElementById("signup-link");
const signupDiv = document.getElementById("signup-div");

const login = async (name, password) => {
  const loginDiv = document.querySelector(".login");

  const content = document.getElementById("content");
  const body = new FormData();
  body.append("name", name);
  body.append("password", password);

  try {
    const response = await axios(
      "http://localhost/Expense-Tracker-Serverside/server-side/verifyUser.php",
      {
        method: "post",
        headers: { "Content-Type": "multipart/form-data" },
        data: body,
      }
    );
    console.log(response.data.id);
    if (response.data.message === "Login successful") {
      console.log("Div is", loginDiv);
      localStorage.setItem("userId", response.data.id);
      window.location.href = "./pages/home.html";
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
  window.location.href = "./pages/signup.html";
});
