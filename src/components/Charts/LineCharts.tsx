import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend, Tooltip, LineSeries } from '@syncfusion/ej2-react-charts';
import { lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis } from '../../data/dummy';
import { useStateValue } from '../../contexts/ContextProvider';

export const LineCharts = (): JSX.Element => {
  const { currentMode } = useStateValue();
  return (
    <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={{ valueType: 'DateTime', edgeLabelPlacement: 'Shift', intervalType: 'Years', ...LinePrimaryXAxis }}
    primaryYAxis={{ rangePadding: 'None', ...LinePrimaryYAxis }}
    chartArea={{ border: { width: 0 } }}
    tooltip={{ enable: true }}
    background={currentMode === 'Dark' ? '#33373E' : '#ffffff'}
    >
      <Inject services={[DateTime, Legend, Tooltip, LineSeries]} />
      <SeriesCollectionDirective>
        {lineCustomSeries.map((item, index) => (
          <SeriesDirective key={index} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
