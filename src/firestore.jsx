import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import { app } from "./firebase.jsx";

const firestore = getFirestore(app);

function writeData() {
  addDoc(collection(firestore, "cities"), {
    name: "New City",
    pincode: "6586",
    lat: 789,
    long: 453,
  })
    .then(() => {
      alert("Data written successfully!");
    })
    .catch((error) => {
      alert("Error writing data: " + error.message);
    });
}

const getDocument = async () => {
  const ref = doc(firestore, "cities", "gtLKJWoCxXtGxndEghYV");
  const snap = await getDoc(ref);
  console.log(snap.data());
};

const getQuery = async () => {
  const citiesRef = collection(firestore, "cities");
  const q1 = query(citiesRef, where("name", "==", "New City"));
  const querySnapshot = await getDocs(q1);
  querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.data().pincode);
});
  
};

const func = () => {
  return (
    <div>
      <button onClick={writeData}>Write Data</button>
      <br></br>
      <br></br>
      <button onClick={getDocument}>Get Document</button>
      <br></br>
      <br></br>
      <button onClick={getQuery}>Query</button>
    </div>
  );
};

export default func;
