import "./globals.css";
import { ReactNode } from "react";
import ModalContainer from "@/components/modals/ModalContainer";
import SessionGuard from "@/components/guards/SessionGuard";
import QueryProvider from "./Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <QueryProvider>
          <ModalContainer />
          <SessionGuard />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
