import { Toaster } from "react-hot-toast";

export function ToastProvider() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        success: {
          style: { background: "#4caf50", color: "#fff" },
        },
        error: {
          style: { background: "#f44336", color: "#fff" },
        },
      }}
    />
  );
}
