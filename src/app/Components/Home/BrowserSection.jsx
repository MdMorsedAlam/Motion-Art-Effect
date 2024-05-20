import companysImg from "../../../assets/motionarteffect-img8.png"
const BrowserSection = () => {
  return (
    <section className="mt-28 p-16 bg-section-card">
      <div className="flex flex-col w-[450px] mx-auto gap-3 ">
      <h1 className="text-center font-sora font-medium text-2xl text-[#EEE5FF]">Supported by All Popular Browsers</h1>
      <h1 className="text-center font-outfit text-[#EEE5FFBD] font-light text-lg">
        Rest assured, Motion Art is designed to be compatible{" "}
        <p>with all major web browsers.</p>
      </h1>
      <img className="w-full h-full" src={companysImg} alt={companysImg} />
      </div>
    </section>
  );
};

export default BrowserSection;
