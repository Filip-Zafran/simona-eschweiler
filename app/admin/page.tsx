export const metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <main className="admin-shell">
      <section className="admin-card">
        <span className="eyebrow">Administration</span>
        <h1>Vorübergehend nicht verfügbar</h1>
        <p>Die Verwaltung von Mitteilungen ist derzeit deaktiviert.</p>
      </section>
    </main>
  );
}
