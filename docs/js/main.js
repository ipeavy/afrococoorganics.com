"use strict";function makeAlert(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:5e3,r=document.querySelector(".toasts");r||((r=document.createElement("div")).classList.add("toasts"),document.body.appendChild(r));var o=document.createElement("div");o.classList.add("toasts__item"),e&&o.classList.add(e),o.textContent=t,r.appendChild(o),o.addEventListener("click",function(){return closeAlert(r,o)}),setTimeout(function(){return closeAlert(r,o)},n)}function closeAlert(e,t){t.classList.add("disappear"),setTimeout(function(){t.remove(),e&&e.childElementCount<=0&&e.remove()},500)}var loader='<div class="loader"><span></span><span></span><span></span><span></span></div>',image_placeholder="../img/no_image.jpg";function SmoothScrollTo(e){e&&e.scrollIntoView({behavior:"smooth"})}document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll("a"),t=document.querySelectorAll("table"),n=document.querySelectorAll("form");document.querySelectorAll("img");function i(e){e.classList.remove("submit"),e.querySelector('[type="submit"]').disabled=!1}e.forEach(function(e){e.addEventListener("click",function(e){var t=e.currentTarget.getAttribute("href");"#"==t.charAt(0)&&(e.preventDefault(),1<t.length&&((e=document.querySelector(e.currentTarget.hash))&&SmoothScrollTo(e)))})}),t.forEach(function(e){e.parentElement.classList.contains("table-responsive")||(e.outerHTML='<div class="table-responsive">'+e.outerHTML+"</div>")}),n.forEach(function(n){function r(e){var t=e.getAttribute("data-hide");"checkbox"!==e.getAttribute("type")||e.checked||(t?t+=","+e.getAttribute("data-show"):t=e.getAttribute("data-show")),(t="radio"===e.getAttribute("type")&&!e.checked?null:t)&&t.split(",").forEach(function(e){var t=a.querySelector("[name='"+e+"']"),e=t.parentElement;(e.classList.contains("form-control")?e:t).classList.add("hidden")})}function o(e){var t=e.getAttribute("data-show");"checkbox"!==e.getAttribute("type")||e.checked||(t=null),(t="radio"===e.getAttribute("type")&&!e.checked?null:t)&&t.split(",").forEach(function(e){var t=a.querySelector("[name='"+e+"']"),e=t.parentElement;(e.classList.contains("form-control")?e:t).classList.remove("hidden")})}var a;n.insertAdjacentHTML("beforeend",loader),(a=n).querySelectorAll("[data-form-behavior]").forEach(function(t){"visibility"===t.getAttribute("data-form-behavior")&&(r(t),o(t)),t.addEventListener("change",function(e){"visibility"===t.getAttribute("data-form-behavior")&&(r(t),o(t))})}),n.addEventListener("submit",function(e){e.preventDefault(),(e=n).classList.add("submit"),e.querySelector('[type="submit"]').disabled=!0;e=new FormData(n);fetch(n.action,{method:"POST",body:e}).then(function(e){return e.json()}).then(function(e){var t;1===e.success?(e.message.length&&makeAlert("success",e.message),n.hasAttribute("data-redirect")&&("this"===(t=n.getAttribute("data-redirect"))?document.location.reload():window.location.href=t),n.hasAttribute("data-reset")&&n.reset()):makeAlert("error",e.message),i(n)}).catch(function(e){makeAlert("error",e),i(n)})})})}),window.onload=function(){document.querySelectorAll("img").forEach(function(e){e.complete&&void 0!==e.naturalWidth&&e.naturalWidth<=0&&(e.src=image_placeholder,(e=e.previousElementSibling)&&e.srcset.includes(".webp")&&e.remove())}),document.addEventListener("contextmenu",function(e){"IMG"==e.target.nodeName&&e.preventDefault()})};