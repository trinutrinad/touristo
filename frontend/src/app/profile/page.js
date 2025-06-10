'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import API from '../../utils/api';

export default function ProfilePage() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    API.get('/profile/')
      .then(res => setProfile(res.data))
      .catch(() => {
        setError('❌ Failed to load profile.');
        router.push('/login');
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!profile) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {profile.username}</h2>
    </div>
  );
}
