import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="surface-dark flex min-h-screen items-center justify-center px-4 py-32">
      <div className="w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/6 p-10 text-center shadow-soft backdrop-blur">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">This page stepped out of the flow.</h1>
        <p className="mt-6 text-base leading-7 text-white/72">
          The route <span className="font-medium text-white">{location.pathname}</span> does not exist, but the
          redesigned navigation below will get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild size="lg">
            <Link to="/">Return home</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white/14 bg-white/5 text-white hover:bg-white/10">
            <Link to="/contact">Contact Afrigotech</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
