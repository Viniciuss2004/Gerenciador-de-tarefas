export interface Task {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
}

export type ToastType = "success" | "error";

export interface ToastMessage {
  type: ToastType;
  text: string;
}
