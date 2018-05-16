## Pomodoro-Music Application

YoutubeMusic client in React + Redux and backend in FireBase

## Features

## Stack

・React(Create-React-App)

・Redux/Redux-saga

・React-Router/React-Router-dom

・Firebase Real time database

・Firebase Storage

・Firebase Authentication

・Firebase Hosting

## Quick Start

```
npm install
yarn start
```

## design system

select atomic design system(http://atomicdesign.bradfrost.com/chapter-2/)

write css in the container and apply it to atoms and molecules

```example
container - MyMusic.jsx
          |
          styles -
                 |- MyMusic.jsx

components - Molecules - MyMusicList.jsx
           |           |
           |           |-MyMusicDisplay.jsx
           |
           |-atoms - MyMusicListBtn.jsx
                   |
                   |-MyMusicListBtn.jsx
```
