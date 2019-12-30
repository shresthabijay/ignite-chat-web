import React from "react"
import { RouteProtection } from "../components/RouteProtection"

export const AppComponent = RouteProtection(
  () => {
    return (
      <div>
        AppComponent
    </div>
    )
  })



