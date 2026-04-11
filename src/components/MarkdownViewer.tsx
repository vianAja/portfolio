import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none">
       <ReactMarkdown
         remarkPlugins={[remarkGfm]}
         components={{
            h2: ({node, ...props}) => <h2 className="font-headline text-3xl font-bold text-white tracking-tight mt-12 mb-4" {...props} />,
            h3: ({node, ...props}) => <h3 className="font-headline text-2xl font-bold text-white tracking-tight mt-10 mb-3" {...props} />,
            p: ({node, ...props}) => <div className="text-on-surface/80 font-body text-lg leading-[1.6] my-4" {...props} />,
            strong: ({node, ...props}) => <strong className="text-white font-bold" {...props} />,
            pre: ({node, children, ...props}: any) => {
               const codeElem = children?.props;
               const match = /language-(\w+)/.exec(codeElem?.className || '');
               return (
                   <div className="rounded-xl overflow-x-auto bg-surface-container-lowest border border-outline-variant/10 my-6 w-full shadow-lg">
                     {match && (
                       <div className="flex items-center justify-between px-4 py-2 bg-surface-container-high border-b border-outline-variant/10 min-w-max">
                         <span className="font-label text-[0.6875rem] text-outline uppercase tracking-widest">
                           {match[1]}
                         </span>
                         <div className="flex gap-1.5">
                           <div className="w-2 h-2 rounded-full bg-error/40" />
                           <div className="w-2 h-2 rounded-full bg-primary/40" />
                           <div className="w-2 h-2 rounded-full bg-secondary/40" />
                         </div>
                       </div>
                     )}
                     <pre className="p-6 text-sm font-mono text-primary-fixed/80 leading-relaxed w-full min-w-max whitespace-pre" {...props}>
                         {children}
                     </pre>
                   </div>
               );
            },
            blockquote: ({node, ...props}) => (
              <blockquote className="relative py-8 px-12 bg-surface-container-low rounded-xl border-l-4 border-primary my-8">
                <span className="absolute top-4 left-4 text-primary/20 text-6xl font-headline">&quot;</span>
                <div className="text-xl font-headline italic text-white leading-relaxed">{props.children}</div>
              </blockquote>
            ),
         }}
       >{content}</ReactMarkdown>
    </div>
  );
}
