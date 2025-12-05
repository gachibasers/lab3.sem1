import Header from "./Header.jsx";

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-main">
        <div className="page">{children}</div>
      </main>
    </div>
  );
}
