import 'bootstrap/dist/css/bootstrap.css';
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "react-bootstrap";
import Navigation from "./Navigation.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Container>
          <span className="purple main-heading text-center">FeminizidMap.org</span>
          <Navigation />
          <div className="my-4">
            {children}
          </div>
        </Container>
      </body>
    </html>
  );
}
