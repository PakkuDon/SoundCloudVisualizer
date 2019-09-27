# SoundCloud Visualizer

[Demo](http://pakkudon.github.io/SoundCloudVisualizer/)

Just playing around with the SoundCloud and Web Audio APIs.

Note: Visualisations will not work in Internet Explorer as the Web Audio API is not supported in IE. (See: [MDN | Web Audio API#Browser Compatibility](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API#Browser_compatibility))

## Local development instructions

Clone this repo. Then:
```sh
cd SoundCloudVisualizer
yarn install
yarn dev
```

## Project History
- 2015
  - [First commit](https://github.com/PakkuDon/SoundCloudVisualizer/commit/325fe6331e3a242c1484f3fe38d64efc66f17991)
  - First iteration using vanilla HTML, CSS and JS
- 2016
  - Started managing dependencies using `bower.json` and `package.json`
  - Migrated to Angular 1
  - Used gulp for build tasks
- 2019
  - Removed `bower.json`
  - Started managing dependencies using Yarn
  - Migrated from gulp to webpack
  - Migrated from Angular 1 to React

## References

[Visualizations with Web Audio API - Web API Interfaces | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Visualizations_with_Web_Audio_API)
