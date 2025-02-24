
// we can use any name other than props
// function CoreConcept(props) {
//   return (
//     <li>
//       <img src={props.image} alt={props.title}/>
//       <h3>{props.title}</h3>
//       <p>{props.description}</p>
//     </li>
//   )
// }

// alternative approach for props
export function CoreConcept({title, image, description}) {
  return (
    <li>
      <img src={image} alt={title}/>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}