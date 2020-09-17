VcCardexTabs example:

```js
<VcCardexTabs
  editButtonLabel={'EDIT'}
  editTabsSizes={[1, 1, 1]}
  tabLabels={['tab1', 'tab2', 'tab3']}
  editTabs={[1, 2, 3]}
  onEditRow={a => console.log(a)}
  onTabChange={a => console.log(a)}
  rows={[1, 2]}
  values={[
    {
      hasEdit: true,
      type: 'Nurse',
      timeDisplay: '01:00 AM',
      notesValues: 'test1',
    },
    {
      hasEdit: false,
      type: 'Nurse',
      timeDisplay: '11:00 AM',
      notesValues: 'test2',
    },
    {
      hasEdit: false,
      type: 'Doctor',
      timeDisplay: '04:20 PM',
      notesValues: 'test3',
    },
  ]}
/>
```
