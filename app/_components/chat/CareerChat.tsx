"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { MessageCircle, Send, X } from "react-feather";

import cn from "classnames";
import { useTranslations } from "next-intl";

interface ChatMessage {
  role: "user" | "assistant";
  text: string;
  isError?: boolean;
}

const MAX_LENGTH = 500;

const CareerChat = () => {
  const t = useTranslations("Chat");
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const suggestions = [t("suggestion1"), t("suggestion2"), t("suggestion3")];

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = async (question: string) => {
    const trimmed = question.trim();
    if (!trimmed || loading) return;

    setMessages(prev => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      const data: { answer?: string; error?: string } = await res.json().catch(() => ({}));

      if (!res.ok || !data.answer) {
        setMessages(prev => [...prev, { role: "assistant", text: data.error ?? t("error"), isError: true }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", text: data.answer! }]);
      }
    } catch {
      setMessages(prev => [...prev, { role: "assistant", text: t("error"), isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    ask(input);
  };

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label={t("title")}
          className="
            fixed z-modal-content bottom-20 right-4 left-4 sm:left-auto sm:w-96
            h-[min(32rem,calc(100dvh-7rem))] flex flex-col
            rounded-2xl shadow-2xl border border-foreground/10
            bg-light dark:bg-dark
          "
        >
          <header className="flex items-center justify-between px-5 py-4 border-b border-foreground/10">
            <div>
              <p className="font-bold text-base">{t("title")}</p>
              <p className="text-xs text-foreground/55">{t("subtitle")}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("close")}
              className="text-foreground/55 hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" strokeWidth={1.75} />
            </button>
          </header>

          <div ref={listRef} className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3" aria-live="polite">
            {messages.length === 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-sm text-foreground/70 leading-relaxed">{t("greeting")}</p>
                <div className="flex flex-col items-start gap-2">
                  {suggestions.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => ask(s)}
                      className="text-left text-sm px-3 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/15 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap",
                  m.role === "user"
                    ? "self-end bg-primary text-white rounded-br-md"
                    : "self-start bg-foreground/5 rounded-bl-md",
                  m.isError && "text-foreground/60",
                )}
              >
                {m.text}
              </div>
            ))}

            {loading && (
              <div className="self-start px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-foreground/5 text-sm text-foreground/55">
                {t("thinking")}
              </div>
            )}
          </div>

          <form onSubmit={onSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-foreground/10">
            <input
              ref={inputRef}
              value={input}
              onChange={e => setInput(e.target.value)}
              maxLength={MAX_LENGTH}
              placeholder={t("placeholder")}
              aria-label={t("placeholder")}
              className="flex-1 min-w-0 bg-foreground/5 rounded-lg px-3 py-2 text-base sm:text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label={t("send")}
              className="p-2 rounded-lg bg-primary text-white disabled:opacity-40 transition-opacity"
            >
              <Send className="w-4 h-4" strokeWidth={2} />
            </button>
          </form>
          <p className="px-4 pb-3 text-[11px] text-foreground/45">{t("disclaimer")}</p>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? t("close") : t("open")}
        aria-expanded={open}
        className="
          fixed z-modal-content bottom-4 right-4 h-12 pl-4 pr-5 rounded-full shadow-lg
          flex items-center gap-2 font-semibold text-sm transition-opacity hover:opacity-90
          bg-black text-white dark:bg-light dark:text-black
        "
      >
        {open ? <X className="w-5 h-5" strokeWidth={2} /> : <MessageCircle className="w-5 h-5" strokeWidth={2} />}
        {t("fab")}
      </button>
    </>
  );
};

export default CareerChat;
