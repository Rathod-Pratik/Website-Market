import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <SignUp   appearance={{
    layout: {
      // Disable Clerk branding
      showClerkBranding: false,
       showClerkBranding: false
    },
  }} />
}