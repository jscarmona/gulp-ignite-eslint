# gulp-ignite-eslint

[![Build Status](https://travis-ci.org/jscarmona/gulp-ignite-eslint.svg?branch=master)](https://travis-ci.org/jscarmona/gulp-ignite-eslint)
[![npm](https://img.shields.io/npm/dt/gulp-ignite-eslint.svg?maxAge=2592000)]()
[![GitHub tag](https://img.shields.io/github/release/jscarmona/gulp-ignite-eslint.svg?maxAge=2592000)]()

## install

**NPM**

```bash
$ npm install --save-dev gulp-ignite gulp-ignite-eslint
```

## example

```js
'use strict';

import ignite from 'gulp-ignite';
import eslint from 'gulp-eslint';

const tasks = [eslint];
const options = {
  eslint: {},
};

ignite.start(tasks, options);

```

## usage

Run eslint on src files.

```bash
$ gulp eslint
```

##### options
- `src` - The source files that should be linted. (**Default:** `['./client/app/**/*.js']`)
- `options` - Options to pass through to the ESlint CLIEngine. Check out [eslint options](http://eslint.org/docs/developer-guide/nodejs-api#cliengine) to see the full list. (**Default:** `{}`)
- `deps` - Any gulp tasks that task would be dependent of. (**Default:** `[]`)

## license

The MIT License (MIT)

Copyright (c) 2016 Javier Carmona

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
