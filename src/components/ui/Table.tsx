export default function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <table className="min-w-full border text-sm">
      <thead className="bg-gray-100 text-left">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="px-4 py-2 border-b font-medium text-gray-700">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="hover:bg-gray-50">
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2 border-b text-gray-600">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
