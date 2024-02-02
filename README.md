# React Mouse Tooltip

React Mouse Tooltip is a react component that shows a tooltip that follows the user's mouse cursor. It supports different positions, colors, animations and custom content inside the tooltip.

![React Mouse Tooltip Example GIF](https://i.ibb.co/jRn8j9k/tooltip-example.gif)

## Installation

You can install React Mouse Tooltip using npm:

```sh
npm i react-mouse-tooltip
```

## Usage

To use React Mouse Tooltip you need to import it into your project:

```js
import React from 'react';
import Tooltip from 'react-mouse-tooltip';

function App() {
  return (
    <div>
      <Tooltip content="Tooltip content">
        <h1>Hello Tooltip!</h1>
      </Tooltip>
    </div>
  );
}

export default App;
```

## Configuration

You can customize the appearance and behavior of the tooltip by passing different props to the `<Tooltip />` component. Here is a list of available props and their default values:

| Prop            |        Type         |       Default       | Description                                                                                                      |
| :-------------- | :-----------------: | :-----------------: | :--------------------------------------------------------------------------------------------------------------- |
| content         | ReactNode / string  |          -          | **Required prop.** The custom content that will be displayed inside the tooltip. Can be any valid react element. |
| transform       |       string        | `translate(0,25px)` | CSS transform property. The position of the tooltip relative to the mouse cursor.                                |
| className       |       string        |        `''`         |
| wrapperDivProps | Record<string, any> |     `undefined`     | These props will be added to wrapper `div` element.                                                              |
| any other props |       ...rest       |     `undefined`     | Any other props will be added to tooltip `div` element                                                           |

## License

MIT

**Free Software, Hell Yeah!**
