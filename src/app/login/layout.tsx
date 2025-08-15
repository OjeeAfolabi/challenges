import Link from "next/link";
import React, { ReactNode } from "react";

const Layout = ({children}: {children : ReactNode}) => {
  return <div>
    <div>
        <ul>
            <li>
                <Link href='/'>Login Main Page</Link>
            </li>
            <li>
                <Link href='/login/loginuser'>Login User</Link>
            </li>
            <li>
                <Link href='/login/loginadmin'>Login Regular</Link>
            </li>
        </ul>
    </div>
    {children}
  </div>;
};

export default Layout;
  