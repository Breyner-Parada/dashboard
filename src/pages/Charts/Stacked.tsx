import React from 'react';

import { Header, Stacked } from '../../components';

export const StackedChart = (): JSX.Element => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Charts" title="Stacked" />
    <div className="w-full">
      <Stacked width='100%' height='600px' />
    </div>
  </div>
);
