import Header from "./Header";
import Footer from "./Footer";
import { FC, ReactNode } from "react";

import React from 'react'

type ChildrenProps = {
    children?: ReactNode
}

export const Layout:FC<ChildrenProps> = ({children}) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Layout
