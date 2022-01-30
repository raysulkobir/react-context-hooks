import useToggle from "./useToggle"

export default function ToggleComponent() {
  const [value, toggleValues] = useToggle(true)

  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={toggleValues}>Toggle</button>
      <button onClick={() => toggleValues(true)}>Make True</button>
      <button onClick={() => toggleValues(false)}>Make False</button>
    </div>
  )
}
