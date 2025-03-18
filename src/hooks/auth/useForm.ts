import { ChangeEvent, FormEvent, useState } from "react";
import { z } from "zod";

interface UseFormProps<T> {
  initialValue: T;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schema: z.ZodObject<any>;
  callback: (values: T) => Promise<void>;
}

export function useForm<T>({
  initialValue,
  schema,
  callback,
}: UseFormProps<T>) {
  const [values, setValues] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    try {
      schema.parse(values);
      callback(values);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessage = err.errors[0].message;
        alert(errorMessage);
      }
    }
  }

  return { handleChange, onSubmit };
}
