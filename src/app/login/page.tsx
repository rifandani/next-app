import { Login } from '#auth/components/login';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Access the app by entering the username and password. Using dummyjson API behind the scenes.',
  openGraph: {
    title: 'Login',
    images: [`/api/og?title=Login`],
  },
};

export default function LoginPage() {
  return (
    <main className="h-screen">
      <div className="flex w-full flex-wrap">
        {/* <!-- Login Section --> */}
        <section className="flex w-full flex-col md:w-1/2">
          <div className="flex justify-center pt-12 md:-mb-24 md:justify-start md:pl-12">
            <Login.HomeLink />
          </div>

          <div className="my-auto flex flex-col justify-center px-8 pt-8 md:justify-start md:px-24 md:pt-0 lg:px-32">
            <h1 className="text-center text-3xl text-primary">Welcome Back</h1>

            <Login.Form />

            <p className="py-12 text-center">
              Don&apos;t have an account?{' '}
              <a href="/register" className="hover:underline">
                Register here
              </a>
            </p>
          </div>
        </section>

        {/* <!-- Image Section --> */}
        <section className="w-1/2 shadow-2xl">
          <span className="relative hidden h-screen w-full bg-slate-900 bg-[url('/grid.svg')] md:flex md:items-center md:justify-center">
            <Login.NextjsIcon />
          </span>
        </section>
      </div>
    </main>
  );
}
