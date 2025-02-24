import { Fragment } from "react";

export default function Tabs({ children, buttons, ButtonsContainer='menu' }) {
    // when the props starts with small letter, then we need to save like this, otherwise it looks for built in copmponent
    // const ButtonsContainer = buttonsContainer
  return (
    <Fragment>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </Fragment>
  );
}
