import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map(doc => doc.data())
};
