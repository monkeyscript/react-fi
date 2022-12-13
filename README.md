## React-FI

React component library for Feather icons.

### Installation

```
npm i react-fi
```

### Usage

```javascript
import React from "react";
import { FiCamera } from "react-fi";

const App = () => {
  return <FiCamera />;
};

export default App;
```

Icons can be configured with inline props:

```javascript
<FiCamera color="red" size={48} />
```
