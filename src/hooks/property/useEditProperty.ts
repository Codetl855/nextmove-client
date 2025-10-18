import { useState, useEffect, useRef } from "react";
import { showProperty, updateProperty, CreatePropertyPayload } from "@/services/propertyService";
import { showError, showSuccess } from "@/lib/toast";
import { HTTP_STATUS } from "@/constants/httpStatus";
import { APP_ROUTES } from "@/constants/appRoutes";
import { useNavigate } from "react-router-dom";

export const useEditProperty = (id: number | string) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [property, setProperty] = useState<CreatePropertyPayload | null>(null);
	const [errors, setErrors] = useState<Partial<Record<keyof CreatePropertyPayload, string>>>({});
	const navigate = useNavigate();

		const hasFetched = useRef(false);
		useEffect(() => {
			if (hasFetched.current) return;
			hasFetched.current = true;
			const fetchProperty = async () => {
				setIsLoading(true);
				try {
					const data = await showProperty(id);
                    console.log(data.data.data.ameneties.amenity_names);
					setProperty(data.data.data);
				} catch (err: any) {
					showError("Failed to fetch property");
				} finally {
					setIsLoading(false);
				}
			};
			if (id) fetchProperty();
		}, [id]);

	const handleEditProperty = async (payload: Partial<CreatePropertyPayload>) => {
		setIsSubmitting(true);
		setErrors({});
		try {
			const res = await updateProperty(id, payload);
			showSuccess(res?.message || "Property updated successfully!");
			// navigate(APP_ROUTES.USER.DASHBOARD);
		} catch (err: any) {
			const status = err.response?.status;
			if (status === HTTP_STATUS.UNPROCESSABLE_ENTITY) {
				setErrors(err.response?.data?.errors || {});
			} else {
				const message =
					status === HTTP_STATUS.SERVER_ERROR
						? "500 | Server error"
						: err.response?.data?.message || "Something went wrong";
				showError(message);
			}
			throw err;
		} finally {
			setIsSubmitting(false);
		}
	};

	return { property, isLoading, handleEditProperty, isSubmitting, errors };
};