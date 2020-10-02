/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchCamperDetails = exports.FETCH_CAMPER_DETAILS = exports.fetchCampers = exports.FETCH_CAMPERS = undefined;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_CAMPERS = exports.FETCH_CAMPERS = 'fetch_campers';
var fetchCampers = exports.fetchCampers = function fetchCampers() {
  return function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
      var res;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _axios2.default.get('https://stage.paulcamper.com/api/inventory/search?center_lat=52.504043&center_lng=13.393236&page_size=24');

            case 2:
              res = _context.sent;

              dispatch({
                type: FETCH_CAMPERS,
                payload: res
              });

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
};

var FETCH_CAMPER_DETAILS = exports.FETCH_CAMPER_DETAILS = 'fetch_camper_details';
var fetchCamperDetails = exports.fetchCamperDetails = function fetchCamperDetails(id) {
  return function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(dispatch) {
      var camperDetailsApiUrl, res;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              camperDetailsApiUrl = 'https://stage.paulcamper.com/api/inventory/public/campers/' + id + '/profile';
              _context2.next = 3;
              return _axios2.default.get(camperDetailsApiUrl);

            case 3:
              res = _context2.sent;

              dispatch({
                type: FETCH_CAMPER_DETAILS,
                payload: res
              });

            case 5:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function (_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

var _HomePage = __webpack_require__(12);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _CampersListPage = __webpack_require__(13);

var _CampersListPage2 = _interopRequireDefault(_CampersListPage);

var _CamperDetailsPage = __webpack_require__(19);

var _CamperDetailsPage2 = _interopRequireDefault(_CamperDetailsPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
  routes: [_extends({}, _HomePage2.default, {
    path: '/',
    exact: true
  }), _extends({}, _CampersListPage2.default, {
    path: '/campers'
  }), _extends({}, _CamperDetailsPage2.default, {
    path: '/camper/:id'
  })]
})];

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _reactRouterConfig = __webpack_require__(2);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

var _renderer = __webpack_require__(20);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(23);

var _createStore2 = _interopRequireDefault(_createStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  var store = (0, _createStore2.default)();
  // eslint-disable-next-line arrow-body-style
  var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
    var route = _ref.route;

    return route.loadData ? route.loadData(store, req.path) : null;
  });

  Promise.all(promises).then(function () {
    res.send((0, _renderer2.default)(req, store));
  });
});

app.listen(7777, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on PORT 7777');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterConfig = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
  var route = _ref.route;
  return _react2.default.createElement(
    'div',
    { className: 'container', style: { padding: '100px 0' } },
    (0, _reactRouterConfig.renderRoutes)(route.routes)
  );
};

exports.default = {
  component: App
};


App.propTypes = {
  route: _propTypes2.default.oneOfType([_propTypes2.default.object]).isRequired
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      null,
      'I am rendered from Home component'
    )
  );
};
exports.default = {
  component: Home
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(5);

var _actions = __webpack_require__(1);

var _OwnerInfo = __webpack_require__(15);

var _OwnerInfo2 = _interopRequireDefault(_OwnerInfo);

var _Review = __webpack_require__(16);

var _Review2 = _interopRequireDefault(_Review);

var _Pricing = __webpack_require__(17);

var _Pricing2 = _interopRequireDefault(_Pricing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CampersList = function (_Component) {
  _inherits(CampersList, _Component);

  function CampersList() {
    _classCallCheck(this, CampersList);

    return _possibleConstructorReturn(this, (CampersList.__proto__ || Object.getPrototypeOf(CampersList)).apply(this, arguments));
  }

  _createClass(CampersList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          fetchCampersList = _props.fetchCampers,
          id = _props.match.params.id;

      fetchCampersList(id);
    }
  }, {
    key: 'renderCampers',
    value: function renderCampers() {
      var Data = this.props.campers.Data;

      if (Data) {
        return Data.map(function (camper) {
          return _react2.default.createElement(
            'div',
            { className: 'col-sm', style: { marginBottom: 40 } },
            _react2.default.createElement(
              _reactRouterDom.Link,
              { key: camper.Profile.ID, to: '/camper/' + camper.Profile.ID },
              _react2.default.createElement(
                'div',
                { className: 'card', style: { width: '350px' } },
                _react2.default.createElement('img', {
                  src: 'https://stage.paulcamper.com/images/w_768,c_limit,q_auto' + camper.Profile.Pictures[0].Url + '.jpg',
                  className: 'card-img-top',
                  alt: '...',
                  style: { width: 'auto', height: '250px', objectFit: 'cover' }
                }),
                _react2.default.createElement(
                  'div',
                  {
                    className: 'card-body',
                    style: { minHeight: '220px', color: '#000' }
                  },
                  _react2.default.createElement(
                    'h5',
                    { className: 'card-title', style: { marginBottom: '5px' } },
                    camper.Profile.CamperType + ' - ' + camper.Profile.Name
                  ),
                  _react2.default.createElement(
                    'h6',
                    {
                      className: 'card-title',
                      style: {
                        fontWeight: 'normal',
                        borderBottom: '1px solid',
                        paddingBottom: 16
                      }
                    },
                    _react2.default.createElement(
                      'i',
                      null,
                      camper.Profile.City
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'd-flex flex-row' },
                    _react2.default.createElement(
                      'div',
                      { style: { width: '50%', marginBottom: 12 } },
                      'Rank: ' + camper.Rank
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { width: '50%', textAlign: 'right' } },
                      _react2.default.createElement(_Pricing2.default, { price: camper.PricePerDayFrom })
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'd-flex flex-row' },
                    _react2.default.createElement(
                      'div',
                      { style: { width: '50%' } },
                      _react2.default.createElement(_OwnerInfo2.default, {
                        name: camper.Profile.OwnerName,
                        pic: camper.Profile.OwnerPicture
                      })
                    ),
                    _react2.default.createElement(
                      'div',
                      { style: { width: '50%', textAlign: 'right' } },
                      _react2.default.createElement(_Review2.default, null)
                    )
                  )
                )
              )
            )
          );
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        this.renderCampers()
      );
    }
  }]);

  return CampersList;
}(_react.Component);

function mapStateToProps(state) {
  return { campers: state.campers };
}

function loadData(store) {
  return store.dispatch((0, _actions.fetchCampers)());
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchCampers: _actions.fetchCampers })(CampersList)
};


CampersList.propTypes = {
  fetchCampers: _propTypes2.default.func.isRequired,
  campers: _propTypes2.default.oneOfType([_propTypes2.default.object]).isRequired,
  match: _propTypes2.default.oneOfType([_propTypes2.default.object]).isRequired
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var OwnerInfo = function OwnerInfo(_ref) {
  var name = _ref.name,
      pic = _ref.pic;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement('img', {
      src: 'https://stage.paulcamper.com/images/w_768,c_limit,q_auto' + pic + '.jpg',
      alt: '...',
      style: { maxWidth: '50px', borderRadius: '50px', marginRight: 10 }
    }),
    _react2.default.createElement(
      'span',
      null,
      name
    )
  );
};

OwnerInfo.propTypes = {
  name: _propTypes2.default.string.isRequired,
  pic: _propTypes2.default.string.isRequired
};

exports.default = OwnerInfo;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Review = function Review() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement("span", { className: "fa fa-star checked" }),
    _react2.default.createElement("span", { className: "fa fa-star checked" }),
    _react2.default.createElement("span", { className: "fa fa-star checked" }),
    _react2.default.createElement("span", { className: "fa fa-star" }),
    _react2.default.createElement("span", { className: "fa fa-star" })
  );
};

exports.default = Review;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/jsx-one-expression-per-line */
var Pricing = function Pricing(_ref) {
  var price = _ref.price;
  return _react2.default.createElement(
    'div',
    null,
    '`from ',
    price + ' \u20AC / night',
    '`'
  );
};

Pricing.propTypes = {
  price: _propTypes2.default.string.isRequired
};

exports.default = Pricing;

/***/ }),
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(4);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CamperDetails = function (_Component) {
  _inherits(CamperDetails, _Component);

  function CamperDetails() {
    _classCallCheck(this, CamperDetails);

    return _possibleConstructorReturn(this, (CamperDetails.__proto__ || Object.getPrototypeOf(CamperDetails)).apply(this, arguments));
  }

  _createClass(CamperDetails, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var camperId = this.props.match.params.id;
      var fetchCamperInfo = this.props.fetchCamperDetails;

      fetchCamperInfo(camperId);
    }
  }, {
    key: 'renderCamperDetails',
    value: function renderCamperDetails() {
      var camperData = this.props.camperData;

      var mainImg = camperData.CamperMedia.Pictures[0].Url;
      if (camperData) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-md-8' },
              _react2.default.createElement('img', {
                className: 'img-fluid',
                src: mainImg ? 'https://stage.paulcamper.com/images/w_768,c_limit,q_auto' + mainImg + '.jpg' : '#',
                alt: ''
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-md-4' },
            _react2.default.createElement(
              'h3',
              { className: 'my-3' },
              'Camper Details'
            ),
            _react2.default.createElement(
              'ul',
              null,
              _react2.default.createElement(
                'li',
                null,
                'Type: ' + camperData.CamperBasics.BuildType
              ),
              _react2.default.createElement(
                'li',
                null,
                'Length: ' + camperData.CamperBasics.Length
              ),
              _react2.default.createElement(
                'li',
                null,
                'Width: ' + camperData.CamperBasics.Width
              ),
              _react2.default.createElement(
                'li',
                null,
                'Height: ' + camperData.CamperBasics.Height
              )
            )
          )
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        this.renderCamperDetails()
      );
    }
  }]);

  return CamperDetails;
}(_react.Component);

function mapStateToProps(state) {
  return { camperData: state.camperData };
}

function loadData(store, path) {
  var camperId = path.split('/').pop();
  return store.dispatch((0, _actions.fetchCamperDetails)(camperId));
}

exports.default = {
  loadData: loadData,
  component: (0, _reactRedux.connect)(mapStateToProps, { fetchCamperDetails: _actions.fetchCamperDetails })(CamperDetails)
};


CamperDetails.propTypes = {
  fetchCamperDetails: _propTypes2.default.func.isRequired,
  match: _propTypes2.default.oneOfType([_propTypes2.default.object]).isRequired,
  camperData: _propTypes2.default.oneOfType([_propTypes2.default.object]).isRequired
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(21);

var _reactRouterDom = __webpack_require__(5);

var _reactRedux = __webpack_require__(4);

var _reactRouterConfig = __webpack_require__(2);

var _serializeJavascript = __webpack_require__(22);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _Routes = __webpack_require__(6);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req, store) {
  var content = (0, _server.renderToString)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _reactRouterDom.StaticRouter,
      { location: req.path, context: {} },
      _react2.default.createElement(
        'div',
        null,
        (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
      )
    )
  ));
  return '\n    <html>\n      <head>\n        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        <style>a:hover{text-decoration: none;}</style>\n      </head>\n      <body>\n        <div id="root">' + content + '</div>\n        <script>\n        window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + ' \n        </script>\n        <script src="/bundle.js"></script>\n      </body>\n    </html>\n  ';
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(25);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
  return store;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(7);

var _campersReducer = __webpack_require__(26);

var _campersReducer2 = _interopRequireDefault(_campersReducer);

var _camperDetailsReducer = __webpack_require__(27);

var _camperDetailsReducer2 = _interopRequireDefault(_camperDetailsReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  campers: _campersReducer2.default,
  camperData: _camperDetailsReducer2.default
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CAMPERS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = __webpack_require__(1);

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments[1];

  switch (action.type) {
    case _actions.FETCH_CAMPER_DETAILS:
      return action.payload.data;
    default:
      return state;
  }
};

/***/ })
/******/ ]);