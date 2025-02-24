// export default function(props) {
//     return (
//         <li><button>{props.children}</button></li>
//     )
// }

// setting onSelect custom event
// export default function ({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       <button className={isSelected ? "active" : undefined} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }

// Alternative approach using ...props
export default function ({ children, isSelected, ...props }) {
    return (
      <li>
        <button className={isSelected ? "active" : undefined} {...props} >
          {children}
        </button>
      </li>
    );
  }


