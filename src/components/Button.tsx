type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

/**
 * @description Button component
 * @version 1.0.0
 */
export default function Button({ children, type }: ButtonProps) {
  return (
    <button className="border-2 border-slate-400 font-semibold rounded-sm py-2 px-6 hover:bg-slate-700 hover:text-slate-100">
      {children}
    </button>
  );
}
