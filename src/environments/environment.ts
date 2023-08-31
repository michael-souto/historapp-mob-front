// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  tokenGetter: "tokenHistorapp",
  authorizationApi: "ZGV0cmFzb2Z0LWlkLWFkbWluOmRldHJhc29mdC1zZWNyZXQtYWRtaW4=",
  //authorizationApi: "ZGV0cmFzb2Z0LWtleS1hcHAtaGlzdG9yYXBwLTIwMjM6ZGV0cmFzb2Z0LXNlY3JldC1hcHAtaGlzdG9yYXBwLTIwMjM=",

  urlProject: "http://localhost:8100",
  apiUrlAdm: "http://localhost:5555/auth",
  apiURLGateway: "http://localhost:5555",

  tokenAllowedDomains: [
    new RegExp("localhost")
  ],
  tokenDisallowedRoutes: [new RegExp("/oauth/token")],
};

//localStorage.setItem("tokenHistorapp","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWciOm51bGwsImJ1c2luZXNzIjoiTWljaGFlbCBTb3V0byBbSGlzdG9yQVBQXSIsImlkX2RldHJhc29mdCI6NCwidXNlcl9uYW1lIjoibWljaGFlbC5zb3V0b0BkZXRyYXNvZnQuY29tIiwibGFzdF9uYW1lIjoiU291dG8iLCJ1cmxfaG9tZSI6bnVsbCwiaWRfdXNlciI6MiwidHlwZSI6IkRlZmF1bHQiLCJhdXRob3JpdGllcyI6WyJERUZBVUxUIl0sImNsaWVudF9pZCI6ImRldHJhc29mdC1rZXktYXBwLWhpc3RvcmFwcC0yMDIzIiwicGhvbmUiOm51bGwsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE2ODQyMDA4NjYsImZpcnN0X25hbWUiOiJNaWNoYWVsIiwianRpIjoiLUZjcnlQd1YxRGo2eEhnMkJQdHlDWjJ0NlZrIiwiZW1haWwiOiJtaWNoYWVsLnNvdXRvQGRldHJhc29mdC5jb20ifQ.UMaqzJHWs0r48ftMdUcHLZkaXwutGAcSBjO8n-avGZk")
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
