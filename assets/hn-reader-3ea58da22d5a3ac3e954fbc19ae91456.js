"use strict";define("hn-reader/adapters/application",["exports","ember","emberfire/adapters/firebase"],function(e,t,n){var r=t["default"].inject;e["default"]=n["default"].extend({firebase:r.service()})}),define("hn-reader/adapters/item",["exports","hn-reader/adapters/application"],function(e,t){e["default"]=t["default"].extend({_getCollectionRef:function(e,t){var n=this._ref;return n=e&&t?n.child("item"):n.child("topstories"),t&&(n=n.child(t)),n},findRecord:function(e,t,n){var r=this,a=this._getCollectionRef(t,n),l="DS: FirebaseAdapter#findRecord "+t.modelName+" to "+a.toString();return this._fetch(a,l).then(function(e){var l=r._assignIdToPayload(e);if(r._updateRecordCacheForType(t,l),null===l){var i=new Error("no record was found at "+a.toString());throw i.recordId=n,i}return l})},findAll:function(e,t){var n=this,r=this._getCollectionRef(t);return this._fetch(r).then(function(e){var r=[];return e.forEach(function(e){if(!(r.length>=50)){var a=n._assignIdToPayload(e);a={id:a},n._updateRecordCacheForType(t,a),r.push(a)}}),r})}})}),define("hn-reader/app",["exports","ember","hn-reader/resolver","ember-load-initializers","hn-reader/config/environment"],function(e,t,n,r,a){var l=void 0;t["default"].MODEL_FACTORY_INJECTIONS=!0,l=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),(0,r["default"])(l,a["default"].modulePrefix),e["default"]=l}),define("hn-reader/components/app-version",["exports","ember-cli-app-version/components/app-version","hn-reader/config/environment"],function(e,t,n){var r=n["default"].APP.name,a=n["default"].APP.version;e["default"]=t["default"].extend({version:a,name:r})}),define("hn-reader/components/comment-sheet",["exports","ember"],function(e,t){var n=t["default"].computed;e["default"]=t["default"].Component.extend({classNames:["comment"],classNameBindings:["isDead","isDeleted"],isDead:n.alias("comment.dead"),isDeleted:n.alias("comment.deleted")})}),define("hn-reader/controllers/array",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("hn-reader/controllers/items",["exports","ember"],function(e,t){var n=t["default"].computed;e["default"]=t["default"].Controller.extend({stories:n("model.@each.type",function(){return this.get("model").filterBy("type","story")})})}),define("hn-reader/controllers/object",["exports","ember"],function(e,t){e["default"]=t["default"].Controller}),define("hn-reader/helpers/moment-calendar",["exports","ember","hn-reader/config/environment","ember-moment/helpers/moment-calendar"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("hn-reader/helpers/moment-duration",["exports","ember-moment/helpers/moment-duration"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("hn-reader/helpers/moment-format",["exports","ember","hn-reader/config/environment","ember-moment/helpers/moment-format"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("hn-reader/helpers/moment-from-now",["exports","ember","hn-reader/config/environment","ember-moment/helpers/moment-from-now"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("hn-reader/helpers/moment-to-now",["exports","ember","hn-reader/config/environment","ember-moment/helpers/moment-to-now"],function(e,t,n,r){e["default"]=r["default"].extend({globalAllowEmpty:!!t["default"].get(n["default"],"moment.allowEmpty")})}),define("hn-reader/helpers/now",["exports","ember-moment/helpers/now"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("hn-reader/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){e["default"]=t["default"]}),define("hn-reader/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){e["default"]=t["default"]}),define("hn-reader/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","hn-reader/config/environment"],function(e,t,n){e["default"]={name:"App Version",initialize:(0,t["default"])(n["default"].APP.name,n["default"].APP.version)}}),define("hn-reader/initializers/container-debug-adapter",["exports","ember-resolver/container-debug-adapter"],function(e,t){e["default"]={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0];e.register("container-debug-adapter:main",t["default"]),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("hn-reader/initializers/data-adapter",["exports","ember"],function(e,t){e["default"]={name:"data-adapter",before:"store",initialize:t["default"].K}}),define("hn-reader/initializers/ember-data",["exports","ember-data/setup-container","ember-data/-private/core"],function(e,t,n){e["default"]={name:"ember-data",initialize:t["default"]}}),define("hn-reader/initializers/emberfire",["exports","emberfire/initializers/emberfire"],function(e,t){e["default"]=t["default"]}),define("hn-reader/initializers/export-application-global",["exports","ember","hn-reader/config/environment"],function(e,t,n){function r(){var e=arguments[1]||arguments[0];if(n["default"].exportApplicationGlobal!==!1){var r,a=n["default"].exportApplicationGlobal;r="string"==typeof a?a:t["default"].String.classify(n["default"].modulePrefix),window[r]||(window[r]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("hn-reader/initializers/injectStore",["exports","ember"],function(e,t){e["default"]={name:"injectStore",before:"store",initialize:t["default"].K}}),define("hn-reader/initializers/store",["exports","ember"],function(e,t){e["default"]={name:"store",after:"ember-data",initialize:t["default"].K}}),define("hn-reader/initializers/transforms",["exports","ember"],function(e,t){e["default"]={name:"transforms",before:"store",initialize:t["default"].K}}),define("hn-reader/instance-initializers/ember-data",["exports","ember-data/-private/instance-initializers/initialize-store-service"],function(e,t){e["default"]={name:"ember-data",initialize:t["default"]}}),define("hn-reader/models/item",["exports","ember-data","ember"],function(e,t,n){var r=t["default"].attr,a=t["default"].hasMany,l=t["default"].belongsTo,i=n["default"].computed;e["default"]=t["default"].Model.extend({deleted:r("boolean"),type:r("string"),by:r("string"),time:r("number"),text:r("string"),dead:r("boolean"),url:r("string"),score:r("number"),title:r("string"),parts:r("string"),descendants:r("number"),parent:l("item",{inverse:null,async:!0}),kids:a("item",{inverse:null,async:!0}),date:i("time",function(){return new Date(1e3*this.get("time"))}),domain:i("url",function(){var e=document.createElement("a");return e.href=this.get("url"),e.hostname})})}),define("hn-reader/resolver",["exports","ember-resolver"],function(e,t){e["default"]=t["default"]}),define("hn-reader/router",["exports","ember","hn-reader/config/environment"],function(e,t,n){var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){this.route("items",function(){this.route("item",{path:"/:item_id"})})}),e["default"]=r}),define("hn-reader/routes/index",["exports","ember"],function(e,t){e["default"]=t["default"].Route.extend({beforeModel:function(){this.transitionTo("items")}})}),define("hn-reader/routes/items",["exports","ember","ember-keyboard-shortcuts/mixins/route"],function(e,t,n){var r=t["default"].$;e["default"]=t["default"].Route.extend(n["default"],{model:function(){return this.store.findAll("item")},afterModel:function(e){e.forEach(function(e){e.reload()})},keyboardShortcuts:{j:{action:"nextItem",global:!1},k:{action:"previousItem",global:!1}},actions:{nextItem:function a(){var e=r(".ember-view .active");if(0===e.length){var t=r(".item__list .item").first(),n=t.attr("href").split("/")[2];return void this.transitionTo("items.item",n)}if(0!==e.next().length){var a=e.next().attr("href").split("/")[2];this.transitionTo("items.item",a)}},previousItem:function l(){var e=r(".ember-view .active");if(0!==e.prev().length){var l=e.prev().attr("href").split("/")[2];this.transitionTo("items.item",l)}}}})}),define("hn-reader/serializers/application",["exports","ember","emberfire/serializers/firebase","lodash/object/assign"],function(e,t,n,r){e["default"]=n["default"].extend({normalizeRelationships:function(e,n){var a=this;e.eachRelationship(function(l,i){var d=a.keyForRelationship(l,i.kind,"deserialize");"hasMany"===i.kind&&(n.hasOwnProperty(d)?!function(){var o=n[d];if(a.hasDeserializeRecordsOption(l))if("object"!=typeof o||t["default"].isArray(o)){if(!t["default"].isArray(o))throw new Error(e.toString()+" relationship "+i.kind+"('"+i.type+"') must contain embedded records with an `id`. Example: { \""+l+'": { "'+i.type+'_1": { "id": "'+i.type+'_1" } } } instead got: '+JSON.stringify(n[l]));o=a._addNumericIdsToEmbeddedArray(o)}else o=Object.keys(o).map(function(e){return(0,r["default"])({id:e},o[e])});else if("object"!=typeof o||t["default"].isArray(o)){if(!t["default"].isArray(o))throw new Error(e.toString()+" relationship "+i.kind+"('"+i.type+"') must be a key/value map. Example: { \""+l+'": { "'+i.type+'_1": true } } instead got: '+JSON.stringify(n[l]));o=o.map(function(e){return{id:e,type:i.type}})}else o=Object.keys(o);n[d]=o}():n[d]=[]),"belongsTo"===i.kind&&(n.hasOwnProperty(d)||(n[d]=null))})}})}),define("hn-reader/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t["default"]}})}),define("hn-reader/services/firebase",["exports","emberfire/services/firebase","hn-reader/config/environment"],function(e,t,n){t["default"].config=n["default"],e["default"]=t["default"]}),define("hn-reader/services/moment",["exports","ember","hn-reader/config/environment","ember-moment/services/moment"],function(e,t,n,r){e["default"]=r["default"].extend({defaultFormat:t["default"].get(n["default"],"moment.outputFormat")})}),define("hn-reader/templates/application",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"hn-reader/templates/application.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","main__nav");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","brand");var a=e.createTextNode("Hacker News");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,2,2,n),r},statements:[["content","outlet",["loc",[null,[4,0],[4,10]]]]],locals:[],templates:[]}}())}),define("hn-reader/templates/components/comment-sheet",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:3,column:2},end:{line:5,column:2}},moduleName:"hn-reader/templates/components/comment-sheet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","link-to",[["subexpr","moment-from-now",[["get","comment.date",["loc",[null,[4,31],[4,43]]]]],[],["loc",[null,[4,14],[4,44]]]],"items.item",["get","comment",["loc",[null,[4,58],[4,65]]]]],[],["loc",[null,[4,4],[4,67]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:6,column:2},end:{line:8,column:2}},moduleName:"hn-reader/templates/components/comment-sheet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","is-dead");var r=e.createTextNode("dead");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:9,column:2},end:{line:11,column:2}},moduleName:"hn-reader/templates/components/comment-sheet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("span");e.setAttribute(n,"class","is-deleted");var r=e.createTextNode("deleted");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:18,column:0},end:{line:20,column:0}},moduleName:"hn-reader/templates/components/comment-sheet.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("  ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","comment-sheet",[],["comment",["subexpr","@mut",[["get","reply",["loc",[null,[19,26],[19,31]]]]],[],[]]],["loc",[null,[19,2],[19,33]]]]],locals:["reply"],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes","wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:21,column:0}},moduleName:"hn-reader/templates/components/comment-sheet.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","comment__meta");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","comment__text");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=e.childAt(r,[1]),l=new Array(7);return l[0]=e.createAttrMorph(a,"href"),l[1]=e.createMorphAt(a,0,0),l[2]=e.createMorphAt(r,3,3),l[3]=e.createMorphAt(r,4,4),l[4]=e.createMorphAt(r,5,5),l[5]=e.createUnsafeMorphAt(e.childAt(t,[2]),1,1),l[6]=e.createMorphAt(t,4,4,n),e.insertBoundary(t,null),l},statements:[["attribute","href",["concat",["https://news.ycombinator.com/user?id=",["get","comment.by",["loc",[null,[2,50],[2,60]]]]]]],["content","comment.by",["loc",[null,[2,64],[2,78]]]],["block","if",[["get","comment.date",["loc",[null,[3,8],[3,20]]]]],[],0,null,["loc",[null,[3,2],[5,9]]]],["block","if",[["get","isDead",["loc",[null,[6,8],[6,14]]]]],[],1,null,["loc",[null,[6,2],[8,9]]]],["block","if",[["get","isDeleted",["loc",[null,[9,8],[9,17]]]]],[],2,null,["loc",[null,[9,2],[11,9]]]],["content","comment.text",["loc",[null,[15,2],[15,20]]]],["block","each",[["get","comment.kids",["loc",[null,[18,8],[18,20]]]]],[],3,null,["loc",[null,[18,0],[20,9]]]]],locals:[],templates:[e,t,n,r]}}())}),define("hn-reader/templates/components/loading-spinner",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:6,column:0}},moduleName:"hn-reader/templates/components/loading-spinner.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","spinner");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","bounce1"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","bounce2"),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","bounce3"),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("hn-reader/templates/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"hn-reader/templates/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["inline","link-to",["Items","items"],[],["loc",[null,[1,0],[1,27]]]]],locals:[],templates:[]}}())}),define("hn-reader/templates/items/index-loading",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"hn-reader/templates/items/index-loading.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","loading-spinner",["loc",[null,[1,0],[1,19]]]]],locals:[],templates:[]}}())}),define("hn-reader/templates/items/index",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"triple-curlies"},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"hn-reader/templates/items/index.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","empty__indicator");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("Don't you want to read something?");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("p"),a=e.createTextNode("Go ahead, pick a story from the list.");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("hn-reader/templates/items/item",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:2,column:2},end:{line:5,column:2}},moduleName:"hn-reader/templates/items/item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    Viewing a comment thread. Go back to\n    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("?\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","link-to",["parent","items.item",["get","model.parent",["loc",[null,[4,36],[4,48]]]]],[],["loc",[null,[4,4],[4,50]]]]],locals:[],templates:[]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:5,column:2},end:{line:16,column:2}},moduleName:"hn-reader/templates/items/item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("h1");e.setAttribute(n,"class","item__title");var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n    ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","item__meta");var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" points by\n      ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode(" |\n      ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createTextNode("past");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode(" |\n      ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createTextNode("web");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode(" |\n      ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode(" comments |\n      ");e.appendChild(n,r);var r=e.createElement("a"),a=e.createTextNode("Link");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[3]),a=e.childAt(r,[3]),l=e.childAt(r,[5]),i=e.childAt(r,[7]),d=e.childAt(r,[9]),o=e.childAt(r,[13]),m=new Array(10);return m[0]=e.createMorphAt(e.childAt(t,[1]),0,0),m[1]=e.createMorphAt(r,1,1),m[2]=e.createAttrMorph(a,"href"),m[3]=e.createMorphAt(a,0,0),m[4]=e.createAttrMorph(l,"href"),m[5]=e.createMorphAt(l,0,0),m[6]=e.createAttrMorph(i,"href"),m[7]=e.createAttrMorph(d,"href"),m[8]=e.createMorphAt(r,11,11),m[9]=e.createAttrMorph(o,"href"),m},statements:[["content","model.title",["loc",[null,[6,28],[6,43]]]],["content","model.score",["loc",[null,[8,6],[8,21]]]],["attribute","href",["concat",["https://news.ycombinator.com/user?id=",["get","model.by",["loc",[null,[9,54],[9,62]]]]]]],["content","model.by",["loc",[null,[9,66],[9,78]]]],["attribute","href",["concat",["https://news.ycombinator.com/item?id=",["get","model.id",["loc",[null,[10,54],[10,62]]]]]]],["inline","moment-from-now",[["get","model.date",["loc",[null,[10,84],[10,94]]]]],[],["loc",[null,[10,66],[10,96]]]],["attribute","href",["concat",["https://hn.algolia.com/?query=",["get","model.title",["loc",[null,[11,47],[11,58]]]],"&sort=byDate&dateRange=all&type=story&storyText=false&prefix&page=0"]]],["attribute","href",["concat",["https://www.google.com/search?q=",["get","model.title",["loc",[null,[12,49],[12,60]]]]]]],["content","model.descendants",["loc",[null,[13,6],[13,27]]]],["attribute","href",["get","model.url",["loc",[null,[14,16],[14,25]]]]]],locals:[],templates:[]}}(),n=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:22,column:2},end:{line:24,column:2}},moduleName:"hn-reader/templates/items/item.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["inline","comment-sheet",[],["comment",["subexpr","@mut",[["get","comment",["loc",[null,[23,28],[23,35]]]]],[],[]]],["loc",[null,[23,4],[23,37]]]]],locals:["comment"],templates:[]}}(),r=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:24,column:2},end:{line:26,column:2}},moduleName:"hn-reader/templates/items/item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    No replies.\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"hn-reader/templates/items/item.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","item");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","comment__list");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[0]),a=new Array(3);return a[0]=e.createMorphAt(r,1,1),a[1]=e.createUnsafeMorphAt(r,3,3),a[2]=e.createMorphAt(e.childAt(t,[2]),1,1),a},statements:[["block","if",[["get","model.parent",["loc",[null,[2,8],[2,20]]]]],[],0,1,["loc",[null,[2,2],[16,9]]]],["content","model.text",["loc",[null,[18,2],[18,18]]]],["block","each",[["get","model.kids",["loc",[null,[22,10],[22,20]]]]],[],2,3,["loc",[null,[22,2],[26,11]]]]],locals:[],templates:[e,t,n,r]}}())}),define("hn-reader/templates/items/loading",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"hn-reader/templates/items/loading.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","loading-spinner",["loc",[null,[1,0],[1,19]]]]],locals:[],templates:[]}}())}),define("hn-reader/templates/items-loading",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){return{meta:{fragmentReason:{name:"missing-wrapper",problems:["wrong-type","multiple-nodes"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:5,column:0}},moduleName:"hn-reader/templates/items-loading.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","empty__indicator");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createElement("h1"),a=e.createTextNode("Loading Stories");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),r},statements:[["content","loading-spinner",["loc",[null,[1,0],[1,19]]]]],locals:[],templates:[]}}())}),define("hn-reader/templates/items",["exports"],function(e){e["default"]=Ember.HTMLBars.template(function(){var e=function(){var e=function(){var e=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:8,column:10},end:{line:10,column:10}},moduleName:"hn-reader/templates/items.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("            (");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode(")\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,1,1,n),r},statements:[["content","item.domain",["loc",[null,[9,13],[9,28]]]]],locals:[],templates:[]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:3,column:4},end:{line:19,column:4}},moduleName:"hn-reader/templates/items.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","item__info");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","item__title");var a=e.createComment("");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("span");e.setAttribute(r,"class","item__meta");var a=e.createTextNode("\n          ");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode(" points\n");e.appendChild(r,a);var a=e.createComment("");e.appendChild(r,a);var a=e.createTextNode("        ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n      ");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","item__comment_info");var r=e.createTextNode("\n        ");e.appendChild(n,r);var r=e.createElement("i");e.setAttribute(r,"class","comment__icon");var a=e.createTextNode("\n          ");e.appendChild(r,a),e.setNamespace("http://www.w3.org/2000/svg");var a=e.createElement("svg");e.setAttribute(a,"xmlns","http://www.w3.org/2000/svg"),e.setAttribute(a,"xmlns:xlink","http://www.w3.org/1999/xlink"),e.setAttribute(a,"version","1.1"),e.setAttribute(a,"x","0px"),e.setAttribute(a,"y","0px"),e.setAttribute(a,"viewBox","0 0 100 100"),e.setAttribute(a,"enable-background","new 0 0 100 100"),e.setAttributeNS(a,"http://www.w3.org/XML/1998/namespace","xml:space","preserve");var l=e.createElement("path");e.setAttribute(l,"clip-rule","evenodd"),e.setAttribute(l,"d","M50,10C25.145,10,5,18.865,5,42.5  c0,20.75,15.525,30.115,36.135,32.095C46.3,83.485,53.86,89.81,70,90c-2.975-4.545-3.475-10.67-1.955-16.875  C83.915,69.435,95,60.035,95,42.5C95,18.865,74.855,10,50,10 M85,42.5c0,7.05-1.99,16.88-19.22,20.885l-5.98,1.39l-1.465,5.965  c-0.55,2.24-0.9,4.455-1.045,6.615c-3.38-1.805-5.585-4.47-7.51-7.785l-2.58-4.44l-5.11-0.49C15,62.04,15,47.33,15,42.5  C15,27.57,26.775,20,50,20S85,27.57,85,42.5z"),e.appendChild(a,l),e.appendChild(r,a);var a=e.createTextNode("\n        ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n        ");
e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n      ");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[1]),a=e.childAt(r,[3]),l=new Array(4);return l[0]=e.createMorphAt(e.childAt(r,[1]),0,0),l[1]=e.createMorphAt(a,1,1),l[2]=e.createMorphAt(a,3,3),l[3]=e.createMorphAt(e.childAt(t,[3]),3,3),l},statements:[["content","item.title",["loc",[null,[5,34],[5,48]]]],["content","item.score",["loc",[null,[7,10],[7,24]]]],["block","if",[["get","item.domain",["loc",[null,[8,16],[8,27]]]]],[],0,null,["loc",[null,[8,10],[10,17]]]],["content","item.descendants",["loc",[null,[17,8],[17,28]]]]],locals:[],templates:[e]}}();return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:2,column:2},end:{line:20,column:2}},moduleName:"hn-reader/templates/items.hbs"},isEmpty:!1,arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(1);return r[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),e.insertBoundary(t,null),r},statements:[["block","link-to",["items.item",["get","item",["loc",[null,[3,28],[3,32]]]]],["class","item"],0,null,["loc",[null,[3,4],[19,16]]]]],locals:["item"],templates:[e]}}(),t=function(){return{meta:{fragmentReason:!1,revision:"Ember@2.4.3",loc:{source:null,start:{line:20,column:2},end:{line:22,column:2}},moduleName:"hn-reader/templates/items.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("    ");e.appendChild(t,n);var n=e.createElement("p");e.setAttribute(n,"class","item");var r=e.createTextNode("No items. Go outside?");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}();return{meta:{fragmentReason:{name:"missing-wrapper",problems:["multiple-nodes"]},revision:"Ember@2.4.3",loc:{source:null,start:{line:1,column:0},end:{line:28,column:0}},moduleName:"hn-reader/templates/items.hbs"},isEmpty:!1,arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","item__list");var r=e.createTextNode("\n");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","item__detail");var r=e.createTextNode("\n  ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=new Array(2);return r[0]=e.createMorphAt(e.childAt(t,[0]),1,1),r[1]=e.createMorphAt(e.childAt(t,[2]),1,1),r},statements:[["block","each",[["get","stories",["loc",[null,[2,10],[2,17]]]]],[],0,1,["loc",[null,[2,2],[22,11]]]],["content","outlet",["loc",[null,[26,2],[26,12]]]]],locals:[],templates:[e,t]}}())}),define("hn-reader/torii-providers/firebase",["exports","emberfire/torii-providers/firebase"],function(e,t){e["default"]=t["default"]}),define("hn-reader/config/environment",["ember"],function(e){var t="hn-reader";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(l){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests||require("hn-reader/app")["default"].create({name:"hn-reader",version:"0.0.0+98441a72"});