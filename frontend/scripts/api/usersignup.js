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
      localStorage.setItem("userId", response.data.id);
      window.location.href = "./home.html";
    }
  } catch (error) {
    console.log(error);
  }
};

signup_btn.addEventListener("click", async () => {
  await signup(signup_name, signup_password);
});
login_link.addEventListener("click", () => {
  window.location.href = "./../index.html";
});
