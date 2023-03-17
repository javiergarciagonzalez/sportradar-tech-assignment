# sportradar-tech-assignment
Technical assignment for a Sr Frontend Engineer position at [Sportradar](https://sportradar.com)

![](./public/wc-banner.webp)

## Scoreboard Library
This is a very simple Typescript library that consists of three classes: **Scoreboard**, **Game**, and **Team**. The *Scoreboard* class manages a list of games, each represented by a *Game* object. Each game has two teams, represented by *Team* objects. The library provides functionality for starting and finishing games, updating game scores, and getting a summary of games by total score.

## React App
A very lightweight react app that uses the Scoreboard library. It can be used as a Playground.

## Install
Run
```sh
npm i // or yarn
```

## Development
Run
```sh
npm run dev // or yarn dev
```
to spin up the development server.
Then, go to [](http://localhost:5173/) to see the demo app running.

## Test

Unit tests are ara available when running the following command:
```sh
npm t // or npm test or yarn test
```
### Coverage
It is also possible to generate a local report with coverage information. It also shows the report on CLI when running the following command:

```sh
npm run test:coverage // or yarn test:coverage
```
