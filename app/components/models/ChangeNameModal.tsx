"use client";
import axios from "axios";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from "./Modal";
import Heading from "./Heading";
import Input from "../inputs/Input";
import { toast } from "react-hot-toast";
import useChangeNameModal from "../../hooks/useChangeNameModal";
import {useRouter} from 'next/navigation'

const ChangeNameModal: React.FC = () => {
const router = useRouter()
    const changeNameModal = useChangeNameModal();  
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      newName: ""
    },
  });
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/updateName", data)
      .then(() => {
        changeNameModal.onClose();
        toast.success("Name Change Successful");
        router.refresh()
      })
      .catch(() => {
        toast.error("Something went wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading
        title="Name Change"
        subtitle="Out With The Old In With The New"
        center
      />
      <Input
        id="newName"
        label="New Name"
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
      isOpen={changeNameModal.isOpen}
      title="Change Your Name?"
      actionLabel="Submit"
      onClose={changeNameModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default ChangeNameModal;