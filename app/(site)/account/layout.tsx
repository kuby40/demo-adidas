import getCurrentUser from "../../actions/getCurrentUser";
import AccountPage from "./page";
import getSession from "../../actions/getSession";

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  const currentUser = await getCurrentUser();
  return (
    <div>
      {session ? (
        <AccountPage currentUser={currentUser!} />
      ) : (
        "Please Login To Access Your Account"
      )}
    </div>
  );
}
