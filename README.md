Automated builds of x3dom library
========================

## Setup

### Needed Software

Following software is need for running and developing this project:

 * Git - http://git-scm.com/
 * npm - https://www.npmjs.com/


### Installing all dependend libraries

Install all dependend libraries with:

```
npm install
```


### Creating and deploying a new x3dom build

By running the following comand the project will fetch most recent x3dom master-branch, start the x3dom build system, and commit the new files to the x3dom-dist repository. Version is bumped automatically.

**NOTE**: Due to the size of the x3dom repository, initial cloning may take some minutes.

```
npm run release
```

For only building, without committing the builded code, use

```
npm run bundle
```
