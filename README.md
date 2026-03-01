# GloboTicket workspace

The same system stored two ways. Clone whichever you need beside this file.

## One repository

    git clone https://github.com/globomantics-demos/mpg-globoticket monorepo

## Five repositories

    git clone https://github.com/globomantics-demos/mpg-common common
    git clone https://github.com/globomantics-demos/mpg-ticket-service ticket-service
    git clone https://github.com/globomantics-demos/mpg-event-service event-service
    git clone https://github.com/globomantics-demos/mpg-user-service user-service
    git clone https://github.com/globomantics-demos/mpg-api-gateway api-gateway

## registry/

Stands in for npm or Artifactory so the demos run offline. A service repository
records a version in its package.json and loads that version from here.
