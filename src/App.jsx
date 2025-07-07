import SignUpPage from "./SignUp"
import SignInPage from "./SignIn"
import Firestore from "./firestore"

function App() {



  return (
    <div className="App">
      <h1>Sign Up</h1>
      <SignUpPage/>
      <h1>Sign In</h1>
      <SignInPage/>
      <h1>Firestore</h1>
      <Firestore/>
    </div>
  )
}

export default App 