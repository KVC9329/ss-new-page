const Table = () => {
    return (
      <div className="flex justify-center items-center min-h-screen p-4">
        <div className="overflow-x-auto w-full max-w-4xl">
          <table className="w-full border border-gray-300 text-left bg-white shadow-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-4">Role Level</th>
                <th className="border p-4">Average Time to Hire</th>
                <th className="border p-4">Industry Benchmark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4">Urgent Roles</td>
                <td className="border p-4">5-7 business days</td>
                <td className="border p-4">10-15 business days</td>
              </tr>
              <tr>
                <td className="border p-4">Mid-Level Management</td>
                <td className="border p-4">10-15 business days</td>
                <td className="border p-4">20-30 business days</td>
              </tr>
              <tr>
                <td className="border p-4">Specialized Technical Roles</td>
                <td className="border p-4">15-20 business days</td>
                <td className="border p-4">30-45 business days</td>
              </tr>
              <tr>
                <td className="border p-4">Executive/Leadership Roles</td>
                <td className="border p-4">25-30 business days</td>
                <td className="border p-4">45-60 business days</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default Table;