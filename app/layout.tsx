import "../styles/globals.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import RegisterModal from "./components/models/RegisterModal";
import ToasterProvider from "./context/ToasterProvider";
import LoginModal from "./components/models/LoginModal";
import getCurrentUser from "./actions/getCurrentUser";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
    const currentUser = await getCurrentUser();
  return (
    <html>
      <body>
        <RegisterModal />
        <LoginModal />
        <Header currentUser={currentUser} />
        {children}
        <Footer />
        <ToasterProvider />
      </body>
    </html>
  );
}
