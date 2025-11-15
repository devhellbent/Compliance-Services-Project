import { MarkdownBoldRenderer } from "../MarkdownBoldRenderer";

type EligibilityCriterion = {
  title: string;
  items: string[];
};

type EligibilityProps = {
  criteria: (string | EligibilityCriterion)[];
};

export const Eligibility = ({ criteria }: EligibilityProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Eligibility Criteria
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {criteria.map((criterion, index) => {
              if (typeof criterion === "string") {
                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border border-gray-200"
                  >
                    <p className="text-lg text-gray-700">
                      <MarkdownBoldRenderer text={criterion} />
                    </p>
                  </div>
                );
              }
              return (
                <div
                  key={criterion.title}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                >
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">
                    {criterion.title}
                  </h3>
                  <ul className="space-y-3 text-lg text-gray-700 list-disc list-inside">
                    {criterion.items.map((item: string) => (
                      <li key={item}>
                        <MarkdownBoldRenderer text={item} />
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
