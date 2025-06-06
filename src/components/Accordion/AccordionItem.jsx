import { useAccordionContext } from "./Accordion";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

export default function AccordionItem({
  id,
  className,
  title: titleProp,
  children,
}) {
  const { openItemId, toggleItem } = useAccordionContext();

  const isOpen = openItemId === id;

  function onToggleAccordion() {
    // if (isOpen) {
    //   closeItem();
    //   return
    // }

    // openItem(id);
    toggleItem(id);
  }

  return (
    <li className={className}>
      {/* <h3 onClick={onToggleAccordion}>{titleProp}</h3> */}
      <AccordionTitle id={id} className="">{titleProp}</AccordionTitle>
      {/* <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div> */}
      <AccordionContent id={id} className="">{children}</AccordionContent>
    </li>
  );
}
