import "./globals.css";
import { ReactNode, Suspense } from "react";
import StoreProvider from "../store/StoreProvider";

export const metadata = {
  title: "Settlement App",
  description: "A simple settlement negotiation app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
