(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./.storybook/preview.js-generated-config-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var preview_namespaceObject={};__webpack_require__.r(preview_namespaceObject),__webpack_require__.d(preview_namespaceObject,"parameters",(function(){return parameters}));__webpack_require__("./node_modules/core-js/modules/es.object.keys.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptor.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-own-property-descriptors.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-properties.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var ClientApi=__webpack_require__("./node_modules/@storybook/client-api/dist/esm/ClientApi.js"),esm=__webpack_require__("./node_modules/@storybook/client-logger/dist/esm/index.js"),parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}Object.keys(preview_namespaceObject).forEach((function(key){var value=preview_namespaceObject[key];switch(key){case"args":case"argTypes":return esm.a.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(value));case"decorators":return value.forEach((function(decorator){return Object(ClientApi.d)(decorator,!1)}));case"loaders":return value.forEach((function(loader){return Object(ClientApi.e)(loader,!1)}));case"parameters":return Object(ClientApi.f)(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},value),!1);case"argTypesEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.b)(enhancer)}));case"argsEnhancers":return value.forEach((function(enhancer){return Object(ClientApi.c)(enhancer)}));case"render":return Object(ClientApi.g)(value);case"globals":case"globalTypes":var v={};return v[key]=value,Object(ClientApi.f)(v,!1);case"__namedExportsOrder":case"decorateStory":case"renderToDOM":return null;default:return console.log(key+" was not supported :( !")}}))},"./generated-stories-entry.js":function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js").configure)([__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"),__webpack_require__("./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$")],module,!1)}).call(this,__webpack_require__("./node_modules/webpack/buildin/module.js")(module))},"./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/WorkingHours/WorkingHours.css":function(module,exports,__webpack_require__){(exports=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(!1)).push([module.i,'/* working hours component */\n.working-hours {\n    border-collapse: collapse;\n    width: auto;\n}\n/* headers */\n.hours td {\n    text-align: left;\n    vertical-align: bottom;\n    padding: 0;\n}\n.hours .header {\n    width: 36px;\n    max-width: 36px !important;\n    text-align: center;\n}\n.hours .header span {\n    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;\n    font-size: 14px;\n    display: block;\n    overflow: hidden;\n    background: powderblue;\n    color: #667280;\n    border: 1px solid #e0e0e0;\n    background-color: #f3f4f5;\n    transition: background-color .2s;\n    transition-property: background-color;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    transition-delay: 0s;\n    font-size: .9em;\n    font-weight: 500;\n    padding: 0.5em 0;\n}\n.hours .part {\n    text-align: center;\n}\n.hours .part span {\n    font-size: 7px;\n    display: block;\n    overflow: hidden;\n}\n/* individual days */\n.day {\n   /* time cells */\n   /* overlay showing selected timespans */\n}\n.day td {\n    height: 30px;\n    padding: 0;\n}\n.day .day-name {\n    font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;\n    padding: 0px 10px 0px 0px;\n    vertical-align: middle;\n    border: 1px solid #e0e0e0;\n    background: powderblue;\n    text-transform: uppercase;\n\n    background-color: #f3f4f5;\n    background-color: #f3f4f5;\n    transition: background-color .2s;\n    transition-property: background-color;\n    transition-duration: 0.2s;\n    transition-timing-function: ease;\n    transition-delay: 0s;\n    font-size: .7em;\n    font-weight: 500;\n    padding: 0.3em 0.7em;\n    color: #667280;\n}\n.day .reset {\n    padding-left: 10px;\n    vertical-align: middle;\n}\n.day .time-cell {\n    border: 1px solid silver;\n    cursor: pointer;\n}\n.day .time-cell.selected {\n    background-color: #007bff;\n}\n.day .time-cell.hour {\n    border-right: 1px solid #e0e0e0;\n    border-right: 1px solid #d8d9da;\n}\n.day .time-cell.half {\n    border-left: 1px solid #e0e0e0;\n    border-right: 1px solid #d8d9da;\n}\n.day .timespan-container {\n    position: relative;\n    width: 0;\n    height: 0;\n    padding: 0;\n}\n.day .timespan-container .timespan-overlay {\n    position: absolute;\n    height: 15px;\n    width: 690px;\n    left: 80px;\n    text-align: center;\n    vertical-align: middle;\n    color: black;\n    pointer-events: none;\n}\n.day .timespan-container .timespan-overlay .timespan {\n    opacity: 1;\n    font-size: 12px;\n    border-radius: 5px;\n    padding: 0px 3px;\n    color: white;\n    font-weight: bolder;\n    background-color: #2f70a1;\n}\n/* reset all feature */\n.reset-all {\n    text-align: right;\n    padding-right: 0px;\n    padding-top: 10px;\n}\n.reset-all .working-hours-reset {\n    margin-right: 0px;\n}\n/* admin only styles */\n.working-hours .time-cell.selected {\n    background-color: #5e6469;\n    background-color: #feac3140;\n    background-color: #83b5fe;\n    /*border-color: #83b5fe;*/\n}\n.working-hours .timespan-container .timespan-overlay .timespan {\n    background-color: #6fc1ff;\n    background-color: #2f70a1;\n}\n.working-hours button.working-hours-reset {\n    padding: 3px 5px;\n}\n',""]),module.exports=exports},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$":function(module,exports,__webpack_require__){var map={"./components/WorkingHours/WorkingHours.stories.tsx":"./src/components/WorkingHours/WorkingHours.stories.tsx"};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.(js|jsx|ts|tsx))$"},"./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$":function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id="./src sync recursive ^\\.(?:(?:^|\\/|(?:(?:(?!(?:^|\\/)\\.).)*?)\\/)(?!\\.)(?=.)[^/]*?\\.stories\\.mdx)$"},"./src/components/WorkingHours/WorkingHours.css":function(module,exports,__webpack_require__){var api=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),content=__webpack_require__("./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/dist/cjs.js?!./src/components/WorkingHours/WorkingHours.css");"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},"./src/components/WorkingHours/WorkingHours.stories.tsx":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Primary",(function(){return Primary}));__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.function.bind.js");var react=__webpack_require__("./node_modules/react/index.js"),react_default=__webpack_require__.n(react),jsx_runtime=(__webpack_require__("./node_modules/core-js/modules/es.array.map.js"),__webpack_require__("./node_modules/core-js/modules/es.object.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.function.name.js"),__webpack_require__("./node_modules/core-js/modules/es.object.set-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.object.get-prototype-of.js"),__webpack_require__("./node_modules/core-js/modules/es.reflect.construct.js"),__webpack_require__("./node_modules/core-js/modules/es.object.create.js"),__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js"),__webpack_require__("./node_modules/core-js/modules/es.array.is-array.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.description.js"),__webpack_require__("./node_modules/core-js/modules/es.symbol.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.string.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.from.js"),__webpack_require__("./node_modules/core-js/modules/es.array.slice.js"),__webpack_require__("./src/components/WorkingHours/WorkingHours.css"),__webpack_require__("./node_modules/core-js/modules/es.array.join.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/react/jsx-runtime.js"));function TimeCell(props){var state=props.state,startSelect=props.startSelect,updateReference=props.updateReference,_ref=[state.dayIndex,state.timeFrom.replace(":","-"),state.selected?" selected":"",state.hour?" hour":" half"],classNames="time-cell time-cell-"+_ref[0]+"-"+_ref[1]+_ref[2]+_ref[3];return Object(jsx_runtime.jsx)("td",{ref:function setReference(el){return updateReference(state.id,el)},className:classNames,onMouseDown:function onMouseDown(){return startSelect(state)}})}function selectedPropsAreEqual(prev,next){return prev.state.selected===next.state.selected&&prev.state.id===next.state.id}TimeCell.displayName="TimeCell";var cell=react_default.a.memo(TimeCell,selectedPropsAreEqual);__webpack_require__("./node_modules/core-js/modules/es.array.filter.js"),__webpack_require__("./node_modules/core-js/modules/es.array.for-each.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.for-each.js");function newDaysCopy(days){return days.map((function(d){return{timeCells:d.timeCells.map((function(c){return Object.assign({},c)}))}}))}function getWorkingHoursSelectedRanges(timeCells){var ranges=[],start=null,open=!1,last=null;return timeCells.forEach((function(cell){cell.selected&&!open?(open=!0,start=cell.index):!cell.selected&&open&&(null!==start&&null!==last&&ranges.push({start:start,end:last}),start=null,open=!1),last=cell.index})),open&&null!==start&&null!==last&&ranges.push({start:start,end:last}),ranges}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TimeCellElements(props){var timeCells=props.timeCells,updateReference=props.updateReference,startSelect=props.startSelect;return Object(jsx_runtime.jsx)(jsx_runtime.Fragment,{children:_toConsumableArray(Array(48).keys()).map((function(i){return Object(jsx_runtime.jsx)(cell,{updateReference:updateReference,state:timeCells[i],startSelect:startSelect},"timeCell-"+timeCells[i].id)}))})}function dayPropsAreEqual(prev,next){return prev.name===next.name&&JSON.stringify(prev.timeCells)===JSON.stringify(next.timeCells)}var MemoizedTimeCellElements=react_default.a.memo(TimeCellElements,dayPropsAreEqual);function WorkingHoursDay(props){var timeCells=props.timeCells,rangeStr=getWorkingHoursSelectedRanges(timeCells).map((function(r){return[timeCells[r.start].timeFrom,timeCells[r.end].timeTo].join("-")})).join(", ");return Object(jsx_runtime.jsxs)("tr",{className:"day",children:[Object(jsx_runtime.jsxs)("td",{className:"day-name",children:[rangeStr.length>0&&Object(jsx_runtime.jsx)("div",{className:"timespan-container",children:Object(jsx_runtime.jsx)("div",{className:"timespan-overlay",children:Object(jsx_runtime.jsx)("span",{className:"timespan",children:rangeStr})})}),props.name]}),Object(jsx_runtime.jsx)(MemoizedTimeCellElements,Object.assign({},props))]})}WorkingHoursDay.displayName="WorkingHoursDay";var components_day=react_default.a.memo(WorkingHoursDay,dayPropsAreEqual);function WorkingHours_toConsumableArray(arr){return function WorkingHours_arrayWithoutHoles(arr){if(Array.isArray(arr))return WorkingHours_arrayLikeToArray(arr)}(arr)||function WorkingHours_iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function WorkingHours_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return WorkingHours_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return WorkingHours_arrayLikeToArray(o,minLen)}(arr)||function WorkingHours_nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function WorkingHours_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return _possibleConstructorReturn(this,result)}}function _possibleConstructorReturn(self,call){if(call&&("object"==typeof call||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var WorkingHours_WorkingHours_WorkingHours=function(_React$Component){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(WorkingHours,_React$Component);var _super=_createSuper(WorkingHours);function WorkingHours(props){var _this;!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,WorkingHours),(_this=_super.call(this,props)).updateReference=function(day,ref){ref&&!_this.state.references[day]&&(_this.state.references[day]=ref.getBoundingClientRect())},_this.resetAll=_this.resetAll.bind(_assertThisInitialized(_this)),_this.startSelect=_this.startSelect.bind(_assertThisInitialized(_this)),_this.updateSelect=_this.updateSelect.bind(_assertThisInitialized(_this)),_this.mouseUp=_this.mouseUp.bind(_assertThisInitialized(_this)),_this.mouseMove=_this.mouseMove.bind(_assertThisInitialized(_this));var gridCells=48*(_this.props.data||[]).length,days=(_this.props.data||[]).map((function(day,d){return{timeCells:WorkingHours_toConsumableArray(Array(48).keys()).map((function(i){var _this$props$data$d;return function newTimeCellDefinition(d,i,ranges){var _ref=[Math.floor(i/2),Math.ceil(i/2),i%2==1],hourFrom=_ref[0],hourTo=_ref[1],isHalf=_ref[2],timeFrom=(hourFrom<10?"0"+hourFrom:hourFrom)+(isHalf?":30":":00"),timeTo=(hourTo<10?"0"+hourTo:hourTo)+(isHalf?":00":":30");return{id:48*d+i,dayIndex:d,index:i,selected:ranges.filter((function(item){return timeFrom>=item.from&&timeTo<=item.to})).length>0,hour:!isHalf,timeFrom:timeFrom,timeTo:timeTo}}(d,i,(null===(_this$props$data$d=_this.props.data[d])||void 0===_this$props$data$d?void 0:_this$props$data$d.ranges)||[])}))}}));return _this.state={days:days,isSelecting:!1,selectionOldCellStates:[],selectionState:!0,selectionFromCell:null,previousUpdateSelectionToCell:null,references:WorkingHours_toConsumableArray(Array(gridCells).keys()).map((function(i){return null}))},_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(WorkingHours,[{key:"componentDidMount",value:function componentDidMount(){document.addEventListener("mouseup",this.mouseUp,!1),document.addEventListener("mousemove",this.mouseMove,!1)}},{key:"componentWillUnmount",value:function componentWillUnmount(){document.removeEventListener("mouseup",this.mouseUp,!1),document.removeEventListener("mousemove",this.mouseMove,!1)}},{key:"mouseUp",value:function mouseUp(e){this.state.isSelecting&&(this.endSelect(),e.preventDefault())}},{key:"mouseMove",value:function mouseMove(e){this.state.isSelecting&&(this.updateSelect(e.pageX,e.pageY),e.preventDefault())}},{key:"startSelect",value:function startSelect(cellContent){var _this2=this,selectionOldCellStates=newDaysCopy(this.state.days);this.setState({isSelecting:!0,selectionFromCell:cellContent,selectionState:!cellContent.selected,selectionOldCellStates:selectionOldCellStates},(function(){_this2.updateSelectInternal(cellContent)}))}},{key:"endSelect",value:function endSelect(){var _this3=this;this.setState({isSelecting:!1,selectionOldCellStates:[],previousUpdateSelectionToCell:null,selectionFromCell:null});var userData=(this.state.days||[]).map((function(item,i){var rangeStr=getWorkingHoursSelectedRanges(item.timeCells).map((function(r){return{from:item.timeCells[r.start].timeFrom,to:item.timeCells[r.end].timeTo}}));return{key:_this3.props.data[i].key,name:_this3.props.data[i].name,ranges:rangeStr}}));this.props.onChange&&this.props.onChange(userData)}},{key:"updateSelect",value:function updateSelect(x,y){for(var d=0;d<this.state.days.length;d+=1)for(var i=0;i<this.state.days[d].timeCells.length;i+=1){var flattenId=i+d*this.state.days[d].timeCells.length,rc=this.state.references[flattenId];if((y>=rc.y&&y<rc.y+rc.height||0===d&&y<rc.y||d===this.state.days.length-1&&y>rc.y+rc.height-1)&&(x>=rc.x&&x<rc.x+rc.width||0===i&&x<rc.x||i===this.state.days[d].timeCells.length-1&&x>rc.x+rc.width-1)){this.updateSelectInternal(this.state.days[d].timeCells[i]);break}}}},{key:"updateSelectInternal",value:function updateSelectInternal(state){if(null!==this.state.selectionFromCell&&state!==this.state.previousUpdateSelectionToCell){var _ref=[this.state.selectionFromCell,state],fromCell=_ref[0],toCell=_ref[1],_ref2=[fromCell.dayIndex,toCell.dayIndex,fromCell.index,toCell.index],fromY=_ref2[0],toY=_ref2[1],fromX=_ref2[2],toX=_ref2[3];if(fromY>toY){var _ref3=[toY,fromY];fromY=_ref3[0],toY=_ref3[1]}if(fromX>toX){var _ref4=[toX,fromX];fromX=_ref4[0],toX=_ref4[1]}for(var newState={days:newDaysCopy(this.state.days),previousUpdateSelectionToCell:state},d=0;d<this.state.days.length;d+=1)for(var i=0;i<this.state.days[d].timeCells.length;i+=1){var oldState=this.state.selectionOldCellStates[d].timeCells[i];newState.days[d].timeCells[i].selected=d>=fromY&&d<=toY&&i>=fromX&&i<=toX?this.state.selectionState:oldState.selected}this.setState(newState)}}},{key:"resetAll",value:function resetAll(e){for(var newState={days:newDaysCopy(this.state.days)},d=0;d<this.state.days.length;d+=1)for(var i=0;i<this.state.days[d].timeCells.length;i+=1)newState.days[d].timeCells[i].selected=!1;this.setState(newState),e.preventDefault()}},{key:"render",value:function render(){var _this4=this,timeHeaders=WorkingHours_toConsumableArray(Array(24).keys()).map((function(i){return Object(jsx_runtime.jsx)("td",{className:"header",colSpan:2,children:Object(jsx_runtime.jsx)("span",{children:i<10?"0"+i:i})},i)}));return Object(jsx_runtime.jsx)("div",{children:Object(jsx_runtime.jsxs)("table",{className:"working-hours",children:[Object(jsx_runtime.jsx)("thead",{children:Object(jsx_runtime.jsxs)("tr",{className:"hours",children:[Object(jsx_runtime.jsx)("td",{}),timeHeaders]})}),Object(jsx_runtime.jsxs)("tbody",{children:[(this.props.data||[]).map((function(day,d){return Object(jsx_runtime.jsx)(components_day,{name:day.name,index:d,timeCells:_this4.state.days[d].timeCells,startSelect:_this4.startSelect,updateReference:_this4.updateReference},day.key)})),this.props.allowReset&&Object(jsx_runtime.jsxs)("tr",{children:[Object(jsx_runtime.jsx)("td",{className:"reset-all",colSpan:49,children:Object(jsx_runtime.jsx)("button",{className:"btn btn-primary btn-xs working-hours-reset",onClick:this.resetAll,children:"Reset All"})}),Object(jsx_runtime.jsx)("td",{})]})]})]})})}}]),WorkingHours}(react_default.a.Component),components_WorkingHours_WorkingHours=WorkingHours_WorkingHours_WorkingHours;try{WorkingHours_WorkingHours_WorkingHours.displayName="WorkingHours",WorkingHours_WorkingHours_WorkingHours.__docgenInfo={description:"",displayName:"WorkingHours",props:{onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((data: UserDayData[]) => void)"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"UserDayData[]"}},allowReset:{defaultValue:null,description:"",name:"allowReset",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/WorkingHours/WorkingHours.tsx#WorkingHours"]={docgenInfo:WorkingHours_WorkingHours_WorkingHours.__docgenInfo,name:"WorkingHours",path:"src/components/WorkingHours/WorkingHours.tsx#WorkingHours"})}catch(__react_docgen_typescript_loader_error){}__webpack_exports__.default={title:"WorkingHours",component:components_WorkingHours_WorkingHours};var WorkingHours_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(components_WorkingHours_WorkingHours,Object.assign({},args))};WorkingHours_stories_Template.displayName="Template";var Primary=WorkingHours_stories_Template.bind({});Primary.args={data:[{key:"mon",name:"Monday",ranges:[]},{key:"tue",name:"Tuesday",ranges:[{from:"05:30",to:"07:30"},{from:"13:30",to:"15:30"}]},{key:"wed",name:"Wednesday",ranges:[]},{key:"thu",name:"Thursday",ranges:[]},{key:"fri",name:"Friday",ranges:[]},{key:"sat",name:"Saturday",ranges:[]},{key:"sun",name:"Sunday",ranges:[{from:"05:00",to:"05:30"},{from:"13:30",to:"14:00"}]}],onChange:function onChange(data){return console.log(data)}},Primary.parameters=Object.assign({storySource:{source:"(args) => <WorkingHours {...args} />"}},Primary.parameters)},"./storybook-init-framework-entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/@storybook/react/dist/esm/client/index.js")},0:function(module,exports,__webpack_require__){__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/polyfills.js"),__webpack_require__("./node_modules/@storybook/core-client/dist/esm/globals/globals.js"),__webpack_require__("./storybook-init-framework-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/common/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/esm/frameworks/react/config.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/react/dist/esm/client/preview/config-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-actions/dist/esm/preset/addArgs.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-backgrounds/dist/esm/preset/addParameter.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-measure/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-outline/dist/esm/preset/addDecorator.js-generated-config-entry.js"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/esm/preset/argsEnhancers.js-generated-config-entry.js"),__webpack_require__("./.storybook/preview.js-generated-config-entry.js"),module.exports=__webpack_require__("./generated-stories-entry.js")},1:function(module,exports){}},[[0,5,6]]]);