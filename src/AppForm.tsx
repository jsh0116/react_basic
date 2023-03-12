import React, { useState } from 'react';

interface Form {
  name: string;
  email: string;
}

const AppForm = (): JSX.Element => {
  // const [name, setName] = useState<string>('');
  // const [email, setEmail] = useState<string>('');
  const [form, setForm] = useState<Form>({ name: '', email: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // submit 동작 시 page refresh 방지를 위해 preventDefault
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='name'>이름:</label>
      <input
        type='text'
        id='name'
        name='name'
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor='email'>이메일:</label>
      <input
        type='text'
        id='email'
        name='email'
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
};

export default AppForm;
