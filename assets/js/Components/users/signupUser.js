import { myFetchData } from "../../Utils/apiUtils.js";
import { clearContainer } from "../other/clearContainer.js";

const app = document.getElementById("app");

export const buildSignup = async () => {
  clearContainer(app);
  let signupForm = `
    <div class="signup-container">
      <form id="userForm">
        <label for="email">Email:</label>
        <input type="email" id="email" name="user-email" placeholder="sound@rapper420" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="user-password" placeholder="password123" required>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" placeholder="soundRapper360" required>
        <label for="full-name">Full Name:</label>
        <input type="text" id="full-name" name="full_name" placeholder="John Doe" required>
        <button type="submit">Register</button>
        <button type="reset">Reset</button>
      </form>
    </div>`;
  app.innerHTML = signupForm; // Correctly assign to app.innerHTML

  const signupFormElement = document.getElementById("userForm");
  signupFormElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const formData = new FormData(e.target);
    const user = {
      email: formData.get("user-email"),
      password: formData.get("user-password"),
      username: formData.get("username"),
      full_name: formData.get("full_name"),
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
    try {
      const data = await myFetchData(signupEndpoint, signupOptions);
      console.log(data);
      console.log(`User signed up successfully: ${data}`);
    } catch (error) {
      console.error(`Error signing up user: ${error.message}`);
    }
  });
};
