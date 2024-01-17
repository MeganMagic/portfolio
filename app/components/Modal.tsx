import { X } from "react-feather";
import { RemoveScroll } from "react-remove-scroll";

import { AnimatePresence, motion } from "framer-motion";

export interface OverlayProps {
  isOpen: boolean;
  close: () => void;
}

interface ModalProps extends React.PropsWithChildren, OverlayProps {}

const Modal = ({ isOpen, close, children }: ModalProps) => {
  // use OnClick Outside

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <>
          <motion.div
            id="modal-overlay"
            className="w-screen h-screen bg-black/30 fixed top-0 left-0 z-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
          />

          <div
            id="modal-container"
            className="
              w-screen h-screen fixed top-0 left-0 z-modal-content
              flex justify-center items-start"
          >
            <RemoveScroll>
              <motion.div
                id="modal-transition"
                initial={{ opacity: 0, translateY: 20, scale: 0.95 }}
                animate={{ opacity: 1, translateY: 0, scale: 1 }}
                exit={{ opacity: 0, translateY: 20, scale: 0.9 }}
                transition={{ duration: 0.2, damping: 0, ease: "easeOut" }}
              >
                <div
                  id="modal-content"
                  className="
                    w-96 md:w-[512px] max-h-[calc(100vh_-_6rem)] my-12 p-6 md:p-8
                    bg-white border border-black/15 rounded-md md:rounded-lg
                    relative overflow-y-scroll
                    "
                >
                  {children}
                  <X
                    className="absolute top-5 right-5 md:top-7 md:right-7
                    w-6 h-6 md:w-8 md:h-8
                    opacity-45 hover:opacity-60 active:opacity-75
                  "
                    strokeWidth={1.5}
                    onClick={close}
                  />
                </div>
              </motion.div>
            </RemoveScroll>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
export default Modal;
