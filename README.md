[![Known Vulnerabilities](https://snyk.io/test/github/ra3-se/quake3-server-report/badge.svg?targetFile=package.json)](https://snyk.io/test/github/ra3-se/quake3-server-report?targetFile=package.json)
[![Build Status](https://travis-ci.org/ra3-se/quake3-server-report.svg?branch=master)](https://travis-ci.org/ra3-se/quake3-server-report)
[![dependencies Status](https://david-dm.org/ra3-se/quake3-server-report/status.svg)](https://david-dm.org/ra3-se/quake3-server-report)

# Quake 3 Server Event Parser and Reporter

Features:

* Parse Quake 3 log messages
* Report server events to multiple procotols and services
  * Discord
  * Databases (Checkout knex.js for supported databases)
  * websocket
  * stdout with color support
  * statsd
