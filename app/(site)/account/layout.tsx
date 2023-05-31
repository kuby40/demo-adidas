import getCurrentUser from "../../actions/getCurrentUser";
import AccountPage from "./page";
import getSession from "../../actions/getSession";
import ToasterProvider from "../../context/ToasterProvider";
import ChangeNameModal from "../../components/models/ChangeNameModal";
import ChangePasswordModal from "../../components/models/ChangePasswordModal";
import { Fragment } from 'react';

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const session = await getSession();
  const currentUser = await getCurrentUser();
  if (!session) {
    return <div className='h-96 flex justify-center items-center font-bold'>Please Login To Access Account</div>
  }
  return (
    <Fragment>
      <ToasterProvider/>
    <ChangeNameModal/>
    <ChangePasswordModal/>
     <AccountPage currentUser={currentUser!} />
     </Fragment>
  )

}
