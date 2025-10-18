import AuthLayout from "@/layouts/AuthLayout";
import PrimaryButton from "@/components/ui/Buttons/extensions/PrimaryButton";
import { useEmailVerification } from "@/hooks/auth/useEmailVerification";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useNavigate } from "react-router-dom";

export default function EmailVerificationPage() {
    const { status, message, isResending, handleResend } = useEmailVerification();
    const navigate = useNavigate();

    return (
        <AuthLayout>
            <div className="max-w-md mx-auto py-12 px-4">
                {status === "welcome" && (
                    <div className="space-y-4 text-center">
                        <h1 className="text-2xl font-semibold">Verify your email</h1>
                        <p className="text-sm text-gray-600">
                            We sent a verification link to your email. Please check your inbox and click the link to verify.
                        </p>

                        <div className="flex flex-col gap-3 items-center">
                            <PrimaryButton onClick={handleResend} disabled={isResending}>
                                {isResending ? "Sending..." : "Resend verification email"}
                            </PrimaryButton>

                            {message && <p className="text-sm text-gray-600">{message}</p>}
                        </div>
                    </div>
                )}

                {status === "already-verified" && (
                    <div className="text-center">
                        <h2 className="text-blue-600 font-medium">Already verified</h2>
                        <p className="text-sm text-gray-700">{message}</p>
                        <div className="mt-4">
                            <PrimaryButton onClick={() => navigate(APP_ROUTES.ROOT)}>
                                Go to dashboard
                            </PrimaryButton>
                        </div>
                    </div>
                )}

                {status === "loading" && <p className="text-center">Verifying your email…</p>}

                {status === "success" && (
                    <div className="text-center">
                        <h2 className="text-green-600 font-medium">Your email has been verified</h2>
                    </div>
                )}

                {status === "error" && (
                    <div className="text-center space-y-4">
                        <h2 className="text-red-600 font-medium">Verification failed</h2>
                        <p className="text-sm text-gray-700">{message}</p>

                        <div className="flex items-center justify-center gap-4">
                            <PrimaryButton onClick={handleResend} disabled={isResending}>
                                {isResending ? "Sending..." : "Request new link"}
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </div>
        </AuthLayout>
    );
}