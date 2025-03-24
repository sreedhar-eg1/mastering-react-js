import { forwardRef } from "react";

// New way
export default function Input({ refs, label, isTextArea, ...props }) {
  const classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea refs={refs} className={classes} {...props} />
      ) : (
        <input refs={refs} className={classes} {...props} />
      )}
    </p>
  );
}

// Old way using forwardRef 
// const Input = forwardRef(function Input({label, isTextArea, ...props }, refs) {
//     const classes =
//       "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
  
//     return (
//       <p className="flex flex-col gap-1 my-4">
//         <label className="text-sm font-bold uppercase text-stone-500">
//           {label}
//         </label>
//         {isTextArea ? (
//           <textarea refs={refs} className={classes} {...props} />
//         ) : (
//           <input refs={refs} className={classes} {...props} />
//         )}
//       </p>
//     );
//   })

// export default Input;