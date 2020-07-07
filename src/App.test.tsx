import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import axios from 'axios';

import App from './App';

jest.mock('uuid', () => ({ v4: () => 'unit-test-uuid' }));

const mockMaterials = [
  {
    id: "abba",
    name: "Sand",
    volume: 220,
    deliverDate: "2020-09-14",
    color: "teal",
    cost: 10000,
  },
  {
    id: "dabba",
    name: "Crushed Stone",
    volume: 450,
    deliverDate: "2020-07-07",
    color: "purple",
    cost: 5000,
  }
];

const origErr = console.error;
console.error = jest.fn();

describe('Cesium Material Form', () => {
  beforeAll(() => {
    jest.spyOn(axios, 'get').mockImplementation(() => Promise.resolve({ data: mockMaterials }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    console.error = origErr;
  });

  describe('Loading', () => {
    it('renders the loading screen', () => {
      const r = render(<App />);
      expect(r.getByTestId('cesium-material-loading')).toBeInTheDocument();
    });
  })
  
  describe('After Loading', () => {
    it('renders the tool after the GET promise resolves', () => {
      const r = render(<App />);
      process.nextTick(() => {
        expect(r.getByTestId('cesium-material-tool')).toBeInTheDocument();
      });      
    });

    it('includes all of the expected inputs', () => {
      const expectedTestIds = [
        "currency-field-input",
        "date-field-input",
        "number-field-input",
        "text-field-input"
      ];
      const r = render(<App />);
      process.nextTick(() => {
        for (const dataId of expectedTestIds) {
          expect(r.getByTestId(dataId)).toBeInTheDocument();
        }        
      });      
    });

    it('updates the table when the name field has changed', () => {
      const r = render(<App />);
      process.nextTick(() => {
        fireEvent.change(r.getByTestId("text-field-input"), { target: { value: "Unit Test"} });
        expect(r.getByTestId("material-table-row-abba")).toHaveTextContent("Unit Test");
      });
    });

    it('deletes the selected row when clicking delete button', () => {
      const r = render(<App />);
      process.nextTick(() => {
        fireEvent.click(r.getByTestId("material-tool-delete-btn"));
        expect(r.queryAllByTestId("material-table-row-abba")).toHaveLength(0);
      });
    });

    it('creates a new material record and makes it the active selection when clicking add button', () => {
      const r = render(<App />);
      process.nextTick(() => {
        fireEvent.click(r.getByTestId("material-tool-add-btn"));
        expect(r.queryAllByTestId("material-table-row-unit-test-uuid")).toHaveLength(1);
      });
    });

    it('displays the total cost, the sum of all materials', () => {
      const r = render(<App />);
      process.nextTick(() => {
        fireEvent.click(r.getByTestId("material-tool-total-cost"));
        expect(r.getByTestId("material-tool-total-cost")).toHaveTextContent("$4,450,000.00");
      });
    });
  });
});
