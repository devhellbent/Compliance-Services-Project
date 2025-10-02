// components/page-sections/proprietorship/Faq.tsx
type FaqItem = {
    q: string;
    a: string;
};

interface FaqProps {
    faqs: FaqItem[];
}

export const Faq = ({ faqs }: FaqProps) => {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {faqs.map((faq: FaqItem) => (
                        <details key={faq.q} className="p-4 border rounded-lg bg-white group cursor-pointer">
                            <summary className="font-semibold text-gray-800 list-none flex justify-between items-center">
                                {faq.q}
                                <span className="transform group-open:rotate-180 transition-transform">▼</span>
                            </summary>
                            <p className="mt-2 text-gray-600 pt-2 border-t">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};