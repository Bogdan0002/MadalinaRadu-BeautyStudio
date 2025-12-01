interface GhlFormPlaceholderProps {
  title?: string;
  description?: string;
}

export default function GhlFormPlaceholder({
  title = "Formular de programare",
  description = "Completează formularul de mai jos pentru a programa o consultație.",
}: GhlFormPlaceholderProps) {
  return (
    <div className="w-full min-h-[400px] bg-brand-peach/30 rounded-lg flex items-center justify-center border-2 border-dashed border-brand-teal/40 p-8">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-brand-indigo mb-2">
          {title}
        </h3>
        <p className="text-sm text-brand-indigo/70 mb-4">{description}</p>
        <p className="text-xs text-brand-indigo/50 italic">
          Aici va fi integrat formularul de programare GoHighLevel.
        </p>
        {/* 
          TODO: Replace this placeholder with:
          1. GHL form embed script (form/survey), OR
          2. POST form data to Next.js API route which will call GHL API/webhook
        */}
      </div>
    </div>
  );
}

