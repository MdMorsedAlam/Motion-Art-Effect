import sectionImg from "../../../assets/motionarteffect-img11.png";
import pageImg from "../../../assets/motionarteffect-img10.png";
const PageSection = () => {
  return (
    <section className="mt-28">
      <p className="text-center text-[#EEE5FF] font-medium text-4xl font-sora">
        Apply On Any Section Or Enable For <p className="mt-3">Whole Page</p>
      </p>
      <div className="mt-20 flex justify-between gap-5">
        <div className="bg-section-card flex flex-col gap-5 p-6 flex-1">
          <h1 className="font-sora text-[#EEE5FF] text-2xl font-medium">Apply On Section</h1>
          <p className="font-outfit text-[#EEE5FFBD] my-4 text-lg font-light">
            Apply on section is a game-changer, offering an unparalleled way to
            <p> manage applications directly from your website.</p>
          </p>
          <img className="w-full h-full" src={sectionImg} alt={sectionImg} />
        </div>
        <div className="bg-section-card mt-24 flex flex-1 flex-col gap-5 p-6">
          <h1 className="font-sora text-[#EEE5FF] text-2xl font-medium">Apply On Page</h1>
          <p className="font-outfit text-[#EEE5FFBD] my-4 text-lg font-light">
            Apply on section is a game-changer, offering an unparalleled way to
            <p> manage applications directly from your website.</p>
          </p>
          <img className="w-full h-full" src={pageImg} alt={pageImg} />
        </div>
      </div>
    </section>
  );
};

export default PageSection;
