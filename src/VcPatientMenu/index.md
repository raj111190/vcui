VcPatientMenu example:

```js
import { menus } from './sample_data';

<div style={{ float: 'left', width: '200px' }}>
  <VcPatientMenu menus={menus} onMenuClick={menu => console.log(menu)} />
</div>;
```
