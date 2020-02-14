# Weather App

<p align="center">
  <img src="https://i.imgur.com/Ky8x6lA.png" height="536"/>
</p>

## Prerequisites

What things you need to install the software and how to install them

- [Node](https://nodejs.org/)
- [Yarn](https://yarnpkg.com/)
- [Expo](https://expo.io/)

## Installation

Install Expo CLI globally

```bash
# with npm
$ npm install -g expo-cli

# with yarn
$ yarn global add expo-cli
```

Then login with an existing account

```bash
$ expo login
```

And finally install project dependencies

```bash
$ yarn install
```

Generate a `API_KEY` in https://openweathermap.org/current
Create a `.env` file and add a your api key as exemple bellow
```
API_KEY="your key"
```

## Running the app

```bash
# development
$ yarn start

# android mode
$ yarn android

# ios mode
$ yarn ios

# web mode
$ yarn web
```

## Test

```bash
# unit tests
$ yarn test
```
