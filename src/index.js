import React, { Component } from 'react';
import { Header, Body } from './components';
import styled from 'styled-components';

class Table extends Component {
  get bodySources() {
    const { sources, headers } = this.props;
    // sources = [[],...]
    return sources.map(s => ({
      columns: headers.map(h => ({ key: h.access, data: s[h.access] })),
      key: s.id
    }));
  }
  render() {
    const { headers, renderColumn } = this.props;
    return (
      <TableWrap>
        <table>
          <Header headers={headers} />
          <Body renderColumn={renderColumn} sources={this.bodySources} />
        </table>
      </TableWrap>
    );
  }
}

const activeRow = `:active {
  background-color: #ddd;
}`;

const TableWrap = styled.div`
  table {
    border-spacing: 0;
    border-collapse: collapse;
    width: 100%;
    font-family: -apple-system, 'BlinkMacSystemFont', 'San Francisco', 'Roboto',
      'Segoe UI', 'Helvetica Neue', sans-serif;
    font-size: 1.4rem;
    color: #1a1919;

    tbody {
      tr {
        :nth-child(odd) {
          background: #fafbfc;
        }
        :last-child td {
          border-bottom-width: 0;
        }
        :hover {
          background-color: #eee;
        }
        ${({ onClickRow }) => (onClickRow ? activeRow : '')};
      }
    }

    th,
    td {
      padding: 1.2rem 1.5rem;
      text-align: left;
    }
    th {
      font-weight: normal;
      border-bottom: 0.1rem solid #d3dbe2;
    }
    tr:hover,
    th:hover {
      cursor: pointer;
    }
    th:empty:hover {
      cursor: default;
    }
    td .icon-image {
      float: left;
      display: inline-block;
      min-width: 2.4rem;
      min-height: 2.4rem;
    }
    td .icon-image:after {
      min-width: 2.4rem;
      min-height: 2.4rem;
      background-size: 24px 24px;
      /* IE requires pixels. Using cover/contain/rem values cause blurry edges */
      vertical-align: middle;
      display: inline-block;
    }
    &.results tr td {
      padding-top: 0.8rem;
      padding-bottom: 0.8rem;
    }
    &.summary th {
      padding: 0 0 2rem 0;
      border: 0;
      font-size: 1.2rem;
      font-weight: 600;
      text-transform: uppercase;
    }
    &.summary th:hover {
      cursor: auto;
      background-color: transparent;
      color: inherit;
    }
    &.summary th span {
      float: right;
      color: #707070;
      text-transform: none;
      font-weight: 300;
    }
    &.summary tr:hover {
      background-color: transparent;
    }
    &.summary tr td {
      padding: 0.4rem 0;
      border: 0;
    }
    &.summary tr td:first-child {
      width: 67%;
    }
    &.summary tr td:last-child {
      text-align: right;
      color: #95a7b7;
    }
  }
`;

export default Table;
