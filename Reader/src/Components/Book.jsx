import { useNavigate } from "react-router-dom";

const Book = ({ id, name, author, image }) => {
  const navigate = useNavigate();
  return (
    <div
      className="shrink-0 w-40"
      onClick={() => navigate(`/bookprofile/${id}`)}
    >
      <div className="h-60 w-40 bg-stroke/10 rounded-sm">
        <img
          src={image}
          alt={`Cover of ${name}`}
          className="object-cover h-60 w-40 rounded-sm"
        />
      </div>
      <div className="text-basefont font-bold text-xl mt-2">{name}</div>
      <div className="text-basefont/20 text-sm">{author}</div>
    </div>
  );
};

export default Book;
