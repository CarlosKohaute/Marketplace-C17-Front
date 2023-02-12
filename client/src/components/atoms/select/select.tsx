import { SelectProps } from "./types";

export function Select(props: SelectProps) {
  return (
    <select
      defaultValue={"default"}
      onChange={(e) => props.selectedOption(e.currentTarget.value)}
    >
      <option value="default" disabled>
        Select a option
      </option>
      {props.options.map((option) => {
        return (
          <option key={option} value={option}>
            {option}
          </option>
        );
      })}
    </select>
  );
}