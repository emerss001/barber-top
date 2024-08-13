"use client"

import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"
import React from "react"

const AuthProvider = ({ children }: { children: ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default AuthProvider
