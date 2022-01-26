import { collection, getDocs } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

export const getPosts = async () => {
  const querySnapshot = await getDocs(collection(db, "posts"));
  return querySnapshot.docs.map(doc => doc.data()).sort((a, b) => {
    const numA = a.data.seconds
    const numB = b.data.seconds
    return numB - numA
  })
};
