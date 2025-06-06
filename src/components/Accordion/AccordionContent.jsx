import { useAccordionContext } from "./Accordion";

export default function AccordionContent({ id, className, children }) {
  const { openItemId } = useAccordionContext();

  const isOpen = openItemId === id;

  const classes = isOpen
    ? `${className ?? ''} accordion-item-content open`
    : `${className ?? ''} accordion-item-content`;

  return <div className={classes}>{children}</div>;
}
