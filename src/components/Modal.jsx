import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

// new method
// export default function Modal({ children, ref }) {
//   return createPortal(
//     <dialog ref={ref}>{children}</dialog>,
//     document.getElementById("modal-root")
//   );
// }

// old method with the help of forwardref
const Modal  = forwardRef(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    })

  return createPortal(
    <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-sm">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button>{buttonCaption}</Button>
        </form>
    </dialog>,
    document.getElementById("modal-root")
  );
})

export default Modal;
