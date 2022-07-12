((e,t=("undefined"!=typeof document?document.currentScript.dataset:module.exports))=>{t.routes=JSON.stringify(e)})({dc:{_options:{path:"/:dc"},index:{_options:{path:"/",redirect:"../services"}},show:{_options:{path:"/overview",abilities:["access overview"]},serverstatus:{_options:{path:"/server-status",abilities:["read servers"]}},cataloghealth:{_options:{path:"/catalog-health",abilities:["access overview"]}},license:{_options:{path:"/license",abilities:["read license"]}}},peers:{_options:{path:"/peers"},index:{_options:{path:"/"}},edit:{_options:{path:"/:name"},addresses:{_options:{path:"/addresses"}}}},services:{_options:{path:"/services"},index:{_options:{path:"/",queryParams:{sortBy:"sort",status:"status",source:"source",kind:"kind",searchproperty:{as:"searchproperty",empty:[["Partition","Name","Tags","PeerName"]]},search:{as:"filter",replace:!0}}}},show:{_options:{path:"/:name"},instances:{_options:{path:"/instances",queryParams:{sortBy:"sort",status:"status",source:"source",searchproperty:{as:"searchproperty",empty:[["Name","Node","Tags","ID","Address","Port","Service.Meta","Node.Meta"]]},search:{as:"filter",replace:!0}}}},intentions:{_options:{path:"/intentions"},index:{_options:{path:"",queryParams:{sortBy:"sort",access:"access",searchproperty:{as:"searchproperty",empty:[["SourceName","DestinationName"]]},search:{as:"filter",replace:!0}}}},edit:{_options:{path:"/:intention_id"}},create:{_options:{template:"../edit",path:"/create"}}},topology:{_options:{path:"/topology"}},services:{_options:{path:"/services",queryParams:{sortBy:"sort",instance:"instance",searchproperty:{as:"searchproperty",empty:[["Name","Tags"]]},search:{as:"filter",replace:!0}}}},upstreams:{_options:{path:"/upstreams",queryParams:{sortBy:"sort",instance:"instance",searchproperty:{as:"searchproperty",empty:[["Name","Tags"]]},search:{as:"filter",replace:!0}}}},routing:{_options:{path:"/routing"}},tags:{_options:{path:"/tags"}}},instance:{_options:{path:"/:name/instances/:node/:id",redirect:"./healthchecks"},healthchecks:{_options:{path:"/health-checks",queryParams:{sortBy:"sort",status:"status",check:"check",searchproperty:{as:"searchproperty",empty:[["Name","Node","CheckID","Notes","Output","ServiceTags"]]},search:{as:"filter",replace:!0}}}},upstreams:{_options:{path:"/upstreams",queryParams:{sortBy:"sort",search:{as:"filter",replace:!0},searchproperty:{as:"searchproperty",empty:[["DestinationName","LocalBindAddress","LocalBindPort"]]}}}},exposedpaths:{_options:{path:"/exposed-paths"}},addresses:{_options:{path:"/addresses"}},metadata:{_options:{path:"/metadata"}}},notfound:{_options:{path:"/:name/:node/:id"}}},nodes:{_options:{path:"/nodes"},index:{_options:{path:"",queryParams:{sortBy:"sort",status:"status",searchproperty:{as:"searchproperty",empty:[["Node","Address","Meta"]]},search:{as:"filter",replace:!0}}}},show:{_options:{path:"/:name"},healthchecks:{_options:{path:"/health-checks",queryParams:{sortBy:"sort",status:"status",kind:"kind",check:"check",searchproperty:{as:"searchproperty",empty:[["Name","Service","CheckID","Notes","Output","ServiceTags"]]},search:{as:"filter",replace:!0}}}},services:{_options:{path:"/service-instances",queryParams:{sortBy:"sort",status:"status",source:"source",searchproperty:{as:"searchproperty",empty:[["Name","Tags","ID","Address","Port","Service.Meta"]]},search:{as:"filter",replace:!0}}}},rtt:{_options:{path:"/round-trip-time"}},metadata:{_options:{path:"/metadata"}}}},intentions:{_options:{path:"/intentions"},index:{_options:{path:"/",queryParams:{sortBy:"sort",access:"access",searchproperty:{as:"searchproperty",empty:[["SourceName","DestinationName"]]},search:{as:"filter",replace:!0}}}},edit:{_options:{path:"/:intention_id",abilities:["read intentions"]}},create:{_options:{template:"../edit",path:"/create",abilities:["create intentions"]}}},kv:{_options:{path:"/kv"},index:{_options:{path:"/",queryParams:{sortBy:"sort",kind:"kind",search:{as:"filter",replace:!0}}}},folder:{_options:{template:"../index",path:"/*key"}},edit:{_options:{path:"/*key/edit"}},create:{_options:{template:"../edit",path:"/*key/create",abilities:["create kvs"]}},"root-create":{_options:{template:"../edit",path:"/create",abilities:["create kvs"]}}},acls:{_options:{path:"/acls",abilities:["access acls"]},policies:{_options:{path:"/policies",abilities:["read policies"]},edit:{_options:{path:"/:id"}},create:{_options:{path:"/create",abilities:["create policies"]}}},roles:{_options:{path:"/roles",abilities:["read roles"]},edit:{_options:{path:"/:id"}},create:{_options:{path:"/create",abilities:["create roles"]}}},tokens:{_options:{path:"/tokens",abilities:["access acls"]},edit:{_options:{path:"/:id"}},create:{_options:{path:"/create",abilities:["create tokens"]}}},"auth-methods":{_options:{path:"/auth-methods",abilities:["read auth-methods"]},show:{_options:{path:"/:id"},"auth-method":{_options:{path:"/auth-method"}},"binding-rules":{_options:{path:"/binding-rules"}},"nspace-rules":{_options:{path:"/nspace-rules"}}}}},"routing-config":{_options:{path:"/routing-config/:name"}}},index:{_options:{path:"/"}},settings:{_options:{path:"/settings"}},setting:{_options:{path:"/setting",redirect:"../settings"}},notfound:{_options:{path:"/*notfound"}}})
