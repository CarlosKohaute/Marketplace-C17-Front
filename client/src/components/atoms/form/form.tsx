import { FormEvent } from "react";

export interface InputProps {
  placeholder: string;
  name: string;
  image: string;
  price: number;
  description: string;
  categoryId: string;
  defaultValue?: string;
}
export interface FormProps<T = FormEvent<HTMLFormElement>> {
  title: string;
  inputs: InputProps[];
  onSubmit: (value: T) => void;
  cancel?: () => void;
}
export function Form({ inputs, onSubmit, title, cancel }: FormProps) {
  return (
    <section>
      <h2>{title}</h2>
      <form onSubmit={onSubmit}>
        {inputs.map((input, index) => (
          <input
            placeholder={input.placeholder}
            name={input.name}
            defaultValue={input.defaultValue}
            key={index}
          />
        ))}
        <button type="submit">Enviar</button>
        {cancel && (
          <button type="button" onClick={cancel}>
            Cancelar
          </button>
        )}{" "}
      </form>
    </section>
  );
}
