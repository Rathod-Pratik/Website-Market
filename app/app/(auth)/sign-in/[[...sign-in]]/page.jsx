import { SignIn } from '@clerk/nextjs';

export default function Page() {
  return (
    <section className="bg-white m-auto">
      <div className="lg:grid lg:min-h-screen">
        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:px-16 lg:py-12 m-auto">
          <SignIn appearance={{
            layout: {
              showClerkBranding: false, // Fixed the duplicate issue
            },
          }} />
        </main>
      </div>
    </section>
  );
}
