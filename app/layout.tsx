import "../styles/globals.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import LoginModal from "./components/models/LoginModal";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <LoginModal
          title="Login"
          isOpen
          actionLabel="Login"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
