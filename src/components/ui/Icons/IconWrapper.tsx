interface IconWrapperProps extends React.HTMLAttributes<HTMLDivElement>  {
  icon: string;
   label?: string; 
  className?: string;
  iconClassName?: string;
};

const IconWrapper: React.FC<IconWrapperProps> = ({ icon,label, className, iconClassName, ...props}) => {
  return (
    <div className={`flex items-center gap-2 p-3 bg-aztec-light  rounded-md justify-center ${className} `}
    {...props}
    >
      <span className={`${icon}   ${iconClassName}`} />
      {label && <span className="">{label}</span>}
    </div>
  );
}

export default IconWrapper;
