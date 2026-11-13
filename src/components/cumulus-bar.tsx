import { useEffect, useRef } from "react";

declare global {
  interface Window {
    /** The Cumulus://ID account bar (https://id.cumuluscloud.app/id/bar.js, loaded in __root). */
    CumulusBar?: { setProfile(profile: unknown): void };
  }
}

/**
 * Where the Cumulus://ID account bar renders: Sign in and Create a Cumulus://ID when signed out,
 * the account menu and Infinitum product launcher when signed in. bar.js renders into every
 * [data-cumulus-bar] it finds when it loads; one mounted later asks it to render again.
 */
export function CumulusBar({ className, create = true }: { className?: string; create?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current && !ref.current.shadowRoot) window.CumulusBar?.setProfile(null);
  }, []);
  return <div ref={ref} className={className} data-cumulus-bar="" data-create={create ? undefined : "false"} />;
}
