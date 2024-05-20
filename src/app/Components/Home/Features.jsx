/* eslint-disable react/no-unescaped-entities */
import img1 from "../../../assets/motionarteffect-img9.png";
import img2 from "../../../assets/motionarteffect-img6.png";
import img3 from "../../../assets/motionarteffect-img7.png";
const Features = () => {
  const featuresData = [
    {
      img: img1,
      title: "Light Weight",
      des: "Motion Art for Elementor is designed to be lightweight.",
    },
    {
      img: img2,
      title: "100% Responsive",
      des: "Create a consistent visual experience across all devices.",
    },
    {
      img: img3,
      title: "User Friendly Interface",
      des: "Ensure a smooth experience for both applicants and administrators.",
    },
  ];
  return (
    <section className="mt-28">
      <h1 className="text-center text-4xl font-sora text-[#EEE5FF] font-medium">
        An All-Round Plugin With Powerful Features
      </h1>
      <div className="text-center text-[#EEE5FFBD] my-4 text-lg font-outfit font-light">
        <p>
          Whether you're a seasoned web designer or just starting out, Motion
          Art for
        </p>
        <p>
          Elementor seamlessly integrates with the Elementor platform, providing
          you
        </p>
        <p>with a seamless and intuitive experience.</p>
      </div>
      <div className="mt-16 flex justify-between gap-8">
        {featuresData.map((item, i) => (
          <div
            className="p-5 bg-section-card  flex-1 flex flex-col"
            key={i}
          >
            <div className="w-[180px] -ml-10 h-[180px]">
              <img
                className="w-full object-contain h-full"
                src={item.img}
                alt={item.img}
              />
            </div>
            <h1 className="mb-4 font-sora font-medium text-[#EEE5FF] text-2xl">{item.title}</h1>
            <p className="text-[#EEE5FFBD] font-outfit font-light text-lg">{item.des}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
