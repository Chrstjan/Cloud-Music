import { myFetchData } from "../../Utils/apiUtils.js";
import { clearContainer } from "../other/clearContainer.js";

const app = document.getElementById("app");

export const buildSignup = () => {
  clearContainer(app);
  let signupForm = `
    <div class="signup-container">
        <form id="userForm">
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="sound@rapper420">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="password123">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="soundRapper360">
            <label for="full-name">Fullname:</label>
            <input type="text" id="full-name" name="full-name" placeholder="John Doe">
            <button type="submit">Register</button>
            <button type="reset">Reset</button>
        </form>
    </div>`;
  app.innerHTML += signupForm;

  const signupFormElement = document.getElementById("userForm");
  signupFormElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submited");
    const formData = new FormData(e.target);
    const user = {
      email: formData.get("email"),
      password: formData.get("password"),
      username: formData.get("username"),
      full_name: formData.get("full-name"),
    };
    console.log(user);

    const signupEndpoint = "https://cloud-music-crud-api.vercel.app/signup";
    const signupOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };

    const data = myFetchData(signupEndpoint, signupOptions);
    console.log(`User signed up successfully: ${data}`);
  });
};
