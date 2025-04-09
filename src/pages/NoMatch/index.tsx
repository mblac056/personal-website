import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <section>
      <div className="flex flex-col items-center justify-center gap-y-5">
        <h1 className="bg-gradient-to-l from-primary-content via-secondary to-primary bg-clip-text text-9xl font-bold text-transparent">
          404
        </h1>
        <p className="text-3xl font-medium text-neutral">Page not found</p>
        <Link className="btn-primary-content btn px-16" to="/">
          Go back
        </Link>
      </div>
    </section>
  );
}

export default NoMatch; 