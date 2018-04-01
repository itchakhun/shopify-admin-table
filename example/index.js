import React from 'react';
import { render } from 'react-dom';
import Table from '../index';

const data = {
  'header-1': 'Cell 1',
  'header-2': 'Cell 2',
  'header-3': 'Cell 3',
  'header-4': 'Cell 4',
  'header-5': 'Cell 5'
};

const headers = [...Array(5)].map((_, i) => ({
  access: `header-${i + 1}`,
  title: `Header ${i + 1}`
}));
const sources = [...Array(10)].map((_, id) => ({ ...data, id: `row-${id}` }));

const App = () => (
  <div>
    <Table headers={headers} sources={sources} renderColumn={cell => cell} />
  </div>
);

render(<App />, document.getElementById('app'));
