// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  tokenGetter: "tokenHistorapp",
  //authorizationApi: "ZGV0cmFzb2Z0LWlkLWFkbWluOmRldHJhc29mdC1zZWNyZXQtYWRtaW4=",
  authorizationApi: "ZGV0cmFzb2Z0LWtleS1hcHAtaGlzdG9yYXBwLTIwMjM6ZGV0cmFzb2Z0LXNlY3JldC1hcHAtaGlzdG9yYXBwLTIwMjM=",

  urlProject: "http://localhost:8100",
  apiUrlAdm: "https://api.historapp.detrasoft.com/auth",
  apiURLGateway: "https://api.historapp.detrasoft.com",

  tokenAllowedDomains: [
    new RegExp('localhost'),
    new RegExp('detrasoft.com'),
    new RegExp('www.detrasoft.com'),
    new RegExp('detrasoft.com.br'),
    new RegExp('www.detrasoft.com.br'),
    new RegExp('api.historapp.detrasoft.com'),
    new RegExp('api.historapp.detrasoft.com.br'),
    new RegExp('historapp.detrasoft.com'),
    new RegExp('historapp.detrasoft.com.br'),
  ],
  tokenDisallowedRoutes: [new RegExp('\/oauth\/token')],
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
