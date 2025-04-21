import React from 'react'
import { useRouteError } from 'react-router-dom'
export function ErrorPage() {

  const error = useRouteError()
  console.error(error)
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>Go back to the <a href="/">Home</a></p>
      <p>Or visit the <a href="/about">About</a> page</p>
    </div>
  )
}