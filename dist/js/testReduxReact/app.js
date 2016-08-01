webpackJsonp([2],[function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){switch(t){case d.VisibilityFilters.SHOW_ALL:return e;case d.VisibilityFilters.SHOW_COMPLETED:return e.filter(function(e){return e.completed});case d.VisibilityFilters.SHOW_ACTIVE:return e.filter(function(e){return!e.completed})}}function a(e){return{visibleTodos:u(e.todos,e.visibilityFilter),visibilityFilter:e.visibilityFilter}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),p=r(1),l=n(p),f=r(30),d=r(29),h=r(44),y=n(h),b=r(45),v=n(b),P=r(47),O=n(P),g=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.dispatch,r=e.visibleTodos,n=e.visibilityFilter;return console.log("App component"),console.log(r),console.log(n),l["default"].createElement("div",null,l["default"].createElement(y["default"],{onAddClick:function(e){return t((0,d.addTodo)(e))}}),l["default"].createElement(v["default"],{todos:this.props.visibleTodos,onTodoClick:function(e){return t(completeTodo(e))}}),l["default"].createElement(O["default"],{filter:"SHOW_ALL",onFilterChange:function(e){return t((0,d.setVisibilityFilter)(e))}}))}}]),t}(p.Component);t["default"]=g,g.propTypes={visibleTodos:PropTypes.arrayOf(PropTypes.shape({text:PropTypes.string.isRequired,completed:PropTypes.bool.isRequired})),visibilityFilter:PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired},t["default"]=(0,f.connect)(a)(g)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){"use strict";function r(e){return console.log("action addTodo:"),{type:s,text:e}}function n(e,t){return console.log("editTodo:"),{type:u,index:e,text:t}}function o(e){return console.log("action toggleTodo:"),{type:a,index:e}}function i(e){return{type:c,filter:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addTodo=r,t.editTodo=n,t.toggleTodo=o,t.setVisibilityFilter=i;var s=t.ADD_TODO="ADD_TODO",u=t.EDIT_TODO="EDIT_TODO",a=t.TOGGLE_TODO="TOGGLE_TODO",c=t.SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER";t.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}t.__esModule=!0,t.connect=t.Provider=void 0;var o=r(31),i=n(o),s=r(35),u=n(s);t.Provider=i["default"],t.connect=u["default"]},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){d||(d=!0,(0,f["default"])("<Provider> does not support changing `store` on the fly. It is most likely that you see this error because you updated to Redux 2.x and React Redux 2.x which no longer hot reload reducers automatically. See https://github.com/reactjs/react-redux/releases/tag/v2.0.0 for the migration instructions."))}t.__esModule=!0,t["default"]=void 0;var a=r(1),c=r(33),p=n(c),l=r(34),f=n(l),d=!1,h=function(e){function t(r,n){o(this,t);var s=i(this,e.call(this,r,n));return s.store=r.store,s}return s(t,e),t.prototype.getChildContext=function(){return{store:this.store}},t.prototype.render=function(){var e=this.props.children;return a.Children.only(e)},t}(a.Component);t["default"]=h,"production"!==e.env.NODE_ENV&&(h.prototype.componentWillReceiveProps=function(e){var t=this.store,r=e.store;t!==r&&u()}),h.propTypes={store:p["default"].isRequired,children:a.PropTypes.element.isRequired},h.childContextTypes={store:p["default"].isRequired}}).call(t,r(32))},function(e,t){function r(){l&&c&&(l=!1,c.length?p=c.concat(p):f=-1,p.length&&n())}function n(){if(!l){var e=s(r);l=!0;for(var t=p.length;t;){for(c=p,p=[];++f<t;)c&&c[f].run();f=-1,t=p.length}c=null,l=!1,u(e)}}function o(e,t){this.fun=e,this.array=t}function i(){}var s,u,a=e.exports={};!function(){try{s=setTimeout}catch(e){s=function(){throw new Error("setTimeout is not defined")}}try{u=clearTimeout}catch(e){u=function(){throw new Error("clearTimeout is not defined")}}}();var c,p=[],l=!1,f=-1;a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];p.push(new o(e,t)),1!==p.length||l||s(n,0)},o.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=i,a.addListener=i,a.once=i,a.off=i,a.removeListener=i,a.removeAllListeners=i,a.emit=i,a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(1);t["default"]=n.PropTypes.shape({subscribe:n.PropTypes.func.isRequired,dispatch:n.PropTypes.func.isRequired,getState:n.PropTypes.func.isRequired})},function(e,t){"use strict";function r(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(t){}}t.__esModule=!0,t["default"]=r},function(e,t,r){(function(e){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e){return e.displayName||e.name||"Component"}function a(e,t){try{return e.apply(t)}catch(r){return D.value=r,D}}function c(t,r,n){var c=arguments.length<=3||void 0===arguments[3]?{}:arguments[3],f=Boolean(t),h=t||S,b=void 0;b="function"==typeof r?r:r?(0,v["default"])(r):C;var P=n||j,g=c.pure,T=void 0===g||g,w=c.withRef,x=void 0!==w&&w,R=T&&P!==j,k=M++;return function(t){function r(e,t){(0,m["default"])(e)||(0,O["default"])(t+"() in "+c+" must return a plain object. "+("Instead received "+e+"."))}function n(t,n,o){var i=P(t,n,o);return"production"!==e.env.NODE_ENV&&r(i,"mergeProps"),i}var c="Connect("+u(t)+")",v=function(u){function d(e,t){o(this,d);var r=i(this,u.call(this,e,t));r.version=k,r.store=e.store||t.store,(0,E["default"])(r.store,'Could not find "store" in either the context or '+('props of "'+c+'". ')+"Either wrap the root component in a <Provider>, "+('or explicitly pass "store" as a prop to "'+c+'".'));var n=r.store.getState();return r.state={storeState:n},r.clearCache(),r}return s(d,u),d.prototype.shouldComponentUpdate=function(){return!T||this.haveOwnPropsChanged||this.hasStoreStateChanged},d.prototype.computeStateProps=function(t,n){if(!this.finalMapStateToProps)return this.configureFinalMapState(t,n);var o=t.getState(),i=this.doStatePropsDependOnOwnProps?this.finalMapStateToProps(o,n):this.finalMapStateToProps(o);return"production"!==e.env.NODE_ENV&&r(i,"mapStateToProps"),i},d.prototype.configureFinalMapState=function(t,n){var o=h(t.getState(),n),i="function"==typeof o;return this.finalMapStateToProps=i?o:h,this.doStatePropsDependOnOwnProps=1!==this.finalMapStateToProps.length,i?this.computeStateProps(t,n):("production"!==e.env.NODE_ENV&&r(o,"mapStateToProps"),o)},d.prototype.computeDispatchProps=function(t,n){if(!this.finalMapDispatchToProps)return this.configureFinalMapDispatch(t,n);var o=t.dispatch,i=this.doDispatchPropsDependOnOwnProps?this.finalMapDispatchToProps(o,n):this.finalMapDispatchToProps(o);return"production"!==e.env.NODE_ENV&&r(i,"mapDispatchToProps"),i},d.prototype.configureFinalMapDispatch=function(t,n){var o=b(t.dispatch,n),i="function"==typeof o;return this.finalMapDispatchToProps=i?o:b,this.doDispatchPropsDependOnOwnProps=1!==this.finalMapDispatchToProps.length,i?this.computeDispatchProps(t,n):("production"!==e.env.NODE_ENV&&r(o,"mapDispatchToProps"),o)},d.prototype.updateStatePropsIfNeeded=function(){var e=this.computeStateProps(this.store,this.props);return(!this.stateProps||!(0,y["default"])(e,this.stateProps))&&(this.stateProps=e,!0)},d.prototype.updateDispatchPropsIfNeeded=function(){var e=this.computeDispatchProps(this.store,this.props);return(!this.dispatchProps||!(0,y["default"])(e,this.dispatchProps))&&(this.dispatchProps=e,!0)},d.prototype.updateMergedPropsIfNeeded=function(){var e=n(this.stateProps,this.dispatchProps,this.props);return!(this.mergedProps&&R&&(0,y["default"])(e,this.mergedProps))&&(this.mergedProps=e,!0)},d.prototype.isSubscribed=function(){return"function"==typeof this.unsubscribe},d.prototype.trySubscribe=function(){f&&!this.unsubscribe&&(this.unsubscribe=this.store.subscribe(this.handleChange.bind(this)),this.handleChange())},d.prototype.tryUnsubscribe=function(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=null)},d.prototype.componentDidMount=function(){this.trySubscribe()},d.prototype.componentWillReceiveProps=function(e){T&&(0,y["default"])(e,this.props)||(this.haveOwnPropsChanged=!0)},d.prototype.componentWillUnmount=function(){this.tryUnsubscribe(),this.clearCache()},d.prototype.clearCache=function(){this.dispatchProps=null,this.stateProps=null,this.mergedProps=null,this.haveOwnPropsChanged=!0,this.hasStoreStateChanged=!0,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,this.renderedElement=null,this.finalMapDispatchToProps=null,this.finalMapStateToProps=null},d.prototype.handleChange=function(){if(this.unsubscribe){var e=this.store.getState(),t=this.state.storeState;if(!T||t!==e){if(T&&!this.doStatePropsDependOnOwnProps){var r=a(this.updateStatePropsIfNeeded,this);if(!r)return;r===D&&(this.statePropsPrecalculationError=D.value),this.haveStatePropsBeenPrecalculated=!0}this.hasStoreStateChanged=!0,this.setState({storeState:e})}}},d.prototype.getWrappedInstance=function(){return(0,E["default"])(x,"To access the wrapped instance, you need to specify { withRef: true } as the fourth argument of the connect() call."),this.refs.wrappedInstance},d.prototype.render=function(){var e=this.haveOwnPropsChanged,r=this.hasStoreStateChanged,n=this.haveStatePropsBeenPrecalculated,o=this.statePropsPrecalculationError,i=this.renderedElement;if(this.haveOwnPropsChanged=!1,this.hasStoreStateChanged=!1,this.haveStatePropsBeenPrecalculated=!1,this.statePropsPrecalculationError=null,o)throw o;var s=!0,u=!0;T&&i&&(s=r||e&&this.doStatePropsDependOnOwnProps,u=e&&this.doDispatchPropsDependOnOwnProps);var a=!1,c=!1;n?a=!0:s&&(a=this.updateStatePropsIfNeeded()),u&&(c=this.updateDispatchPropsIfNeeded());var f=!0;return f=!!(a||c||e)&&this.updateMergedPropsIfNeeded(),!f&&i?i:(x?this.renderedElement=(0,l.createElement)(t,p({},this.mergedProps,{ref:"wrappedInstance"})):this.renderedElement=(0,l.createElement)(t,this.mergedProps),this.renderedElement)},d}(l.Component);return v.displayName=c,v.WrappedComponent=t,v.contextTypes={store:d["default"]},v.propTypes={store:d["default"]},"production"!==e.env.NODE_ENV&&(v.prototype.componentWillUpdate=function(){this.version!==k&&(this.version=k,this.trySubscribe(),this.clearCache())}),(0,_["default"])(v,t)}}var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};t.__esModule=!0,t["default"]=c;var l=r(1),f=r(33),d=n(f),h=r(36),y=n(h),b=r(37),v=n(b),P=r(34),O=n(P),g=r(38),m=n(g),T=r(42),_=n(T),w=r(43),E=n(w),S=function(e){return{}},C=function(e){return{dispatch:e}},j=function(e,t,r){return p({},r,e,t)},D={value:null},M=0}).call(t,r(32))},function(e,t){"use strict";function r(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=Object.prototype.hasOwnProperty,i=0;i<r.length;i++)if(!o.call(t,r[i])||e[r[i]]!==t[r[i]])return!1;return!0}t.__esModule=!0,t["default"]=r},function(e,t,r){"use strict";function n(e){return function(t){return(0,o.bindActionCreators)(e,t)}}t.__esModule=!0,t["default"]=n;var o=r(27)},function(e,t,r){function n(e){if(!s(e)||f.call(e)!=u||i(e))return!1;var t=o(e);if(null===t)return!0;var r=p.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&c.call(r)==l}var o=r(39),i=r(40),s=r(41),u="[object Object]",a=Object.prototype,c=Function.prototype.toString,p=a.hasOwnProperty,l=c.call(Object),f=a.toString;e.exports=n},function(e,t){function r(e){return n(Object(e))}var n=Object.getPrototypeOf;e.exports=r},function(e,t){function r(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(r){}return t}e.exports=r},function(e,t){function r(e){return!!e&&"object"==typeof e}e.exports=r},function(e,t){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,arguments:!0,arity:!0},o="function"==typeof Object.getOwnPropertySymbols;e.exports=function(e,t,i){if("string"!=typeof t){var s=Object.getOwnPropertyNames(t);o&&(s=s.concat(Object.getOwnPropertySymbols(t)));for(var u=0;u<s.length;++u)if(!(r[s[u]]||n[s[u]]||i&&i[s[u]]))try{e[s[u]]=t[s[u]]}catch(a){}}return e}},function(e,t,r){(function(t){"use strict";var r=function(e,r,n,o,i,s,u,a){if("production"!==t.env.NODE_ENV&&void 0===r)throw new Error("invariant requires an error message argument");if(!e){var c;if(void 0===r)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var p=[n,o,i,s,u,a],l=0;c=new Error(r.replace(/%s/g,function(){return p[l++]})),c.name="Invariant Violation"}throw c.framesToPop=1,c}};e.exports=r}).call(t,r(32))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),c=n(a),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){var e=this;return c["default"].createElement("div",null,c["default"].createElement("input",{type:"text",ref:"input"}),c["default"].createElement("button",{onClick:function(t){return e.handleClick(t)}},"Add"))}},{key:"handleClick",value:function(e){var t=(0,a.findDOMNode)(this.refs.input),r=t.value.trim();this.props.onAddClick(r),t.value=" "}}]),t}(a.Component);t["default"]=p,p.propTypes={onAddClick:a.PropTypes.func.isRequired}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(1),p=n(c),l=r(46),f=n(l),d=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),a(t,[{key:"render",value:function(){var e=this;console.log("TODOLIST.js");var t=this.props.todos[0];console.log(t),console.log(u({},t));var r=u({},t),n=r.text,o=r.completed;return console.log(n),console.log(o),p["default"].createElement("ul",null,this.props.todos.map(function(t,r){return p["default"].createElement(f["default"],u({},t,{key:r,onClick:function(){return e.props.onTodoClick(r)}}))}))}}]),t}(c.Component);t["default"]=d,d.propTypes={onTodoClick:c.PropTypes.func.isRequired,todos:c.PropTypes.arrayOf(c.PropTypes.shape({text:c.PropTypes.string.isRequired,completed:c.PropTypes.bool.isRequired}).isRequired).isRequired}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),c=n(a),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"render",value:function(){return console.log("todojs"),console.log(this.props),c["default"].createElement("li",{onClick:this.props.onClick,style:{textDecoration:this.props.completed?"line-through":"none",cursor:this.props.completed?"default":"pointer"}},this.props.text)}}]),t}(a.Component);t["default"]=p,p.propTypes={onClick:a.PropTypes.func.isRequired,text:a.PropTypes.string.isRequired,completed:a.PropTypes.bool.isRequired}},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(1),c=n(a),p=function(e){function t(){return o(this,t),i(this,Object.getPrototypeOf(t).apply(this,arguments))}return s(t,e),u(t,[{key:"renderFilter",value:function(e,t){var r=this;return e===this.props.filter?t:c["default"].createElement("a",{href:"#",onClick:function(t){t.preventDefault(),r.props.onFilterChange(e)}},t)}},{key:"render",value:function(){return c["default"].createElement("p",null,"Show:"," ",this.renderFilter("SHOW_ALL","All"),", ",this.renderFilter("SHOW_COMPLETED","Completed"),", ",this.renderFilter("SHOW_ACTIVE","Active"),".")}}]),t}(a.Component);t["default"]=p,p.propTypes={onFilterChange:a.PropTypes.oneOf(["SHOW_ALL","SHOW_COMPLETED","SHOW_ACTIVE"]).isRequired}}]);
//# sourceMappingURL=app.js.map