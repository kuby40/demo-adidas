"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import useLoginModal from "../../hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import useRegisterModal from './../../hooks/useRegisterModal';

const LoginModal: React.FC = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    })
      .then((callback) => {
        if (callback?.error) {
          toast.error(callback.error);
        }
        if (callback?.ok && !callback?.error) {
          toast.success('Successfully Logged In');
          router.refresh();
          loginModal.onClose();
        }
      })
      .finally(() => setIsLoading(false));
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Login" subtitle="Find your fit" center />
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
  );
  
  const createAccount = () => {
    loginModal.onClose();
    registerModal.onOpen();
  }
  const footerContent = (
    <div>
    <button onClick={createAccount} className='hover:underline'>Don't Have an Account? Create One</button>
    </div>
  );
  
  
  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="Fake Apparel"
      actionLabel="Submit"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
