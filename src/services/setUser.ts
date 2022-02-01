import { User } from "firebase/auth";
import { doc, getDoc, setDoc, Timestamp, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

type createUserProps = {
  user: User;
  name?: string;
  username?: string;
};

export const setUser = async ({ user, name, username }: createUserProps) => {
  const docRef = doc(db, "users", user.uid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    setDoc(docRef, {
      email: user.email,
      name: user.displayName || name,
      username: username || "",
      uid: user.uid,
      photoURL: user.photoURL,
      created_at: Timestamp.now(),
    });
  } else {
    const data = docSnap.data()
    updateDoc(docRef, {
      email: user.email,
      name: user.displayName,
      username: username ?? data.username,
      photoURL: user.photoURL,
      updated_at: Timestamp.now(),
    });
  }
};
