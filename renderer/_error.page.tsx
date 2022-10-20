import React from 'react'
export { Page }

function Page({ is404 }: { is404: boolean }) {
  if (is404) {
    return (
      <main className="bg-base-1 min-h-sm flex flex-col justify-center items-center">
        <h1>404 Page Not Found</h1>
        <p>This page could not be found.</p>
      </main>
    )
  } else {
    return (
      <main className="bg-base-1 min-h-sm flex flex-col justify-center items-center">
        <h1>500 Internal Server Error</h1>
        <p>Something went wrong.</p>
      </main>
    )
  }
}
