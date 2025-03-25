import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const modalRef = useRef();

  function handleSave() {
    const project = {
      title: title.current.value,
      description: description.current.value,
      dueDate: dueDate.current.value,
    };

    if (
      project.title.trim() === "" &&
      project.description.trim() === "" &&
      project.dueDate.trim() === ""
    ) {
      modalRef.current.open();
      return;
    }

    onAdd(project);
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Ooops... look like you forgot to enter a value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" type="text"></Input>
          <Input ref={description} label="Description" isTextArea></Input>
          <Input ref={dueDate} label="Due Date" type="date"></Input>
        </div>
      </div>
    </>
  );
}
