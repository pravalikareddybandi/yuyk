// CustomButton.tsx
import React from "react";

interface CustomButtonProps {
  label: string;
  onClick: () => void;
  // Add `type` as an optional prop
  type?: "button" | "submit" | "reset";
  className: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  type = "button",
}) => {
  return (
    <button type={type} onClick={onClick} className="btn">
      {label}
    </button>
  );
};

export default CustomButton;
