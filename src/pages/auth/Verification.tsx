
import bgImage from "@/assets/img/signin-bg.png"
import logo from "@/assets/img/logo.png";
import { useNavigate } from "react-router-dom";
import { APP_ROUTES } from "@/constants/appRoutes";
function Verification() {

    const navigate = useNavigate()
    return (
        <div
            className="h-full w-full relative bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm">
                {/* Logo */}
                <div className="flex justify-center mb-6">
                    <img src={logo} alt="Logo" className="h-14" />
                </div>

                <h2 className="text-2xl text-center">Verification Code</h2>
                <form className="mt-2">
                    <p className="text-xs text-center text-[#949494]">Please  enter the verification code you recieved</p>
                    <div className="w-full flex justify-between mt-2">
                        <input
                            type="number"
                            maxLength={1}
                            className="h-14 w-14 text-center text-2xl font-semibold border rounded-md border-[#E9EEF3] focus:outline-none focus:ring-2 focus:ring-aztec"
                        />
                        <input
                            type="number"
                            maxLength={1}
                            className="h-14 w-14 text-center text-2xl font-semibold border rounded-md border-[#E9EEF3] focus:outline-none focus:ring-2 focus:ring-aztec"
                        />
                        <input
                            type="number"
                            maxLength={1}
                            className="h-14 w-14 text-center text-2xl font-semibold border rounded-md border-[#E9EEF3] focus:outline-none focus:ring-2 focus:ring-aztec"
                        />
                        <input
                            type="number"
                            maxLength={1}
                            className="h-14 w-14 text-center text-2xl font-semibold border rounded-md border-[#E9EEF3] focus:outline-none focus:ring-2 focus:ring-aztec"
                        />
                        <input
                            type="number"
                            maxLength={1}
                            className="h-14 w-14 text-center text-2xl font-semibold border rounded-md border-[#E9EEF3] focus:outline-none focus:ring-2 focus:ring-aztec"
                        />

                    </div>
                    <p className="text-xs text-center text-[#949494] my-1">Code is valid for 5 minutes or 3 attemts</p>

                    <button className="h-11 w-32 rounded-2xl bg-[#F4F4F4] block mx-auto my-5 text-aztec">Resend Code</button>
                    <button className="w-full bg-aztec text-white py-2 rounded-lg cursor-pointer transition">
                        Submit
                    </button>
                    <button
                        onClick={() => navigate(APP_ROUTES.AUTH.SIGNIN)}
                        className="text-aztec hover:underline block mx-auto mt-5 text-sm cursor-pointer">
                        Back to login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Verification;