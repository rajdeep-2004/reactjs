import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebase.jsx";

const auth = getAuth(app);

const SignIn = () => {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signin() {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert("User logged in successfully!"))
      .catch((error) => alert(error.message));
  }

  return (
    <>
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
                placeholder="Enter your password"                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <br></br>
                <br></br>

              <button
                onClick={signin}
              >
                Sign In
              </button>

    </>
  );
};

export default SignIn;