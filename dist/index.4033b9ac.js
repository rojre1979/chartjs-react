var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},n={},t=e.parcelRequire30ab;null==t&&((t=function(e){if(e in a)return a[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return a[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,a){n[e]=a},e.parcelRequire30ab=t);var o=t("2RVy2"),r=t("cX88K");o.Chart.register(o.Colors,o.BarController,o.BarElement,o.CategoryScale,o.LinearScale,o.Legend),async function(){const e=await(0,r.getAquisitionsByYear)();new(0,o.Chart)(document.getElementById("acquisitions"),{type:"bar",options:{animation:!1,plugins:{legend:{display:!1},tooltip:{enabled:!1}}},data:{labels:e.map((e=>e.year)),datasets:[{label:"Acquisitions by year",data:e.map((e=>e.count))}]}})}();
//# sourceMappingURL=index.4033b9ac.js.map
