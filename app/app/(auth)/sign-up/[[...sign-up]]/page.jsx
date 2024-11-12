import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className='m-auto w-full'>
    <SignUp className='m-auto'   appearance={{
      layout: {
        // Disable Clerk branding
        showClerkBranding: false,
        showClerkBranding: false
      },
    }} />
    </div>
}