// components/page-sections/proprietorship/RegistrationProcess.tsx
type Step = {
  step: number | string;
  title: string;
  description: string;
};

interface RegistrationProcessProps {
  steps: Step[];
}

export const RegistrationProcess: React.FC<RegistrationProcessProps> = ({
  steps,
}) => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Step-by-Step Registration Process
        </h2>
        <div className="relative">
          <div
            className="absolute left-4 top-0 h-full w-0.5 bg-slate-200"
            aria-hidden="true"
          ></div>
          <div className="space-y-8">
            {steps.map((step: Step, index: number) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 top-1 flex items-center justify-center w-8 h-8 bg-blue-600 text-white font-bold rounded-full">
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {step.title}
                </h3>
                <p className="mt-1 text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
