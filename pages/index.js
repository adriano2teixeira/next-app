import { Link } from "next/link";

export default function App() {
  return (
    <>
      <h1>Home page</h1>
      <br />
      <Link>
        <a href="/contact">Contacte</a>
      </Link>
    </>
  );
}
