'use client';

import { useState } from 'react';
import API from '../../utils/api';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/api/user/login/', form);
      localStorage.setItem('token', res.data.token);
      setMessage('Login successful!');
      router.push('/profile'); // redirect to profile after login
    } catch (error) {
      setMessage('Login failed. Check credentials.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="username" onChange={handleChange} placeholder="Username" required />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" required />
      <button type="submit">Login</button>
      <p>{message}</p>
    </form>
  );
}
