interface HrProps {
  className?: string;
}

export default function Hr({ className = "" }: HrProps) {
  return <hr className={`border-t border-gray-300 my-4 ${className}`} />;
}
