# JavaScript Starter Kit

## Running the Environment
### Start
#### ```npm run start -s```

Will silence much of the console output. 

If you wat the full output, use `npm run start`. The application  will start the following services either way.

+ Security Check
+ Linting
+ Watching
+ Mocha Tests
+ Babel Transpiling
+ Start Mock API
+ Generate Mock Data
+ Start JSON Server


***
#### Share Mode
`npm run share`: Start the app and expose a global URL to share with clients. Note that this is a separate command and cannot but run in conjunction with `npm start`.

`npm run localtunnel`: Use this command in a new terminal window to expose a global IP if the environment is running.


***
#### Mock Data Generation
`generate-mock-data`: Generate mock data for JSON server via schema.

`start-mockapi`: Start JSON server

### Links
#### Travis
https://travis-ci.org/PatrickDePuydt/JavaScriptStarterKit

##### TODO
+ Browsersync Server
+ Add Sass
+ Webpack 2
+ Demo App
+ Docker
+ Add Common Js Functions Utils
