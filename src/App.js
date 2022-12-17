import React from "react";
import Home from "./components/Home/Home";
import { firebaseConfig } from "./configDb";
import { FirebaseDatabaseProvider} from "@react-firebase/database";
import firebase from "firebase";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/compat/storage'
function App() {
  console.log(firebaseConfig);
  return (
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <div>
        <Home />
      </div>
    </FirebaseDatabaseProvider>
  );
}

export default App;