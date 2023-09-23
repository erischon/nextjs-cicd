type ButtonProps = {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
};

/**
 * @description Button component
 * @version 1.0.0
 */
export default function Button({ children }: ButtonProps) {
  return (
    <button className="border rounded-sm py-2 px-6 hover:bg-slate-700">
      {children}
    </button>
  );
}
