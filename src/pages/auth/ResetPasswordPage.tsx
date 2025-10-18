import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import AuthLayout from "@/layouts/AuthLayout";
import ResetPasswordForm, { ResetPasswordFormData } from "@/components/forms/Auth/ResetPasswordForm";
import { resetPasswordSchema } from "@/validation/auth/resetPasswordSchema";
import { useResetPassword } from "@/hooks/auth/useResetPassword";
import { APP_ROUTES } from "@/constants/appRoutes";

function ResetPasswordPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const { handleResetPassword, isSubmitting, error } = useResetPassword();

    const email = searchParams.get("email") || "";
    const token = searchParams.get("token") || "";

    const {
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm<ResetPasswordFormData>({
        resolver: yupResolver(resetPasswordSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const formData = watch();

    const onFormDataChange = (data: ResetPasswordFormData) => {
        (Object.keys(data) as (keyof ResetPasswordFormData)[]).forEach((key) => {
            setValue(key, data[key], { shouldValidate: true });
        });
    };

    const onSubmit = async (data: ResetPasswordFormData) => {
        const success = await handleResetPassword({
            email,
            token,
            password: data.password,
            password_confirmation: data.confirmPassword,
        });
        if (success) {
            navigate(APP_ROUTES.AUTH.SIGNIN);
        }
    };

    return (
        <AuthLayout>
            <h1 className="text-xl font-bold mb-4">Reset Your Password</h1>
            <ResetPasswordForm
                formData={formData}
                onFormDataChange={onFormDataChange}
                onSubmit={handleSubmit(onSubmit)}
                isSubmitting={isSubmitting}
                errors={Object.fromEntries(
                    Object.entries(errors).map(([key, val]) => [key, val?.message])
                )}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </AuthLayout>
    );
}

export default ResetPasswordPage;