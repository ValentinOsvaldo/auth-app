import { useState } from 'react';

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState<T>(initialState);

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const resetForm = () => setForm(initialState);

  return {
    ...form,
    form,
    onChange,
    resetForm,
  };
};
