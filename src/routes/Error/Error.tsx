import React from 'react'
import { useRouteError, useNavigate, NavigateFunction } from 'react-router-dom'

export default function Error() {
  const error: any = useRouteError();
  const navigate: NavigateFunction = useNavigate();

  const handleNavigate = (route: string) : void => {
    navigate(route)
  }
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={() => handleNavigate("/")}>Click here to go to home.</button>
    </div>
  )
}
