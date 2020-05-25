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

## Logfile cleanup

### Split log in sessions

```
csplit 2020-05-01.log "/------ Server Initialization ------/" "{*}"
```

## TODO

* Translate to typescript - as development dependency only.

### Split into multiple applications

* Each reporter is it's own executable.
* Use [lerna](https://lerna.js.org/) to separate each application package.
* Use [command-line-args](https://www.npmjs.com/package/command-line-args) for options.
* Each application will have a dependency to the event parser, less expensive then passing and parsing JSON.

Example commands:
```
$ cat games.log | \
	q3log-summary | \
	q3log-websocket -p 3031 | \
	q3log-discordHook --id "id" --token "token" | \
	q3log-statsd -h localhost | \
	q3log-db sqlite3 -c "./dev.sqlite3.db" | \
	q3log-pretty
```

Example lerna:

```
- packages
  - q3log-summary
	- q3log-db
	- q3log-command
	- q3log-parser
```

#### Benefits

* Possible to only include the application of choice
* Each application with it's own isolated dependencies
* No more event handling, everything is handled with streams.
* Document every reporter options separately
* Easily configured docker instance, no configuration file!
