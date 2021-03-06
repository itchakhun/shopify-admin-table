# shopify-admin-table

Shopify Admin Table for Polaris styled base

## Props

* **headers** : [] - { title: String, access: String }
* **sources** : [] - Key of each source must be match to **access** header above given data for renderColumn
* **renderColumn**: (data) => React Element
* **onRowClick**: Optional row click callback

## Example

```javascript
import React from 'react';

import Table from '../src';

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
```
