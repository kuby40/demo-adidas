import {User} from '@prisma/client'
interface AccountProps {
    currentUser: User
}
const Account: React.FC<AccountProps> = ({ currentUser }) => {
    return (
      <div className="">
        <div>
          <h2>MY DETAILS</h2>
          <p>
            Feel free to edit any of your details below so your account is up to
            date.
          </p>
        </div>
        <div>
          <h2>DETAILS</h2>
          <p className="uppercase">{currentUser.name}</p>
          <button className="underline">EDIT</button>
        </div>
        <div>
          <h2>LOGIN DETAILS</h2>
          <h3>EMAIL</h3>
          <p>{currentUser.email}</p>
          <h3>PASSWORD</h3>
          <p>**************</p>
          <button className="underline">EDIT</button>
        </div>
        <div>
                <h2>MANAGE ACCOUNT</h2>
                
        </div>
      </div>
    );
}

export default Account;