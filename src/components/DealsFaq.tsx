import { useState } from "react";
import iPhone from "../assets/iPhone.png";
import earbuds from "../assets/Earpod.jpg";
import airpods from "../assets/Airpod.png";
import { faqs } from "../data/Faq";

function DealsFaq() {
  const [showFaqAnswers, setShowFaqAnswers] = useState<number>();

  const handleShowFaqAnswers = (index: number) => {
    if (showFaqAnswers === index) {
      setShowFaqAnswers(-1);
      return;
    }
    setShowFaqAnswers(index);
  };

  return (
    <div className="mt-[600px] lg:mt-44 mb-24 px-10">
      <div className="flex flex-col items-center mb-36 text-center lg:text-justify">
        <h1 className="text-xl lg:text-[48px] font-bold text-[#434343] mb-24 text-center">
          Hottest tech deals for you today!
        </h1>
        <div className="flex items-center">
          <img
            className="w-[100px] h-[100px] lg:w-auto lg:h-auto"
            src={earbuds}
            alt=""
          />
          <img
            className="w-[200px] h-[200px] lg:w-auto lg:h-auto"
            src={iPhone}
            alt=""
          />
          <img
            className="w-[100px] h-[100px] lg:w-auto lg:h-auto"
            src={airpods}
            alt=""
          />
        </div>
        <p className="lg:text-2xl text-[#434343] px-5 lg:px-20 mt-4">
          Check out premium deals in our community on all tech related
          resources, including gadgets, software, accessories and many other
          exiciting packages all at te lowest prices you can find anywhere else.
        </p>
        <button className="bg-[#0066ff] lg:text-2xl rounded-lg font-bold text-white px-10 py-3 mt-10 hover:bg-[#0116da] transition-all delay-150 ease-in-out">
          Start shopping
        </button>
      </div>
      <div>
        <h1 className="text-center text-2xl lg:text-[48px] font-bold text-[#434343] mb-14">
          FAQ
        </h1>
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            onClick={() => handleShowFaqAnswers(index)}
            className="border-2 border-solid mt-5 mb-5 border-[#919191] rounded-md p-5 lg:p-8 cursor-pointer hover:text-[#4c5a6f] hover:border-black transition-all delay-150 ease-in-out"
          >
            <div className="flex justify-between gap-14 items-center">
              <p className="text-xl lg:text-2xl font-semibold">
                {faq.question}
              </p>
              {showFaqAnswers === index ? (
                <span className="text-2xl lg:text-3xl">-</span>
              ) : (
                <span className="text-2xl lg:text-3xl">+</span>
              )}
            </div>
            {showFaqAnswers === index && (
              <div className="mt-5 border-2 rounded-xl p-3">
                <p className="text-xl lg:text-2xl">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
        <p>
          If you need further information,{" "}
          <a className="text-[#0066ff] font-bold" href="/">
            please contact us.
          </a>
        </p>
      </div>
    </div>
  );
}

export default DealsFaq;
