import { ReactNode } from 'react';

// ----------------

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div className="site-wrapper">{children}</div>;
}

export default Layout;
