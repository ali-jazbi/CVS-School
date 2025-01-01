["keydown", "touchmove", "touchstart", "mouseover"].forEach(function (v) {
	window.addEventListener(v, function () {
		if (!window.isGoftinoAdded) {
			window.isGoftinoAdded = 1;
			var i = "Njwzu3",
				d = document,
				g = d.createElement("script"),
				s = "https://www.goftino.com/widget/" + i,
				l = localStorage.getItem("goftino_" + i);
			(g.type = "text/javascript"),
				(g.async = !0),
				(g.src = l ? s + "?o=" + l : s);
			d.getElementsByTagName("head")[0].appendChild(g);
		}
	});
});
