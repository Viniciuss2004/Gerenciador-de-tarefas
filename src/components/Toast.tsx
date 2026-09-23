import {CheckCircleIcon, XCircleIcon} from "lucide-react";
import type {ToastMessage} from "../types.ts";

interface ToastProps {
  toast: ToastMessage;
}

const STYLES_BY_TYPE = {
  success: "bg-green-600",
  error: "bg-red-600",
};

function Toast({ toast }: ToastProps) {
  const Icon = toast.type === "success" ? CheckCircleIcon : XCircleIcon;

  return (
    <div
      className={`fixed top-6 right-6 flex items-center gap-2 text-white px-4 py-3 rounded-md shadow-lg ${STYLES_BY_TYPE[toast.type]}`}
    >
      <Icon size={20} />
      <span>{toast.text}</span>
    </div>
  );
}

export default Toast;
