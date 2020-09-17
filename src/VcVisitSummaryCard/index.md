VcVisitSummaryCard example:

```js
const timeline = [
  {
    message: 'Something taken',
    timeStamp: '01:00',
  },
  {
    message: 'Visit Started',
    timeStamp: '00:00',
  },
];

<div style={{ width: '470px', margin: 'auto' }}>
  <VcVisitSummaryCard timeline={timeline} />
</div>;
```
