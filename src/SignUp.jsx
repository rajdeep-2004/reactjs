import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase.jsx";

const auth = getAuth(app);

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  function signup() {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert("User created successfully!"))
      .catch((error) => alert(error.message));
  }

  return (
    <>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>

      <input
        type="email"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br></br>
      <br></br>

      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>

      <button onClick={signup}>Sign Up</button>
    </>
  );
};

export default SignUpPage;
