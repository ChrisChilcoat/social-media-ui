# Social Media UI

A collection of widgets and layouts from popular social media applications.

[View Demo](https://chrischilcoat.github.io/social-media-ui/)

## Install

    npm install


## Start

    npm run start

## Deploy site update to github pages.

This project uses the [gh-pages](https://www.npmjs.com/package/gh-pages) to package and deploy site updates to Github Pages.

To push an update open `package.json` and update the production branch number in the deploy script.

    "deploy": "npm run build&&gh-pages -b production_0.0.3 -d build"

Build and deploy to the new branch.

    npm run deploy

Set Github Pages to use the newly created branch.

[Update Branch](https://github.com/ChrisChilcoat/social-media-ui/settings/pages)