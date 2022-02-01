import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { SocialButtonStyled } from "./styles";

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

type SocialButtonProps = {
  midia: string;
};

const SocialButton = ({ midia }: SocialButtonProps) => {
  const auth = getAuth();
  const router = useRouter();
  const srcLogo = midia == "Facebook" ? "facebook" : "google";
  const provider = midia == "Facebook" ? facebookProvider : googleProvider;

  const signIn = () => {
    signInWithPopup(auth, provider).then(() => {
      router.push("/");
    });
  };

  return (
    <SocialButtonStyled onClick={signIn}>
      <Image height={24} width={24} alt="icon" src={`/assets/${srcLogo}.svg`} />
      Sign in with {midia}
    </SocialButtonStyled>
  );
};

export default SocialButton;
