import React, { Component } from 'react';

const TableHead = ({ headers }) => (
  <thead>
    <tr>
      {headers.map(header => <th key={header.access}>{header.title}</th>)}
    </tr>
  </thead>
);

export default TableHead;
