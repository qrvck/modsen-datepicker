interface IButton {
  label: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export type { IButton };
