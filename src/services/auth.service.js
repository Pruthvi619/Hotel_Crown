// src/services/auth.service.js

const AuthService = {
  register(username, email, password) {
    return new Promise((resolve, reject) => {
      // Simulate a successful registration response
      setTimeout(() => {
        if (username === "existinguser") {
          reject({ response: { data: { message: "Username already taken" } } });
        } else {
          resolve({ data: { message: "Registration successful!" } });
        }
      }, 1000);
    });
  }
};

export default AuthService;
