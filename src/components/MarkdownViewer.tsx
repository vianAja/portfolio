"use client";

import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { createSlugger } from "@/lib/markdownHeadings";

function flattenText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(flattenText).join(" ");
  }

  if (node && typeof node === "object" && "props" in node) {
    const maybeProps = node.props as { children?: ReactNode };
    return flattenText(maybeProps.children ?? "");
  }

  return "";
}

function CopyButton({
  label,
  copied,
  onClick,
  className = "",
}: {
  label: string;
  copied: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-md border border-outline-variant/25 bg-surface-container-low text-primary transition hover:bg-surface-container-high ${className}`}
    >
      <span className="material-symbols-outlined text-base">{copied ? "check" : "content_copy"}</span>
    </button>
  );
}

function HeadingWithAnchor({
  id,
  text,
  className,
  children,
  onCopy,
}: {
  id: string;
  text: string;
  className: string;
  children: ReactNode;
  onCopy: (id: string, text: string) => void;
}) {
  return (
    <div className="group relative scroll-mt-28">
      <a id={id} className="absolute -top-28" aria-hidden="true" />
      <div className="flex items-center gap-2">
        <a href={`#${id}`} className={className}>
          {children}
        </a>
        <button
          type="button"
          onClick={() => onCopy(id, text)}
          aria-label="Copy heading link"
          title={`Copy link for ${text}`}
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-outline-variant/25 bg-surface-container-low text-primary opacity-0 shadow-[0_8px_18px_rgba(61,92,89,0.08)] transition duration-200 group-hover:opacity-100 group-hover:-translate-y-0.5 hover:scale-105 hover:bg-primary hover:text-on-primary hover:shadow-[0_12px_24px_rgba(61,92,89,0.18)] active:scale-95"
        >
          <span className="material-symbols-outlined text-base">link</span>
        </button>
      </div>
    </div>
  );
}

export default function MarkdownViewer({ content }: { content: string }) {
  const getSlug = createSlugger();
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const showCopiedState = (value: string) => {
    setCopiedSection(value);
    window.setTimeout(() => setCopiedSection((current) => (current === value ? null : current)), 1600);
  };

  const copyHeadingLink = async (id: string, text: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    const payload = `${text}\n${url}`;

    try {
      await navigator.clipboard.writeText(payload);
      setCopiedId(id);
      window.history.replaceState(null, "", `#${id}`);
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1600);
    } catch {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  const copySection = async (value: string, type: "quote" | "code") => {
    try {
      await navigator.clipboard.writeText(value);
      showCopiedState(`${type}:${value}`);
    } catch {
      // noop: clipboard can fail on some browsers or insecure contexts
    }
  };

  return (
    <div className="prose max-w-none prose-headings:font-headline prose-headings:text-on-surface prose-p:text-on-surface-variant prose-li:text-on-surface-variant prose-strong:text-on-surface">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                text={text}
                className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mt-10 mb-5"
                onCopy={copyHeadingLink}
              >
                <h1 {...props}>{children}</h1>
              </HeadingWithAnchor>
            );
          },
          h2: ({ children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                text={text}
                className="font-headline text-3xl font-bold text-on-surface tracking-tight mt-10 mb-4"
                onCopy={copyHeadingLink}
              >
                <h2 {...props}>{children}</h2>
              </HeadingWithAnchor>
            );
          },
          h3: ({ children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                text={text}
                className="font-headline text-2xl font-semibold text-on-surface tracking-tight mt-8 mb-3"
                onCopy={copyHeadingLink}
              >
                <h3 {...props}>{children}</h3>
              </HeadingWithAnchor>
            );
          },
          p: ({ ...props }) => (
            <p className="text-on-surface-variant font-body text-lg leading-[1.75] my-4" {...props} />
          ),
          strong: ({ ...props }) => <strong className="text-on-surface font-semibold" {...props} />,
          pre: ({ children, ...props }) => {
            const codeElement =
              children && typeof children === "object" && "props" in children
                ? (children.props as { className?: string; children?: ReactNode })
                : undefined;
            const match = /language-(\w+)/.exec(codeElement?.className ?? "");
            const codeText = flattenText(codeElement?.children ?? children).replace(/\n$/, "");
            const copyKey = `code:${codeText}`;
            return (
              <div className="rounded-xl overflow-hidden bg-surface-container-low border border-outline-variant/25 my-6 w-full">
                <div className="flex items-center justify-between gap-3 px-4 py-2 bg-surface-container-high border-b border-outline-variant/20">
                  {match ? (
                    <span className="font-label text-[0.6875rem] text-on-surface-variant uppercase tracking-widest">
                      {match[1]}
                    </span>
                  ) : (
                    <span className="font-label text-[0.6875rem] text-on-surface-variant uppercase tracking-widest">
                      Code
                    </span>
                  )}
                  <CopyButton
                    label="Copy code block"
                    copied={copiedSection === copyKey}
                    onClick={() => copySection(codeText, "code")}
                  />
                </div>
                <div className="overflow-x-auto">
                  <pre className="p-6 text-sm font-mono text-on-surface leading-relaxed w-full whitespace-pre" {...props}>
                    {children}
                  </pre>
                </div>
              </div>
            );
          },
          blockquote: ({ children, ...props }) => {
            const quoteText = flattenText(children).trim();
            const copyKey = `quote:${quoteText}`;

            return (
              <blockquote
                className="relative py-6 px-8 pr-20 bg-surface-container-low rounded-xl border-l-4 border-primary my-7"
                {...props}
              >
                <CopyButton
                  label="Copy quote"
                  copied={copiedSection === copyKey}
                  onClick={() => copySection(quoteText, "quote")}
                  className="absolute top-4 right-4"
                />
                <div className="text-xl font-headline italic text-on-surface leading-relaxed">{children}</div>
              </blockquote>
            );
          },
          table: ({ ...props }) => (
            <div className="my-8 overflow-x-auto rounded-xl border border-outline/30 shadow-[0_1px_0_rgba(65,72,71,0.06)]">
              <table className="w-full min-w-[40rem] table-fixed border-collapse bg-surface-container-lowest text-left" {...props} />
            </div>
          ),
          thead: ({ ...props }) => <thead className="bg-surface-container-low" {...props} />,
          th: ({ ...props }) => (
            <th
              className="border border-outline/35 px-4 py-3 align-top font-headline text-lg font-semibold text-on-surface"
              {...props}
            />
          ),
          td: ({ ...props }) => (
            <td
              className="border border-outline/25 px-4 py-3 align-top text-on-surface-variant leading-7 whitespace-normal break-words"
              {...props}
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {copiedId && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-2 text-sm text-primary shadow-sm">
          Copied heading and URL for #{copiedId}
        </div>
      )}
      {copiedSection && (
        <div className="fixed bottom-5 left-5 z-50 rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-2 text-sm text-primary shadow-sm">
          Section copied
        </div>
      )}
    </div>
  );
}
