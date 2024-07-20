import { PropTypes } from "prop-types";
export const Table = ({ columns, data }) => {
  return (
    <div>
      <table className="table-auto w-full h-full text-center">
        <thead className="border-b-2">
          <tr>
            {columns.map((col) => (
              <th key={col.access}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col) => (
                <td key={col.access}>{row[col.access]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.propTypes = {
  columns: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
};
