const Card = ({
  children,
  title,
  className = "",
  onClick,
  hover = false,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-md border border-gray-200 p-6
        ${hover ? "hover:shadow-lg hover:-translate-y-1 transition duration-300" : ""}
        ${onClick ? "cursor-pointer" : ""}
        ${className}
      `}
    >
      {title && (
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          {title}
        </h2>
      )}

      <div>{children}</div>
    </div>
  );
};

export default Card;