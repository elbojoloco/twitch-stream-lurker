**Table of contents**
- [Introduction](#introduction)
- [Installation](#installation)
- [Requirements](#requirements)
- [Using Google Chrome on linux](#using-google-chrome-on-linux)
- [To-do](#to-do)

<a name="introduction"></a>
# Introduction

[twitch-stream-lurker](https://github.com/elbojoloco/twitch-stream-lurker) is a package I created with [puppeteer](https://github.com/GoogleChrome/puppeteer) to lurk Twitch streams on your Twitch account. Many Twitch channels have a "stream currency" that the viewers can save up simply by watching their livestreams. The currency can usually be spent on merchandise or using special commands in the chat that use currency. Sometimes it's also possible to gamble the currency using chat commands, this might be a neat feature to add in the future.

<a name="installation"></a>
# Installation

The installation process is very simple and should work on any environment that has access to the `node` and `npm` commands. To install `twitch-stream-lurker` simply perform these steps:
1. `git clone git@github.com:elbojoloco/twitch-stream-lurker.git`
2. `cd twitch-stream-lurker`
3. `npm install`
4. `npm run setup`
5. Fill in the blanks in the generated `settings.json`
And you're good to go! To run the program simply execute `npm run lurk`

<a name="requirements"></a>
# Requirements

- Node >= 7.6.0

Before being able to run this script on linux, you will need to perform some extra steps.

1. run: `sudo apt-get install gconf-service libasound2 libatk1.0-0 libatk-bridge2.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget`
2. After all this is installed, you can run `npm run lurk` without errors.

<a name="usinggooglechromeonlinux"></a>
# Using Google Chrome on linux

If you want to ensure media playback works correctly (especially mp4) you will want to use the Google Chrome engine instead of Chromium. To use Google Chrome on linux all you have to do is the following:
1. `wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb`
2. `sudo dpkg -i google-chrome-stable_current_amd64.deb`
3. Change the `executablePath` option in `settings.json` to `"/usr/bin/google-chrome"`

<a name="todo"></a>
# To-do
- [ ] Detect and solve reCAPTCHA
- [ ] Accept cookies
- [ ] Accept "mature audiences" wall
- [x] Add linux support & instructions

**Ideas**

- [ ] Accept gamble commands in settings
- [ ] Accept custom gamble callback