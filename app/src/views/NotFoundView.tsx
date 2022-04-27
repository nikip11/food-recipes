import { Link } from "react-router-dom";

export default function NotFoundView() {
  return (
    <div className="container">
      <h1 className="text-5xl">404</h1>
      <h3>Not Found</h3>
      <Link to="/">Go to Home</Link>
    </div>
  )
}