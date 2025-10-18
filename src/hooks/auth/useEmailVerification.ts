import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { verifyEmail, resendVerification } from "@/services/authService";
import { ensureCsrfCookie } from "@/lib/csrf";
import { APP_ROUTES } from "@/constants/appRoutes";
import { HTTP_STATUS } from "@/constants/httpStatus";

type Status = "welcome" | "loading" | "success" | "error" | "already-verified";

export const useEmailVerification = () => {
    const [status, setStatus] = useState<Status>("welcome");
    const [message, setMessage] = useState<string>("");
    const [isResending, setIsResending] = useState(false);

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    useEffect(() => {
        const redirect = searchParams.get("redirect");
        if (!redirect) {
            setStatus("welcome");
            return;
        }

        const doVerify = async () => {
            setStatus("loading");
            setMessage("");
            try {
                await verifyEmail(redirect);
                setStatus("success");
                setMessage("Your email has been verified.");
                setTimeout(() => navigate(APP_ROUTES.ROOT), 1500);
            } catch (err: any) {
                const status = err?.response?.status;
                const msg =
                    status === HTTP_STATUS.TOO_MANY_REQUESTS
                        ? "Too many requests. Please try again later."
                        : "This verification link is invalid or could not be verified.";
                setMessage(msg);
                setStatus("error");
            }
        };

        doVerify();
    }, [searchParams, navigate]);

    const handleResend = async () => {
        setMessage("");
        setIsResending(true);
        try {
            await ensureCsrfCookie();
            const response = await resendVerification();
            const statusCode = response?.status ?? HTTP_STATUS.OK;

            if (statusCode === HTTP_STATUS.ACCEPTED) {
                setMessage("A fresh verification link has been sent to your email.");
                setStatus("welcome");
            } else if (statusCode === HTTP_STATUS.NO_CONTENT) {
                setMessage("Your email address is already verified.");
                setStatus("already-verified");
            }
        } catch (err: any) {
            const status = err?.response?.status;
            const msg =
                status === HTTP_STATUS.TOO_MANY_REQUESTS
                    ? "Too many requests. Please try again later."
                    : "Failed to resend verification email.";
            setMessage(msg);
        } finally {
            setIsResending(false);
        }
    };

    return { status, message, isResending, handleResend };
};
