(function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/react-dom/cjs/react-dom.development.js":
      /*!*************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.development.js ***!
  \*************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/react-dom/client.js":
      /*!******************************************!*\
  !*** ./node_modules/react-dom/client.js ***!
  \******************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/react-dom/index.js":
      /*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/react/cjs/react.development.js":
      /*!*****************************************************!*\
  !*** ./node_modules/react/cjs/react.development.js ***!
  \*****************************************************/
      /***/ function (module, exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/react/index.js":
      /*!*************************************!*\
  !*** ./node_modules/react/index.js ***!
  \*************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/scheduler/cjs/scheduler.development.js":
      /*!*************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.development.js ***!
  \*************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./node_modules/scheduler/index.js":
      /*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        "use strict";
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /***/ "./src/index.css":
      /*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
      /***/ function () {
        const jsonData = '{"file": "index.html", "pagesource":"/favicon.ico"}';
        const parsedData = JSON.parse(jsonData);
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ loaded: false,
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Flag the module as loaded
    /******/ module.loaded = true;
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module["default"];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/node module decorator */
  /******/ !(function () {
    /******/ __webpack_require__.nmd = function (module) {
      /******/ module.paths = [];
      /******/ if (!module.children) module.children = [];
      /******/ return module;
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
