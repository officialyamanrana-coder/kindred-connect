import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/aravv-logo.jpg";

const TELEGRAM_URL = "https://t.me/+t3R5qjK0zXA3M2Jl";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Aravv Shorts — Premium Telegram Signals" },
      {
        name: "description",
        content:
          "Join Aravv Shorts on Telegram for premium signals. Tap to enter the guild instantly.",
      },
      { property: "og:title", content: "Aravv Shorts — Premium Telegram Signals" },
      {
        property: "og:description",
        content: "Enter the guild. Premium signals await on Telegram.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  const track = () => {
    (window as unknown as { fbq?: (...a: unknown[]) => void }).fbq?.("track", "Lead");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-5 py-10">
      <div className="pointer-events-none absolute inset-0 bg-aura" aria-hidden="true" />

      <section className="relative w-full max-w-sm rounded-4xl border border-border bg-card/80 px-6 py-10 text-center shadow-glow backdrop-blur-xl">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-accent">
          &#10022; Arise &#10022;
        </p>

        <div className="mt-8 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-halo blur-2xl" aria-hidden="true" />
            <img
              src={logo.url}
              alt="Aravv Shorts logo"
              width={160}
              height={160}
              className="relative h-40 w-40 rounded-full object-cover ring-2 ring-accent/60"
            />
          </div>
        </div>

        <h1 className="mt-8 text-4xl font-extrabold uppercase tracking-wide text-foreground">
          Aravv Shorts
        </h1>

        <div className="mx-auto mt-4 h-px w-24 bg-divider" aria-hidden="true" />

        <p className="mt-4 text-sm text-muted-foreground">
          Enter the guild. <span className="font-semibold text-accent">Premium signals</span> await.
        </p>

        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={track}
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-cta px-6 py-4 text-base font-bold uppercase tracking-wider text-primary-foreground shadow-cta transition-transform duration-200 hover:scale-[1.03] active:scale-100"
        >
          Join Telegram <span aria-hidden="true">&#10148;</span>
        </a>

        <p className="mt-6 text-xs text-muted-foreground/80">
          Tap to open Telegram and join instantly
        </p>
      </section>
    </main>
  );
}
