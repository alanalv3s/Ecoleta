<h1 align="center">
    <img alt="Ecoleta" title="Ecoleta" src="web/src/assets/logo.svg" width="200px" />
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/alanalv3s/Ecoleta?style=flat-square">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/alanalv3s/Ecoleta">
	
  <a href="https://www.linkedin.com/in/alan-alves-silva/">
    <img alt="Made by DanielObara" src="https://img.shields.io/badge/made%20by-alanalv3s-blue">
  </a>

  <a href="https://github.com/alanalv3s/Ecoleta/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/alanalv3s/Ecoleta">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
   <a href="https://github.com/alanalv3s/Ecoleta/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/alanalv3s/Ecoleta?style=social">
  </a>
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

##  Project ♻️

Ecoleta is a project developed based on international environment week. 
That aims to connect people to companies that collect specific waste such as light bulbs, batteries, cooking oil, etc.

### Web:
<h1 align="center">
    <img alt="Example" title="Example" src="./.github/Ecoleta_web.gif"/>
</h1>

### Mobile:
<h1 align="center">
    <img alt="Example" title="Example" src="https://ik.imagekit.io/alanalv3s/Ecoleta_mobile_Fy2GTPsws.gif"/>
</h1>

## Technologies :rocket: 

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## How To Use :information_source: 

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [Yarn][yarn] installed on your computer.

From your command line:

### Install API 

```bash
# Clone this repository
$ git clone git@github.com:alanalv3s/Ecoleta.git

# Go into the repository
$ cd Ecoleta/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Run Seeds
$ yarn knex:seed

# Start server
$ yarn dev

# running on port 3333
```

### Install Front-end

```bash
# Clone this repository
$ git clone git@github.com:alanalv3s/Ecoleta.git

# Go into the repository
$ cd Ecoleta/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Install Mobile

```bash
# Clone this repository
$ git clone git@github.com:alanalv3s/Ecoleta.git

# Go into the repository
$ cd Ecoleta/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, run this:
$ expo install expo-font @expo-google-fonts/ubuntu @expo-google-fonts/roboto

```

## Want to contribute? 🤔 

- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## License :memo: 

This project is under the MIT license. See the [LICENSE](https://github.com/alanalv3s/Ecoleta/blob/master/LICENSE) for details.

#

Made with ♥ by Alan Alves 👨‍💻 [Get in touch!](https://www.linkedin.com/in/alan-alves-silva/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vs]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
