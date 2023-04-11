const ShowcaseVideoFrontPage = () => {
    return (
      <div className="relative ">
        <video className="-z-10" src={"WebsiteVideo.mp4"} autoPlay loop muted />
        {/* VIDEO ATTRIBUTION
           <a href="https://www.vecteezy.com/video/13219158-young-athletic-caucasian-girl-in-a-red-tank-top-doing-squats-on-a-lake-background-he-is-engaged-in-fitness">
            Young athletic Caucasian girl in a red tank top doing squats on a
            lake background. He is engaged in fitness. Stock Videos by Vecteezy
          </a> */}
        <div className="absolute text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-white font-extrabold top-1/4 left-5">
          <h1 className="">
            Get Fit. <br />
            Have Fun.
          </h1>
          <h3 className="">Look good, feel good</h3>
        </div>
        <button className="absolute uppercase bg-white p-3 font-bold hover:text-gray-500 border-slate-900 border-2 bottom-5 left-5">
          Shop Athletic Wear
        </button>
      </div>
    );
}

export default ShowcaseVideoFrontPage;