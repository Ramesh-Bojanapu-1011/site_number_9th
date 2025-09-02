import React from "react";

type AvatarProps = {
  userInitials: string;
  className?: string;
};

export const Avatar: React.FC<AvatarProps> = ({
  userInitials,
  className = "",
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold text-lg w-10 h-10 select-none shadow-lg ${className}`}
      style={{ userSelect: "none" }}
    >
      {userInitials}
    </div>
  );
};
