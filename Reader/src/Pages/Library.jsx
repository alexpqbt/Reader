import BackButton from "../Components/BackButton";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import SideScroller from "../Components/SideScroller";

const Library = ({ user, pfpImg, bgImg }) => {
  return (
    <div className="flex">
      <div className="flex flex-col h-full w-screen justify-center items-center">
        <div className="h-195 w-100 mt-16 rounded-xl border-stroke/20  border overflow-y-auto bg-linear-to-b from-stroke/25 to-transparent">
          <Header />
          <Footer />
          <div className="h-15 w-relative items-center flex pl-2">
            <BackButton />
            <div className="h-15 pl-5 flex items-center">
              <div className=" text-2xl text-basefont">{user}Anakin</div>
            </div>
          </div>
          <div className="w-relative h-50 bg-amber-200">{bgImg}</div>
          <div className="bg-stroke h-40 w-40 rounded-full flex -mt-20 ml-5">
            {pfpImg}
          </div>
          <div className="w-100 h-50">
            <div className="h-50 pl-12 pt-2">
              <div className="text-basefont text-3xl">Anakin</div>
              <div className="text-basefont/50 text-xl">@anakin45</div>
              <div className="w-60 h-20">
                <div className="text-basefont/50 text-sm">
                  Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="flex text-basefont/50 gap-20">
                <div>Reader</div>
                <div>Joined December 2025</div>
              </div>
              <div className="flex text-basefont/50 gap-20">
                <div>Reader</div>
                <div>Joined December 2025</div>
              </div>
            </div>
          </div>
          <div>
            <SideScroller />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
