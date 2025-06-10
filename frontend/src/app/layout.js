import './globals.css';

export const metadata = {
  title: 'Touristo',
  description: 'A travel app for planning your trips',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main style={{ padding: '1rem' }}>{children}</main>
      </body>
    </html>
  );
}