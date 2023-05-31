import {User} from '@prisma/client'
import Button from '../Button'
import {signOut} from 'next-auth/react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import useChangeNameModal from '../../../hooks/useChangeNameModal'
import useChangePasswordModal from '../../../hooks/useChangePasswordModal'

interface AccountProps {
    currentUser: User
}
const Account: React.FC<AccountProps> = ({ currentUser }) => {
  const changeNameModal = useChangeNameModal();
  const changePasswordModal = useChangePasswordModal();
  const deleteUser = async () => {
    await axios.post('api/delete').then(async () => {
    await signOut();
      toast.success('Successfully Deleted Account'); 
    })
  }
    return (
      <div className="ml-8 mt-5">
        <div className="my-8">
          <h2 className="text-3xl font-bold">MY DETAILS</h2>
          <p className="mt-3">
            Feel free to edit any of your details below so your account is up to
            date.
          </p>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-bold">DETAILS</h2>
          <p className="uppercase mt-3">{currentUser.name}</p>
          <button className="underline hover:font-bold" onClick={changeNameModal.onOpen}>
            EDIT
          </button>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-bold">LOGIN DETAILS</h2>
          <h3 className="text-xl font-bold mt-3">EMAIL</h3>
          <p className="uppercase">{currentUser.email}</p>
          <h3 className="text-xl font-bold mt-3">PASSWORD</h3>
          <p>**************</p>
          <button className="underline" onClick={changePasswordModal.onOpen}>
            EDIT
          </button>
        </div>
        <div className="my-8">
          <h2 className="text-3xl font-bold">MANAGE ACCOUNT</h2>
          <div className="mt-5">
            <Button label="LOG ME OUT" small onClick={() => signOut()} />
          </div>
          <div className="py-5">
            <Button label="DELETE ACCOUNT" small onClick={deleteUser} />
          </div>
        </div>
      </div>
    );
}

export default Account;