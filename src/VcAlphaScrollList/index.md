VcAlphaScrollList example:

```js
<VcAlphaScrollList
  selectedOptions={[{ display: 'Abc' }, { display: 'Bb' }, { display: 'Dc' }]}
  options={[
    { display: 'Abc' },
    { display: 'Bb' },
    { display: 'Cc' },
    { display: 'Dc' },
    { display: 'Ec' },
    { display: 'Fc' },
  ]}
  highlighted={[{ display: 'Cc' }, { display: 'Dc' }]}
  title="Add summary"
  toggleSelected={() => console.log('selected')}
  onToggle={() => console.log('submit')}
/>
```
