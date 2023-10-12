"use client";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import {useRouter} from 'next/navigation'
import useChangePasswordModal from './../../hooks/useChangePasswordModal';

const ChangePasswordModal: React.FC = () => {
const router = useRouter()
const changePasswordModal = useChangePasswordModal();  
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
        currentPassword: "",
        newPassword: ""
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/account/updatePassword", data)
      .then(() => {
        changePasswordModal.onClose();
        toast.success("Password Updated");
        router.refresh()
      })
      .catch((err) => {
        toast.error(err.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Password Change" subtitle="Out With The Old In With The New" center />
      <Input
        id="currentPassword"
        label="Current Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="newPassword"
        label="New Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={changePasswordModal.isOpen}
      title="Change Your Password?"
      actionLabel="Submit"
      onClose={changePasswordModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ChangePasswordModal;