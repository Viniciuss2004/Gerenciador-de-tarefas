import { useCallback, useRef, useState } from "react";
import type { ToastMessage, ToastType } from "../types.ts";

const TOAST_DURATION_MS = 3000;

export function useToast() {
  const [toast, setToast] = useState<ToastMessage | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const showToast = useCallback((type: ToastType, text: string) => {
    clearTimeout(timeoutRef.current);
    setToast({ type, text });
    timeoutRef.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  }, []);

  return { toast, showToast };
}
