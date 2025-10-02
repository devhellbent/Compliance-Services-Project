// components/page-sections/proprietorship/FeesTable.tsx
type Fee = {
  component: string;
  fees: string | number;
  remarks: string;
};

type FeesTableProps = {
  fees: Fee[];
};

export const FeesTable = ({ fees }: FeesTableProps) => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
          Registration Fees
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Component
                </th>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Approximate Fees (INR)
                </th>
                <th className="text-left font-semibold text-gray-700 p-4">
                  Remarks
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.map((fee: Fee) => (
                <tr key={fee.component} className="border-b">
                  <td className="p-4 text-gray-800">{fee.component}</td>
                  <td className="p-4 text-gray-800">{fee.fees}</td>
                  <td className="p-4 text-gray-600">{fee.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
