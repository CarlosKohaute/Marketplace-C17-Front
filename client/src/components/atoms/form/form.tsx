import { FormEvent } from "react";

export interface InputProps {
  placeholder: string;
  name: string;
  image: string;
  price: number;
  description: string
  categoryId: string
}
export interface FormProps<T = FormEvent<HTMLFormElement>> {
  title: string;
  inputs: InputProps[];
  onSubmit: (value: T) => void;
}
export function Form({ inputs, onSubmit, title }: FormProps) {
  return (
    <section>
      <h2>{title}</h2>
    <form onSubmit={onSubmit}>
      {inputs.map((input) => (
        <input
          placeholder={input.placeholder}
          name={input.name}
        />
      ))}
      <button type="submit">Enviar</button>
    </form>
    </section>
  );
}
