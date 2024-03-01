interface SubscribeProps {
  subscribed: boolean;
}

function Subscribe({ subscribed }: SubscribeProps) {
  return (
    <div className="px-7 py-10 lg:px-14 lg:py-20">
      <div className="bg-[#FEC123] rounded-xl p-7 lg:p-12">
        <div>
          {subscribed ? (
            <h2 className="text-2xl lg:text-4xl font-bold text-[#434343]">
              Still Not Subscribe to Planet Tech Newsletter
            </h2>
          ) : (
            <h2 className="text-2xl lg:text-4xl font-bold text-[#434343]">
              Subscribe to Planet Tech Newsletter
            </h2>
          )}
          <p className="md:text-xl lg:text-2xl text-[#434343] mt-1">
            Receive news & insights, as well as event invitation and many more
            directly to your inbox
          </p>
        </div>
        <div className="mt-4 lg:mt-8">
          <div className="mx-auto lg:mt-8 w-[70%]">
            <label className="text-[#434343] ">Enter email address</label>
            <div className="bg-white flex justify-between items-center rounded-md p-3 mt-1">
              <input
                className="outline-none px-3 w-[75%]"
                type="email"
                placeholder="johndoe@gmail.com..."
              />
              <button className="bg-[#373656] text-white px-5 py-2 lg:px-8 lg:py-3 rounded-md hover:bg-[#181725] transition-all delay-150 ease-in-out">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <p className="text-[#434343] mt-4 lg:mt-8 md:text-xl lg:text-2xl text-center">
          By clicking subscribe you are agreeing to receive communication from
          Planet tech and agreeing to agreeing to our{" "}
          <a className="text-[#0116D4] font-bold" href="/">
            Terms of use
          </a>{" "}
          and{" "}
          <a className="text-[#0116D4] font-bold" href="/">
            Privacy policy
          </a>
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
