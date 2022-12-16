# React-FI

![npm](https://img.shields.io/npm/v/react-fi)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-fi)
![NPM](https://img.shields.io/npm/l/react-fi)

React library for [Feather icons](https://feathericons.com/).

## Installation

```
$ npm i react-fi
```

## Usage

```javascript
import React from "react";
import { FiActivity } from "react-fi";

const App = () => {
  return <FiActivity />;
};

export default App;
```

Icons can be configured with inline props :

```javascript
<FiActivity color="red" size={48} />
```

You can also include the whole icon pack :

```javascript
import React from "react";
import * as ReactFI from "react-fi";

const App = () => {
  return <ReactFI.FiActivity />;
};

export default App;
```

## Issues & Contributions

For a new feature, create an issue [here](https://github.com/monkeyscript/react-fi/issues). Open to all contributions :)

## License

Apache-2.0. Please see the [license file](https://github.com/monkeyscript/react-fi/blob/master/LICENSE) for more information.
