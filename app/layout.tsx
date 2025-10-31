export const metadata = {
  title: "Runwell Ideas Studio",
  description: "AI-basert idégenerator for sosiale medier fra Runwell",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no">
      <body style={{ fontFamily: "Arial, sans-serif", padding: "2rem", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
