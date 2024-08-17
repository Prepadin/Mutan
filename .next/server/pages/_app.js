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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/real-viewport/index.js":
/*!*******************************************!*\
  !*** ./components/real-viewport/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RealViewport: () => (/* binding */ RealViewport)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RealViewport = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        //https://css-tricks.com/the-trick-to-viewport-units-on-mobile/\n        function onWindowResize() {\n            document.documentElement.style.setProperty(\"--vh\", window.innerHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--dvh\", window.innerHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--svh\", document.documentElement.clientHeight * 0.01 + \"px\");\n            document.documentElement.style.setProperty(\"--lvh\", \"1vh\");\n        }\n        window.addEventListener(\"resize\", onWindowResize, false);\n        onWindowResize();\n        return ()=>{\n            window.removeEventListener(\"resize\", onWindowResize, false);\n        };\n    }, []);\n    return null;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3JlYWwtdmlld3BvcnQvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlDO0FBRTFCLE1BQU1DLGVBQWU7SUFDMUJELGdEQUFTQSxDQUFDO1FBQ1IsK0RBQStEO1FBQy9ELFNBQVNFO1lBQ1BDLFNBQVNDLGVBQWUsQ0FBQ0MsS0FBSyxDQUFDQyxXQUFXLENBQ3hDLFFBQ0FDLE9BQU9DLFdBQVcsR0FBRyxPQUFPO1lBRzlCTCxTQUFTQyxlQUFlLENBQUNDLEtBQUssQ0FBQ0MsV0FBVyxDQUN4QyxTQUNBQyxPQUFPQyxXQUFXLEdBQUcsT0FBTztZQUc5QkwsU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FDeEMsU0FDQUgsU0FBU0MsZUFBZSxDQUFDSyxZQUFZLEdBQUcsT0FBTztZQUdqRE4sU0FBU0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxTQUFTO1FBQ3REO1FBRUFDLE9BQU9HLGdCQUFnQixDQUFDLFVBQVVSLGdCQUFnQjtRQUNsREE7UUFFQSxPQUFPO1lBQ0xLLE9BQU9JLG1CQUFtQixDQUFDLFVBQVVULGdCQUFnQjtRQUN2RDtJQUNGLEdBQUcsRUFBRTtJQUVMLE9BQU87QUFDVCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2NvbXBvbmVudHMvcmVhbC12aWV3cG9ydC9pbmRleC5qcz8yODkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgY29uc3QgUmVhbFZpZXdwb3J0ID0gKCkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS12aCcsXG4gICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDEgKyAncHgnXG4gICAgICApXG5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShcbiAgICAgICAgJy0tZHZoJyxcbiAgICAgICAgd2luZG93LmlubmVySGVpZ2h0ICogMC4wMSArICdweCdcbiAgICAgIClcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KFxuICAgICAgICAnLS1zdmgnLFxuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0ICogMC4wMSArICdweCdcbiAgICAgIClcblxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWx2aCcsICcxdmgnKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgb25XaW5kb3dSZXNpemUoKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvbldpbmRvd1Jlc2l6ZSwgZmFsc2UpXG4gICAgfVxuICB9LCBbXSlcblxuICByZXR1cm4gbnVsbFxufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsIlJlYWxWaWV3cG9ydCIsIm9uV2luZG93UmVzaXplIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJzdHlsZSIsInNldFByb3BlcnR5Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/real-viewport/index.js\n");

/***/ }),

/***/ "./hooks/use-scroll.js":
/*!*****************************!*\
  !*** ./hooks/use-scroll.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScroll: () => (/* binding */ useScroll)\n/* harmony export */ });\n/* harmony import */ var lib_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lib/store */ \"./lib/store.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([lib_store__WEBPACK_IMPORTED_MODULE_0__]);\nlib_store__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction useScroll(callback, deps = []) {\n    const lenis = (0,lib_store__WEBPACK_IMPORTED_MODULE_0__.useStore)(({ lenis })=>lenis);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!lenis) return;\n        lenis.on(\"scroll\", callback);\n        lenis.emit();\n        return ()=>{\n            lenis.off(\"scroll\", callback);\n        };\n    }, [\n        lenis,\n        callback,\n        [\n            ...deps\n        ]\n    ]);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ob29rcy91c2Utc2Nyb2xsLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBb0M7QUFDSDtBQUUxQixTQUFTRSxVQUFVQyxRQUFRLEVBQUVDLE9BQU8sRUFBRTtJQUMzQyxNQUFNQyxRQUFRTCxtREFBUUEsQ0FBQyxDQUFDLEVBQUVLLEtBQUssRUFBRSxHQUFLQTtJQUV0Q0osZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNJLE9BQU87UUFDWkEsTUFBTUMsRUFBRSxDQUFDLFVBQVVIO1FBQ25CRSxNQUFNRSxJQUFJO1FBRVYsT0FBTztZQUNMRixNQUFNRyxHQUFHLENBQUMsVUFBVUw7UUFDdEI7SUFDRixHQUFHO1FBQUNFO1FBQU9GO1FBQVU7ZUFBSUM7U0FBSztLQUFDO0FBQ2pDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGVuaXMtd2Vic2l0ZS8uL2hvb2tzL3VzZS1zY3JvbGwuanM/YWY3MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdG9yZSB9IGZyb20gJ2xpYi9zdG9yZSdcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlU2Nyb2xsKGNhbGxiYWNrLCBkZXBzID0gW10pIHtcbiAgY29uc3QgbGVuaXMgPSB1c2VTdG9yZSgoeyBsZW5pcyB9KSA9PiBsZW5pcylcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghbGVuaXMpIHJldHVyblxuICAgIGxlbmlzLm9uKCdzY3JvbGwnLCBjYWxsYmFjaylcbiAgICBsZW5pcy5lbWl0KClcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBsZW5pcy5vZmYoJ3Njcm9sbCcsIGNhbGxiYWNrKVxuICAgIH1cbiAgfSwgW2xlbmlzLCBjYWxsYmFjaywgWy4uLmRlcHNdXSlcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdG9yZSIsInVzZUVmZmVjdCIsInVzZVNjcm9sbCIsImNhbGxiYWNrIiwiZGVwcyIsImxlbmlzIiwib24iLCJlbWl0Iiwib2ZmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./hooks/use-scroll.js\n");

/***/ }),

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useStore: () => (/* binding */ useStore)\n/* harmony export */ });\n/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zustand */ \"zustand\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__]);\nzustand__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst useStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__.create)((set, get)=>({\n        headerData: undefined,\n        setHeaderData: (headerData)=>set({\n                headerData\n            }),\n        footerData: undefined,\n        setFooterData: (footerData)=>set({\n                footerData\n            }),\n        navIsOpen: false,\n        setNavIsOpen: (toggle)=>set({\n                navIsOpen: toggle,\n                overflow: !toggle\n            }),\n        lenis: undefined,\n        setLenis: (lenis)=>set({\n                lenis\n            }),\n        overflow: true,\n        setOverflow: (overflow)=>set({\n                overflow\n            }),\n        triggerTransition: \"\",\n        setTriggerTransition: (triggerTransition)=>set({\n                triggerTransition\n            }),\n        thresholds: {},\n        addThreshold: ({ id, value })=>{\n            let thresholds = {\n                ...get().thresholds\n            };\n            thresholds[id] = value;\n            set({\n                thresholds\n            });\n        },\n        // removeThreshold: (threshold) => {\n        //   set({ threshold })\n        // },\n        introOut: false,\n        setIntroOut: (introOut)=>set({\n                introOut\n            })\n    }));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFFekIsTUFBTUMsV0FBV0QsK0NBQU1BLENBQUMsQ0FBQ0UsS0FBS0MsTUFBUztRQUM1Q0MsWUFBWUM7UUFDWkMsZUFBZSxDQUFDRixhQUFlRixJQUFJO2dCQUFFRTtZQUFXO1FBQ2hERyxZQUFZRjtRQUNaRyxlQUFlLENBQUNELGFBQWVMLElBQUk7Z0JBQUVLO1lBQVc7UUFDaERFLFdBQVc7UUFDWEMsY0FBYyxDQUFDQyxTQUFXVCxJQUFJO2dCQUFFTyxXQUFXRTtnQkFBUUMsVUFBVSxDQUFDRDtZQUFPO1FBQ3JFRSxPQUFPUjtRQUNQUyxVQUFVLENBQUNELFFBQVVYLElBQUk7Z0JBQUVXO1lBQU07UUFDakNELFVBQVU7UUFDVkcsYUFBYSxDQUFDSCxXQUFhVixJQUFJO2dCQUFFVTtZQUFTO1FBQzFDSSxtQkFBbUI7UUFDbkJDLHNCQUFzQixDQUFDRCxvQkFBc0JkLElBQUk7Z0JBQUVjO1lBQWtCO1FBQ3JFRSxZQUFZLENBQUM7UUFDYkMsY0FBYyxDQUFDLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFO1lBQzFCLElBQUlILGFBQWE7Z0JBQUUsR0FBR2YsTUFBTWUsVUFBVTtZQUFDO1lBQ3ZDQSxVQUFVLENBQUNFLEdBQUcsR0FBR0M7WUFFakJuQixJQUFJO2dCQUFFZ0I7WUFBVztRQUNuQjtRQUNBLG9DQUFvQztRQUNwQyx1QkFBdUI7UUFDdkIsS0FBSztRQUNMSSxVQUFVO1FBQ1ZDLGFBQWEsQ0FBQ0QsV0FBYXBCLElBQUk7Z0JBQUVvQjtZQUFTO0lBQzVDLElBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vbGliL3N0b3JlLmpzPzA0YWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlIH0gZnJvbSAnenVzdGFuZCdcblxuZXhwb3J0IGNvbnN0IHVzZVN0b3JlID0gY3JlYXRlKChzZXQsIGdldCkgPT4gKHtcbiAgaGVhZGVyRGF0YTogdW5kZWZpbmVkLFxuICBzZXRIZWFkZXJEYXRhOiAoaGVhZGVyRGF0YSkgPT4gc2V0KHsgaGVhZGVyRGF0YSB9KSxcbiAgZm9vdGVyRGF0YTogdW5kZWZpbmVkLFxuICBzZXRGb290ZXJEYXRhOiAoZm9vdGVyRGF0YSkgPT4gc2V0KHsgZm9vdGVyRGF0YSB9KSxcbiAgbmF2SXNPcGVuOiBmYWxzZSxcbiAgc2V0TmF2SXNPcGVuOiAodG9nZ2xlKSA9PiBzZXQoeyBuYXZJc09wZW46IHRvZ2dsZSwgb3ZlcmZsb3c6ICF0b2dnbGUgfSksXG4gIGxlbmlzOiB1bmRlZmluZWQsXG4gIHNldExlbmlzOiAobGVuaXMpID0+IHNldCh7IGxlbmlzIH0pLFxuICBvdmVyZmxvdzogdHJ1ZSxcbiAgc2V0T3ZlcmZsb3c6IChvdmVyZmxvdykgPT4gc2V0KHsgb3ZlcmZsb3cgfSksXG4gIHRyaWdnZXJUcmFuc2l0aW9uOiAnJyxcbiAgc2V0VHJpZ2dlclRyYW5zaXRpb246ICh0cmlnZ2VyVHJhbnNpdGlvbikgPT4gc2V0KHsgdHJpZ2dlclRyYW5zaXRpb24gfSksXG4gIHRocmVzaG9sZHM6IHt9LFxuICBhZGRUaHJlc2hvbGQ6ICh7IGlkLCB2YWx1ZSB9KSA9PiB7XG4gICAgbGV0IHRocmVzaG9sZHMgPSB7IC4uLmdldCgpLnRocmVzaG9sZHMgfVxuICAgIHRocmVzaG9sZHNbaWRdID0gdmFsdWVcblxuICAgIHNldCh7IHRocmVzaG9sZHMgfSlcbiAgfSxcbiAgLy8gcmVtb3ZlVGhyZXNob2xkOiAodGhyZXNob2xkKSA9PiB7XG4gIC8vICAgc2V0KHsgdGhyZXNob2xkIH0pXG4gIC8vIH0sXG4gIGludHJvT3V0OiBmYWxzZSxcbiAgc2V0SW50cm9PdXQ6IChpbnRyb091dCkgPT4gc2V0KHsgaW50cm9PdXQgfSksXG59KSlcbiJdLCJuYW1lcyI6WyJjcmVhdGUiLCJ1c2VTdG9yZSIsInNldCIsImdldCIsImhlYWRlckRhdGEiLCJ1bmRlZmluZWQiLCJzZXRIZWFkZXJEYXRhIiwiZm9vdGVyRGF0YSIsInNldEZvb3RlckRhdGEiLCJuYXZJc09wZW4iLCJzZXROYXZJc09wZW4iLCJ0b2dnbGUiLCJvdmVyZmxvdyIsImxlbmlzIiwic2V0TGVuaXMiLCJzZXRPdmVyZmxvdyIsInRyaWdnZXJUcmFuc2l0aW9uIiwic2V0VHJpZ2dlclRyYW5zaXRpb24iLCJ0aHJlc2hvbGRzIiwiYWRkVGhyZXNob2xkIiwiaWQiLCJ2YWx1ZSIsImludHJvT3V0Iiwic2V0SW50cm9PdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @studio-freight/hamo */ \"@studio-freight/hamo\");\n/* harmony import */ var _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @studio-freight/tempus */ \"@studio-freight/tempus\");\n/* harmony import */ var components_real_viewport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/real-viewport */ \"./components/real-viewport/index.js\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gsap */ \"gsap\");\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap/dist/ScrollTrigger */ \"gsap/dist/ScrollTrigger\");\n/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hooks/use-scroll */ \"./hooks/use-scroll.js\");\n/* harmony import */ var lib_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lib/store */ \"./lib/store.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/.pnpm/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2/node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! styles/global.scss */ \"./styles/global.scss\");\n/* harmony import */ var styles_global_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(styles_global_scss__WEBPACK_IMPORTED_MODULE_10__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__, lib_store__WEBPACK_IMPORTED_MODULE_7__]);\n([_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__, _studio_freight_tempus__WEBPACK_IMPORTED_MODULE_2__, hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__, lib_store__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n//import { GTM_ID } from 'lib/analytics'\n\n\n//import Script from 'next/script'\n\n\nif (false) {}\nconst Stats = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>__webpack_require__.e(/*! import() */ \"components_stats_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/stats */ \"./components/stats/index.js\")).then(({ Stats })=>Stats), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"components/stats\"\n        ]\n    },\n    ssr: false\n});\nconst GridDebugger = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>__webpack_require__.e(/*! import() */ \"components_grid-debugger_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! components/grid-debugger */ \"./components/grid-debugger/index.js\")).then(({ GridDebugger })=>GridDebugger), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"components/grid-debugger\"\n        ]\n    },\n    ssr: false\n});\nconst Leva = next_dynamic__WEBPACK_IMPORTED_MODULE_8___default()(()=>Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(__webpack_require__, /*! leva */ \"leva\", 23)).then(({ Leva })=>Leva), {\n    loadableGenerated: {\n        modules: [\n            \"pages\\\\_app.js -> \" + \"leva\"\n        ]\n    },\n    ssr: false\n});\nfunction MyApp({ Component, pageProps }) {\n    const debug = (0,_studio_freight_hamo__WEBPACK_IMPORTED_MODULE_1__.useDebug)();\n    const lenis = (0,lib_store__WEBPACK_IMPORTED_MODULE_7__.useStore)(({ lenis })=>lenis);\n    (0,hooks_use_scroll__WEBPACK_IMPORTED_MODULE_6__.useScroll)(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.update);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        if (lenis) {\n            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.refresh();\n            lenis?.start();\n        }\n    }, [\n        lenis\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{\n        window.history.scrollRestoration = \"manual\";\n    }, []);\n    gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_5__.ScrollTrigger.defaults({\n        markers: \"development\" === \"development\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Leva, {\n                hidden: !debug\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Prepa-main\\\\Prepa-main\\\\pages\\\\_app.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            debug && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GridDebugger, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Prepa-main\\\\Prepa-main\\\\pages\\\\_app.js\",\n                        lineNumber: 65,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Stats, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Prepa-main\\\\Prepa-main\\\\pages\\\\_app.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_real_viewport__WEBPACK_IMPORTED_MODULE_3__.RealViewport, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Prepa-main\\\\Prepa-main\\\\pages\\\\_app.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Tarantela\\\\Downloads\\\\Prepa-main\\\\Prepa-main\\\\pages\\\\_app.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSDtBQUNXO0FBQzVCO0FBQzRCO0FBQ1g7QUFDNUMsd0NBQXdDO0FBQ0o7QUFDRjtBQUNsQyxrQ0FBa0M7QUFDRDtBQUNOO0FBRTNCLElBQUksS0FBa0IsRUFBYSxFQVVsQztBQUVELE1BQU1tQixRQUFRWixtREFBT0EsQ0FDbkIsSUFBTSw2S0FBTyxDQUFvQmEsSUFBSSxDQUFDLENBQUMsRUFBRUQsS0FBSyxFQUFFLEdBQUtBOzs7Ozs7SUFDbkRFLEtBQUs7O0FBR1QsTUFBTUMsZUFBZWYsbURBQU9BLENBQzFCLElBQ0UscU1BQU8sQ0FBNEJhLElBQUksQ0FBQyxDQUFDLEVBQUVFLFlBQVksRUFBRSxHQUFLQTs7Ozs7O0lBQzlERCxLQUFLOztBQUdULE1BQU1FLE9BQU9oQixtREFBT0EsQ0FBQyxJQUFNLDhHQUFPLENBQVFhLElBQUksQ0FBQyxDQUFDLEVBQUVHLElBQUksRUFBRSxHQUFLQTs7Ozs7O0lBQzNERixLQUFLOztBQUdQLFNBQVNHLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDckMsTUFBTUMsUUFBUTNCLDhEQUFRQTtJQUN0QixNQUFNNEIsUUFBUXRCLG1EQUFRQSxDQUFDLENBQUMsRUFBRXNCLEtBQUssRUFBRSxHQUFLQTtJQUV0Q3ZCLDJEQUFTQSxDQUFDRCxrRUFBYUEsQ0FBQ3lCLE1BQU07SUFFOUJyQixnREFBU0EsQ0FBQztRQUNSLElBQUlvQixPQUFPO1lBQ1R4QixrRUFBYUEsQ0FBQzBCLE9BQU87WUFDckJGLE9BQU9HO1FBQ1Q7SUFDRixHQUFHO1FBQUNIO0tBQU07SUFFVnBCLGdEQUFTQSxDQUFDO1FBQ1J3QixPQUFPQyxPQUFPLENBQUNDLGlCQUFpQixHQUFHO0lBQ3JDLEdBQUcsRUFBRTtJQUVMOUIsa0VBQWFBLENBQUNNLFFBQVEsQ0FBQztRQUFFQyxTQUFTQyxrQkFBeUI7SUFBYztJQUV6RSxxQkFDRTs7MEJBQ0UsOERBQUNXO2dCQUFLWSxRQUFRLENBQUNSOzs7Ozs7WUFDZEEsdUJBQ0M7O2tDQUNFLDhEQUFDTDs7Ozs7a0NBQ0QsOERBQUNIOzs7Ozs7OzBCQU1MLDhEQUFDakIsa0VBQVlBOzs7OzswQkFDYiw4REFBQ3VCO2dCQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7O0FBRzlCO0FBRUEsaUVBQWVGLEtBQUtBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZW5pcy13ZWJzaXRlLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZURlYnVnIH0gZnJvbSAnQHN0dWRpby1mcmVpZ2h0L2hhbW8nXG5pbXBvcnQgeyByYWYgfSBmcm9tICdAc3R1ZGlvLWZyZWlnaHQvdGVtcHVzJ1xuaW1wb3J0IHsgUmVhbFZpZXdwb3J0IH0gZnJvbSAnY29tcG9uZW50cy9yZWFsLXZpZXdwb3J0J1xuaW1wb3J0IHsgZ3NhcCB9IGZyb20gJ2dzYXAnXG5pbXBvcnQgeyBTY3JvbGxUcmlnZ2VyIH0gZnJvbSAnZ3NhcC9kaXN0L1Njcm9sbFRyaWdnZXInXG5pbXBvcnQgeyB1c2VTY3JvbGwgfSBmcm9tICdob29rcy91c2Utc2Nyb2xsJ1xuLy9pbXBvcnQgeyBHVE1fSUQgfSBmcm9tICdsaWIvYW5hbHl0aWNzJ1xuaW1wb3J0IHsgdXNlU3RvcmUgfSBmcm9tICdsaWIvc3RvcmUnXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXG4vL2ltcG9ydCBTY3JpcHQgZnJvbSAnbmV4dC9zY3JpcHQnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCAnc3R5bGVzL2dsb2JhbC5zY3NzJ1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgZ3NhcC5yZWdpc3RlclBsdWdpbihTY3JvbGxUcmlnZ2VyKVxuICBTY3JvbGxUcmlnZ2VyLmRlZmF1bHRzKHsgbWFya2VyczogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcgfSlcblxuICAvLyBtZXJnZSByYWZzXG4gIGdzYXAudGlja2VyLmxhZ1Ntb290aGluZygwKVxuICBnc2FwLnRpY2tlci5yZW1vdmUoZ3NhcC51cGRhdGVSb290KVxuICByYWYuYWRkKCh0aW1lKSA9PiB7XG4gICAgZ3NhcC51cGRhdGVSb290KHRpbWUgLyAxMDAwKVxuICB9LCAwKVxufVxuXG5jb25zdCBTdGF0cyA9IGR5bmFtaWMoXG4gICgpID0+IGltcG9ydCgnY29tcG9uZW50cy9zdGF0cycpLnRoZW4oKHsgU3RhdHMgfSkgPT4gU3RhdHMpLFxuICB7IHNzcjogZmFsc2UgfVxuKVxuXG5jb25zdCBHcmlkRGVidWdnZXIgPSBkeW5hbWljKFxuICAoKSA9PlxuICAgIGltcG9ydCgnY29tcG9uZW50cy9ncmlkLWRlYnVnZ2VyJykudGhlbigoeyBHcmlkRGVidWdnZXIgfSkgPT4gR3JpZERlYnVnZ2VyKSxcbiAgeyBzc3I6IGZhbHNlIH1cbilcblxuY29uc3QgTGV2YSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdsZXZhJykudGhlbigoeyBMZXZhIH0pID0+IExldmEpLCB7XG4gIHNzcjogZmFsc2UsXG59KVxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgY29uc3QgZGVidWcgPSB1c2VEZWJ1ZygpXG4gIGNvbnN0IGxlbmlzID0gdXNlU3RvcmUoKHsgbGVuaXMgfSkgPT4gbGVuaXMpXG5cbiAgdXNlU2Nyb2xsKFNjcm9sbFRyaWdnZXIudXBkYXRlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKGxlbmlzKSB7XG4gICAgICBTY3JvbGxUcmlnZ2VyLnJlZnJlc2goKVxuICAgICAgbGVuaXM/LnN0YXJ0KClcbiAgICB9XG4gIH0sIFtsZW5pc10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG4gIH0sIFtdKVxuXG4gIFNjcm9sbFRyaWdnZXIuZGVmYXVsdHMoeyBtYXJrZXJzOiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyB9KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMZXZhIGhpZGRlbj17IWRlYnVnfSAvPlxuICAgICAge2RlYnVnICYmIChcbiAgICAgICAgPD5cbiAgICAgICAgICA8R3JpZERlYnVnZ2VyIC8+XG4gICAgICAgICAgPFN0YXRzIC8+XG4gICAgICAgIDwvPlxuICAgICAgKX1cblxuICAgICAgXG5cbiAgICAgIDxSZWFsVmlld3BvcnQgLz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIl0sIm5hbWVzIjpbInVzZURlYnVnIiwicmFmIiwiUmVhbFZpZXdwb3J0IiwiZ3NhcCIsIlNjcm9sbFRyaWdnZXIiLCJ1c2VTY3JvbGwiLCJ1c2VTdG9yZSIsImR5bmFtaWMiLCJ1c2VFZmZlY3QiLCJyZWdpc3RlclBsdWdpbiIsImRlZmF1bHRzIiwibWFya2VycyIsInByb2Nlc3MiLCJ0aWNrZXIiLCJsYWdTbW9vdGhpbmciLCJyZW1vdmUiLCJ1cGRhdGVSb290IiwiYWRkIiwidGltZSIsIlN0YXRzIiwidGhlbiIsInNzciIsIkdyaWREZWJ1Z2dlciIsIkxldmEiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImRlYnVnIiwibGVuaXMiLCJ1cGRhdGUiLCJyZWZyZXNoIiwic3RhcnQiLCJ3aW5kb3ciLCJoaXN0b3J5Iiwic2Nyb2xsUmVzdG9yYXRpb24iLCJoaWRkZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "gsap":
/*!***********************!*\
  !*** external "gsap" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap");

/***/ }),

/***/ "gsap/dist/ScrollTrigger":
/*!******************************************!*\
  !*** external "gsap/dist/ScrollTrigger" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("gsap/dist/ScrollTrigger");

/***/ }),

/***/ "leva":
/*!***********************!*\
  !*** external "leva" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("leva");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "stats.js":
/*!***************************!*\
  !*** external "stats.js" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("stats.js");

/***/ }),

/***/ "@studio-freight/hamo":
/*!***************************************!*\
  !*** external "@studio-freight/hamo" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/hamo");;

/***/ }),

/***/ "@studio-freight/tempus":
/*!*****************************************!*\
  !*** external "@studio-freight/tempus" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@studio-freight/tempus");;

/***/ }),

/***/ "zustand":
/*!**************************!*\
  !*** external "zustand" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next@14.2.3_@babel+core@7.24.6_react-dom@18.3.1_react@18.3.1_sass@1.77.2","vendor-chunks/@swc+helpers@0.5.5"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();