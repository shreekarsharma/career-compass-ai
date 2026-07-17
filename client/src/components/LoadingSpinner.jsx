const LoadingSpinner = ({
  size = "md",
  color = "blue",
  text = "",
}) => {
  const sizes = {
    sm: "w-6 h-6 border-2",
    md: "w-10 h-10 border-4",
    lg: "w-16 h-16 border-4",
  };

  const colors = {
    blue: "border-blue-600",
    gray: "border-gray-600",
    green: "border-green-600",
    red: "border-red-600",
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-6">
      <div
        className={`
          ${sizes[size]}
          ${colors[color]}
          border-t-transparent
          rounded-full
          animate-spin
        `}
      />

      {text && (
        <p className="text-gray-600 text-sm font-medium">
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;