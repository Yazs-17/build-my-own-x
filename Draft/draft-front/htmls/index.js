import { Test } from "./Util.js";

(() => {
	alert("start...");
})();

let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mouseenter", Test);
btn2.addEventListener("mouseleave", () => {
	alert("mouse leave");
});
