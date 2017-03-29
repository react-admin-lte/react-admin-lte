import React from 'react';
import { action, storiesOf } from '@kadira/storybook';
import 'admin-lte/plugins/datatables/dataTables.bootstrap.css';
import DataTable from './DataTable';

const data = [[
  'Gecko', 'Firefox 1.0', 'Win 98+ / OSX.2+', '1.7', 'A',
], [
  'Gecko', 'Firefox 1.5', 'Win 98+ / OSX.2+', '1.8', 'A',
], [
  'Gecko', 'Firefox 2.0', 'Win 98+ / OSX.2+', '1.8', 'A',
], [
  'Gecko', 'Firefox 3.0', 'Win 2k+ / OSX.3+', '1.9', 'A',
], [
  'Gecko', 'Camino 1.0', 'OSX.2+', '1.8', 'A',
], [
  'Gecko', 'Camino 1.5', 'OSX.3+', '1.8', 'A',
], [
  'Gecko', 'Netscape 7.2', 'Win 95+ / MacOS 8.6-9.2', '1.7', 'A',
], [
  'Gecko', 'Netscape Browser 8', 'Win 98SE+', '1.7', 'A',
], [
  'Gecko', 'Netscape Navigator 9', 'Win 98+ / OSX.2+', '1.8', 'A',
], [
  'Gecko', 'Mozilla 1.0', 'Win 95+ / OSX.1+', '1', 'A',
]];

const renderItem = item =>
  item.map((cell, index) => (
    <td key={index}>{cell}</td>
  ));

const renderItems = items =>
  items.map((item, index) => (
    <tr key={index}>{renderItem(item)}</tr>
  ));

const renderTable = (items, totalItems, currentPage, pageSize, sorting) => {
  return (
    <DataTable
      totalItems={totalItems}
      currentPage={currentPage}
      onPageClick={action('page click')}
      pageSize={pageSize}
    >
      <thead>
        <tr>
          <DataTable.HeaderCell
            sorted={sorting}
            onClick={action('header click')}
          >
            Rendering engine
          </DataTable.HeaderCell>
          <DataTable.HeaderCell
            onClick={action('click')}
          >
            Browser
          </DataTable.HeaderCell>
          <DataTable.HeaderCell
            onClick={action('click')}
          >
            Platform(s)
          </DataTable.HeaderCell>
          <DataTable.HeaderCell
            onClick={action('click')}
          >
            Engine version
          </DataTable.HeaderCell>
          <DataTable.HeaderCell
            onClick={action('click')}
          >
            CSS grade
          </DataTable.HeaderCell>
        </tr>
      </thead>
      <tfoot>
        <tr>
          <th>Rendering engine</th>
          <th>Browser</th>
          <th>Platform(s)</th>
          <th>Engine version</th>
          <th>CSS grade</th>
        </tr>
      </tfoot>
      <tbody>{renderItems(items)}</tbody>
    </DataTable>
  );
};

storiesOf('DataTable', module)
  .addDecorator(story => (
    <div
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
      }}
    >{story()}</div>
  ))
  .add('no items', () => (
    renderTable([], 0, 1, 10)
  ))
  .add('first page', () => (
    renderTable(data, 40, 1, 10)
  ))
  .add('intermediary page', () => (
    renderTable(data, 40, 2, 10)
  ))
  .add('total items less than page count', () => (
    renderTable(data.slice(-3), 33, 4, 10)
  ))
  .add('total items equal to page count', () => (
    renderTable(data, 40, 4, 10)
  ))
  .add('sorted ascending', () => (
    renderTable(data, 40, 4, 10, 'asc')
  ))
  .add('sorted descending', () => (
    renderTable(data, 40, 4, 10, 'desc')
  ));
