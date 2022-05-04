export interface Modal {
  closeBtn: boolean;
  closeOnEsc: boolean;
  closeOnClickOutside: boolean;
  title: string;
  content: React.ReactNode;
  footer: React.ReactNode;
  onClose: () => void;
  onOpen: () => void;
}

type ModalButton = {
  label: string
  action: () => void
}
