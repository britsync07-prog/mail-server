import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to Mail Server Platform
        </h1>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/dashboard" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">User Portal &rarr;</h3>
            <p className="mt-4 text-xl">
              Manage your domains, send emails, and track analytics.
            </p>
          </Link>

          <Link href="/admin" className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600">
            <h3 className="text-2xl font-bold">Admin Portal &rarr;</h3>
            <p className="mt-4 text-xl">
              System-wide management, IP warming, and health checks.
            </p>
          </Link>
        </div>
      </main>
    </div>
  );
}
