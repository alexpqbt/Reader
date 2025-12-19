import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div
      className="h-10 w-10 rounded-full bg-linear-to-t from-stroke to-base/25 border border-stroke flex items-center justify-center"
      onClick={() => navigate(-1)}
    >
      <div>
        <div className="h-1 w-3 bg-base rounded-2xl -rotate-45 mb-0.5"></div>
        <div className="h-1 w-3 bg-base rounded-2xl rotate-45"></div>
      </div>
      <div className="h-1 w-6 bg-base rounded-2xl -ml-2"></div>
    </div>
  );
};

export default BackButton;
