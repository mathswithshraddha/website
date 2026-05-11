interface JsonLdProps {
  data: Record<string, unknown> | Array<Record<string, unknown> | null> | null;
}

export default function JsonLd({ data }: JsonLdProps) {
  const payload = Array.isArray(data) ? data.filter(Boolean) : data ? [data] : [];

  if (payload.length === 0) return null;

  return (
    <>
      {payload.map((item, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
        />
      ))}
    </>
  );
}
