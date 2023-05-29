'use client'
import { IconType } from "react-icons/lib";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled,
  small,
  icon: Icon,
}) => {
  return (
      <button
          onClick={onClick}
          disabled={disabled}
          className={`relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition bg-black text-white 
            ${small ? "py-1" : "py-3"} 
            ${small ? "text-sm" : "text-md"} 
            ${small ? "font-light" : "font-semibold"}
            ${small ? "w-1/4" : "w-full"}
      `}
      >
          {Icon && (<Icon size={24} className="absolute left-4 top-3"/>)}
      {label}
    </button>
  );
};

export default Button;
