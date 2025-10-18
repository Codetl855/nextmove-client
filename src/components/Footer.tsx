import logo_lg from '../assets/logo-lg.png';
import Image from './ui/Images/Image';
function Footer() {
  return (<>
    <div className="bg-[#161616] border-b border-[#393939] text-white">
      <div
        className="mx-auto items-center p-6 max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <div>
          <Image
            src={logo_lg}
            alt="Logo"
            className="h-[62px] mx-auto md:mx-0 mt-10 md:mt-0"
          />
        </div>
        <div
          className="flex gap-3 items-center justify-center md:justify-end mt-10 md:mt-0"
        >
          <span className="text-md">Follow Us:</span>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[ri--facebook-fill] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[ic--twotone-tiktok] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[ri--linkedin-fill] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[entypo-social--pinterest] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[entypo-social--behance] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[streamline-flex--dribble] m-auto text-lg text-white'></span>
          </a>
          <a
            href="#"
            className="text-white underline flex size-[30px] rounded-full bg-[#393939]"
          >
            <span className='icon-[prime--twitter] m-auto text-lg text-white'></span>
          </a>
        </div>
      </div>
    </div>
    <footer className="bg-[#161616] text-white">
      <div className="mx-auto px-6 py-6 max-w-7xl">
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-b border-[#393939] gap-10 pb-10"
        >
          <div>
            <p className="text-sm text-white">
              Specializes in providing high-class tours for those in need.
              Contact Us
            </p>
            <div className="mt-6 space-y-5 text-sm text-[#949494]">
              <div className="flex items-center gap-3">
                <div
                  className="text-white underline flex size-[30px] rounded-full bg-aztec"
                >
                  <span className="icon-[solar--phone-linear] m-auto text-lg text-white"></span>
                </div>
                <span>1-333-345-6868</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-white underline flex size-[30px] rounded-full bg-aztec"
                >
                  <span className="icon-[uil--at] m-auto text-lg text-white"></span>
                </div>
                <span>info@nextmove.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div
                  className="text-white underline flex size-[30px] rounded-full bg-aztec"
                >
                  <span className="icon-[fluent--location-16-regular] m-auto text-lg text-white"></span>
                </div>
                <span>101 E 129th St, East Chicago, IN 46312, US</span>
              </div>
            </div>
          </div>
          <div className="ml-0 md:ml-15">
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-5 text-sm text-[#949494]">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Pricing Plans</a></li>
              <li><a href="#">Help & Support</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <ul className="space-y-5 text-sm text-[#949494]">
              <li><a href="#">Property For Sale</a></li>
              <li><a href="#">Property For Rent</a></li>
              <li><a href="#">Property For Buy</a></li>
              <li><a href="#">Real State Agents</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <div className="space-y-5 text-sm text-[#949494]">
              <div>Your Weekly/Monthly Dose of Knowledge and Inspiration</div>
              <div>
                <div
                  className="form-group rounded-lg flex p-2 justify-between bg-[#393939]"
                >
                  <input
                    type="email"
                    className="w-full outline-none ml-2 bg-transparent border-0 text-white placeholder-gray-400 focus:ring-0"
                    placeholder="Enter your email"
                  />
                  <button className="bg-aztec text-white px-4 py-2 rounded-lg">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-[#949494]"
        >
          <div className="mb-4 md:mb-0">
            All rights reserved. NEXTMOVE © 2025
          </div>
          <div className="flex gap-2">
            <a href="#">Terms of Use</a>
            <span>|</span>
            <a href="#" >Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </>);
}

export default Footer;