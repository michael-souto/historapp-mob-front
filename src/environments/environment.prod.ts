export const environment = {
  production: true,

  tokenGetter: "tokenHistorapp",
  //authorizationApi: "ZGV0cmFzb2Z0LWlkLWFkbWluOmRldHJhc29mdC1zZWNyZXQtYWRtaW4=",
  authorizationApi: "ZGV0cmFzb2Z0LWtleS1hcHAtaGlzdG9yYXBwLTIwMjM6ZGV0cmFzb2Z0LXNlY3JldC1hcHAtaGlzdG9yYXBwLTIwMjM=",

  urlProject: "https:/historapp.detrasoft.com",
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
