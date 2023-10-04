import React from "react"
import Nav from "@components/Nav"
import Provider from "@components/Provider"
import "@styles/globals.css"


export const metadata = {
    title: "AI Prompts",
    description: "Share and use AI Prompts."
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">

    <body>
        <Provider>
        <div className="main">
            <div className="gradient" />
        </div>
        <main className="app">
        <Nav />
            {children}
        </main>
        </Provider>
    </body>
    </html>
  )
}

export default RootLayout