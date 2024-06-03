import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/assets/Logo.svg";
import { signIn } from "@/auth";

export default function SignupCard() {
  async function authAction() {
    "use server";
    await signIn("github");
  }

  return (
    <>
      <form action={authAction} className="space-y-4">
        <SignupButton />
      </form>
      <div>
        <span>Already have an account ?</span>
        <Link
          className="text-blue-500 hover:underline text-[13px] mr-1"
          href="/loggin"
        >
          Log in
        </Link>
      </div>
    </>
  );
}

function SignupButton() {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      <Image src={Logo} alt="Logo" /> Sign up with Github
    </button>
  );
}
