import { Dispatch, SetStateAction } from "react";

export interface SelectProps {
  options: string[];
  selectedOption: (value: string) => void;
}