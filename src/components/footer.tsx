import Link from "next/link";
import { FunctionComponent } from "react";

interface FooterProps { }

const Footer: FunctionComponent<FooterProps> = () => {
  return (
    <footer
      className="w-full min-h-[276px] bg-black text-white "
      id="footer"
      style={{ background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(/image/footer.png)', backgroundSize: 'cover' }}

    >

      <div className="w-full h-full my-8 flex flex-col md:flex-row px-16 justify-between gap-6 ">
        <div className="flex flex-col w-full md:w-[50%]" id="contact">
          <div className="flex flex-col gap-6 text-lg font-medium">
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </div>
              <p className="text-wrap text-lg font-normal" style={{textDecoration:'none'}}>+971 54 369 4706</p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <p className="text-wrap text-lg font-normal" style={{textDecoration:'none'}}>
                info@nellgram.com
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              <p className="text-wrap text-lg font-normal">
                Jinan Alshams F&B Trading Co. L. L. C Dubai
              </p>
            </div>
            <div className="flex gap-2 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </div>
              <p className="text-wrap text-lg font-normal">
                www.nellgram.com
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full  md:w-[50%]">
          <h4 className="text-xl">Links</h4>
          <div className="h-full mt-5 flex gap-4 font-extralight text-sm sm:text-lg">
            <Link href={"/"}>Home</Link>
            <Link href={"/#about"}>About</Link>
            <Link href={"/quality"}>Quality</Link>
            <Link href={"/#products"}>Products</Link>
          </div>
        </div>
      </div>
      <div className="text-right text-xs p-2">© {new Date().getFullYear()} All Rights Reserved. Designed & Coded with ❤️️ by <a target="_blank" href="https://www.ameenkoya.in/">ameenkoya.in</a> & <a target="_blank" href="https://www.mnabeel.in/">mnabeel.in</a></div>
    </footer>
  );
};

export default Footer;
