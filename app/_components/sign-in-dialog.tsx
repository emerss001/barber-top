import Image from "next/image"
import { Button } from "./ui/button"
import { DialogDescription, DialogHeader, DialogTitle } from "./ui/dialog"
import { signIn } from "next-auth/react"

const SignInDialog = () => {
  const handleLoginWithGoogleClick = () => signIn("google")
  return (
    <>
      <DialogHeader>
        <DialogTitle>Faça login na plataforma</DialogTitle>
        <DialogDescription>
          Se conecte usando sua conta do Google
        </DialogDescription>
      </DialogHeader>

      <Button
        variant="outline"
        className="gap-2 font-bold"
        onClick={handleLoginWithGoogleClick}
      >
        <Image
          src="/google.svg"
          width={18}
          height={18}
          alt="fazer login com o google"
        />
        Google
      </Button>
    </>
  )
}

export default SignInDialog
