import Tabs from "./Tabs";
import TabButton from "./TabButton";
import Section from "./Section";
import { EXAMPLES } from "../data";
import { useState } from "react";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      {/* With Custom onSelect, without the use of props */}
      {/* <menu>
        <TabButton
          isSelected={selectedTopic === "components" ? true : false}
          onSelect={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx" ? true : false}
          onSelect={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props" ? true : false}
          onSelect={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state" ? true : false}
          onSelect={() => handleSelect("state")}
        >
          State
        </TabButton>
      </menu> */}

      {/* With the use of props */}
      <Tabs
      ButtonsContainer='menu'
        buttons={
          <>
            <TabButton
              isSelected={selectedTopic === "components" ? true : false}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx" ? true : false}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props" ? true : false}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state" ? true : false}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>

      {/* Conditional rendering 1 */}
      {/* {!selectedTopic ? (
      <p>Please select a topic</p>
    ) : (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}
      {/* Conditional rendering 2 */}
      {/* {!selectedTopic && <p>Please select a topic</p>}
    {selectedTopic && (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    )} */}
      {/* Conditional rendering 3 */}
      {/* {tabContent} */}
    </Section>
  );
}
