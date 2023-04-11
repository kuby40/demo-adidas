import Image from "next/image"
import HeaderPhoto from "../../../public/frontPageFirstPhoto2.jpg";
const FirstCustomerSee = () => {
    return (
      <div className="relative h-85vh">
        <h1 className="absolute text-3xl md:text-5xl lg:text-7xl xl:text-9xl text-stone-400 font-extrabold top-1/4 left-5">
          Casual,
          <div className="bg-clip-text text-white">Redefined.</div>
        </h1>
          <div className="imgBack">
            <Image
              src={HeaderPhoto}
              width={9999}
              height={9999}
              alt="dudes chilling"
              className="imgBack"
            ></Image>
          </div>
        <div className="flex absolute bottom-0 ml-5 mb-6">
          <button className="flex bg-white p-3 font-bold hover:text-gray-500 border-slate-900 border-2 cursor-pointer">
            EXPLORE MORE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>)
}
export default FirstCustomerSee;