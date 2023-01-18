export interface ButtonType {
  title: string;
  value?: string;
  onClick?: () => void;
  isDisabled?: boolean;
}