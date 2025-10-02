// components/page-sections/proprietorship/Eligibility.tsx
type EligibilityCriterion = {
  title: string;
  items: string[];
};

type EligibilityProps = {
  criteria: EligibilityCriterion[];
};

export const Eligibility = ({ criteria }: EligibilityProps) => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Eligibility Criteria
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((criterion: EligibilityCriterion) => (
            <div
              key={criterion.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-bold text-lg text-blue-600 mb-3">
                {criterion.title}
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm list-disc list-inside">
                {criterion.items.map((item: string) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
