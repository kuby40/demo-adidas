"use client";

import axios from "axios";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useRegisterModal from "../../hooks/useRegisterModal";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";

const RegisterModal = () => {
  const RegisterModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/register", data).then(() => {
        RegisterModal.onClose();
        toast.success('Account Successfully Created');
      }).catch(() => {  
        toast.error('Something went wrong');
      }).finally(() => {
        setIsLoading(false);
      });
    };
    
  const bodyContent = (
    <div>
      <div className="flex flex-col gap-4">
        <Heading title="Join the Club" subtitle="Create an Account" center />
        <Input
          id="firstName"
          label="First Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="lastName"
          label="Last Name"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="email"
          label="Email"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="password"
          label="Password"
          type="password"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={RegisterModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={RegisterModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default RegisterModal;
