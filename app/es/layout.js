import DocumentLanguage from "@/src/components/i18n/DocumentLanguage";

export default function SpanishLayout({ children }) {
  return (
    <>
      <DocumentLanguage lang="es" />
      {children}
    </>
  );
}
