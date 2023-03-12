import React from 'react';

import { pieChartData } from '../../data/dummy';
import { Header, Doughnut } from '../../components';

export const Pie = (): JSX.Element => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Chart" title="Project Cost Breakdown" />
    <div className="w-full">
      <Doughnut id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
);
