import React from 'react';
import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  Tooltip,
  DataLabel,
  ColumnSeries
} from '@syncfusion/ej2-react-charts';
import { Header } from '../../components';
import {
  barChartData,
  barPrimaryXAxis,
  barPrimaryYAxis,
  barCustomSeries
} from '../../data/dummy';

export const Bar = (): JSX.Element => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header title="Bar" category="Chart" />
      <div className="w-full">
        <ChartComponent
          id="bar-chart"
          height="420px"
          primaryXAxis={{ valueType: 'Category', ...barPrimaryXAxis }}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{ enable: true }}
        >
          <Inject
            services={[Category, Legend, Tooltip, ColumnSeries, DataLabel]}
          />
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index} {...item} />
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};
