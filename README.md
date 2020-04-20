# detect-touch-device
Javascript library to detect touch friendly devices. This is a wrapper for the implementation from
[mozilla](https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent)

# Installation
npm install detect-touch-device

## Usage
### Javascript
```javascript
var device = require('detect-touch-device');
console.log(device.isMobile);
```
### TypeScript
```typescript
import { device } from 'mypluralize';
console.log(device.isMobile)
```