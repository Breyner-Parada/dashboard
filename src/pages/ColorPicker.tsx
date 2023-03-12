import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';
import { Header } from '../components';

type Props = {
  currentValue: {
    hex: string
    rgba: string
  }
  name: string
  previousValue: {
    hex: string
    rgba: string
  }
  value: string
};

const change = (args: Props): void => {
  const preview = document.getElementById('preview');
  if (preview != null) {
    preview.style.backgroundColor = args.currentValue.hex;
  }
};

export const ColorPicker = (): any => {
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white
  rounded-3xl"
    >
      <Header category="App" title="Color Picker" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={change}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
