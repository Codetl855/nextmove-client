import React from "react";

interface AnchorLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

const AnchorLink: React.FC<AnchorLinkProps> = ({
  children = "Forgot Password?",
  className = "",
  onClick,
  ...props
}) => {
  return (
    <a
      onClick={onClick}
      className={`text-aztec hover:underline ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
