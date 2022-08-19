import styles from "./Tab.module.scss";
import { ComponentPropsWithoutRef, ReactNode, useEffect } from "react";
import { clsnm } from "utils/clsnm";
import { useState } from "react";
import { useTabModal } from "hooks/useTabModal";

interface TabProbs extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  bodyProps?: ComponentPropsWithoutRef<"div">;
  maxWidth: string;
  padding?: string;
  height?: string;
  names: string[];
}

const Tab = ({
  className,
  bodyProps = {},
  maxWidth = "126px",
  padding = "5px",
  height = "56px",
  style = {},
  names = ["Empty", "Empty", "Empty"],
}: TabProbs) => {
  const tapModal = useTabModal();
  return (
    <div
      className={styles.wrapper}
      style={{
        height: height,
        maxWidth: maxWidth ? maxWidth : undefined,
        padding: padding,
      }}
    >
      {names.map((name: string, i: number) => {
        return (
          <div
            key={i}
            style={{ maxWidth: maxWidth ? maxWidth : undefined, ...style }}
            onClick={() => {
              tapModal.change(i);
            }}
            className={tapModal.whichTab === i ? styles.thisOne : styles.no}
          >
            {name}
          </div>
        );
      })}
    </div>
  );
};

export { Tab };

// const Modal = ({
//   children,
//   isOpen,
//   close,
//   closeOnClickOutside = true,
//   className,
//   bodyProps = {},
//   width,
// }: ModalProps) => {
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflowY = "hidden";
//     } else {
//       document.body.style.overflowY = "auto";
//     }
//   }, [isOpen]);

//   const outsideRef = useOnClickOutside<HTMLDivElement>(() => {
//     if (closeOnClickOutside) {
//       close();
//     }
//   });

//   return isOpen ? (
//     <div
//       style={{ animationTimingFunction: "linear" }}
//       className={styles.layout}
//     >
//       <div
//         {...bodyProps}
//         ref={outsideRef}
//         className={clsnm(styles.body, className)}
//         style={{
//           width: width,
//           ...(bodyProps.style || {}),
//         }}
//       >
//         <Icon
//           hoverable
//           onClick={close}
//           className={styles.close}
//           borderRadius="50%"
//         >
//           <IoMdClose />
//         </Icon>

//         {children}
//       </div>
//     </div>
//   ) : null;
// };