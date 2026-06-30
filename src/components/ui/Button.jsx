function Button({
  children,
  href,
  variant = "primary",
  download = false,
  target,
  onClick,
  className = "",
}) {
  const baseClasses =
    "inline-block px-7 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white shadow-xl",

    secondary:
      "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white",
  };

  return (
    <a
      href={href}
      download={download}
      target={target}
      onClick={onClick}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

export default Button;