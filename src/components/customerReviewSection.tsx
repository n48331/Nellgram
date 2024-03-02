import { FunctionComponent } from "react";
import ReviewCard from "./review";

interface CustomerReviewProps {}

const CustomerReview: FunctionComponent<CustomerReviewProps> = () => {
  return (
    <section
      className=" flex flex-col justify-around items-center px-16 pb-28"
      id="review"
    >
      <h4 className="font-semibold text-4xl">From our Customer</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center  mt-8">
        <ReviewCard name={'Ameen'} rating={5} date="Jan 16, 2024"/>
        <ReviewCard name={'M Nabeel'} rating={4} date="Dec 28, 2023"/>
      </div>
      <div className=" mt-8">
        <button className="bg-slate-500 p-2 ml-1 hover:p-3 hover:bg-slate-800 cursor-pointer rounded-full">
          {" "}
        </button>
        <button className="bg-slate-500 p-2 ml-1 rounded-full cursor-pointer hover:p-3 hover:bg-slate-800 ">
          {" "}
        </button>
        <button className="bg-slate-800 p-3 ml-1 rounded-full cursor-pointer hover:p-3 hover:bg-slate-800 ">
          {" "}
        </button>
        <button className="bg-slate-500 p-2 ml-1 rounded-full cursor-pointer hover:p-3 hover:bg-slate-800 ">
          {" "}
        </button>
        <button className="bg-slate-500 p-2 ml-1 rounded-full cursor-pointer hover:p-3 hover:bg-slate-800 ">
          {" "}
        </button>
      </div>
    </section>
  );
};

export default CustomerReview;
