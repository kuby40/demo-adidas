import ScrollingSmallTiles from "../../components/UI/ScrollingSmallTiles";
import { User } from "@prisma/client";
interface UserPageProps {
  currentUser: User;
}
const AccountPage: React.FC<UserPageProps> = ({
    currentUser
 }) => {
    return (
    <div>
      <div>
        <h1 className='text-3xl font-black ml-4'>Hi {currentUser.name}</h1>
        </div>
        <div className=''>
        <ul className='flex'>
          <li className='p-3'>
            <button>ORDERS</button>
          </li>
          <li>
            <button>ACCOUNT</button>
          </li>
        </ul>
        </div>
      
      <div>
        <h2>MORE OF WHAT YOU LOVE</h2>
        <h4>
          We’ve collected some of our favorite products based on your
          preferences and purchases.
        </h4>
        <ScrollingSmallTiles />
      </div>
    </div>
  );
};

export default AccountPage;
