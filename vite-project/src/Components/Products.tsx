import { PiStarFill } from "react-icons/pi";
import { FaCirclePlus } from "react-icons/fa6";
import { useState } from "react";
type propType = {
  imgsrc: string;
  name: string;
  price: number;
};
const Products = ({ imgsrc, name, price }: propType) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return (
    <section className="h-[430px] transform duration-200 w-64 rounded-lg p-2 shadow-md shadow-slate-300 bg-gray-100 flex flex-col gap-5 hover:scale-105">
      <figure className="text-center relative flex justify-center items-center">
        {!imageLoaded && (
          <div role="status" className="absolute">
            <svg
              aria-hidden="true"
              className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
        <img
          src={imgsrc}
          alt=""
          className="h-[280px] w-full object-fill rounded-xl"
          onLoad={() => setImageLoaded(true)}
        />
      </figure>
      <div>
        <h2 className="text-xl font-semibold mt-4 text-[#0D1B39]">{name}</h2>
        <div className="flex text-yellow-500">
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
          <PiStarFill />
        </div>
      </div>
      <div className="flex justify-between font-medium w-full text-lg">
        <h5 className="text-[#0D1B39] text-2xl font-semibold">${price}</h5>
        <p>
          <FaCirclePlus className="text-3xl text-[#0D1B39]" />
        </p>
      </div>
    </section>
  );
};

export default Products;
