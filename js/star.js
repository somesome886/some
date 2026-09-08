! function (e, t, a) {
		function r() {
		for (var e = 0; e < s.length; e++) s[e].alpha <= 0 ? (t.body.removeChild(s[e].el), s.splice(e, 1)) : (s[
		e].y--, s[e].scale += .004, s[e].alpha -= .013, s[e].el.style.cssText = "left:" + s[e].x +
		"px;top:" + s[e].y + "px;opacity:" + s[e].alpha + ";transform:scale(" + s[e].scale + "," + s[e]
		.scale + ") rotate(0deg);background:" + s[e].color + ";z-index:99999");
		requestAnimationFrame(r)
		}
		
		function n() {
		var t = "function" == typeof e.onclick && e.onclick;
		e.onclick = function (e) {
		t && t(), o(e)
		}
		}
		
		function o(e) {
		var a = t.createElement("div");
		a.className = "star", s.push({
		el: a,
		x: e.clientX - 5,
		scale: 1,
		y: e.clientY - 5,
		alpha: 1,
		color: c()
		}), t.body.appendChild(a)
		}
		
		function i(e) {
		var a = t.createElement("style");
		a.type = "text/css";
		try {
		a.appendChild(t.createTextNode(e))
		} catch (t) {
		a.styleSheet.cssText = e
		}
		t.getElementsByTagName("head")[0].appendChild(a)
		}
		
		function c() {
		return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math
		.random()) + ")"
		}
		var s = [];
		e.requestAnimationFrame = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e
		.mozRequestAnimationFrame || e.oRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
		setTimeout(e, 1e3 / 60)
		}, i(
		".star{width: 18px;height: 18px;position: fixed;clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);}"
		), n(), r()
		}(window, document);