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

function HeadingWithAnchor({
  id,
  className,
  children,
  onCopy,
}: {
  id: string;
  className: string;
  children: ReactNode;
  onCopy: (id: string) => void;
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
          onClick={() => onCopy(id)}
          aria-label="Copy heading link"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-outline-variant/25 bg-surface-container-low text-primary opacity-0 transition group-hover:opacity-100"
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

  const copyHeadingLink = async (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;

    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(id);
      window.history.replaceState(null, "", `#${id}`);
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1600);
    } catch {
      window.history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <div className="prose max-w-none prose-headings:font-headline prose-headings:text-on-surface prose-p:text-on-surface-variant prose-li:text-on-surface-variant prose-strong:text-on-surface">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ node, children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                className="font-headline text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight mt-10 mb-5"
                onCopy={copyHeadingLink}
              >
                <h1 {...props}>{children}</h1>
              </HeadingWithAnchor>
            );
          },
          h2: ({ node, children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                className="font-headline text-3xl font-bold text-on-surface tracking-tight mt-10 mb-4"
                onCopy={copyHeadingLink}
              >
                <h2 {...props}>{children}</h2>
              </HeadingWithAnchor>
            );
          },
          h3: ({ node, children, ...props }) => {
            const text = flattenText(children).trim();
            const id = getSlug(text);
            return (
              <HeadingWithAnchor
                id={id}
                className="font-headline text-2xl font-semibold text-on-surface tracking-tight mt-8 mb-3"
                onCopy={copyHeadingLink}
              >
                <h3 {...props}>{children}</h3>
              </HeadingWithAnchor>
            );
          },
          p: ({ node, ...props }) => (
            <p className="text-on-surface-variant font-body text-lg leading-[1.75] my-4" {...props} />
          ),
          strong: ({ node, ...props }) => <strong className="text-on-surface font-semibold" {...props} />,
          pre: ({ node, children, ...props }) => {
            const codeElement =
              children && typeof children === "object" && "props" in children
                ? (children.props as { className?: string })
                : undefined;
            const match = /language-(\w+)/.exec(codeElement?.className ?? "");
            return (
              <div className="rounded-xl overflow-x-auto bg-surface-container-low border border-outline-variant/25 my-6 w-full">
                {match && (
                  <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline-variant/20 min-w-max">
                    <span className="font-label text-[0.6875rem] text-on-surface-variant uppercase tracking-widest">
                      {match[1]}
                    </span>
                  </div>
                )}
                <pre className="p-6 text-sm font-mono text-on-surface leading-relaxed w-full min-w-max whitespace-pre" {...props}>
                  {children}
                </pre>
              </div>
            );
          },
          blockquote: ({ node, ...props }) => (
            <blockquote className="relative py-6 px-8 bg-surface-container-low rounded-xl border-l-4 border-primary my-7">
              <div className="text-xl font-headline italic text-on-surface leading-relaxed">{props.children}</div>
            </blockquote>
          ),
        }}
      >
        {content}
      </ReactMarkdown>

      {copiedId && (
        <div className="fixed bottom-5 right-5 z-50 rounded-lg border border-outline-variant/30 bg-surface-container-lowest px-4 py-2 text-sm text-primary shadow-sm">
          Copied link for #{copiedId}
        </div>
      )}
    </div>
  );
}
