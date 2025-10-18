import qr from '@/assets/mobile-app/qr.png';
import googlePlayStore from '@/assets/mobile-app/play-store.png';
import appleStore from '@/assets/mobile-app/app-store.png';
import mobileAppImg from '@/assets/mobile-app/mobile-screen.png';
import Image from '@/components/ui/Images/Image';

function MobileApp(){
    return (
        
        <div className="bg-aztec-light rounded-3xl mt-20 p-6 md:p-10 relative">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-2 text-aztec">
              Get The Mobile App
            </h2>
            <p className="text-gray-400 text-base" >
              Skills That You Can Learn In The Real Estate Market
            </p>
            <div className="flex mt-3 gap-4 items-start">
              <div className="text-sm">Scan the QR code <br />to get the app</div>
              <div>
                <Image
                  src={qr}
                  alt="App Store"
                  className="h-18"
                />
              </div>
            </div>
            <div className="flex mt-3">
              <a href="#" className="mr-4">
                <Image
                  src={appleStore}
                  alt="App Store"
                  className="h-8 rounded-md"
                />
              </a>
              <a href="#">
                <Image
                  src={googlePlayStore}
                  alt="Google Play"
                  className="h-8 rounded-md"
                />
              </a>
            </div>
          </div>
          <Image
            className="absolute right-0 xl:right-20 lg:right-10 top-10 lg:top-[-10px] lg:w-150 md:w-100 -rotate-5 hidden md:block"
            src={mobileAppImg}
            alt="App Store"
          />
        </div>
    );
};

export default MobileApp;