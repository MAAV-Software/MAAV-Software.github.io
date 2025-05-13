export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "maav-website/_app",
	assets: new Set([".nojekyll","CNAME","favicon.ico","logo192.png","logo512.png","robots.txt","web-manifest.json"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.CFBeDRQ4.js",app:"_app/immutable/entry/app.Kdd8hEoR.js",imports:["_app/immutable/entry/start.CFBeDRQ4.js","_app/immutable/chunks/7yFJ1RMO.js","_app/immutable/chunks/C8f9r_cT.js","_app/immutable/chunks/CyktOt1T.js","_app/immutable/entry/app.Kdd8hEoR.js","_app/immutable/chunks/C8f9r_cT.js","_app/immutable/chunks/BWKndTCg.js","_app/immutable/chunks/4c14hlzZ.js","_app/immutable/chunks/Bwl-3bdF.js","_app/immutable/chunks/CyktOt1T.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sponsors",
				pattern: /^\/sponsors\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/subteams",
				pattern: /^\/subteams\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/subteams/embedded",
				pattern: /^\/subteams\/embedded\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/subteams/software",
				pattern: /^\/subteams\/software\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/subteams/structures",
				pattern: /^\/subteams\/structures\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
