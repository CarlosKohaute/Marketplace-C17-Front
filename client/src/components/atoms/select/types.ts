import { Dispatch, SetStateAction } from "react";

export interface OptionsProps {
  name: string;
  value: string;
}
export interface SelectProps {
  options: OptionsProps[];
  selectedOption: (value: string) => void;
}
