# Consulta CEP

[![Build Status](https://travis-ci.org/marcelorl/consulta-cep.svg?branch=master)](https://travis-ci.org/marcelorl/consulta-cep) [![Greenkeeper badge](https://badges.greenkeeper.io/marcelorl/consulta-cep.svg)](https://greenkeeper.io/)

App to search for addresses by zipcode

## installation

```
$ npm i
```

 - Create a Google API Key allowing maps feature in [here](https://cloud.google.com/maps-platform/?__utma=102347093.1222537744.1539235609.1555578768.1555578768.1&__utmb=102347093.0.10.1555578768&__utmc=102347093&__utmx=-&__utmz=102347093.1555578768.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=160591421&_ga=2.60080429.1888402051.1555577720-1222537744.1539235609#get-started).
 - Then paste this API Key within the file `.env.local` replacing `REACT_APP_GOOGLE_MAPS_API_KEY` value.

## development

```
$ npm start
```

## build

```
$ npm run build
```

## lint

```
$ npm run lint
```
