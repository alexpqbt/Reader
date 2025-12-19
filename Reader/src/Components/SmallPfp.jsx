const SmallPfp = ({ profileImg }) => {
  return (
    <div className="h-10 w-10 rounded-full bg-stroke/20 shrink-0 overflow-hidden">
      <img src={profileImg} alt="Pfp" className="object-cover h-10 w-10" />
    </div>
  );
};

export default SmallPfp;
