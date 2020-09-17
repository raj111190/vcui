# vc-ui

> Vecna Cares UI Components based on [Material UI](https://material-ui.com/)

[![Pipeline](https://gitlab.com/vecnacares/vc-ui/badges/master/pipeline.svg)](https://gitlab.com/vecnacares/vc-ui/commits/master)
[![Coverage](https://gitlab.com/vecnacares/vc-ui/badges/master/coverage.svg)](https://gitlab.com/vecnacares/vc-ui/commits/master)
[![NPM](https://img.shields.io/npm/v/@vecnacares/vc-ui.svg)](https://www.npmjs.com/package/@vecnacares/vc-ui)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add @vecnacares/vc-ui
```

## Usage

```jsx
import React, { Component } from 'react';

import { VcButton } from '@vecnacares/vc-ui';

class Example extends Component {
  render() {
    return <VcButton value="Click Me" />;
  }
}
```

## Gitlab workflow

1. Make sure you have a gitlab account.
   - Optionally set up ssh keys for your convenience. See https://docs.gitlab.com/ee/gitlab-basics/create-your-ssh-keys.html
2. Clone or pull most recent changes
   - If it's the first time working on this project, clone it `git clone git@gitlab.com:VecnaCares/vc-ui.git`
   - Otherwise pull the most recent changes `git checkout master && git pull --rebase`
3. Create a branch. The name of the branch should reflect the issue you are working on. This is usually the Jira ID. For example IDE-1234
4. Make changes and push to the branch. `git push origin <branchName>`
5. Open a merge request by either following the link in the git console or following instructions outlined here https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html
6. Add reviewer(s)
7. Once the review is done, merge the code into the master branch

## Development

- The src directory contains all the components
- The example directory contains examples of using the components defined in src
- Run `yarn start` to compile and watch changes in the src directory
- Run `yarn styleguide` to start the styleguide server for component documentation
- Run `cd example && yarn start` to start and watch development server in the example directory
- Test can be run by running `yarn test`
- Code will be automatically formatted by [prettier](https://prettier.io/) on each commit

## Using unpublished changes in example

The example subproject has dependency on vc-ui. To test changes made to vc-ui without publishing them to npm, we have to link the vc-ui package.

#### Linking

First, in the vc-ui folder (where package.json is):

```bash
npm link
```

Then in the example folder link the module:

```bash
npm link @vecnacares/vc-ui
```

#### Unlinking

To revert to the published version on npm, run the following in the example directory

```bash
npm unlink --no-save @vecnacares/vc-ui
```

Next, in vc-ui directory

```bash
npm unlink
```

## Documentation

We use style react [styleguidist](https://react-styleguidist.js.org/) to document components.

Read how to document components [here](https://react-styleguidist.js.org/docs/documenting.html)

Documentation is published on gitlab pages [here](https://vecnacares.gitlab.io/vc-ui/styleguide/)
and the components demo is [here](https://vecnacares.gitlab.io/vc-ui/demo)

## License

MIT © [VecnaCares](https://gitlab.com/VecnaCares)
