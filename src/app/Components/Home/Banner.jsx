import "./Banner.css"

const Banner  = () => {
    return (
        <section className="mt-16">
          <div className="flex flex-col gap-3">
           <span className="pointer-events-auto font-sora text-xl font-medium text-gradient">Transform</span>
           <span className="pointer-events-auto text-xl font-medium text-gradient">Your Website</span>
           <span className="pointer-events-auto text-xl font-medium text-white">With Motion <br/> Art Effect</span>
          </div>
          <div>right content</div>
        </section>
    );
};

export default Banner;