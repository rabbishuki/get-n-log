<!-- [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) -->


[![npm](https://img.shields.io/npm/v/get-n-log.svg?style=social&logo=npm)](https://www.npmjs.com/package/get-n-log)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/minzip/get-n-log.svg?style=social&logo=github&logoColor=green)](https://www.npmjs.com/package/get-n-log) [![License](http://img.shields.io/:license-mit-blue.svg?style=social)](http://badges.mit-license.org)
# get-n-log

> Escaping the dreaded `console` error:

[![Uncaught TypeError: Cannot read property 'sourceTarget' of undefined](https://imgur.com/S6bHZXw.png)]()

***Because isn't this way much better?***

[![](https://imgur.com/Hf0KQ7x.png)]()

---

## Table of Contents

<!-- - [Installation](#installation) -->
- [Features](#features)
- [Example](#example)
- [Contributing](#contributing)
<!-- - [Team](#team) -->
<!-- - [FAQ](#faq) -->
<!-- - [Support](#support) -->
<!-- - [License](#license) -->

---

## Features

- No dependecies!
- Your javascript won't fail if you are looking for something that doesn't exist.
- You will be able to look at the stack trace and find the location of your error.

---

## Example

> In your project directory

```shell
# Install fron NPM
$ npm install -save get-n-log
```

> In your code
```typescript
import {get} from 'get-n-log';

...

// Use it like this:
getSafe(() => obj.a.lot.of.properties);

// or add an optional default value:
getSafe(() => obj.a.lot.of.properties, 'nothing');

```

---

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/rabbishuki/get-n-log.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

### Step 3

- 🔃 Create a new pull request using <a href="https://github.com/rabbishuki/get-n-log/compare/" target="_blank">`https://github.com/rabbishuki/get-n-log/compare/`</a>.

---

<!-- 

## Features
## Usage (Optional)
## Documentation (Optional)
## Tests (Optional)

- Going into more detail on code and technologies used
- I utilized this nifty <a href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet" target="_blank">Markdown Cheatsheet</a> for this sample `README`.

---

## Team

> Or Contributors/People

| <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> | <a href="http://fvcproductions.com" target="_blank">**FVCproductions**</a> |
| :---: |:---:| :---:|
| [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)    | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com) | [![FVCproductions](https://avatars1.githubusercontent.com/u/4284691?v=3&s=200)](http://fvcproductions.com)  |
| <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> | <a href="http://github.com/fvcproductions" target="_blank">`github.com/fvcproductions`</a> |

- You can just grab their GitHub profile image URL
- You should probably resize their picture using `?s=200` at the end of the image URL.

---

## FAQ

- **How do I do *specifically* so and so?**
    - No problem! Just do this.

---

## Support

Reach out to me at one of the following places!

- Website at <a href="http://fvcproductions.com" target="_blank">`fvcproductions.com`</a>
- Twitter at <a href="http://twitter.com/fvcproductions" target="_blank">`@fvcproductions`</a>
- Insert more social links here.

---

## Donations (Optional)

- You could include a <a href="https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png" target="_blank">Gratipay</a> link as well.

[![Support via Gratipay](https://cdn.rawgit.com/gratipay/gratipay-badge/2.3.0/dist/gratipay.png)](https://gratipay.com/fvcproductions/)

-->
