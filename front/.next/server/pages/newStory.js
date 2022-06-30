/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/newStory";
exports.ids = ["pages/newStory"];
exports.modules = {

/***/ "./styles/NewStory.module.css":
/*!************************************!*\
  !*** ./styles/NewStory.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"writeForm\": \"NewStory_writeForm__sf8cR\",\n\t\"writeFormGroup\": \"NewStory_writeFormGroup___yN3q\",\n\t\"writeIcon\": \"NewStory_writeIcon__jL_yo\",\n\t\"writeInput\": \"NewStory_writeInput__Ku5wc\",\n\t\"writeText\": \"NewStory_writeText__goAzY\",\n\t\"writeSubmit\": \"NewStory_writeSubmit__jS1Pz\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvTmV3U3RvcnkubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zdHlsZXMvTmV3U3RvcnkubW9kdWxlLmNzcz80Y2VhIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIndyaXRlRm9ybVwiOiBcIk5ld1N0b3J5X3dyaXRlRm9ybV9fc2Y4Y1JcIixcblx0XCJ3cml0ZUZvcm1Hcm91cFwiOiBcIk5ld1N0b3J5X3dyaXRlRm9ybUdyb3VwX19feU4zcVwiLFxuXHRcIndyaXRlSWNvblwiOiBcIk5ld1N0b3J5X3dyaXRlSWNvbl9fakxfeW9cIixcblx0XCJ3cml0ZUlucHV0XCI6IFwiTmV3U3Rvcnlfd3JpdGVJbnB1dF9fS3U1d2NcIixcblx0XCJ3cml0ZVRleHRcIjogXCJOZXdTdG9yeV93cml0ZVRleHRfX2dvQXpZXCIsXG5cdFwid3JpdGVTdWJtaXRcIjogXCJOZXdTdG9yeV93cml0ZVN1Ym1pdF9falMxUHpcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/NewStory.module.css\n");

/***/ }),

/***/ "./pages/newStory.js":
/*!***************************!*\
  !*** ./pages/newStory.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ newStory)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/NewStory.module.css */ \"./styles/NewStory.module.css\");\n/* harmony import */ var _styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n // 백엔드랑 프론트엔드랑 통신을 쉽게하기 위해 axios 사용\n\nfunction newStory() {\n    const { 0: title , 1: setTitle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: content , 1: setContent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { accessToken  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.loginReducer\n    );\n    const server_URL = \"https://localhost:4001/api/board/insertBoard\";\n    // 로그인시 jwt 토큰 받아옴. 받은 jwt 토큰 가져오기 위해 useSelector 사용\n    // 토큰은 param에 담겨 있음\n    // 페이지 호출시 jwt 토큰 담아서 get 요청\n    // 글 작성 완료하고 publish 버튼 누르면 서버단으로 post 전송\n    // 서버에서 DB에 데이터를 저장 \n    // ( 메인 페이지에서 서버단이 저장한 저장소에서 글 목록들 가져옴 )\n    // 글 작성 post 받으면 서버는 토큰 발급 필요\n    const publish = async ()=>{\n        const param = {\n            accessToken: accessToken.accessToken,\n            title: title,\n            content: content\n        };\n        const opriont = {\n            withCredentials: true\n        };\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3___default().post(server_URL, param, opriont).then((res)=>{\n                const result = res.data;\n                if (result.message === \"Create board!\") {\n                    alert(result.message);\n                } else {\n                    alert(\"fail...\");\n                }\n                next_router__WEBPACK_IMPORTED_MODULE_2___default().push(\"/\") // publish 이후 홈으로 라우팅\n                ;\n            });\n        } catch (err) {\n            if (err) {\n                console.log(err);\n            }\n        }\n        ;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeForm),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeFormGroup),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: (_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeInput),\n                    placeholder: \"Title\",\n                    type: \"text\",\n                    autoFocus: true,\n                    value: title,\n                    onChange: (e)=>setTitle(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n                    lineNumber: 55,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeFormGroup),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                    className: `${(_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeInput)} ${(_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeText)}`,\n                    placeholder: \"Tell your story...\",\n                    autoFocus: true,\n                    value: content,\n                    onChange: (e)=>setContent(e.target.value)\n                }, void 0, false, {\n                    fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n                    lineNumber: 65,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_styles_NewStory_module_css__WEBPACK_IMPORTED_MODULE_5___default().writeSubmit),\n                onClick: publish,\n                children: \"Publish\"\n            }, void 0, false, {\n                fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jihun/project-test/beb-04-Eight/front/pages/newStory.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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azovL215LWFwcC8uL3BhZ2VzL25ld1N0b3J5LmpzPzg4ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvTmV3U3RvcnkubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiOyAvLyDrsLHsl5Trk5zrnpEg7ZSE66Gg7Yq47JeU65Oc656RIO2GteyLoOydhCDsib3qsoztlZjquLAg7JyE7ZW0IGF4aW9zIOyCrOyaqVxuaW1wb3J0IHt1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3U3RvcnkoKSB7XG4gXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCB7YWNjZXNzVG9rZW59ID0gdXNlU2VsZWN0b3Ioc3RhdGUgPT4gc3RhdGUubG9naW5SZWR1Y2VyKVxuICBjb25zdCBzZXJ2ZXJfVVJMID0gJ2h0dHBzOi8vbG9jYWxob3N0OjQwMDEvYXBpL2JvYXJkL2luc2VydEJvYXJkJ1xuXG5cbiAvLyDroZzqt7jsnbjsi5wgand0IO2GoO2BsCDrsJvslYTsmLQuIOuwm+ydgCBqd3Qg7Yag7YGwIOqwgOyguOyYpOq4sCDsnITtlbQgdXNlU2VsZWN0b3Ig7IKs7JqpXG4gXG4vLyDthqDtgbDsnYAgcGFyYW3sl5Ag64u06rKoIOyeiOydjFxuXG4vLyDtjpjsnbTsp4Ag7Zi47Lac7IucIGp3dCDthqDtgbAg64u07JWE7IScIGdldCDsmpTssq1cbiBcbiAgLy8g6riAIOyekeyEsSDsmYTro4ztlZjqs6AgcHVibGlzaCDrsoTtirwg64iE66W066m0IOyEnOuyhOuLqOycvOuhnCBwb3N0IOyghOyGoVxuICAvLyDshJzrsoTsl5DshJwgRELsl5Ag642w7J207YSw66W8IOyggOyepSBcbiAgLy8gKCDrqZTsnbgg7Y6Y7J207KeA7JeQ7IScIOyEnOuyhOuLqOydtCDsoIDsnqXtlZwg7KCA7J6l7IaM7JeQ7IScIOq4gCDrqqnroZ3rk6Qg6rCA7KC47Ji0IClcbiAgLy8g6riAIOyekeyEsSBwb3N0IOuwm+ycvOuptCDshJzrsoTripQg7Yag7YGwIOuwnOq4iSDtlYTsmpRcbiAgXG4gIFxuICBjb25zdCBwdWJsaXNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHBhcmFtID0geyBhY2Nlc3NUb2tlbjogYWNjZXNzVG9rZW4uYWNjZXNzVG9rZW4sIHRpdGxlOiB0aXRsZSwgY29udGVudCA6IGNvbnRlbnQgfVxuICAgIGNvbnN0IG9wcmlvbnQgPSB7IHdpdGhDcmVkZW50aWFsczogdHJ1ZSB9XG4gICAgdHJ5e1xuICAgICAgYXdhaXQgYXhpb3MucG9zdCggXG4gICAgICAgIHNlcnZlcl9VUkwsICAgICAgIC8vIOyghOyGoSDso7zshoxcbiAgICAgICAgcGFyYW0sICAgICAgICAgICAgLy8g7ISc67KE66GcIGlk7JmAIOq4gCDsoJzrqqksIOuCtOyaqeydhCDqsJnsnbQg7KCE64usXG4gICAgICAgIG9wcmlvbnQpXG4gICAgICAudGhlbigocmVzKSA9PiB7ICBcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgIGlmKHJlc3VsdC5tZXNzYWdlID09PSAnQ3JlYXRlIGJvYXJkIScpe1xuICAgICAgICAgIGFsZXJ0KHJlc3VsdC5tZXNzYWdlKVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICBhbGVydChcImZhaWwuLi5cIilcbiAgICAgICAgfVxuICAgICAgICBSb3V0ZXIucHVzaChcIi9cIikgLy8gcHVibGlzaCDsnbTtm4Qg7ZmI7Jy866GcIOudvOyasO2MhVxuICAgICAgfSlcbiAgICB9Y2F0Y2goZXJyKXsgICAgICAgICAgLy8g7JeQ65+sIOuwnOyDneyLnCDsl5Drn6wg64K07JqpIOuhnOq3uOyXkCDrnYTsm4BcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuICB9OyBcbiBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JpdGVGb3JtfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JpdGVGb3JtR3JvdXB9PlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLndyaXRlSW5wdXR9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiVGl0bGVcIlxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JpdGVGb3JtR3JvdXB9PlxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLndyaXRlSW5wdXR9ICR7c3R5bGVzLndyaXRlVGV4dH1gfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRlbGwgeW91ciBzdG9yeS4uLlwiXG4gICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q29udGVudChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLndyaXRlU3VibWl0fSBvbkNsaWNrPXtwdWJsaXNofT5QdWJsaXNoPC9idXR0b24+ICBcbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJSb3V0ZXIiLCJheGlvcyIsInVzZVNlbGVjdG9yIiwibmV3U3RvcnkiLCJ0aXRsZSIsInNldFRpdGxlIiwiY29udGVudCIsInNldENvbnRlbnQiLCJhY2Nlc3NUb2tlbiIsInN0YXRlIiwibG9naW5SZWR1Y2VyIiwic2VydmVyX1VSTCIsInB1Ymxpc2giLCJwYXJhbSIsIm9wcmlvbnQiLCJ3aXRoQ3JlZGVudGlhbHMiLCJwb3N0IiwidGhlbiIsInJlcyIsInJlc3VsdCIsImRhdGEiLCJtZXNzYWdlIiwiYWxlcnQiLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsIndyaXRlRm9ybSIsIndyaXRlRm9ybUdyb3VwIiwiaW5wdXQiLCJ3cml0ZUlucHV0IiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiYXV0b0ZvY3VzIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsIndyaXRlVGV4dCIsImJ1dHRvbiIsIndyaXRlU3VibWl0Iiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/newStory.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/newStory.js"));
module.exports = __webpack_exports__;

})();