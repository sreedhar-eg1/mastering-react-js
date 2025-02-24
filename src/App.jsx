import Header from "./components/Header/Header.jsx";
import CoreConcepts from './components/CoreConcepts.jsx'
import Examples from "./components/Examples.jsx";

import { Fragment, useState } from "react";

function App() {

  return (
    // Need a wrapping div means to return a single value
    // <div>
    //   <Header />
    //   <main>
    //     <section id="core-concepts">
    //       <h2>Core Concepts</h2>
    //       <ul>
    //         {/* Dynamically rendered */}
    //         {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    //         {/* Manually rendered */}
    //         {/* <CoreConcept
    //           title={CORE_CONCEPTS[0].title}
    //           description={CORE_CONCEPTS[0].description}
    //           image={CORE_CONCEPTS[0].image}
    //         />
    //         <CoreConcept {...CORE_CONCEPTS[1]} />
    //         <CoreConcept {...CORE_CONCEPTS[2]} />
    //         <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    //       </ul>
    //     </section>
    //     <section id="examples">
    //       <h2>Examples</h2>
    //       <menu>
    //         <TabButton isSelected={selectedTopic === 'components' ? true : false}  onSelect={() => handleSelect("components")}>
    //           Components
    //         </TabButton>
    //         <TabButton isSelected={selectedTopic === 'jsx' ? true : false} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
    //         <TabButton isSelected={selectedTopic === 'props' ? true : false} onSelect={() => handleSelect("props")}>Props</TabButton>
    //         <TabButton isSelected={selectedTopic === 'state' ? true : false} onSelect={() => handleSelect("state")}>State</TabButton>
    //       </menu>
    //       {/* Conditional rendering 1 */}
    //       {/* {!selectedTopic ? (
    //         <p>Please select a topic</p>
    //       ) : (
    //         <div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )} */}
    //       {/* Conditional rendering 2 */}
    //       {/* {!selectedTopic && <p>Please select a topic</p>}
    //       {selectedTopic && (
    //         <div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )} */}
    //       {/* Conditional rendering 3 */}
    //       {tabContent}
    //     </section>
    //     <h2>Time to get started!</h2>
    //   </main>
    // </div>

    // Use of Fragment (old syntax) for wrapping content intead of div
    // <Fragment>
    //   <Header />
    //   <main>
    //     <section id="core-concepts">
    //       <h2>Core Concepts</h2>
    //       <ul>
    //         {/* Dynamically rendered */}
    //         {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
    //         {/* Manually rendered */}
    //         {/* <CoreConcept
    //           title={CORE_CONCEPTS[0].title}
    //           description={CORE_CONCEPTS[0].description}
    //           image={CORE_CONCEPTS[0].image}
    //         />
    //         <CoreConcept {...CORE_CONCEPTS[1]} />
    //         <CoreConcept {...CORE_CONCEPTS[2]} />
    //         <CoreConcept {...CORE_CONCEPTS[3]} /> */}
    //       </ul>
    //     </section>
    //     <section id="examples">
    //       <h2>Examples</h2>
    //       <menu>
    //         <TabButton isSelected={selectedTopic === 'components' ? true : false}  onSelect={() => handleSelect("components")}>
    //           Components
    //         </TabButton>
    //         <TabButton isSelected={selectedTopic === 'jsx' ? true : false} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
    //         <TabButton isSelected={selectedTopic === 'props' ? true : false} onSelect={() => handleSelect("props")}>Props</TabButton>
    //         <TabButton isSelected={selectedTopic === 'state' ? true : false} onSelect={() => handleSelect("state")}>State</TabButton>
    //       </menu>
    //       {/* Conditional rendering 1 */}
    //       {/* {!selectedTopic ? (
    //         <p>Please select a topic</p>
    //       ) : (
    //         <div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )} */}
    //       {/* Conditional rendering 2 */}
    //       {/* {!selectedTopic && <p>Please select a topic</p>}
    //       {selectedTopic && (
    //         <div id="tab-content">
    //           <h3>{EXAMPLES[selectedTopic].title}</h3>
    //           <p>{EXAMPLES[selectedTopic].description}</p>
    //           <pre>
    //             <code>{EXAMPLES[selectedTopic].code}</code>
    //           </pre>
    //         </div>
    //       )} */}
    //       {/* Conditional rendering 3 */}
    //       {tabContent}
    //     </section>
    //     <h2>Time to get started!</h2>
    //   </main>
    // </Fragment>

    // Alternative to fragment (newer syntax)
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
        <h2>Time to get started!</h2>
      </main>
    </>
  );
}

export default App;
