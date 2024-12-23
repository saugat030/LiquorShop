import { useParams } from "react-router-dom";
import NavBar from "../Components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { PiStarFill } from "react-icons/pi";

const ProductFullView = () => {
  //Allows to get parameters from the URL
  const params = useParams();
  const [productName, setProductName] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [imgLink, setImglink] = useState<string>("");
  async function getProducts() {
    const { data } = await axios.get(
      `http://localhost:3000/api/products/${params.id}`
    );
    console.log(data[0]);
    setProductName(data[0].name);
    setPrice(data[0].price);
    setCategory(data[0].type_name);
    setDescription(data[0].description);
    setImglink(data[0].image_link);
  }
  useEffect(() => {
    getProducts();
  });

  return (
    <>
      <NavBar page="ProductsFullView" />
      <section className="h-screen flex mt-20">
        <div className="flex-1 flex flex-col h-full items-center p-2">
          <figure className="w-[60%] h-[80%] rounded-xl">
            <img
              src={imgLink}
              alt=""
              className="h-full w-full rounded-xl object-cover"
            />
          </figure>
        </div>
        <div id="RIGHT_SIDE" className="flex-1 flex-col flex p-2">
          <p className="text-xl flex items-center font-semibold gap-3 p-1">
            <a href="#">Home</a>
            <FaLongArrowAltRight className="text-yellow-500" />
            <a href="#">Products</a>
            <FaLongArrowAltRight className="text-yellow-500" />
            <a href="#">{category}</a>
            <FaLongArrowAltRight className="text-yellow-500" />
            <a href="">{productName}</a>
          </p>
          <div className="py-6">
            <div className="flex justify-between py-2">
              <h1 className="text-6xl font-bold">{productName}</h1>
              <div className="flex gap-4 text-3xl font-semibold">
                <FaBookmark />
                <FaHeart />
                <FaShare />
              </div>
            </div>
            <p className="text-xl">{description}</p>
          </div>
          <hr />
          <div className=" py-8 grid grid-cols-2 w-full place-content-evenly">
            <h1 className="text-6xl font-bold text-yellow-400 ">${price}</h1>
            <h2 className="text-3xl text-yellow-300 flex gap-1">
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarFill />
              <PiStarFill className="text-white border-2 border-black" />
            </h2>
            <h3 className="text-gray-500 text-4xl line-through">
              ${parseInt(price) - 2}
            </h3>
            <h2 className="text-green-600 text-2xl">
              93% of buyers have recommended this.
            </h2>
          </div>
          <hr />
          <div className="flex flex-col gap-4 py-8">
            <h3 className="text-2xl font-medium text-gray-500">
              Choose a size
            </h3>
            <div className="flex justify-start gap-10 py-6">
              <div className="rounded-full font-semibold  aspect-square flex justify-center items-center bg-red-200 border border-red-400">
                Small
              </div>
              <div className="rounded-full font-semibold min-w-20 aspect-square flex justify-center items-center bg-pink-200 border border-pink-400">
                Medium
              </div>
              <div className="rounded-full font-semibold  aspect-square flex justify-center items-center bg-purple-200 border border-purple-400">
                Large
              </div>
              <div className="rounded-full font-semibold aspect-square flex justify-center items-center bg-green-200 border border-green-400">
                Full
              </div>
            </div>
          </div>
          <hr />
          <div className="py-8 flex gap-4">
            <button>5</button>
            <button className="bg-yellow-500 px-8 py-4 rounded-2xl text-white font-semibold  text-2xl">
              Add to Cart
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductFullView;
