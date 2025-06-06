import { useAccordionContext } from "./Accordion";

export default function AccordionTitle({ id, classname, children }) {
  const { toggleItem } = useAccordionContext();

  return <h3 className={classname} onClick={() => toggleItem(id)}>{children}</h3>;
}
