import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import axios from "axios";

const BookDetails = ({ id, headerAlign }) => {
  const [book, setBook] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8081/bookprofile/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.log("Axios err in BookDetails.jsx: ", err));
  }, [id]);

  return (
    <div>
      <div className="h-20 w-90 bg-amber-300/0 pl-10 items-center flex">
        <div className={`pl-${headerAlign}`}>
          <div className="text-basefont text-2xl font-bold">{book.name}</div>
          <div className="text-basefont ">{book.author}</div>
        </div>
      </div>
      <div className="h-100 w-90 bg-amber-300/0 shrink-0 flex justify-center">
        <div className="h-100 w-70">
          <img
            src={book.imageLink}
            alt=""
            className="object-cover h-100 w-70 rounded-sm"
          />
        </div>
      </div>
      <div className="h-30 w-90 mt-5 overflow-y-scroll text-basefont">
        {book.description}
      </div>
    </div>
  );
};

export default BookDetails;
