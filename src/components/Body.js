import React from 'react';
import PropTypes from 'prop-types';

const Body = ({ sources, renderColumn, onRowClick }) => {
  return (
    <tbody>
      {sources.map(sourceColumns => (
        <tr
          key={sourceColumns.key}
          onClick={ev =>
            onRowClick && ev.target.nodeName === 'TD' && onRowClick()
          }
        >
          {sourceColumns.columns.map((source, index) => (
            <td key={source.key} onClick={() => false}>
              {renderColumn(source.data)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

Body.propTypes = {
  sources: PropTypes.array.isRequired,
  renderColumn: PropTypes.func.isRequired
};

export default Body;
