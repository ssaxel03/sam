import Navbar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>SAM</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="output.css" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin="" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="custom.css" />
        <link rel="shortcut icon" href="sam_logo.png" type="image/x-icon" />
      </head>
      <body className="bg-neutral-800 w-full h-screen flex flex-col">

        <header className="w-full h-fit">

          <Navbar />

        </header>

        <main className="w-full bg-neutral-300 text-neutral-800 flex flex-1 grow flex flex-wrap justify-center content-start items-center">
          {children}
        </main>

        <footer className="z-[900] bottom-0 w-full text-neutral-300 px-3 py-2 bg-neutral-800 flex justify-center align-center items-center">
          
          <div className="flex flex-col justify-center align-center items-center">
            <p>SAM © {new Date().getFullYear()}</p>
          </div>
          
        </footer>

      </body>
    </html>
  )
}