import figmaCommunity from "../assets/FigmaCommunity.png";

function Spotlight() {
  return (
    <div className="">
      <h1 className="text-[#434343] text-xl md:text-2xl lg:text-3xl font-bold mb-6 md:mb-8 px-6">
        In the spotlight:
      </h1>
      <div className="bg-[#EBEBEB] px-4 py-8">
        <div className="bg-white rounded-3xl p-6">
          <img src={figmaCommunity} alt="" />
          <p className="text-[#434343] lg:text-xl px-7 pt-8 pb-2 lg:px-12">
            Designers in planet tech check out these cool new free iphone 15 pro
            max mockups available to our premium members. find out how to get a{" "}
            <a
              className="text-[#0066FF] font-semibold hover:font-bold transition-all delay-150 ease-in-out"
              href="/"
            >
              Premium account today{" "}
              <svg
                className="inline-block"
                width="17"
                height="19"
                viewBox="0 0 24 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.5 3.1383C4.12 3.1383 3 4.30993 3 5.75355V19.3529C3 20.7965 4.12 21.9681 5.5 21.9681H18.5C19.88 21.9681 21 20.7965 21 19.3529V16.2146C21 15.7984 21.158 15.3993 21.4393 15.105C21.7206 14.8107 22.1022 14.6454 22.5 14.6454C22.8978 14.6454 23.2794 14.8107 23.5607 15.105C23.842 15.3993 24 15.7984 24 16.2146V19.3529C24 20.8788 23.4205 22.3422 22.3891 23.4212C21.3576 24.5002 19.9587 25.1064 18.5 25.1064H5.5C4.04131 25.1064 2.64236 24.5002 1.61091 23.4212C0.579463 22.3422 0 20.8788 0 19.3529V5.75355C0 4.22761 0.579463 2.76418 1.61091 1.68518C2.64236 0.606176 4.04131 0 5.5 0H8.5C8.89782 8.77001e-09 9.27936 0.165321 9.56066 0.459593C9.84196 0.753866 10 1.15299 10 1.56915C10 1.98531 9.84196 2.38443 9.56066 2.67871C9.27936 2.97298 8.89782 3.1383 8.5 3.1383H5.5ZM12 1.56915C12 1.15299 12.158 0.753866 12.4393 0.459593C12.7206 0.165321 13.1022 0 13.5 0H22.5C22.8978 0 23.2794 0.165321 23.5607 0.459593C23.842 0.753866 24 1.15299 24 1.56915V10.9841C24 11.4002 23.842 11.7993 23.5607 12.0936C23.2794 12.3879 22.8978 12.5532 22.5 12.5532C22.1022 12.5532 21.7206 12.3879 21.4393 12.0936C21.158 11.7993 21 11.4002 21 10.9841V5.35813L14.56 12.095C14.4216 12.2448 14.256 12.3643 14.0729 12.4464C13.8899 12.5286 13.6931 12.5717 13.4939 12.5735C13.2947 12.5752 13.0972 12.5354 12.9129 12.4564C12.7286 12.3774 12.5612 12.2608 12.4204 12.1134C12.2796 11.966 12.1683 11.7907 12.093 11.5979C12.0177 11.405 11.9798 11.1983 11.9816 10.99C11.9835 10.7816 12.0249 10.5758 12.1036 10.3844C12.1823 10.193 12.2967 10.0199 12.44 9.87519L18.88 3.1383H13.5C13.1022 3.1383 12.7206 2.97298 12.4393 2.67871C12.158 2.38443 12 1.98531 12 1.56915Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Spotlight;