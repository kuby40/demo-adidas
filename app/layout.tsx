import "../styles/globals.css";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import RegisterModal from "./components/models/RegisterModal";
import ToasterProvider from "./context/ToasterProvider";
import LoginModal from "./components/models/LoginModal";
import AuthContext from "./context/AuthContext";
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
        <AuthContext>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <Header currentUser={currentUser!} />
          {children}
          <Footer currentUser={currentUser!} />
        </AuthContext>
      </body>
    </html>
  );
}
