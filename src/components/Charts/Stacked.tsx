import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

type TStackedProps = {
  width: string
  height: string
};

export const Stacked = ({ width, height }: TStackedProps): JSX.Element => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id="charts"
      primaryXAxis={{ valueType: 'Category', labelIntersectAction: 'Rotate45', ...stackedPrimaryXAxis }}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
      legendSettings={{ background: 'white' }}
    >
      <Inject services={[Category, StackingColumnSeries, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) =>
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};
