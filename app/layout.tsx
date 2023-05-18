import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex min-h-screen flex-col items-center justify-between p-20">
          <div className="flex w-full max-w-full items-center justify-center">
            <ul className="flex items-center justify-between gap-10 text-xl">
              <li>Home</li>
              <li>Server </li>
              <li>Client </li>
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Login
              </button>
              <img
                className="w-10 h-10 rounded-full"
                src="/DeveloperDeck101.png"
                alt="Rounded avatar"
              ></img>
            </ul>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
