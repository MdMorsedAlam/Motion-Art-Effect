import img1 from "../../../assets/motionarteffect-img1.png";
import img2 from "../../../assets/motionarteffect-img2.png";
import img3 from "../../../assets/motionarteffect-img3.png";
import startImg from "../../../assets/motionarteffect-img4.png";
import magicImg from "../../../assets/motionarteffect-img5.png";
import { BsArrowRight } from "react-icons/bs";
const Review = () => {
  const reviewData = [
    {
      img: img1,
      start: startImg,
      btext: 4.5,
      text: "Score, 9 Reviews",
    },
    {
      img: img2,
      start: startImg,
      btext: 4.5,
      text: "Score, 9 Reviews",
    },
    {
      img: img3,
      start: startImg,
      btext: 4.5,
      text: "Score, 9 Reviews",
    },
  ];
  return (
    <section className="mt-28">
      <h1 className="text-center text-xl font-outfit text-[#EEE5FF]">
        Trusted by thousands of users around the world
      </h1>
      <div className="mt-12 flex justify-between">
        {reviewData.map((item, i) => (
          <div key={i} className="flex flex-1 justify-center items-center gap-3">
            <img src={item.img} alt={item.img} />
            <div className="flex flex-col gap-3">
              <img src={item.start} alt={item.start} />
              <p className="text-[#EEE5FFBD] font-sora text-sm font-normal">
                <strong>{item.btext} </strong>
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col-reverse lg:flex-row justify-between">
        <div>
          <h1 className="font-sora text-4xl font-medium text-[#EEE5FF]">
            Turn Your Cursor Into A Colorful Magic
            <p className="mt-3">Wand & Charm Your Visitors</p>
          </h1>
          <p className="text-lg my-5 text-[#EEE5FFBD] font-outfit font-light">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse{" "}
            <p className="mt-2">
              your website with visually stunning motion art elements.
            </p>
          </p>
          <button className="px-6 flex gap-3 items-center py-3 text-xl font-sora font-light text-white rounded-lg bg-gradient-to-r from-[#5e11ff] to-[#f87516]">
            Purchase From Envato <BsArrowRight />
          </button>
        </div>
        <div className="flex justify-center items-center">
        <img className="lg:w-full w-[350px] h-full" src={magicImg} alt={magicImg} />
        </div>
      </div>
    </section>
  );
};

export default Review;
