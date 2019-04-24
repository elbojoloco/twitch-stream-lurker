**Table of contents**
- [Introduction](#introduction)
- [Installation](#installation)
- [Requirements](#requirements)
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

<a name="todo"></a>
# To-do
- [ ] Detect and solve reCAPTCHA

**Ideas**

- [ ] Accept gamble commands in settings
- [ ] Accept custom gamble callback