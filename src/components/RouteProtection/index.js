import React from "react"
import { Redirect } from "react-router-dom"
import { getLoggedInUser } from "../../utils/getLoggedInUser"

export const RouteProtection = (WrappedComponent) => {
  return () => getLoggedInUser() ? <WrappedComponent /> : <Redirect to="/login" />
}