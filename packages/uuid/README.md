# @nativescript/uuid

```javascript
ns plugin add @nativescript/uuid
```

This is a working NS8 version of https://github.com/owen-it/nativescript-uuid

## Usage

#### JavaScript

```js
const nsUuid = require('nativescript-uuid');

const uuid = nsUuid.getUUID();
console.log(`The device UUID is ${uuid}`);
```

#### TypeScript

```typescript
import { getUUID } from 'nativescript-uuid';

const uuid = getUUID();
console.log(`The device UUID is ${uuid}`);
```

## License

Apache License Version 2.0
