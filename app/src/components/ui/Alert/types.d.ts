export interface Alert {
  closeBtn: boolean;
  closeOnEsc: boolean;
  closeOnClickOutside: boolean;
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  onClose: () => void;
  onOpen: () => void;
}

type AlertButton = {
  label: string
  action: () => void
}
