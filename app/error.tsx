"use client";

export default function Error({ error }: { error: Error & { digest?: string } }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <pre className="text-red-500 text-sm whitespace-pre-wrap">{error.message}</pre>
    </div>
  );
}
