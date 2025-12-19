import { useEffect, useState } from "react";
import Book from "../Components/Book";
import axios from "axios";

const SideScroller = ({ header }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/books")
      .then((res) => {
        // const sorted = res.data.sort((a, b) => a.id - b.id);
        console.log("DATA: ", res.data);
        setBooks(res.data);
      })
      .catch((err) => console.log("AXIOS ERROR: ", err));
  }, []);

  return (
    <>
      <div className="text-basefont text-2xl font-bold mb-2">{header}</div>
      <div className="h-85 w-relative flex flex-row overflow-x-auto space-x-5 items-start">
        {books.length === 0 && <div>No books found</div>}
        {books.map((book) => (
          <Book
            id={book.id}
            key={book.id}
            name={book.name}
            author={book.author}
            image={book.imageLink}
          />
        ))}
      </div>
    </>
  );
};

export default SideScroller;
