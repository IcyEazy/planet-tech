import { useState } from "react";
import Form from "./Form";

function SignUpLogin() {
  const [isSignUp, setIsSignUp] = useState(true);
  const [isLogIn, setIsLogIn] = useState(false);
  const [signWithEmail, setSignWithEmail] = useState(false);

  return (
    <div className="mb-20">
      <div className="md:pt-12 gap-3 flex justify-between items-center px-28 md:px-12">
        <p
          style={{
            color: `${isSignUp ? "#0116D4" : "#888888"}`,
            fontWeight: `${isSignUp ? "bold" : "500"}`,
          }}
          onClick={() => {
            if (isSignUp || signWithEmail) {
              setSignWithEmail(false);
              setIsLogIn(false);
            }
            setIsSignUp(true);
            setIsLogIn(false);
          }}
          className="text-xl md:text-2xl lg:text-3xl cursor-pointer hover:text-[#0066FF]"
        >
          <span className="hover:text-[#21275f] hover:font-bold transition-all delay-150 ease-in-out">
            Sign up
          </span>
        </p>
        <p
          style={{
            color: `${isLogIn ? "#0116D4" : "#888888"}`,
            fontWeight: `${isLogIn ? "bold" : "500"}`,
          }}
          onClick={() => {
            if (isLogIn) return;
            setIsLogIn(!isLogIn);
            setIsSignUp(!isSignUp);
          }}
          className="text-xl md:text-2xl lg:text-3xl cursor-pointer"
        >
          <span className="hover:text-[#21275f] hover:font-bold transition-all delay-150 ease-in-out">
            Log in
          </span>
        </p>
      </div>
      <div className="flex mt-1 md:mt-2 ">
        <div
          style={{ backgroundColor: `${isSignUp ? "#0116D4" : "#888888"}` }}
          className="w-full h-[3px]"
        />
        <div
          style={{ backgroundColor: `${isLogIn ? "#0116D4" : "#888888"}` }}
          className="w-full h-[3px]"
        />
      </div>
      {isSignUp && !signWithEmail && (
        <div className="flex flex-col gap-8 items-center justify-center mt-8">
          <button
            onClick={() => setSignWithEmail(true)}
            className="lg:text-xl font-semibold text-[#333E49] border-2 border-[#D4D4D4] rounded-md px-6 py-3 w-[90%] hover:text-white hover:bg-[#919191] hover:border-[#919191] transition-all delay-150 ease-in-out"
          >
            Sign up with email
          </button>
          <div className="flex justify-between items-center w-full gap-4 mt-1 mb-6">
            <hr className="w-full h-0.5 bg-[#888888]" />
            <p className="text-[#333E49] font-bold">OR</p>
            <hr className="w-full h-0.5 bg-[#888888]" />
          </div>
          <button
            onClick={() => setSignWithEmail(false)}
            className="flex items-center gap-3 justify-center lg:text-xl font-semibold text-[#333E49] border-2 border-[#D4D4D4] rounded-md px-6 py-3 w-[90%] hover:text-white hover:bg-[#919191] hover:border-[#919191] transition-all delay-150 ease-in-out"
          >
            <svg
              width="26"
              height="26"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.9375 10.5C17.9794 10.4967 17.0301 10.6824 16.1439 11.0463C15.2577 11.4103 14.4519 11.9455 13.7727 12.6212C13.0935 13.2969 12.5542 14.0999 12.1857 14.9842C11.8172 15.8686 11.6266 16.8169 11.625 17.775V25.125C11.625 25.4234 11.7435 25.7095 11.9545 25.9205C12.1655 26.1315 12.4516 26.25 12.75 26.25H15.375C15.6734 26.25 15.9595 26.1315 16.1705 25.9205C16.3815 25.7095 16.5 25.4234 16.5 25.125V17.775C16.4998 17.4342 16.5713 17.0973 16.71 16.786C16.8488 16.4748 17.0515 16.1963 17.3051 15.9687C17.5586 15.7411 17.8573 15.5694 18.1817 15.465C18.506 15.3605 18.8488 15.3256 19.1875 15.3625C19.795 15.439 20.3533 15.7358 20.7565 16.1966C21.1597 16.6574 21.3798 17.2502 21.375 17.8625V25.125C21.375 25.4234 21.4935 25.7095 21.7045 25.9205C21.9155 26.1315 22.2016 26.25 22.5 26.25H25.125C25.4234 26.25 25.7095 26.1315 25.9205 25.9205C26.1315 25.7095 26.25 25.4234 26.25 25.125V17.775C26.2484 16.8169 26.0578 15.8686 25.6893 14.9842C25.3208 14.0999 24.7815 13.2969 24.1023 12.6212C23.4231 11.9455 22.6173 11.4103 21.7311 11.0463C20.8449 10.6824 19.8956 10.4967 18.9375 10.5Z"
                fill="#333E49"
              />
              <path
                d="M8.25 11.625H4.875C4.25368 11.625 3.75 12.1287 3.75 12.75V25.125C3.75 25.7463 4.25368 26.25 4.875 26.25H8.25C8.87132 26.25 9.375 25.7463 9.375 25.125V12.75C9.375 12.1287 8.87132 11.625 8.25 11.625Z"
                fill="#333E49"
              />
              <path
                d="M6.5625 9.375C8.1158 9.375 9.375 8.1158 9.375 6.5625C9.375 5.0092 8.1158 3.75 6.5625 3.75C5.0092 3.75 3.75 5.0092 3.75 6.5625C3.75 8.1158 5.0092 9.375 6.5625 9.375Z"
                fill="#333E49"
              />
            </svg>{" "}
            <span>Sign up with LinkedIn</span>
          </button>
          <button
            onClick={() => setSignWithEmail(false)}
            className="flex items-center gap-3 justify-center lg:text-xl font-semibold text-[#333E49] border-2 border-[#D4D4D4] rounded-md px-6 py-3 w-[90%] hover:text-white hover:bg-[#919191] hover:border-[#919191] transition-all delay-150 ease-in-out"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_27_1716)">
                <path
                  d="M23.3175 9.83723C23.4576 10.6426 23.5273 11.4587 23.526 12.2762C23.526 15.9272 22.221 19.0142 19.95 21.1037H19.953C17.967 22.9382 15.237 24.0002 12 24.0002C8.8174 24.0002 5.76516 22.7359 3.51472 20.4855C1.26428 18.2351 0 15.1828 0 12.0002C0 8.81763 1.26428 5.76538 3.51472 3.51495C5.76516 1.26451 8.8174 0.000228723 12 0.000228723C14.9786 -0.0329422 17.8548 1.08595 20.028 3.12323L16.602 6.54923C15.3633 5.36911 13.7107 4.7227 12 4.74923C8.8695 4.74923 6.21 6.86123 5.262 9.70523C4.76024 11.1956 4.76024 12.8093 5.262 14.2997H5.2665C6.219 17.1392 8.874 19.2512 12.0045 19.2512C13.6215 19.2512 15.0105 18.8372 16.0875 18.1052H16.083C16.7085 17.6911 17.2435 17.1544 17.6558 16.5276C18.068 15.9009 18.3489 15.1971 18.4815 14.4587H12V9.83873L23.3175 9.83723Z"
                  fill="#333E49"
                />
              </g>
              <defs>
                <clipPath id="clip0_27_1716">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>{" "}
            <span>Sign up with Google</span>
          </button>
        </div>
      )}
      <Form
        isSignUp={isSignUp}
        isLogIn={isLogIn}
        signWithEmail={signWithEmail}
        setSignWithEmail={setSignWithEmail}
      />
    </div>
  );
}

export default SignUpLogin;
