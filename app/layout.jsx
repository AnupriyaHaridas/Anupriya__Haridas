import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of a web developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Nav />
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}
