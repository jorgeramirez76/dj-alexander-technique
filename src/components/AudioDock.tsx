"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */

const PROFILE = "https://soundcloud.com/djalexandertechnique";
const WIDGET_SRC = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
  PROFILE
)}&color=%23c8ff00&auto_play=false&hide_related=true&show_comments=false&show_user=false&visual=false`;

/**
 * Persistent bottom "now playing" dock. Streams from SoundCloud's official
 * widget (nothing rehosted) and controls it via the SoundCloud Widget API.
 * Falls back to opening SoundCloud if the API is unavailable.
 */
export function AudioDock() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const widgetRef = useRef<any>(null);
  const [ready, setReady] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [title, setTitle] = useState("Latest on SoundCloud");
  const [open, setOpen] = useState(true);
  const [loaded, setLoaded] = useState(false);

  // Lazy-load the widget API + bind once the user first interacts.
  const initWidget = useCallback(() => {
    if (loaded) return;
    setLoaded(true);
    const bind = () => {
      const SC = (window as any).SC;
      if (!SC || !iframeRef.current) return;
      const w = SC.Widget(iframeRef.current);
      widgetRef.current = w;
      w.bind(SC.Widget.Events.READY, () => {
        setReady(true);
        w.getCurrentSound((s: any) => s?.title && setTitle(s.title));
        w.play();
      });
      w.bind(SC.Widget.Events.PLAY, () => {
        setPlaying(true);
        w.getCurrentSound((s: any) => s?.title && setTitle(s.title));
      });
      w.bind(SC.Widget.Events.PAUSE, () => setPlaying(false));
      w.bind(SC.Widget.Events.FINISH, () => setPlaying(false));
    };
    if ((window as any).SC?.Widget) {
      bind();
    } else {
      const s = document.createElement("script");
      s.src = "https://w.soundcloud.com/player/api.js";
      s.async = true;
      s.onload = bind;
      document.body.appendChild(s);
    }
  }, [loaded]);

  const toggle = useCallback(() => {
    if (!loaded) {
      initWidget();
      return;
    }
    const w = widgetRef.current;
    if (!w) return;
    w.toggle();
  }, [loaded, initWidget]);

  useEffect(() => () => { widgetRef.current = null; }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-ink-line bg-ink/90 text-acid backdrop-blur-md"
        aria-label="Show player"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
      </button>
    );
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink-line bg-ink/85 backdrop-blur-xl">
      <div className="container-site flex h-16 items-center gap-3 sm:gap-5">
        {/* Play / pause */}
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-acid text-ink transition-transform hover:scale-105"
        >
          {playing ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M6 5h4v14H6zM14 5h4v14h-4z" /></svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M8 5v14l11-7z" /></svg>
          )}
        </button>

        {/* Equalizer */}
        <div className="flex h-6 items-end gap-[3px]" aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="w-[3px] rounded-full bg-acid/80"
              style={
                playing
                  ? { height: "100%", animation: `eq 0.9s ease-in-out ${i * 0.12}s infinite alternate` }
                  : { height: "20%" }
              }
            />
          ))}
        </div>

        {/* Track meta */}
        <div className="min-w-0 flex-1">
          <div className="label-mono text-[10px] text-acid">{playing ? "Now Playing" : ready ? "Paused" : "Alexander Technique"}</div>
          <div className="truncate text-sm text-bone">{title}</div>
        </div>

        <a
          href={PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden shrink-0 text-xs text-bone-muted transition-colors hover:text-acid sm:block"
        >
          SoundCloud ↗
        </a>
        <button
          onClick={() => setOpen(false)}
          aria-label="Hide player"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-bone-faint transition-colors hover:text-bone"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden><path d="M6 9l6 6 6-6" /></svg>
        </button>
      </div>

      {/* Hidden widget host (kept in DOM so audio can play) */}
      <iframe
        ref={iframeRef}
        title="SoundCloud player"
        src={loaded ? WIDGET_SRC : "about:blank"}
        allow="autoplay"
        className="pointer-events-none absolute h-0 w-0 opacity-0"
        aria-hidden
      />
      <style>{`@keyframes eq{0%{height:15%}100%{height:100%}}`}</style>
    </div>
  );
}
