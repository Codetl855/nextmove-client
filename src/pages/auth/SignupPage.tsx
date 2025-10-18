import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "@/layouts/AuthLayout";
import SignupForm from "@/components/forms/Auth/SignupForm";
import { signupSchema, SignupFormData } from "@/validation/auth/signupSchema";
import { useSignup } from "@/hooks/auth/useSignup";
import { APP_ROUTES } from "@/constants/appRoutes";
import { redirectTimeout } from "@/helpers/appHelpers";

function SignupPage() {
    const navigate = useNavigate();
    const { handleSignup, isSubmitting, error } = useSignup();

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<SignupFormData>({
        resolver: yupResolver(signupSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            password: "",
            confirmPassword: "",
            agreeTerms: false,
        },
    });

    const formData = watch();

    const onFormDataChange = (data: SignupFormData) => {
        (Object.keys(data) as (keyof SignupFormData)[]).forEach((key) => {
            setValue(key, data[key], { shouldValidate: true });
        });
    };

    const onSubmit = async (data: SignupFormData) => {
        try {
            await handleSignup({
                first_name: data.firstName,
                last_name: data.lastName,
                email: data.email,
                mobile: data.mobile,
                password: data.password,
                password_confirmation: data.confirmPassword,
            });

            redirectTimeout(navigate, APP_ROUTES.AUTH.VERIFY_EMAIL, 1500);
        } catch (err) {
            console.error("Signup failed:", err);
        }
    };

    return (
        <AuthLayout>
            <SignupForm
                formData={formData}
                onFormDataChange={onFormDataChange}
                onSubmit={handleSubmit(onSubmit)}
                onSigninClick={() => navigate(APP_ROUTES.AUTH.SIGNIN)}
                isSubmitting={isSubmitting}
                errors={Object.fromEntries(
                    Object.entries(errors).map(([key, val]) => [key, val?.message])
                )}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </AuthLayout>
    );
}

export default SignupPage;