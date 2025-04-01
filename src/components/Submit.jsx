import { useFormStatus } from "react-dom"

export default function Submit() {
    // can be used in a component inside the form
    const {pending} = useFormStatus()

    return  <p className="actions">
    <button type="submit" disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
  </p>
}