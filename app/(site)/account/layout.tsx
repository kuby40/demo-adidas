import getCurrentUser from "../../actions/getCurrentUser";
import AccountPage from "./page";
import getSession from "../../actions/getSession";
import ToasterProvider from "../../context/ToasterProvider";
import ChangeNameModal from "../../components/models/ChangeNameModal";
import ChangePasswordModal from "../../components/models/ChangePasswordModal";
import { Fragment, Suspense } from "react";
import Loading from "../../loading";
import getMostBoughtProducts from "../../actions/getMostBoughtProducts";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const currentUser = await getCurrentUser();
  const productsShowcase = await getMostBoughtProducts();
  if (!session) {
    return (
      <div className="h-96 flex justify-center items-center font-bold">
        Please Login To Access Account
      </div>
    );
  }
  return (
    <Fragment>
      <ToasterProvider />
      <ChangeNameModal />
      <ChangePasswordModal />
      <Suspense fallback={<Loading/>}>
        <AccountPage currentUser={currentUser!} productsShowcase={productsShowcase} />
      </Suspense>
    </Fragment>
  );
}
