const Volume = ({ volNum, volName }) => {
  return (
    <div className=" flex flex-col h-30 w-90 bg-stroke/20 mt-2 rounded-xl overflow-hidden">
      <div className="relative h-30 w-90">
        <div className="absolute text-basefont h-30 w-90 items-center text-2xl font-bold p-10">
          Volume {volNum}: {volName}
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1747185207i/222645586.jpg"
        alt=""
        className="h-30 w-90 object-cover  bg-center items-center"
      />
    </div>
  );
};

export default Volume;
