import getCurrentUser from "../../actions/getCurrentUser";
import AccountPage from "./page";
import getSession from "../../actions/getSession";
import { toast } from "react-hot-toast";

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
  return <AccountPage currentUser={currentUser!} />;
}
