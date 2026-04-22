import Link from "next/link";
import { notFound } from "next/navigation";
import { navigationData } from "@/lib/navigation";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryPath = `/category/${slug}`;

  const mainSection = navigationData.find((section) =>
    section.subCategories?.some((subCategory) => subCategory.slug === categoryPath)
  );

  if (!mainSection || !mainSection.subCategories) {
    notFound();
  }

  const activeCategory = mainSection.subCategories.find(
    (subCategory) => subCategory.slug === categoryPath
  );

  if (!activeCategory) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-lg border border-slate-300 bg-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
            <aside className="border-r border-slate-300 bg-slate-200 p-4">
              <div className="space-y-2">
                {mainSection.subCategories.map((subCategory) => {
                  const isActive = subCategory.slug === activeCategory.slug;
                  return (
                    <Link
                      key={subCategory.slug}
                      href={subCategory.slug}
                      className={`block rounded-md px-4 py-3 text-xl font-semibold transition-colors ${
                        isActive
                          ? "bg-orange-500 text-white"
                          : "text-slate-800 hover:bg-slate-300"
                      }`}
                    >
                      {subCategory.subHead}
                    </Link>
                  );
                })}
              </div>
            </aside>

            <main className="bg-slate-100 p-6 md:p-8">
              <div className="mb-6">
                <h1 className="text-3xl font-bold text-slate-900">
                  {activeCategory.subHead}
                </h1>
                <p className="mt-2 text-slate-600">{activeCategory.description}</p>
              </div>

              <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
                {activeCategory.items.map((item) => (
                  <Link
                    key={item.slug}
                    href={item.slug}
                    className="text-2xl font-medium text-slate-700 transition-colors hover:text-orange-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
