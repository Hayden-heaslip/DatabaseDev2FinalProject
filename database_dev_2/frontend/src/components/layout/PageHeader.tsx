/**
 * Component Purpose:
 * Reusable page heading and optional description block.
 */
type PageHeaderProps = {
  title: string;
  description?: string;
};

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold text-zinc-900">{title}</h1>
      {description ? <p className="text-zinc-600">{description}</p> : null}
    </div>
  );
}
