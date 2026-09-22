interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      className="bg-slate-400 text-white p-2 rounded-md"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
