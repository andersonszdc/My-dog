import { addDoc, collection, Timestamp } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../utils/firebaseConfig";

const createPost = async (
  caption: string,
  name: string,
  image: string,
  file: any
) => {
  const imageRef = ref(storage, image);
  await uploadBytes(imageRef, file).then((snapshot) => {
    console.log("uploaded a file");
    console.log(snapshot)
  });
  await addDoc(collection(db, "posts"), {
    caption,
    data: Timestamp.now(),
    name,
    image,
  });
};

export default createPost;
