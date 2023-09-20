---
index: 0
title: WeckPi
description: Extensible alarm clock software built for the Raspberry Pi with music streaming and other cool features.
technologies:
  - javascript
  - svelte
  - python
links:
  - name: GitHub Repository
    url: https://github.com/bennetrr/weckpi
  - name: Documentation
    url: https://weckpi.docs.bennetr.me
---

The WeckPi is an extensible alarm clock software built for the Raspberry Pi.
You can build your own plugins to add new features or extend existing ones.

The WeckPi is able to stream music from your local network, internet radio stations and even streaming services
(currently only TIDAL is supported, but as long as they have a public API, you can implement any streaming service).
There is also a web interface that allows you to display information like the time,
today's weather or your timetable, control the music and set the alarm times and change other settings.

Everything can be customized using plugins.
You can add new music services, information sources and much more.
You could even display the time on a 16-character LCD or make some cool animations using a LED strip.
There is no specific hardware combination where the WeckPi was designed for.
You don't even have to run it on a Raspberry Pi.
As long as your device supports Docker or Python and Node.js, it should work.
