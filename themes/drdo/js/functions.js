/*======================================================================
Plugins: jQuery Easing, jQuery Cookie, jQuery Marquee, Access Script, Equal Heights, Dropdown Menu, Custom Selectbox,  OWL Slider, Responsive Tabs, GMAP3, Detect Element Resize Plugin, Images Loaded, LiteBox, jQuery UI, Multiple Ticker, Photo Gallery, paroller
======================================================================*/

// jQuery Easing
//jQuery.easing["jswing"]=jQuery.easing["swing"];jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(x,t,b,c,d){return jQuery.easing[jQuery.easing.def](x,t,b,c,d)},easeInQuad:function(x,t,b,c,d){return c*(t/=d)*t+b},easeOutQuad:function(x,t,b,c,d){return-c*(t/=d)*(t-2)+b},easeInOutQuad:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t+b;return-c/2*(--t*(t-2)-1)+b},easeInCubic:function(x,t,b,c,d){return c*(t/=d)*t*t+b},easeOutCubic:function(x,t,b,c,d){return c*((t=t/d-1)*t*t+1)+b},easeInOutCubic:function(x,t,b,c,d){if((t/=d/2)<1)return c/ 2*t*t*t+b;return c/2*((t-=2)*t*t+2)+b},easeInQuart:function(x,t,b,c,d){return c*(t/=d)*t*t*t+b},easeOutQuart:function(x,t,b,c,d){return-c*((t=t/d-1)*t*t*t-1)+b},easeInOutQuart:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t+b;return-c/2*((t-=2)*t*t*t-2)+b},easeInQuint:function(x,t,b,c,d){return c*(t/=d)*t*t*t*t+b},easeOutQuint:function(x,t,b,c,d){return c*((t=t/d-1)*t*t*t*t+1)+b},easeInOutQuint:function(x,t,b,c,d){if((t/=d/2)<1)return c/2*t*t*t*t*t+b;return c/2*((t-=2)*t*t*t*t+2)+b},easeInSine:function(x,t,b,c,d){return-c*Math.cos(t/d*(Math.PI/2))+c+b},easeOutSine:function(x,t,b,c,d){return c*Math.sin(t/d*(Math.PI/2))+b},easeInOutSine:function(x,t,b,c,d){return-c/2*(Math.cos(Math.PI*t/d)-1)+b},easeInExpo:function(x,t,b,c,d){return t==0?b:c*Math.pow(2,10*(t/d-1))+b},easeOutExpo:function(x,t,b,c,d){return t==d?b+c:c*(-Math.pow(2,-10*t/d)+1)+b},easeInOutExpo:function(x,t,b,c,d){if(t==0)return b;if(t==d)return b+c;if((t/=d/2)<1)return c/2*Math.pow(2,10*(t-1))+b;return c/2*(-Math.pow(2,-10*--t)+2)+b},easeInCirc:function(x,t,b,c,d){return-c*(Math.sqrt(1-(t/=d)*t)-1)+b},easeOutCirc:function(x,t,b,c,d){return c*Math.sqrt(1-(t=t/d-1)*t)+b},easeInOutCirc:function(x,t,b,c,d){if((t/=d/2)<1)return-c/2*(Math.sqrt(1-t*t)-1)+b;return c/2*(Math.sqrt(1-(t-=2)*t)+1)+b},easeInElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return-(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2* Math.PI)/p))+b},easeOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d)==1)return b+c;if(!p)p=d*0.3;if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);return a*Math.pow(2,-10*t)*Math.sin((t*d-s)*(2*Math.PI)/p)+c+b},easeInOutElastic:function(x,t,b,c,d){var s=1.70158;var p=0;var a=c;if(t==0)return b;if((t/=d/2)==2)return b+c;if(!p)p=d*(0.3*1.5);if(a<Math.abs(c)){a=c;var s=p/4}else var s=p/(2*Math.PI)*Math.asin(c/a);if(t<1)return-0.5*(a*Math.pow(2,10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p))+b;return a*Math.pow(2,-10*(t-=1))*Math.sin((t*d-s)*(2*Math.PI)/p)*0.5+c+b},easeInBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*(t/=d)*t*((s+1)*t-s)+b},easeOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;return c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},easeInOutBack:function(x,t,b,c,d,s){if(s==undefined)s=1.70158;if((t/=d/2)<1)return c/2*(t*t*(((s*=1.525)+1)*t-s))+b;return c/2*((t-=2)*t*(((s*=1.525)+1)*t+s)+2)+b},easeInBounce:function(x,t,b,c,d){return c-jQuery.easing.easeOutBounce(x,d-t,0,c,d)+b},easeOutBounce:function(x,t,b,c,d){if((t/=d)<1/2.75)return c*(7.5625*t*t)+b;else if(t<2/2.75)return c*(7.5625*(t-=1.5/2.75)*t+0.75)+b;else if(t<2.5/2.75)return c*(7.5625*(t-=2.25/2.75)*t+0.9375)+b;else return c*(7.5625*(t-=2.625/2.75)*t+0.984375)+b},easeInOutBounce:function(x,t,b,c,d){if(t<d/2)return jQuery.easing.easeInBounce(x,t*2,0,c,d)*0.5+b;return jQuery.easing.easeOutBounce(x,t*2-d,0,c,d)*0.5+c*0.5+b}});
(function(factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], function($) {
            return factory($)
        })
    } else if (typeof module === "object" && typeof module.exports === "object") {
        exports = factory(require("jquery"))
    } else {
        factory(jQuery)
    }
})(function($) {
    $.easing.jswing = $.easing.swing;
    var pow = Math.pow,
        sqrt = Math.sqrt,
        sin = Math.sin,
        cos = Math.cos,
        PI = Math.PI,
        c1 = 1.70158,
        c2 = c1 * 1.525,
        c3 = c1 + 1,
        c4 = 2 * PI / 3,
        c5 = 2 * PI / 4.5;

    function bounceOut(x) {
        var n1 = 7.5625,
            d1 = 2.75;
        if (x < 1 / d1) {
            return n1 * x * x
        } else if (x < 2 / d1) {
            return n1 * (x -= 1.5 / d1) * x + .75
        } else if (x < 2.5 / d1) {
            return n1 * (x -= 2.25 / d1) * x + .9375
        } else {
            return n1 * (x -= 2.625 / d1) * x + .984375
        }
    }
    $.extend($.easing, {
        def: "easeOutQuad",
        swing: function(x) {
            return $.easing[$.easing.def](x)
        },
        easeInQuad: function(x) {
            return x * x
        },
        easeOutQuad: function(x) {
            return 1 - (1 - x) * (1 - x)
        },
        easeInOutQuad: function(x) {
            return x < .5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2
        },
        easeInCubic: function(x) {
            return x * x * x
        },
        easeOutCubic: function(x) {
            return 1 - pow(1 - x, 3)
        },
        easeInOutCubic: function(x) {
            return x < .5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2
        },
        easeInQuart: function(x) {
            return x * x * x * x
        },
        easeOutQuart: function(x) {
            return 1 - pow(1 - x, 4)
        },
        easeInOutQuart: function(x) {
            return x < .5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2
        },
        easeInQuint: function(x) {
            return x * x * x * x * x
        },
        easeOutQuint: function(x) {
            return 1 - pow(1 - x, 5)
        },
        easeInOutQuint: function(x) {
            return x < .5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2
        },
        easeInSine: function(x) {
            return 1 - cos(x * PI / 2)
        },
        easeOutSine: function(x) {
            return sin(x * PI / 2)
        },
        easeInOutSine: function(x) {
            return -(cos(PI * x) - 1) / 2
        },
        easeInExpo: function(x) {
            return x === 0 ? 0 : pow(2, 10 * x - 10)
        },
        easeOutExpo: function(x) {
            return x === 1 ? 1 : 1 - pow(2, -10 * x)
        },
        easeInOutExpo: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2
        },
        easeInCirc: function(x) {
            return 1 - sqrt(1 - pow(x, 2))
        },
        easeOutCirc: function(x) {
            return sqrt(1 - pow(x - 1, 2))
        },
        easeInOutCirc: function(x) {
            return x < .5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2
        },
        easeInElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4)
        },
        easeOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - .75) * c4) + 1
        },
        easeInOutElastic: function(x) {
            return x === 0 ? 0 : x === 1 ? 1 : x < .5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5) / 2 + 1
        },
        easeInBack: function(x) {
            return c3 * x * x * x - c1 * x * x
        },
        easeOutBack: function(x) {
            return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2)
        },
        easeInOutBack: function(x) {
            return x < .5 ? pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2
        },
        easeInBounce: function(x) {
            return 1 - bounceOut(1 - x)
        },
        easeOutBounce: bounceOut,
        easeInOutBounce: function(x) {
            return x < .5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2
        }
    })
});

/*! jquery.cookie v1.4.1 | MIT */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options = $.extend({}, options);
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};


//jQuery.marquee
(function() {
    var e = jQuery,
        f = "jQuery.pause",
        d = 1,
        b = e.fn.animate,
        a = {};

    function c() {
        return new Date().getTime()
    }
    e.fn.animate = function(k, h, j, i) {
        var g = e.speed(h, j, i);
        g.complete = g.old;
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var l = e.extend({}, g);
            b.apply(e(this), [k, e.extend({}, l)]);
            a[this[f]] = {
                run: true,
                prop: k,
                opt: l,
                start: c(),
                done: 0
            }
        })
    };
    e.fn.pause = function() {
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var g = a[this[f]];
            if (g && g.run) {
                g.done += c() - g.start;
                if (g.done > g.opt.duration) {
                    delete a[this[f]]
                } else {
                    e(this).stop();
                    g.run = false
                }
            }
        })
    };
    e.fn.resume = function() {
        return this.each(function() {
            if (!this[f]) {
                this[f] = d++
            }
            var g = a[this[f]];
            if (g && !g.run) {
                g.opt.duration -= g.done;
                g.done = 0;
                g.run = true;
                g.start = c();
                b.apply(e(this), [g.prop, e.extend({}, g.opt)])
            }
        })
    }
})();;
(function(d) {
    d.fn.marquee = function(w) {
        return this.each(function() {
            var a = d.extend({}, d.fn.marquee.defaults, w),
                b = d(this),
                c, k, p, q, h, l = 3,
                x = "animation-play-state",
                e = !1,
                B = function(a, b, c) {
                    for (var d = ["webkit", "moz", "MS", "o", ""], e = 0; e < d.length; e++) d[e] || (b = b.toLowerCase()), a.addEventListener(d[e] + b, c, !1)
                },
                E = function(a) {
                    var b = [],
                        c;
                    for (c in a) a.hasOwnProperty(c) && b.push(c + ":" + a[c]);
                    b.push();
                    return "{" + b.join(",") + "}"
                },
                g = {
                    pause: function() {
                        e && a.allowCss3Support ? c.css(x, "paused") : d.fn.pause && c.pause();
                        b.data("runningStatus",
                            "paused");
                        b.trigger("paused")
                    },
                    resume: function() {
                        e && a.allowCss3Support ? c.css(x, "running") : d.fn.resume && c.resume();
                        b.data("runningStatus", "resumed");
                        b.trigger("resumed")
                    },
                    toggle: function() {
                        g["resumed" == b.data("runningStatus") ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(b.timer);
                        b.css("visibility", "hidden").html(b.find(".js-marquee:first"));
                        setTimeout(function() {
                            b.css("visibility", "visible")
                        }, 0)
                    }
                };
            if ("string" === typeof w) d.isFunction(g[w]) && (c || (c = b.find(".js-marquee-wrapper")), !0 === b.data("css3AnimationIsSupported") &&
                (e = !0), g[w]());
            else {
                var r;
                d.each(a, function(c, d) {
                    r = b.attr("data-" + c);
                    if ("undefined" !== typeof r) {
                        switch (r) {
                            case "true":
                                r = !0;
                                break;
                            case "false":
                                r = !1
                        }
                        a[c] = r
                    }
                });
                a.duration = a.speed || a.duration;
                q = "up" == a.direction || "down" == a.direction;
                a.gap = a.duplicated ? a.gap : 0;
                b.wrapInner('<div class="js-marquee"></div>');
                var f = b.find(".js-marquee").css({
                    "margin-right": a.gap,
                    "float": "left"
                });
                a.duplicated && f.clone(!0).appendTo(b);
                b.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>');
                c = b.find(".js-marquee-wrapper");
                if (q) {
                    var m = b.height();
                    c.removeAttr("style");
                    b.height(m);
                    b.find(".js-marquee").css({
                        "float": "none",
                        "margin-bottom": a.gap,
                        "margin-right": 0
                    });
                    a.duplicated && b.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var s = b.find(".js-marquee:first").height() + a.gap;
                    a.duration *= (parseInt(s, 10) + parseInt(m, 10)) / parseInt(m, 10)
                } else h = b.find(".js-marquee:first").width() + a.gap, k = b.width(), a.duration *= (parseInt(h, 10) + parseInt(k, 10)) / parseInt(k, 10);
                a.duplicated && (a.duration /= 2);
                if (a.allowCss3Support) {
                    var f = document.body ||
                        document.createElement("div"),
                        n = "marqueeAnimation-" + Math.floor(1E7 * Math.random()),
                        z = ["Webkit", "Moz", "O", "ms", "Khtml"],
                        A = "animation",
                        t = "",
                        u = "";
                    f.style.animation && (u = "@keyframes " + n + " ", e = !0);
                    if (!1 === e)
                        for (var y = 0; y < z.length; y++)
                            if (void 0 !== f.style[z[y] + "AnimationName"]) {
                                f = "-" + z[y].toLowerCase() + "-";
                                A = f + A;
                                x = f + x;
                                u = "@" + f + "keyframes " + n + " ";
                                e = !0;
                                break
                            }
                    e && (t = n + " " + a.duration / 1E3 + "s " + a.delayBeforeStart / 1E3 + "s infinite " + a.css3easing, b.data("css3AnimationIsSupported", !0))
                }
                var C = function() {
                        c.css("margin-top",
                            "up" == a.direction ? m + "px" : "-" + s + "px")
                    },
                    D = function() {
                        c.css("margin-left", "left" == a.direction ? k + "px" : "-" + h + "px")
                    };
                a.duplicated ? (q ? c.css("margin-top", "up" == a.direction ? m : "-" + (2 * s - a.gap) + "px") : c.css("margin-left", "left" == a.direction ? k + "px" : "-" + (2 * h - a.gap) + "px"), l = 1) : q ? C() : D();
                var v = function() {
                    a.duplicated && (1 === l ? (a._originalDuration = a.duration, a.duration = q ? "up" == a.direction ? a.duration + m / (s / a.duration) : 2 * a.duration : "left" == a.direction ? a.duration + k / (h / a.duration) : 2 * a.duration, t && (t = n + " " + a.duration / 1E3 +
                        "s " + a.delayBeforeStart / 1E3 + "s " + a.css3easing), l++) : 2 === l && (a.duration = a._originalDuration, t && (n += "0", u = d.trim(u) + "0 ", t = n + " " + a.duration / 1E3 + "s 0s infinite " + a.css3easing), l++));
                    q ? a.duplicated ? (2 < l && c.css("margin-top", "up" == a.direction ? 0 : "-" + s + "px"), p = {
                        "margin-top": "up" == a.direction ? "-" + s + "px" : 0
                    }) : (C(), p = {
                        "margin-top": "up" == a.direction ? "-" + c.height() + "px" : m + "px"
                    }) : a.duplicated ? (2 < l && c.css("margin-left", "left" == a.direction ? 0 : "-" + h + "px"), p = {
                        "margin-left": "left" == a.direction ? "-" + h + "px" : 0
                    }) : (D(), p = {
                        "margin-left": "left" ==
                            a.direction ? "-" + h + "px" : k + "px"
                    });
                    b.trigger("beforeStarting");
                    if (e) {
                        c.css(A, t);
                        var f = u + " { 100%  " + E(p) + "}",
                            g = d("style");
                        0 !== g.length ? g.filter(":last").append(f) : d("head").append("<style>" + f + "</style>");
                        B(c[0], "AnimationIteration", function() {
                            b.trigger("finished")
                        });
                        B(c[0], "AnimationEnd", function() {
                            v();
                            b.trigger("finished")
                        })
                    } else c.animate(p, a.duration, a.easing, function() {
                        b.trigger("finished");
                        a.pauseOnCycle ? b.timer = setTimeout(v, a.delayBeforeStart) : v()
                    });
                    b.data("runningStatus", "resumed")
                };
                b.bind("pause",
                    g.pause);
                b.bind("resume", g.resume);
                a.pauseOnHover && b.bind("mouseenter mouseleave", g.toggle);
                e && a.allowCss3Support ? v() : b.timer = setTimeout(v, a.delayBeforeStart)
            }
        })
    };
    d.fn.marquee.defaults = {
        allowCss3Support: !0,
        css3easing: "linear",
        easing: "linear",
        delayBeforeStart: 1E3,
        direction: "left",
        duplicated: !1,
        duration: 5E3,
        gap: 20,
        pauseOnCycle: !1,
        pauseOnHover: !1
    }
})(jQuery);

// Access Script
var siteName = $("#hdnSiteName").val();
akCookie = {
    create: function(c, d, e) {
        var b = "";
        if (e) {
            var a = new Date;
            a.setTime(a.getTime() + e * 24 * 60 * 60 * 1000);
            b = "; expires=" + a.toGMTString()
        }
        document.cookie = c + "=" + d + b + "; path=/"
    },
    read: function(b) {
        var e = b + "=";
        var a = document.cookie.split(";");
        for (var d = 0; d < a.length; d++) {
            var f = a[d];
            while (f.charAt(0) == " ") {
                f = f.substring(1, f.length)
            }
            if (f.indexOf(e) == 0) {
                return f.substring(e.length, f.length)
            }
        }
        return null
    },
    erase: function(a) {
        akCookie.create(a, "", -1)
    }
};
$(function() {
    $("#accessControl").show();
    akAccess = function() {
        var e = {
            normal: "93.8%",
            large: "100%",
            larger: "106.3%"
        };
        var d = ["normal", "wob", "sWob", "bWob", "tWob"];
        var f;
        var h;
        var g = akCookie.read(siteName);
        if (g !== null) {
            settings = g.split(" ");
            b(settings[0]);
            a(settings[1])
        } else {
            $("input.font-large").addClass("current");
            $("input.contrast-normal").addClass("current")
        }

        function b(i) {
            $("body").css("font-size", e[i]);
            for (key in e) {
                if (i === key) {
                    f = key
                }
            }
            if (!f) {
                f = "large"
            }
            $(".fontScaler").removeClass("current");
            $(".font-" + f).addClass("current")
        }

        function a(i) {
            h = i;
            $("body").removeClass(d.join(" "));
            $("body").addClass(i);
            $("input.contrastChanger").each(function() {
                $(this).removeClass("current")
            });
            $("input.contrast-" + h).addClass("current")
        }

        function c() {
            akCookie.create(siteName, f + " " + h, 2)
        }
        return {
            handleFontSizeEvent: function(i) {
                var j = i.split("_")[i.split("_").length - 1];
                b(j);
                c();
                return false
            },
            handleContrastEvent: function(i) {
                var j = i.split("_")[i.split("_").length - 1];
                a(j);
                c();
                return false
            }
        }
    }();
    $("#accessControl input.fontScaler").click(function() {
        akAccess.handleFontSizeEvent($(this).attr("id"));
        $("#accessControl input.fontScaler").each(function() {
            $(this).removeClass("current")
        });
        $(this).addClass("current");
        return false
    });
    $("#accessControl input.contrastChanger").click(function() {
        akAccess.handleContrastEvent($(this).attr("id"));
        return false
    })
});


/*Dropdown Menu*/
function dropdown(dropdownId, hoverClass, mouseOffDelay) {
    if (dropdown = document.getElementById(dropdownId)) {
        var listItems = dropdown.getElementsByTagName("li");
        for (var i = 0; i < listItems.length; i++) {
            listItems[i].onmouseover = function() {
                this.className = addClass(this)
            };
            listItems[i].onmouseout = function() {
                var that = this;
                setTimeout(function() {
                    that.className = removeClass(that)
                }, mouseOffDelay);
                this.className = that.className
            };
            var anchor = listItems[i].getElementsByTagName("a");
            anchor = anchor[0];
            anchor.onfocus = function() {
                tabOn(this.parentNode)
            };
            anchor.onblur = function() {
                tabOff(this.parentNode)
            }
        }
    }

    function tabOn(li) {
        if (li.nodeName == "LI") {
            li.className = addClass1(li);
            tabOn(li.parentNode.parentNode)
        }
    }

    function tabOff(li) {
        if (li.nodeName == "LI") {
            li.className = removeClass1(li);
            tabOff(li.parentNode.parentNode)
        }
    }

    function addClass1(li) {
        return li.className + " focus"
    }

    function removeClass1(li) {
        return li.className.replace("focus", "")
    }

    function addClass(li) {
        return li.className + " " + hoverClass
    }

    function removeClass(li) {
        return li.className.replace(hoverClass, "")
    }
}

function buildmenu() {
    var $mainmenu = $("#mainNav ul") && $("#nav li");
    var $headers = $mainmenu.find("ul").parent();
    $($headers).hover(function(e) {
        $(this).children("a:eq(0)").addClass("selected");
        $("#nav li").removeClass("focus")
    }, function(e) {
        $(this).children("a:eq(0)").removeClass("selected");
        $("#nav li").removeClass("focus")
    })
}
var adjustMenu = function() {
    if ($('body').hasClass('device')) {
        $("#nav li").removeClass("hover");
        if (!$(".toggleMenu").hasClass("active")) {
            $("#nav").hide()
        } else {
            $("#nav").show()
        }
        $("#nav li").unbind("mouseenter mouseleave");
        $("#navMob li.parent .menuIcon").unbind("click").bind("click", function(e) {
            e.preventDefault();
            $(this).toggleClass("active");
            if ($(this).hasClass("active")) {
                $(this).prev("ul").slideDown()
            } else {
                $(this).prev("ul").slideUp();
                var navtop = $('.toggleMenu').offset();
                $('html, body').animate({
                    scrollTop: navtop.top
                }, '200');
            }
        })
    } else {
        if ($('body').hasClass('desktop')) {
            $("#nav").show();
            buildmenu()
        }
    }
};


// Custom Selectbox
(function(a) {
    a.fn.extend({
        customSelect: function(c) {
            if (typeof document.body.style.maxHeight === "undefined") {
                return this
            }
            var e = {
                    customClass: "customSelect",
                    mapClass: true,
                    mapStyle: true
                },
                c = a.extend(e, c),
                d = c.customClass,
                f = function(h, k) {
                    var g = h.find(":selected"),
                        j = k.children(":first"),
                        i = g.html() || "&nbsp;";
                    j.html(i);
                    if (g.attr("disabled")) {
                        k.addClass(b("DisabledOption"))
                    } else {
                        k.removeClass(b("DisabledOption"))
                    }
                    setTimeout(function() {
                        k.removeClass(b("Open"));
                        a(document).off("mouseup." + b("Open"))
                    }, 60)
                },
                b = function(g) {
                    return d + g
                };
            return this.each(function() {
                var g = a(this),
                    i = a("<span />").addClass(b("Inner")),
                    h = a("<span />");
                g.after(h.append(i));
                h.addClass(d);
                if (c.mapClass) {
                    h.addClass(g.attr("class"))
                }
                if (c.mapStyle) {
                    h.attr("style", g.attr("style"))
                }
                g.addClass("hasCustomSelect").on("update", function() {
                    f(g, h);
                    var k = parseInt(g.outerWidth(), 10) - (parseInt(h.outerWidth(), 10) - parseInt(h.width(), 10));
                    h.css({
                        display: "inline-block"
                    });
                    var j = h.outerHeight();
                    if (g.attr("disabled")) {
                        h.addClass(b("Disabled"))
                    } else {
                        h.removeClass(b("Disabled"))
                    }
                    i.css({
                        width: k,
                        display: "inline-block"
                    });
                    g.css({
                        "-webkit-appearance": "menulist-button",
                        width: h.outerWidth(),
                        position: "absolute",
                        opacity: 0,
                        height: j,
                        fontSize: h.css("font-size")
                    })
                }).on("change", function() {
                    h.addClass(b("Changed"));
                    f(g, h)
                }).on("keyup", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        g.blur();
                        g.focus()
                    } else {
                        if (j.which == 13 || j.which == 27) {
                            f(g, h)
                        }
                    }
                }).on("mousedown", function(j) {
                    h.removeClass(b("Changed"))
                }).on("mouseup", function(j) {
                    if (!h.hasClass(b("Open"))) {
                        if (a("." + b("Open")).not(h).length > 0 && typeof InstallTrigger !== "undefined") {
                            g.focus()
                        } else {
                            h.addClass(b("Open"));
                            j.stopPropagation();
                            a(document).one("mouseup." + b("Open"), function(k) {
                                if (k.target != g.get(0) && a.inArray(k.target, g.find("*").get()) < 0) {
                                    g.blur()
                                } else {
                                    f(g, h)
                                }
                            })
                        }
                    }
                }).focus(function() {
                    h.removeClass(b("Changed")).addClass(b("Focus"))
                }).blur(function() {
                    h.removeClass(b("Focus") + " " + b("Open"))
                }).hover(function() {
                    h.addClass(b("Hover"))
                }, function() {
                    h.removeClass(b("Hover"))
                }).trigger("update")
            })
        }
    })
})(jQuery);


/*
jQuery Waypoints - v2.0.3
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function() {
    var t = [].indexOf || function(t) {
            for (var e = 0, n = this.length; e < n; e++) {
                if (e in this && this[e] === t) return e
            }
            return -1
        },
        e = [].slice;
    (function(t, e) {
        if (typeof define === "function" && define.amd) {
            return define("waypoints", ["jquery"], function(n) {
                return e(n, t)
            })
        } else {
            return e(t.jQuery, t)
        }
    })(this, function(n, r) {
        var i, o, l, s, f, u, a, c, h, d, p, y, v, w, g, m;
        i = n(r);
        c = t.call(r, "ontouchstart") >= 0;
        s = {
            horizontal: {},
            vertical: {}
        };
        f = 1;
        a = {};
        u = "waypoints-context-id";
        p = "resize.waypoints";
        y = "scroll.waypoints";
        v = 1;
        w = "waypoints-waypoint-ids";
        g = "waypoint";
        m = "waypoints";
        o = function() {
            function t(t) {
                var e = this;
                this.$element = t;
                this.element = t[0];
                this.didResize = false;
                this.didScroll = false;
                this.id = "context" + f++;
                this.oldScroll = {
                    x: t.scrollLeft(),
                    y: t.scrollTop()
                };
                this.waypoints = {
                    horizontal: {},
                    vertical: {}
                };
                t.data(u, this.id);
                a[this.id] = this;
                t.bind(y, function() {
                    var t;
                    if (!(e.didScroll || c)) {
                        e.didScroll = true;
                        t = function() {
                            e.doScroll();
                            return e.didScroll = false
                        };
                        return r.setTimeout(t, n[m].settings.scrollThrottle)
                    }
                });
                t.bind(p, function() {
                    var t;
                    if (!e.didResize) {
                        e.didResize = true;
                        t = function() {
                            n[m]("refresh");
                            return e.didResize = false
                        };
                        return r.setTimeout(t, n[m].settings.resizeThrottle)
                    }
                })
            }
            t.prototype.doScroll = function() {
                var t, e = this;
                t = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                };
                if (c && (!t.vertical.oldScroll || !t.vertical.newScroll)) {
                    n[m]("refresh")
                }
                n.each(t, function(t, r) {
                    var i, o, l;
                    l = [];
                    o = r.newScroll > r.oldScroll;
                    i = o ? r.forward : r.backward;
                    n.each(e.waypoints[t], function(t, e) {
                        var n, i;
                        if (r.oldScroll < (n = e.offset) && n <= r.newScroll) {
                            return l.push(e)
                        } else if (r.newScroll < (i = e.offset) && i <= r.oldScroll) {
                            return l.push(e)
                        }
                    });
                    l.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    if (!o) {
                        l.reverse()
                    }
                    return n.each(l, function(t, e) {
                        if (e.options.continuous || t === l.length - 1) {
                            return e.trigger([i])
                        }
                    })
                });
                return this.oldScroll = {
                    x: t.horizontal.newScroll,
                    y: t.vertical.newScroll
                }
            };
            t.prototype.refresh = function() {
                var t, e, r, i = this;
                r = n.isWindow(this.element);
                e = this.$element.offset();
                this.doScroll();
                t = {
                    horizontal: {
                        contextOffset: r ? 0 : e.left,
                        contextScroll: r ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: r ? 0 : e.top,
                        contextScroll: r ? 0 : this.oldScroll.y,
                        contextDimension: r ? n[m]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                };
                return n.each(t, function(t, e) {
                    return n.each(i.waypoints[t], function(t, r) {
                        var i, o, l, s, f;
                        i = r.options.offset;
                        l = r.offset;
                        o = n.isWindow(r.element) ? 0 : r.$element.offset()[e.offsetProp];
                        if (n.isFunction(i)) {
                            i = i.apply(r.element)
                        } else if (typeof i === "string") {
                            i = parseFloat(i);
                            if (r.options.offset.indexOf("%") > -1) {
                                i = Math.ceil(e.contextDimension * i / 100)
                            }
                        }
                        r.offset = o - e.contextOffset + e.contextScroll - i;
                        if (r.options.onlyOnScroll && l != null || !r.enabled) {
                            return
                        }
                        if (l !== null && l < (s = e.oldScroll) && s <= r.offset) {
                            return r.trigger([e.backward])
                        } else if (l !== null && l > (f = e.oldScroll) && f >= r.offset) {
                            return r.trigger([e.forward])
                        } else if (l === null && e.oldScroll >= r.offset) {
                            return r.trigger([e.forward])
                        }
                    })
                })
            };
            t.prototype.checkEmpty = function() {
                if (n.isEmptyObject(this.waypoints.horizontal) && n.isEmptyObject(this.waypoints.vertical)) {
                    this.$element.unbind([p, y].join(" "));
                    return delete a[this.id]
                }
            };
            return t
        }();
        l = function() {
            function t(t, e, r) {
                var i, o;
                r = n.extend({}, n.fn[g].defaults, r);
                if (r.offset === "bottom-in-view") {
                    r.offset = function() {
                        var t;
                        t = n[m]("viewportHeight");
                        if (!n.isWindow(e.element)) {
                            t = e.$element.height()
                        }
                        return t - n(this).outerHeight()
                    }
                }
                this.$element = t;
                this.element = t[0];
                this.axis = r.horizontal ? "horizontal" : "vertical";
                this.callback = r.handler;
                this.context = e;
                this.enabled = r.enabled;
                this.id = "waypoints" + v++;
                this.offset = null;
                this.options = r;
                e.waypoints[this.axis][this.id] = this;
                s[this.axis][this.id] = this;
                i = (o = t.data(w)) != null ? o : [];
                i.push(this.id);
                t.data(w, i)
            }
            t.prototype.trigger = function(t) {
                if (!this.enabled) {
                    return
                }
                if (this.callback != null) {
                    this.callback.apply(this.element, t)
                }
                if (this.options.triggerOnce) {
                    return this.destroy()
                }
            };
            t.prototype.disable = function() {
                return this.enabled = false
            };
            t.prototype.enable = function() {
                this.context.refresh();
                return this.enabled = true
            };
            t.prototype.destroy = function() {
                delete s[this.axis][this.id];
                delete this.context.waypoints[this.axis][this.id];
                return this.context.checkEmpty()
            };
            t.getWaypointsByElement = function(t) {
                var e, r;
                r = n(t).data(w);
                if (!r) {
                    return []
                }
                e = n.extend({}, s.horizontal, s.vertical);
                return n.map(r, function(t) {
                    return e[t]
                })
            };
            return t
        }();
        d = {
            init: function(t, e) {
                var r;
                if (e == null) {
                    e = {}
                }
                if ((r = e.handler) == null) {
                    e.handler = t
                }
                this.each(function() {
                    var t, r, i, s;
                    t = n(this);
                    i = (s = e.context) != null ? s : n.fn[g].defaults.context;
                    if (!n.isWindow(i)) {
                        i = t.closest(i)
                    }
                    i = n(i);
                    r = a[i.data(u)];
                    if (!r) {
                        r = new o(i)
                    }
                    return new l(t, r, e)
                });
                n[m]("refresh");
                return this
            },
            disable: function() {
                return d._invoke(this, "disable")
            },
            enable: function() {
                return d._invoke(this, "enable")
            },
            destroy: function() {
                return d._invoke(this, "destroy")
            },
            prev: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e > 0) {
                        return t.push(n[e - 1])
                    }
                })
            },
            next: function(t, e) {
                return d._traverse.call(this, t, e, function(t, e, n) {
                    if (e < n.length - 1) {
                        return t.push(n[e + 1])
                    }
                })
            },
            _traverse: function(t, e, i) {
                var o, l;
                if (t == null) {
                    t = "vertical"
                }
                if (e == null) {
                    e = r
                }
                l = h.aggregate(e);
                o = [];
                this.each(function() {
                    var e;
                    e = n.inArray(this, l[t]);
                    return i(o, e, l[t])
                });
                return this.pushStack(o)
            },
            _invoke: function(t, e) {
                t.each(function() {
                    var t;
                    t = l.getWaypointsByElement(this);
                    return n.each(t, function(t, n) {
                        n[e]();
                        return true
                    })
                });
                return this
            }
        };
        n.fn[g] = function() {
            var t, r;
            r = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (d[r]) {
                return d[r].apply(this, t)
            } else if (n.isFunction(r)) {
                return d.init.apply(this, arguments)
            } else if (n.isPlainObject(r)) {
                return d.init.apply(this, [null, r])
            } else if (!r) {
                return n.error("jQuery Waypoints needs a callback function or handler option.")
            } else {
                return n.error("The " + r + " method does not exist in jQuery Waypoints.")
            }
        };
        n.fn[g].defaults = {
            context: r,
            continuous: true,
            enabled: true,
            horizontal: false,
            offset: 0,
            triggerOnce: false
        };
        h = {
            refresh: function() {
                return n.each(a, function(t, e) {
                    return e.refresh()
                })
            },
            viewportHeight: function() {
                var t;
                return (t = r.innerHeight) != null ? t : i.height()
            },
            aggregate: function(t) {
                var e, r, i;
                e = s;
                if (t) {
                    e = (i = a[n(t).data(u)]) != null ? i.waypoints : void 0
                }
                if (!e) {
                    return []
                }
                r = {
                    horizontal: [],
                    vertical: []
                };
                n.each(r, function(t, i) {
                    n.each(e[t], function(t, e) {
                        return i.push(e)
                    });
                    i.sort(function(t, e) {
                        return t.offset - e.offset
                    });
                    r[t] = n.map(i, function(t) {
                        return t.element
                    });
                    return r[t] = n.unique(r[t])
                });
                return r
            },
            above: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset <= t.oldScroll.y
                })
            },
            below: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "vertical", function(t, e) {
                    return e.offset > t.oldScroll.y
                })
            },
            left: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset <= t.oldScroll.x
                })
            },
            right: function(t) {
                if (t == null) {
                    t = r
                }
                return h._filter(t, "horizontal", function(t, e) {
                    return e.offset > t.oldScroll.x
                })
            },
            enable: function() {
                return h._invoke("enable")
            },
            disable: function() {
                return h._invoke("disable")
            },
            destroy: function() {
                return h._invoke("destroy")
            },
            extendFn: function(t, e) {
                return d[t] = e
            },
            _invoke: function(t) {
                var e;
                e = n.extend({}, s.vertical, s.horizontal);
                return n.each(e, function(e, n) {
                    n[t]();
                    return true
                })
            },
            _filter: function(t, e, r) {
                var i, o;
                i = a[n(t).data(u)];
                if (!i) {
                    return []
                }
                o = [];
                n.each(i.waypoints[e], function(t, e) {
                    if (r(i, e)) {
                        return o.push(e)
                    }
                });
                o.sort(function(t, e) {
                    return t.offset - e.offset
                });
                return n.map(o, function(t) {
                    return t.element
                })
            }
        };
        n[m] = function() {
            var t, n;
            n = arguments[0], t = 2 <= arguments.length ? e.call(arguments, 1) : [];
            if (h[n]) {
                return h[n].apply(null, t)
            } else {
                return h.aggregate.call(null, n)
            }
        };
        n[m].settings = {
            resizeThrottle: 100,
            scrollThrottle: 30
        };
        return i.load(function() {
            return n[m]("refresh")
        })
    })
}).call(this);


/* jquery.responsiveTabs.js */
(function(e, t, n) {
    function i(t, n) {
        this.element = t;
        this.$element = e(t);
        this.tabs = [];
        this.state = "";
        this.rotateInterval = 0;
        this.$queue = e({});
        this.options = e.extend({}, r, n);
        this.init()
    }
    var r = {
        active: null,
        event: "click",
        disabled: [],
        collapsible: "accordion",
        startCollapsed: !1,
        rotate: !1,
        setHash: !1,
        animation: "default",
        duration: 500,
        scrollToAccordion: !1,
        activate: function() {},
        deactivate: function() {},
        load: function() {},
        activateState: function() {},
        classes: {
            stateDefault: "r-tabs-state-default",
            stateActive: "r-tabs-state-active",
            stateDisabled: "r-tabs-state-disabled",
            stateExcluded: "r-tabs-state-excluded",
            tab: "r-tabs-tab",
            anchor: "r-tabs-anchor",
            panel: "r-tabs-panel",
            accordionTitle: "r-tabs-accordion-title"
        }
    };
    i.prototype.init = function() {
        var n = this;
        this.tabs = this._loadElements();
        this._loadClasses();
        this._loadEvents();
        e(t).on("resize", function(e) {
            n._setState(e)
        });
        e(t).on("hashchange", function(e) {
            var r = n._getTabRefBySelector(t.location.hash),
                i = n._getTab(r);
            r >= 0 && !i._ignoreHashChange && !i.disabled && n._openTab(e, n._getTab(r), !0)
        });
        this.options.rotate !== !1 && this.startRotation();
        this.$element.bind("tabs-activate", function(e, t) {
            n.options.activate.call(this, e, t)
        });
        this.$element.bind("tabs-deactivate", function(e, t) {
            n.options.deactivate.call(this, e, t)
        });
        this.$element.bind("tabs-activate-state", function(e, t) {
            n.options.activateState.call(this, e, t)
        });
        this.$element.bind("tabs-load", function(e) {
            var t;
            n._setState(e);
            if (n.options.startCollapsed !== !0 && (n.options.startCollapsed !== "accordion" || n.state !== "accordion")) {
                t = n._getStartTab();
                n._openTab(e, t);
                n.options.load.call(this, e, t)
            }
        });
        this.$element.trigger("tabs-load")
    };
    i.prototype._loadElements = function() {
        var t = this,
            n = this.$element.children("ul"),
            r = [],
            i = 0;
        this.$element.addClass("r-tabs");
        n.addClass("r-tabs-nav");
        e("li", n).each(function() {
            var n = e(this),
                s = n.hasClass(t.options.classes.stateExcluded),
                o, u, a, f, l;
            if (!s) {
                o = e("a", n);
                l = o.attr("href");
                u = e(l);
                a = e("<div></div>").insertBefore(u);
                f = e("<a></a>").attr("href", l).html(o.html()).appendTo(a);
                var c = {
                    _ignoreHashChange: !1,
                    id: i,
                    disabled: e.inArray(i, t.options.disabled) !== -1,
                    tab: e(this),
                    anchor: e("a", n),
                    panel: u,
                    selector: l,
                    accordionTab: a,
                    accordionAnchor: f,
                    active: !1
                };
                i++;
                r.push(c)
            }
        });
        return r
    };
    i.prototype._loadClasses = function() {
        for (var e = 0; e < this.tabs.length; e++) {
            this.tabs[e].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab);
            this.tabs[e].anchor.addClass(this.options.classes.anchor);
            this.tabs[e].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel);
            this.tabs[e].accordionTab.addClass(this.options.classes.accordionTitle);
            this.tabs[e].accordionAnchor.addClass(this.options.classes.anchor);
            if (this.tabs[e].disabled) {
                this.tabs[e].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled);
                this.tabs[e].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled)
            }
        }
    };
    i.prototype._loadEvents = function() {
        var e = this,
            n = function(n) {
                var r = e._getCurrentTab(),
                    i = n.data.tab;
                n.preventDefault();
                if (!i.disabled) {
                    e.options.setHash && (history.pushState ? history.pushState(null, null, i.selector) : t.location.hash = i.selector);
                    n.data.tab._ignoreHashChange = !0;
                    if (r !== i || e._isCollapisble()) {
                        e._closeTab(n, r);
                        (r !== i || !e._isCollapisble()) && e._openTab(n, i, !1, !0)
                    }
                }
            };
        for (var r = 0; r < this.tabs.length; r++) {
            this.tabs[r].anchor.on(e.options.event, {
                tab: e.tabs[r]
            }, n);
            this.tabs[r].accordionAnchor.on(e.options.event, {
                tab: e.tabs[r]
            }, n)
        }
    };
    i.prototype._getStartTab = function() {
        var e = this._getTabRefBySelector(t.location.hash),
            n;
        e >= 0 && !this._getTab(e).disabled ? n = this._getTab(e) : this.options.active > 0 && !this._getTab(this.options.active).disabled ? n = this._getTab(this.options.active) : n = this._getTab(0);
        return n
    };
    i.prototype._setState = function(t) {
        var r = e("ul", this.$element),
            i = this.state,
            s = typeof this.options.startCollapsed == "string",
            o;
        r.is(":visible") ? this.state = "tabs" : this.state = "accordion";
        if (this.state !== i) {
            this.$element.trigger("tabs-activate-state", {
                oldState: i,
                newState: this.state
            });
            if (i && s && this.options.startCollapsed !== this.state && this._getCurrentTab() === n) {
                o = this._getStartTab(t);
                this._openTab(t, o)
            }
        }
    };
    i.prototype._openTab = function(t, n, r, i) {
        var s = this;
        r && this._closeTab(t, this._getCurrentTab());
        i && this.rotateInterval > 0 && this.stopRotation();
        n.active = !0;
        n.tab.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
        n.accordionTab.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
        s._doTransition(n.panel, s.options.animation, "open", function() {
            n.panel.removeClass(s.options.classes.stateDefault).addClass(s.options.classes.stateActive);
            s.getState() === "accordion" && s.options.scrollToAccordion && (!s._isInView(n.accordionTab) || s.options.animation !== "default") && (s.options.animation !== "default" && s.options.duration > 0 ? e("html, body").animate({
                scrollTop: n.accordionTab.offset().top
            }, s.options.duration) : e("html, body").scrollTop(n.accordionTab.offset().top))
        });
        this.$element.trigger("tabs-activate", n)
    };
    i.prototype._closeTab = function(e, t) {
        var r = this;
        if (t !== n) {
            t.active = !1;
            t.tab.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault);
            r._doTransition(t.panel, r.options.animation, "close", function() {
                t.accordionTab.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault);
                t.panel.removeClass(r.options.classes.stateActive).addClass(r.options.classes.stateDefault)
            }, !0);
            this.$element.trigger("tabs-deactivate", t)
        }
    };
    i.prototype._doTransition = function(e, t, n, r, i) {
        var s, o = this;
        switch (t) {
            case "slide":
                s = n === "open" ? "slideDown" : "slideUp";
                break;
            case "fade":
                s = n === "open" ? "fadeIn" : "fadeOut";
                break;
            default:
                s = n === "open" ? "show" : "hide";
                o.options.duration = 0
        }
        this.$queue.queue("responsive-tabs", function(i) {
            e[s]({
                duration: o.options.duration,
                complete: function() {
                    r.call(e, t, n);
                    i()
                }
            })
        });
        (n === "open" || i) && this.$queue.dequeue("responsive-tabs")
    };
    i.prototype._isCollapisble = function() {
        return typeof this.options.collapsible == "boolean" && this.options.collapsible || typeof this.options.collapsible == "string" && this.options.collapsible === this.getState()
    };
    i.prototype._getTab = function(e) {
        return this.tabs[e]
    };
    i.prototype._getTabRefBySelector = function(e) {
        for (var t = 0; t < this.tabs.length; t++)
            if (this.tabs[t].selector === e) return t;
        return -1
    };
    i.prototype._getCurrentTab = function() {
        return this._getTab(this._getCurrentTabRef())
    };
    i.prototype._getNextTabRef = function(e) {
        var t = e || this._getCurrentTabRef(),
            n = t === this.tabs.length - 1 ? 0 : t + 1;
        return this._getTab(n).disabled ? this._getNextTabRef(n) : n
    };
    i.prototype._getPreviousTabRef = function() {
        return this._getCurrentTabRef() === 0 ? this.tabs.length - 1 : this._getCurrentTabRef() - 1
    };
    i.prototype._getCurrentTabRef = function() {
        for (var e = 0; e < this.tabs.length; e++)
            if (this.tabs[e].active) return e;
        return -1
    };
    i.prototype._isInView = function(n) {
        var r = e(t).scrollTop(),
            i = r + e(t).height(),
            s = n.offset().top,
            o = s + n.height();
        return o <= i && s >= r
    };
    i.prototype.activate = function(e, t) {
        var n = jQuery.Event("tabs-activate"),
            r = this._getTab(e);
        r.disabled || this._openTab(n, r, !0, t || !0)
    };
    i.prototype.deactivate = function(e) {
        var t = jQuery.Event("tabs-dectivate"),
            n = this._getTab(e);
        n.disabled || this._closeTab(t, n)
    };
    i.prototype.getState = function() {
        return this.state
    };
    i.prototype.startRotation = function(t) {
        var n = this;
        if (!(this.tabs.length > this.options.disabled.length)) throw new Error("Rotation is not possible if all tabs are disabled");
        this.rotateInterval = setInterval(function() {
            var e = jQuery.Event("rotate");
            n._openTab(e, n._getTab(n._getNextTabRef()), !0)
        }, t || (e.isNumeric(n.options.rotate) ? n.options.rotate : 4e3))
    };
    i.prototype.stopRotation = function() {
        t.clearInterval(this.rotateInterval);
        this.rotateInterval = 0
    };
    e.fn.responsiveTabs = function(t) {
        var r = arguments;
        if (t === n || typeof t == "object") return this.each(function() {
            e.data(this, "responsivetabs") || e.data(this, "responsivetabs", new i(this, t))
        });
        if (typeof t == "string" && t[0] !== "_" && t !== "init") return this.each(function() {
            var n = e.data(this, "responsivetabs");
            n instanceof i && typeof n[t] == "function" && n[t].apply(n, Array.prototype.slice.call(r, 1));
            t === "destroy" && e.data(this, "responsivetabs", null)
        })
    }
})(jQuery, window);

// Detect Element Resize Plugin for jQuery * https://github.com/sdecima/javascript-detect-element-resize * version: 0.5.3
(function($) {
    var attachEvent = document.attachEvent,
        stylesCreated = false;
    var jQuery_resize = $.fn.resize;
    $.fn.resize = function(callback) {
        return this.each(function() {
            if (this == window) jQuery_resize.call(jQuery(this), callback);
            else addResizeListener(this, callback)
        })
    };
    $.fn.removeResize = function(callback) {
        return this.each(function() {
            removeResizeListener(this, callback)
        })
    };
    if (!attachEvent) {
        var requestFrame = function() {
            var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) {
                return window.setTimeout(fn, 20)
            };
            return function(fn) {
                return raf(fn)
            }
        }();
        var cancelFrame = function() {
            var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
            return function(id) {
                return cancel(id)
            }
        }();

        function resetTriggers(element) {
            var triggers = element.__resizeTriggers__,
                expand = triggers.firstElementChild,
                contract = triggers.lastElementChild,
                expandChild = expand.firstElementChild;
            contract.scrollLeft = contract.scrollWidth;
            contract.scrollTop = contract.scrollHeight;
            expandChild.style.width = expand.offsetWidth + 1 + "px";
            expandChild.style.height = expand.offsetHeight + 1 + "px";
            expand.scrollLeft = expand.scrollWidth;
            expand.scrollTop = expand.scrollHeight
        }

        function checkTriggers(element) {
            return element.offsetWidth != element.__resizeLast__.width || element.offsetHeight != element.__resizeLast__.height
        }

        function scrollListener(e) {
            var element = this;
            resetTriggers(this);
            if (this.__resizeRAF__) cancelFrame(this.__resizeRAF__);
            this.__resizeRAF__ = requestFrame(function() {
                if (checkTriggers(element)) {
                    element.__resizeLast__.width = element.offsetWidth;
                    element.__resizeLast__.height = element.offsetHeight;
                    element.__resizeListeners__.forEach(function(fn) {
                        fn.call(element, e)
                    })
                }
            })
        }
        var animation = false,
            animationstring = "animation",
            keyframeprefix = "",
            animationstartevent = "animationstart",
            domPrefixes = "Webkit Moz O ms".split(" "),
            startEvents = "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),
            pfx = "";
        var elm = document.createElement("fakeelement");
        if (elm.style.animationName !== undefined) animation = true;
        if (animation === false)
            for (var i = 0; i < domPrefixes.length; i++)
                if (elm.style[domPrefixes[i] + "AnimationName"] !== undefined) {
                    pfx = domPrefixes[i];
                    animationstring = pfx + "Animation";
                    keyframeprefix = "-" + pfx.toLowerCase() + "-";
                    animationstartevent = startEvents[i];
                    animation = true;
                    break
                }
        var animationName = "resizeanim";
        var animationKeyframes = "@" + keyframeprefix + "keyframes " + animationName + " { from { opacity: 0; } to { opacity: 0; } } ";
        var animationStyle = keyframeprefix + "animation: 1ms " + animationName + "; "
    }

    function createStyles() {
        if (!stylesCreated) {
            var css = (animationKeyframes ? animationKeyframes : "") + ".resize-triggers { " + (animationStyle ? animationStyle : "") + "visibility: hidden; opacity: 0; } " + '.resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                head = document.head || document.getElementsByTagName("head")[0],
                style = document.createElement("style");
            style.type = "text/css";
            if (style.styleSheet) style.styleSheet.cssText = css;
            else style.appendChild(document.createTextNode(css));
            head.appendChild(style);
            stylesCreated = true
        }
    }
    window.addResizeListener = function(element, fn) {
        if (attachEvent) element.attachEvent("onresize", fn);
        else {
            if (!element.__resizeTriggers__) {
                if (getComputedStyle(element).position == "static") element.style.position = "relative";
                createStyles();
                element.__resizeLast__ = {};
                element.__resizeListeners__ = [];
                (element.__resizeTriggers__ = document.createElement("div")).className = "resize-triggers";
                element.__resizeTriggers__.innerHTML = '<div class="expand-trigger"><div></div></div>' + '<div class="contract-trigger"></div>';
                element.appendChild(element.__resizeTriggers__);
                resetTriggers(element);
                element.addEventListener("scroll", scrollListener, true);
                animationstartevent && element.__resizeTriggers__.addEventListener(animationstartevent, function(e) {
                    if (e.animationName == animationName) resetTriggers(element)
                })
            }
            element.__resizeListeners__.push(fn)
        }
    };
    window.removeResizeListener = function(element, fn) {
        if (attachEvent) element.detachEvent("onresize", fn);
        else {
            element.__resizeListeners__.splice(element.__resizeListeners__.indexOf(fn), 1);
            if (!element.__resizeListeners__.length) {
                element.removeEventListener("scroll", scrollListener);
                element.__resizeTriggers__ = !element.removeChild(element.__resizeTriggers__)
            }
        }
    }
})(jQuery);

/** imagesLoaded PACKAGED v3.1.4 */
(function() {
    function e() {}

    function t(e, t) {
        for (var n = e.length; n--;)
            if (e[n].listener === t) return n;
        return -1
    }

    function n(e) {
        return function() {
            return this[e].apply(this, arguments)
        }
    }
    var i = e.prototype,
        r = this,
        o = r.EventEmitter;
    i.getListeners = function(e) {
        var t, n, i = this._getEvents();
        if ("object" == typeof e) {
            t = {};
            for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
        } else t = i[e] || (i[e] = []);
        return t
    }, i.flattenListeners = function(e) {
        var t, n = [];
        for (t = 0; e.length > t; t += 1) n.push(e[t].listener);
        return n
    }, i.getListenersAsObject = function(e) {
        var t, n = this.getListeners(e);
        return n instanceof Array && (t = {}, t[e] = n), t || n
    }, i.addListener = function(e, n) {
        var i, r = this.getListenersAsObject(e),
            o = "object" == typeof n;
        for (i in r) r.hasOwnProperty(i) && -1 === t(r[i], n) && r[i].push(o ? n : {
            listener: n,
            once: !1
        });
        return this
    }, i.on = n("addListener"), i.addOnceListener = function(e, t) {
        return this.addListener(e, {
            listener: t,
            once: !0
        })
    }, i.once = n("addOnceListener"), i.defineEvent = function(e) {
        return this.getListeners(e), this
    }, i.defineEvents = function(e) {
        for (var t = 0; e.length > t; t += 1) this.defineEvent(e[t]);
        return this
    }, i.removeListener = function(e, n) {
        var i, r, o = this.getListenersAsObject(e);
        for (r in o) o.hasOwnProperty(r) && (i = t(o[r], n), -1 !== i && o[r].splice(i, 1));
        return this
    }, i.off = n("removeListener"), i.addListeners = function(e, t) {
        return this.manipulateListeners(!1, e, t)
    }, i.removeListeners = function(e, t) {
        return this.manipulateListeners(!0, e, t)
    }, i.manipulateListeners = function(e, t, n) {
        var i, r, o = e ? this.removeListener : this.addListener,
            s = e ? this.removeListeners : this.addListeners;
        if ("object" != typeof t || t instanceof RegExp)
            for (i = n.length; i--;) o.call(this, t, n[i]);
        else
            for (i in t) t.hasOwnProperty(i) && (r = t[i]) && ("function" == typeof r ? o.call(this, i, r) : s.call(this, i, r));
        return this
    }, i.removeEvent = function(e) {
        var t, n = typeof e,
            i = this._getEvents();
        if ("string" === n) delete i[e];
        else if ("object" === n)
            for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t];
        else delete this._events;
        return this
    }, i.removeAllListeners = n("removeEvent"), i.emitEvent = function(e, t) {
        var n, i, r, o, s = this.getListenersAsObject(e);
        for (r in s)
            if (s.hasOwnProperty(r))
                for (i = s[r].length; i--;) n = s[r][i], n.once === !0 && this.removeListener(e, n.listener), o = n.listener.apply(this, t || []), o === this._getOnceReturnValue() && this.removeListener(e, n.listener);
        return this
    }, i.trigger = n("emitEvent"), i.emit = function(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(e, t)
    }, i.setOnceReturnValue = function(e) {
        return this._onceReturnValue = e, this
    }, i._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, i._getEvents = function() {
        return this._events || (this._events = {})
    }, e.noConflict = function() {
        return r.EventEmitter = o, e
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return e
    }) : "object" == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}).call(this),
    function(e) {
        function t(t) {
            var n = e.event;
            return n.target = n.target || n.srcElement || t, n
        }
        var n = document.documentElement,
            i = function() {};
        n.addEventListener ? i = function(e, t, n) {
            e.addEventListener(t, n, !1)
        } : n.attachEvent && (i = function(e, n, i) {
            e[n + i] = i.handleEvent ? function() {
                var n = t(e);
                i.handleEvent.call(i, n)
            } : function() {
                var n = t(e);
                i.call(e, n)
            }, e.attachEvent("on" + n, e[n + i])
        });
        var r = function() {};
        n.removeEventListener ? r = function(e, t, n) {
            e.removeEventListener(t, n, !1)
        } : n.detachEvent && (r = function(e, t, n) {
            e.detachEvent("on" + t, e[t + n]);
            try {
                delete e[t + n]
            } catch (i) {
                e[t + n] = void 0
            }
        });
        var o = {
            bind: i,
            unbind: r
        };
        "function" == typeof define && define.amd ? define("eventie/eventie", o) : e.eventie = o
    }(this),
    function(e, t) {
        "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], function(n, i) {
            return t(e, n, i)
        }) : "object" == typeof exports ? module.exports = t(e, require("eventEmitter"), require("eventie")) : e.imagesLoaded = t(e, e.EventEmitter, e.eventie)
    }(this, function(e, t, n) {
        function i(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function r(e) {
            return "[object Array]" === d.call(e)
        }

        function o(e) {
            var t = [];
            if (r(e)) t = e;
            else if ("number" == typeof e.length)
                for (var n = 0, i = e.length; i > n; n++) t.push(e[n]);
            else t.push(e);
            return t
        }

        function s(e, t, n) {
            if (!(this instanceof s)) return new s(e, t);
            "string" == typeof e && (e = document.querySelectorAll(e)), this.elements = o(e), this.options = i({}, this.options), "function" == typeof t ? n = t : i(this.options, t), n && this.on("always", n), this.getImages(), a && (this.jqDeferred = new a.Deferred);
            var r = this;
            setTimeout(function() {
                r.check()
            })
        }

        function c(e) {
            this.img = e
        }

        function f(e) {
            this.src = e, v[e] = this
        }
        var a = e.jQuery,
            u = e.console,
            h = u !== void 0,
            d = Object.prototype.toString;
        s.prototype = new t, s.prototype.options = {}, s.prototype.getImages = function() {
            this.images = [];
            for (var e = 0, t = this.elements.length; t > e; e++) {
                var n = this.elements[e];
                "IMG" === n.nodeName && this.addImage(n);
                for (var i = n.querySelectorAll("img"), r = 0, o = i.length; o > r; r++) {
                    var s = i[r];
                    this.addImage(s)
                }
            }
        }, s.prototype.addImage = function(e) {
            var t = new c(e);
            this.images.push(t)
        }, s.prototype.check = function() {
            function e(e, r) {
                return t.options.debug && h && u.log("confirm", e, r), t.progress(e), n++, n === i && t.complete(), !0
            }
            var t = this,
                n = 0,
                i = this.images.length;
            if (this.hasAnyBroken = !1, !i) return this.complete(), void 0;
            for (var r = 0; i > r; r++) {
                var o = this.images[r];
                o.on("confirm", e), o.check()
            }
        }, s.prototype.progress = function(e) {
            this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded;
            var t = this;
            setTimeout(function() {
                t.emit("progress", t, e), t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
            })
        }, s.prototype.complete = function() {
            var e = this.hasAnyBroken ? "fail" : "done";
            this.isComplete = !0;
            var t = this;
            setTimeout(function() {
                if (t.emit(e, t), t.emit("always", t), t.jqDeferred) {
                    var n = t.hasAnyBroken ? "reject" : "resolve";
                    t.jqDeferred[n](t)
                }
            })
        }, a && (a.fn.imagesLoaded = function(e, t) {
            var n = new s(this, e, t);
            return n.jqDeferred.promise(a(this))
        }), c.prototype = new t, c.prototype.check = function() {
            var e = v[this.img.src] || new f(this.img.src);
            if (e.isConfirmed) return this.confirm(e.isLoaded, "cached was confirmed"), void 0;
            if (this.img.complete && void 0 !== this.img.naturalWidth) return this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), void 0;
            var t = this;
            e.on("confirm", function(e, n) {
                return t.confirm(e.isLoaded, n), !0
            }), e.check()
        }, c.prototype.confirm = function(e, t) {
            this.isLoaded = e, this.emit("confirm", this, t)
        };
        var v = {};
        return f.prototype = new t, f.prototype.check = function() {
            if (!this.isChecked) {
                var e = new Image;
                n.bind(e, "load", this), n.bind(e, "error", this), e.src = this.src, this.isChecked = !0
            }
        }, f.prototype.handleEvent = function(e) {
            var t = "on" + e.type;
            this[t] && this[t](e)
        }, f.prototype.onload = function(e) {
            this.confirm(!0, "onload"), this.unbindProxyEvents(e)
        }, f.prototype.onerror = function(e) {
            this.confirm(!1, "onerror"), this.unbindProxyEvents(e)
        }, f.prototype.confirm = function(e, t) {
            this.isConfirmed = !0, this.isLoaded = e, this.emit("confirm", this, t)
        }, f.prototype.unbindProxyEvents = function(e) {
            n.unbind(e.target, "load", this), n.unbind(e.target, "error", this)
        }, s
    });

//	LiteBox v1.3, 
//	===============================================================================
! function(e, t) {
    function o(t, o) {
        this.element = t, this.$element = e(this.element), this.options = e.extend({}, a, o), this._defaults = a, this._name = l, this.init()
    }

    function i() {
        return t.innerHeight ? t.innerHeight : e(t).height()
    }

    function n(t) {
        e(t).each(function() {
            var t = new Image;
            t.src = this, t.width > 0 && e("<img />").attr("src", this).addClass("litebox-preload").appendTo("body").hide()
        })
    }
    var l = "liteBox",
        a = {
            revealSpeed: 400,
            background: "rgba(0,0,0,.8)",
            overlayClose: !0,
            escKey: !0,
            navKey: !0,
            closeTip: "tip-l-fade",
            closeTipText: "Close",
            prevTip: "tip-t-fade",
            prevTipText: "Previous",
            nextTip: "tip-t-fade",
            nextTipText: "Next",
            callbackInit: function() {},
            callbackBeforeOpen: function() {},
            callbackAfterOpen: function() {},
            callbackBeforeClose: function() {},
            callbackAfterClose: function() {},
            callbackError: function() {},
            callbackPrev: function() {},
            callbackNext: function() {},
            errorMessage: "Error loading content."
        };
    o.prototype = {
        init: function() {
            var t = this;
            this.$element.on("click", function(e) {
                e.preventDefault(), t.openLitebox()
            }), keyEsc = 27, keyLeft = 37, keyRight = 39, e("body").off("keyup").on("keyup", function(o) {
                t.options.escKey && o.keyCode == keyEsc && t.closeLitebox(), t.options.navKey && o.keyCode == keyLeft && e(".litebox-prev").trigger("click"), t.options.navKey && o.keyCode == keyRight && e(".litebox-next").trigger("click")
            }), this.options.callbackInit.call(this)
        },
        openLitebox: function() {
            var t = this;
            this.options.callbackBeforeOpen.call(this), t.buildLitebox();
            var o = this.$element;
            if (t.populateLitebox(o), t.options.overlayClose && $litebox.on("click", function(o) {
                    (o.target === this || e(o.target).hasClass("litebox-container") || e(o.target).hasClass("litebox-error")) && t.closeLitebox()
                }), $close.on("click", function() {
                    t.closeLitebox()
                }), this.$element.attr("rel")) {
                var t = this,
                    i = this.$element.attr("rel"),
                    l = e('[rel="' + this.$element.attr("rel") + '"]'),
                    a = [];
                e('[rel="' + i + '"]').each(function() {
                    var t = e(this).attr("href");
                    a.push(t)
                }), n(a), e(".litebox-nav").show(), $prevNav.off("click").on("click", function() {
                    t.options.callbackPrev.call(this);
                    var i = l.index(o);
                    o = l.eq(i - 1), e(o).length || (o = l.last()), t.populateLitebox(o)
                }), $nextNav.off("click").on("click", function() {
                    t.options.callbackNext.call(this);
                    var i = l.index(o);
                    o = l.eq(i + 1), e(o).length || (o = l.first()), t.populateLitebox(o)
                })
            }
            this.options.callbackAfterOpen.call(this)
        },
        buildLitebox: function() {
            $litebox = e("<div>", {
                "class": "litebox-overlay"
            }), $close = e("<div>", {
                "class": "litebox-close " + this.options.closeTip,
                "data-tooltip": this.options.closeTipText
            }), $text = e("<div>", {
                "class": "litebox-text"
            }), $error = e('<div class="litebox-error"><span>' + this.options.errorMessage + "</span></div>"), $prevNav = e("<div>", {
                "class": "litebox-nav litebox-prev " + this.options.prevTip,
                "data-tooltip": this.options.prevTipText
            }), $nextNav = e("<div>", {
                "class": "litebox-nav litebox-next " + this.options.nextTip,
                "data-tooltip": this.options.nextTipText
            }), $container = e("<div>", {
                "class": "litebox-container"
            }), $loader = e("<div>", {
                "class": "litebox-loader"
            }), e("body").prepend($litebox.css({
                "background-color": this.options.background
            })), $litebox.append($close, $text, $prevNav, $nextNav, $container), $litebox.fadeIn(this.options.revealSpeed)
        },
        populateLitebox: function(t) {
            var o = this,
                i = t.attr("href"),
                n = e(".litebox-content");
            $litebox.append($loader);
            var l = t.attr("title");
            if ("undefined" == typeof l || "" == l ? (e(".litebox-text").removeClass("active"), e(".litebox-text").html()) : (e(".litebox-text").html(l), e(".litebox-text").addClass("active")), null !== i.match(/\.(jpeg|jpg|gif|png|bmp)/i)) {
                var a = e("<img>", {
                    src: i,
                    "class": "litebox-content"
                });
                o.transitionContent("image", n, a), e("img.litebox-content").imagesLoaded(function() {
                    $loader.remove()
                }), a.error(function() {
                    o.liteboxError(), $loader.remove()
                })
            } else if (videoURL = i.match(/(youtube|youtu|vimeo|dailymotion|kickstarter)\.(com|be)\/((watch\?v=([-\w]+))|(video\/([-\w]+))|(projects\/([-\w]+)\/([-\w]+))|([-\w]+))/)) {
                var r = "";
                if ("youtube" == videoURL[1] && (r = "http://www.youtube.com/v/" + videoURL[5]), "youtu" == videoURL[1] && (r = "http://www.youtube.com/v/" + videoURL[3]), "vimeo" == videoURL[1] && (r = "http://player.vimeo.com/video/" + videoURL[3]), "dailymotion" == videoURL[1] && (r = "https://www.dailymotion.com/embed/video/" + videoURL[7]), "kickstarter" == videoURL[1] && (r = "https://www.kickstarter.com/projects/" + videoURL[9] + "/" + videoURL[10] + "/widget/video.html"), r) {
                    var s = e("<iframe>", {
                        src: r,
                        frameborder: "0",
                        vspace: "0",
                        hspace: "0",
                        scrolling: "no",
                        allowfullscreen: "",
                        "class": "litebox-content",
                        style: "background: #000"
                    });
                    o.transitionContent("embed", n, s), s.load(function() {
                        $loader.remove()
                    })
                }
            } else if ("#" == i.substring(0, 1)) e(i).length ? ($html = e("<div>", {
                "class": "litebox-content litebox-inline-html"
            }), $html.append(e(i).clone()), o.transitionContent("inline", n, $html)) : o.liteboxError(), $loader.remove();
            else {
                var s = e("<iframe>", {
                    src: i,
                    frameborder: "0",
                    vspace: "0",
                    hspace: "0",
                    scrolling: "auto",
                    "class": "litebox-content",
                    allowfullscreen: ""
                });
                o.transitionContent("iframe", n, s), s.load(function() {
                    $loader.remove()
                })
            }
        },
        transitionContent: function(o, i, n) {
            var l = this;
            "inline" != o && $container.removeClass("litebox-scroll"), i.remove(), $container.append(n), "inline" == o && $container.addClass("litebox-scroll"), l.centerContent(), e(t).on("resize", function() {
                l.centerContent()
            })
        },
        centerContent: function() {
            $litebox.css({
                height: i()
            }), $container.css({
                "line-height": $container.height() + "px"
            }), "undefined" != typeof $html && e(".litebox-inline-html").outerHeight() < $container.height() && e(".litebox-inline-html").css({
                "margin-top": "-" + e(".litebox-inline-html").outerHeight() / 2 + "px",
                top: "50%"
            })
        },
        closeLitebox: function() {
            this.options.callbackBeforeClose.call(this), $litebox.fadeOut(this.options.revealSpeed, function() {
                e(".litebox-nav").hide(), $litebox.empty().remove(), e(".litebox-preload").remove()
            }), e(".tipsy").fadeOut(this.options.revealSpeed, function() {
                e(this).remove()
            }), e(".litebox-prev").off("click"), e(".litebox-next").off("click"), this.options.callbackAfterClose.call(this)
        },
        liteboxError: function() {
            this.options.callbackError.call(this), $container.append($error)
        }
    }, e.fn[l] = function(t) {
        return this.each(function() {
            e.data(this, l) || e.data(this, l, new o(this, t))
        })
    }
}(jQuery, window, document);

/*! jQuery UI
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.menu.js, jquery.ui.tooltip.js
 */
(function(e, t) {
    function i(t, i) {
        var s, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
    }

    function n(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    var s = 0,
        a = /^ui-id-\d+$/;
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        focus: function(t) {
            return function(i, n) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), n && n.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        scrollParent: function() {
            var t;
            return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
            }).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(i) {
            if (i !== t) return this.css("zIndex", i);
            if (this.length)
                for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
                    if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    a = a.parent()
                }
            return 0
        },
        uniqueId: function() {
            return this.each(function() {
                this.id || (this.id = "ui-id-" + ++s)
            })
        },
        removeUniqueId: function() {
            return this.each(function() {
                a.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, n) {
            return !!e.data(t, n[3])
        },
        focusable: function(t) {
            return i(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var n = e.attr(t, "tabindex"),
                s = isNaN(n);
            return (s || n >= 0) && i(t, !s)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(i, n) {
        function s(t, i, n, s) {
            return e.each(a, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
            o = n.toLowerCase(),
            r = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + n] = function(i) {
            return i === t ? r["inner" + n].call(this) : this.each(function() {
                e(this).css(o, s(this, i) + "px")
            })
        }, e.fn["outer" + n] = function(t, i) {
            return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function() {
                e(this).css(o, s(this, t, !0, i) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e.extend(e.ui, {
        plugin: {
            add: function(t, i, n) {
                var s, a = e.ui[t].prototype;
                for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
            },
            call: function(e, t, i) {
                var n, s = e.plugins[t];
                if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                    for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
            }
        },
        hasScroll: function(t, i) {
            if ("hidden" === e(t).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
        }
    })
})(jQuery);
(function(t, e) {
    var i = 0,
        s = Array.prototype.slice,
        n = t.cleanData;
    t.cleanData = function(e) {
        for (var i, s = 0; null != (i = e[s]); s++) try {
            t(i).triggerHandler("remove")
        } catch (o) {}
        n(e)
    }, t.widget = function(i, s, n) {
        var o, a, r, h, l = {},
            c = i.split(".")[0];
        i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function(e) {
            return !!t.data(e, o)
        }, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function(t, i) {
            return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
        }, t.extend(r, a, {
            version: n.version,
            _proto: t.extend({}, n),
            _childConstructors: []
        }), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function(i, n) {
            return t.isFunction(n) ? (l[i] = function() {
                var t = function() {
                        return s.prototype[i].apply(this, arguments)
                    },
                    e = function(t) {
                        return s.prototype[i].apply(this, t)
                    };
                return function() {
                    var i, s = this._super,
                        o = this._superApply;
                    return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
                }
            }(), e) : (l[i] = n, e)
        }), r.prototype = t.widget.extend(h, {
            widgetEventPrefix: a ? h.widgetEventPrefix || i : i
        }, l, {
            constructor: r,
            namespace: c,
            widgetName: i,
            widgetFullName: o
        }), a ? (t.each(a._childConstructors, function(e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, r, i._proto)
        }), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
    }, t.widget.extend = function(i) {
        for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
            for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
        return i
    }, t.widget.bridge = function(i, n) {
        var o = n.prototype.widgetFullName || i;
        t.fn[i] = function(a) {
            var r = "string" == typeof a,
                h = s.call(arguments, 1),
                l = this;
            return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function() {
                var s, n = t.data(this, o);
                return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
            }) : this.each(function() {
                var e = t.data(this, o);
                e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
            }), l
        }
    }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(e, s) {
            s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(t) {
                    t.target === s && this.destroy()
                }
            }), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: t.noop,
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: t.noop,
        widget: function() {
            return this.element
        },
        option: function(i, s) {
            var n, o, a, r = i;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof i)
                if (r = {}, n = i.split("."), i = n.shift(), n.length) {
                    for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
                    if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
                    o[i] = s
                } else {
                    if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
                    r[i] = s
                }
            return this._setOptions(r), this
        },
        _setOptions: function(t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function(t, e) {
            return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _on: function(i, s, n) {
            var o, a = this;
            "boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function(n, r) {
                function h() {
                    return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
                }
                "string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
                var l = n.match(/^(\w+)\s*(.*)$/),
                    c = l[1] + a.eventNamespace,
                    u = l[2];
                u ? o.delegate(u, c, h) : s.bind(c, h)
            })
        },
        _off: function(t, e) {
            e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
        },
        _delay: function(t, e) {
            function i() {
                return ("string" == typeof t ? s[t] : t).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, e || 0)
        },
        _hoverable: function(e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function(e) {
                    t(e.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(e) {
                    t(e.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function(e) {
                    t(e.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(e) {
                    t(e.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(e, i, s) {
            var n, o, a = this.options[e];
            if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                for (n in o) n in i || (i[n] = o[n]);
            return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, t.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(e, i) {
        t.Widget.prototype["_" + e] = function(s, n, o) {
            "string" == typeof n && (n = {
                effect: n
            });
            var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function(i) {
                t(this)[e](), o && o.call(s[0]), i()
            })
        }
    })
})(jQuery);
(function(t) {
    var e = !1;
    t(document).mouseup(function() {
        e = !1
    }), t.widget("ui.mouse", {
        version: "",
        options: {
            cancel: "input,textarea,button,select,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var e = this;
            this.element.bind("mousedown." + this.widgetName, function(t) {
                return e._mouseDown(t)
            }).bind("click." + this.widgetName, function(i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
            }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(i) {
            if (!e) {
                this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
                var s = this,
                    n = 1 === i.which,
                    a = "string" == typeof this.options.cancel && i.target.nodeName ? t(i.target).closest(this.options.cancel).length : !1;
                return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                    s.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === t.data(i.target, this.widgetName + ".preventClickEvent") && t.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) {
                    return s._mouseMove(t)
                }, this._mouseUpDelegate = function(t) {
                    return s._mouseUp(t)
                }, t(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), e = !0, !0)) : !0
            }
        },
        _mouseMove: function(e) {
            return t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, e) !== !1, this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) {
            return t(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
        },
        _mouseDistanceMet: function(t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function() {
            return this.mouseDelayMet
        },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() {
            return !0
        }
    })
})(jQuery);
(function(t, e) {
    function i(t, e, i) {
        return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
    }

    function s(e, i) {
        return parseInt(t.css(e, i), 10) || 0
    }

    function n(e) {
        var i = e[0];
        return 9 === i.nodeType ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : t.isWindow(i) ? {
            width: e.width(),
            height: e.height(),
            offset: {
                top: e.scrollTop(),
                left: e.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: e.outerWidth(),
            height: e.outerHeight(),
            offset: e.offset()
        }
    }
    t.ui = t.ui || {};
    var a, o = Math.max,
        r = Math.abs,
        l = Math.round,
        h = /left|center|right/,
        c = /top|center|bottom/,
        u = /[\+\-]\d+(\.[\d]+)?%?/,
        d = /^\w+/,
        p = /%$/,
        f = t.fn.position;
    t.position = {
            scrollbarWidth: function() {
                if (a !== e) return a;
                var i, s, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    o = n.children()[0];
                return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
            },
            getScrollInfo: function(e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
                    a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
                return {
                    width: a ? t.position.scrollbarWidth() : 0,
                    height: n ? t.position.scrollbarWidth() : 0
                }
            },
            getWithinInfo: function(e) {
                var i = t(e || window),
                    s = t.isWindow(i[0]),
                    n = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: n,
                    offset: i.offset() || {
                        left: 0,
                        top: 0
                    },
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: s ? i.width() : i.outerWidth(),
                    height: s ? i.height() : i.outerHeight()
                }
            }
        }, t.fn.position = function(e) {
            if (!e || !e.of) return f.apply(this, arguments);
            e = t.extend({}, e);
            var a, p, g, m, v, _, b = t(e.of),
                y = t.position.getWithinInfo(e.within),
                k = t.position.getScrollInfo(y),
                w = (e.collision || "flip").split(" "),
                D = {};
            return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, g = _.height, m = _.offset, v = t.extend({}, m), t.each(["my", "at"], function() {
                var t, i, s = (e[this] || "").split(" ");
                1 === s.length && (s = h.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = h.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), D[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
            }), 1 === w.length && (w[1] = w[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += g : "center" === e.at[1] && (v.top += g / 2), a = i(D.at, p, g), v.left += a[0], v.top += a[1], this.each(function() {
                var n, h, c = t(this),
                    u = c.outerWidth(),
                    d = c.outerHeight(),
                    f = s(this, "marginLeft"),
                    _ = s(this, "marginTop"),
                    x = u + f + s(this, "marginRight") + k.width,
                    C = d + _ + s(this, "marginBottom") + k.height,
                    M = t.extend({}, v),
                    T = i(D.my, c.outerWidth(), c.outerHeight());
                "right" === e.my[0] ? M.left -= u : "center" === e.my[0] && (M.left -= u / 2), "bottom" === e.my[1] ? M.top -= d : "center" === e.my[1] && (M.top -= d / 2), M.left += T[0], M.top += T[1], t.support.offsetFractions || (M.left = l(M.left), M.top = l(M.top)), n = {
                    marginLeft: f,
                    marginTop: _
                }, t.each(["left", "top"], function(i, s) {
                    t.ui.position[w[i]] && t.ui.position[w[i]][s](M, {
                        targetWidth: p,
                        targetHeight: g,
                        elemWidth: u,
                        elemHeight: d,
                        collisionPosition: n,
                        collisionWidth: x,
                        collisionHeight: C,
                        offset: [a[0] + T[0], a[1] + T[1]],
                        my: e.my,
                        at: e.at,
                        within: y,
                        elem: c
                    })
                }), e.using && (h = function(t) {
                    var i = m.left - M.left,
                        s = i + p - u,
                        n = m.top - M.top,
                        a = n + g - d,
                        l = {
                            target: {
                                element: b,
                                left: m.left,
                                top: m.top,
                                width: p,
                                height: g
                            },
                            element: {
                                element: c,
                                left: M.left,
                                top: M.top,
                                width: u,
                                height: d
                            },
                            horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
                            vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
                        };
                    u > p && p > r(i + s) && (l.horizontal = "center"), d > g && g > r(n + a) && (l.vertical = "middle"), l.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, l)
                }), c.offset(t.extend(M, {
                    using: h
                }))
            })
        }, t.ui.position = {
            fit: {
                left: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollLeft : s.offset.left,
                        a = s.width,
                        r = t.left - e.collisionPosition.marginLeft,
                        l = n - r,
                        h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                },
                top: function(t, e) {
                    var i, s = e.within,
                        n = s.isWindow ? s.scrollTop : s.offset.top,
                        a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop,
                        l = n - r,
                        h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            },
            flip: {
                left: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.left + n.scrollLeft,
                        o = n.width,
                        l = n.isWindow ? n.scrollLeft : n.offset.left,
                        h = t.left - e.collisionPosition.marginLeft,
                        c = h - l,
                        u = h + e.collisionWidth - o - l,
                        d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - l, (s > 0 || u > r(s)) && (t.left += d + p + f))
                },
                top: function(t, e) {
                    var i, s, n = e.within,
                        a = n.offset.top + n.scrollTop,
                        o = n.height,
                        l = n.isWindow ? n.scrollTop : n.offset.top,
                        h = t.top - e.collisionPosition.marginTop,
                        c = h - l,
                        u = h + e.collisionHeight - o - l,
                        d = "top" === e.my[1],
                        p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        g = -2 * e.offset[1];
                    0 > c ? (s = t.top + p + f + g + e.collisionHeight - o - a, t.top + p + f + g > c && (0 > s || r(c) > s) && (t.top += p + f + g)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + g - l, t.top + p + f + g > u && (i > 0 || u > r(i)) && (t.top += p + f + g))
                }
            },
            flipfit: {
                left: function() {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                },
                top: function() {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        },
        function() {
            var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
                r = document.createElement("div");
            e = document.createElement(o ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, o && t.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (a in s) e.style[a] = s[a];
            e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
        }()
})(jQuery);
(function(t) {
    t.widget("ui.draggable", t.ui.mouse, {
        version: "",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function() {
            "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
        },
        _destroy: function() {
            this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i = this.options;
            return this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(e), this.handle ? (t(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function() {
                t("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1e3
                }).css(t(this).offset()).appendTo("body")
            }), !0) : !1)
        },
        _mouseStart: function(e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, this.offset.scroll = !1, t.extend(this.offset, {
                click: {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", e) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _mouseDrag: function(e, i) {
            if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (this._trigger("drag", e, s) === !1) return this._mouseUp({}), !1;
                this.position = s.position
            }
            return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "original" !== this.options.helper || t.contains(this.element[0].ownerDocument, this.element[0]) ? ("invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                i._trigger("stop", e) !== !1 && i._clear()
            }) : this._trigger("stop", e) !== !1 && this._clear(), !1) : !1
        },
        _mouseUp: function(e) {
            return t("div.ui-draggable-iframeFix").each(function() {
                this.parentNode.removeChild(this)
            }), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function() {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
        },
        _getHandle: function(e) {
            return this.options.handle ? !!t(e.target).closest(this.element.find(this.options.handle)).length : !0
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.element.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            return n.containment ? "window" === n.containment ? (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : "document" === n.containment ? (this.containment = [0, 0, t(document).width() - this.helperProportions.width - this.margins.left, (t(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top], undefined) : n.containment.constructor === Array ? (this.containment = n.containment, undefined) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = t(n.containment), s = i[0], s && (e = "hidden" !== i.css("overflow"), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i), undefined) : (this.containment = null, undefined)
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
            return this.offset.scroll || (this.offset.scroll = {
                top: n.scrollTop(),
                left: n.scrollLeft()
            }), {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n, a, o = this.options,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = e.pageX,
                h = e.pageY;
            return this.offset.scroll || (this.offset.scroll = {
                top: r.scrollTop(),
                left: r.scrollLeft()
            }), this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, h = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
            }
        },
        _clear: function() {
            this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
        },
        _trigger: function(e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function() {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = s.options,
                a = t.extend({}, i, {
                    item: s.element
                });
            s.sortables = [], t(n.connectToSortable).each(function() {
                var i = t.data(this, "ui-sortable");
                i && !i.options.disabled && (s.sortables.push({
                    instance: i,
                    shouldRevert: i.options.revert
                }), i.refreshPositions(), i._trigger("activate", e, a))
            })
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = t.extend({}, i, {
                    item: s.element
                });
            t.each(s.sortables, function() {
                this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
                    top: "auto",
                    left: "auto"
                })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
            })
        },
        drag: function(e, i) {
            var s = t(this).data("ui-draggable"),
                n = this;
            t.each(s.sortables, function() {
                var a = !1,
                    o = this;
                this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, t.each(s.sortables, function() {
                    return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && t.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
                })), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = t(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                    return i.helper[0]
                }, e.target = this.instance.currentItem[0], this.instance._mouseCapture(e, !0), this.instance._mouseStart(e, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", e), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(e)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", e, this.instance._uiHash(this.instance)), this.instance._mouseStop(e, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", e), s.dropped = !1)
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function() {
            var e = t("body"),
                i = t(this).data("ui-draggable").options;
            e.css("cursor") && (i._cursor = e.css("cursor")), e.css("cursor", i.cursor)
        },
        stop: function() {
            var e = t(this).data("ui-draggable").options;
            e._cursor && t("body").css("cursor", e._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function() {
            var e = t(this).data("ui-draggable");
            e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
        },
        drag: function(e) {
            var i = t(this).data("ui-draggable"),
                s = i.options,
                n = !1;
            i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - e.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : e.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - e.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : e.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(document).scrollTop() < s.scrollSensitivity ? n = t(document).scrollTop(t(document).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < s.scrollSensitivity && (n = t(document).scrollTop(t(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(document).scrollLeft() < s.scrollSensitivity ? n = t(document).scrollLeft(t(document).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < s.scrollSensitivity && (n = t(document).scrollLeft(t(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(i, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function() {
            var e = t(this).data("ui-draggable"),
                i = e.options;
            e.snapElements = [], t(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function() {
                var i = t(this),
                    s = i.offset();
                this !== e.element[0] && e.snapElements.push({
                    item: this,
                    width: i.outerWidth(),
                    height: i.outerHeight(),
                    top: s.top,
                    left: s.left
                })
            })
        },
        drag: function(e, i) {
            var s, n, a, o, r, l, h, c, u, d, p = t(this).data("ui-draggable"),
                g = p.options,
                f = g.snapTolerance,
                m = i.offset.left,
                _ = m + p.helperProportions.width,
                v = i.offset.top,
                b = v + p.helperProportions.height;
            for (u = p.snapElements.length - 1; u >= 0; u--) r = p.snapElements[u].left, l = r + p.snapElements[u].width, h = p.snapElements[u].top, c = h + p.snapElements[u].height, r - f > _ || m > l + f || h - f > b || v > c + f || !t.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = !1) : ("inner" !== g.snapMode && (s = f >= Math.abs(h - b), n = f >= Math.abs(c - v), a = f >= Math.abs(r - _), o = f >= Math.abs(l - m), s && (i.position.top = p._convertPositionTo("relative", {
                top: h - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r - p.helperProportions.width
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left - p.margins.left)), d = s || n || a || o, "outer" !== g.snapMode && (s = f >= Math.abs(h - v), n = f >= Math.abs(c - b), a = f >= Math.abs(r - m), o = f >= Math.abs(l - _), s && (i.position.top = p._convertPositionTo("relative", {
                top: h,
                left: 0
            }).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
                top: c - p.helperProportions.height,
                left: 0
            }).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: r
            }).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
                top: 0,
                left: l - p.helperProportions.width
            }).left - p.margins.left)), !p.snapElements[u].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, t.extend(p._uiHash(), {
                snapItem: p.snapElements[u].item
            })), p.snapElements[u].snapping = s || n || a || o || d)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function() {
            var e, i = this.data("ui-draggable").options,
                s = t.makeArray(t(i.stack)).sort(function(e, i) {
                    return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
                });
            s.length && (e = parseInt(t(s[0]).css("zIndex"), 10) || 0, t(s).each(function(i) {
                t(this).css("zIndex", e + i)
            }), this.css("zIndex", e + s.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i) {
            var s = t(i.helper),
                n = t(this).data("ui-draggable").options;
            s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
        },
        stop: function(e, i) {
            var s = t(this).data("ui-draggable").options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    })
})(jQuery);
(function(t) {
    function e(t) {
        return parseInt(t, 10) || 0
    }

    function i(t) {
        return !isNaN(parseInt(t, 10))
    }
    t.widget("ui.resizable", t.ui.mouse, {
        version: "",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _create: function() {
            var e, i, s, n, a, o = this,
                r = this.options;
            if (this.element.addClass("ui-resizable"), t.extend(this, {
                    _aspectRatio: !!r.aspectRatio,
                    aspectRatio: r.aspectRatio,
                    originalElement: this.element,
                    _proportionallyResizeElements: [],
                    _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
                }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                }), this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                })), this.originalElement.css({
                    margin: this.originalElement.css("margin")
                }), this._proportionallyResize()), this.handles = r.handles || (t(".ui-resizable-handle", this.element).length ? {
                    n: ".ui-resizable-n",
                    e: ".ui-resizable-e",
                    s: ".ui-resizable-s",
                    w: ".ui-resizable-w",
                    se: ".ui-resizable-se",
                    sw: ".ui-resizable-sw",
                    ne: ".ui-resizable-ne",
                    nw: ".ui-resizable-nw"
                } : "e,s,se"), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, i = 0; e.length > i; i++) s = t.trim(e[i]), a = "ui-resizable-" + s, n = t("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
                    zIndex: r.zIndex
                }), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
            this._renderAxis = function(e) {
                var i, s, n, a;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = t(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = t(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(n, a), this._proportionallyResize()), t(this.handles[i]).length
            }, this._renderAxis(this.element), this._handles = t(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
                o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
            }), r.autoHide && (this._handles.hide(), t(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                r.disabled || (t(this).removeClass("ui-resizable-autohide"), o._handles.show())
            }).mouseleave(function() {
                r.disabled || o.resizing || (t(this).addClass("ui-resizable-autohide"), o._handles.hide())
            })), this._mouseInit()
        },
        _destroy: function() {
            this._mouseDestroy();
            var e, i = function(e) {
                t(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _mouseCapture: function(e) {
            var i, s, n = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (n = !0);
            return !this.options.disabled && n
        },
        _mouseStart: function(i) {
            var s, n, a, o = this.options,
                r = this.element.position(),
                h = this.element;
            return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
                position: "absolute",
                top: h.css("top"),
                left: h.css("left")
            }) : h.is(".ui-draggable") && h.css({
                position: "absolute",
                top: r.top,
                left: r.left
            }), this._renderProxy(), s = e(this.helper.css("left")), n = e(this.helper.css("top")), o.containment && (s += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: s,
                top: n
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalSize = this._helper ? {
                width: h.outerWidth(),
                height: h.outerHeight()
            } : {
                width: h.width(),
                height: h.height()
            }, this.originalPosition = {
                left: s,
                top: n
            }, this.sizeDiff = {
                width: h.outerWidth() - h.width(),
                height: h.outerHeight() - h.height()
            }, this.originalMousePosition = {
                left: i.pageX,
                top: i.pageY
            }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
        },
        _mouseDrag: function(e) {
            var i, s = this.helper,
                n = {},
                a = this.originalMousePosition,
                o = this.axis,
                r = this.position.top,
                h = this.position.left,
                l = this.size.width,
                c = this.size.height,
                u = e.pageX - a.left || 0,
                d = e.pageY - a.top || 0,
                p = this._change[o];
            return p ? (i = p.apply(this, [e, u, d]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || this._trigger("resize", e, this.ui()), !1) : !1
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, s, n, a, o, r, h, l = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && t.ui.hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, a = s ? 0 : c.sizeDiff.width, o = {
                width: c.helper.width() - a,
                height: c.helper.height() - n
            }, r = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, h = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(t.extend(o, {
                top: h,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updateVirtualBoundaries: function(t) {
            var e, s, n, a, o, r = this.options;
            o = {
                minWidth: i(r.minWidth) ? r.minWidth : 0,
                maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
                minHeight: i(r.minHeight) ? r.minHeight : 0,
                maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
        },
        _updateCache: function(t) {
            this.offset = this.helper.offset(), i(t.left) && (this.position.left = t.left), i(t.top) && (this.position.top = t.top), i(t.height) && (this.size.height = t.height), i(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function(t) {
            var e = this.position,
                s = this.size,
                n = this.axis;
            return i(t.height) ? t.width = t.height * this.aspectRatio : i(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (s.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (s.height - t.height), t.left = e.left + (s.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                s = this.axis,
                n = i(t.width) && e.maxWidth && e.maxWidth < t.width,
                a = i(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = i(t.width) && e.minWidth && e.minWidth > t.width,
                r = i(t.height) && e.minHeight && e.minHeight > t.height,
                h = this.originalPosition.left + this.originalSize.width,
                l = this.position.top + this.size.height,
                c = /sw|nw|w/.test(s),
                u = /nw|ne|n/.test(s);
            return o && (t.width = e.minWidth), r && (t.height = e.minHeight), n && (t.width = e.maxWidth), a && (t.height = e.maxHeight), o && c && (t.left = h - e.minWidth), n && c && (t.left = h - e.maxWidth), r && u && (t.top = l - e.minHeight), a && u && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length) {
                var t, e, i, s, n, a = this.helper || this.element;
                for (t = 0; this._proportionallyResizeElements.length > t; t++) {
                    if (n = this._proportionallyResizeElements[t], !this.borderDif)
                        for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], e = 0; i.length > e; e++) this.borderDif[e] = (parseInt(i[e], 10) || 0) + (parseInt(s[e], 10) || 0);
                    n.css({
                        height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
            }
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
                width: this.element.outerWidth() - 1,
                height: this.element.outerHeight() - 1,
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function(t, e) {
                return {
                    width: this.originalSize.width + e
                }
            },
            w: function(t, e) {
                var i = this.originalSize,
                    s = this.originalPosition;
                return {
                    left: s.left + e,
                    width: i.width - e
                }
            },
            n: function(t, e, i) {
                var s = this.originalSize,
                    n = this.originalPosition;
                return {
                    top: n.top + i,
                    height: s.height - i
                }
            },
            s: function(t, e, i) {
                return {
                    height: this.originalSize.height + i
                }
            },
            se: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            sw: function(e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            },
            ne: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            },
            nw: function(e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function(e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function() {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).data("ui-resizable"),
                s = i.options,
                n = i._proportionallyResizeElements,
                a = n.length && /textarea/i.test(n[0].nodeName),
                o = a && t.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
                r = a ? 0 : i.sizeDiff.width,
                h = {
                    width: i.size.width - r,
                    height: i.size.height - o
                },
                l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(h, c && l ? {
                top: c,
                left: l
            } : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function() {
                    var s = {
                        width: parseInt(i.element.css("width"), 10),
                        height: parseInt(i.element.css("height"), 10),
                        top: parseInt(i.element.css("top"), 10),
                        left: parseInt(i.element.css("left"), 10)
                    };
                    n && n.length && t(n[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var i, s, n, a, o, r, h, l = t(this).data("ui-resizable"),
                c = l.options,
                u = l.element,
                d = c.containment,
                p = d instanceof t ? d.get(0) : /parent/.test(d) ? u.parent().get(0) : d;
            p && (l.containerElement = t(p), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {
                left: 0,
                top: 0
            }, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (i = t(p), s = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) {
                s[t] = e(i.css("padding" + n))
            }), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
                height: i.innerHeight() - s[3],
                width: i.innerWidth() - s[1]
            }, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = t.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = t.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
                element: p,
                left: n.left,
                top: n.top,
                width: r,
                height: h
            }))
        },
        resize: function(e) {
            var i, s, n, a, o = t(this).data("ui-resizable"),
                r = o.options,
                h = o.containerOffset,
                l = o.position,
                c = o._aspectRatio || e.shiftKey,
                u = {
                    top: 0,
                    left: 0
                },
                d = o.containerElement;
            d[0] !== document && /static/.test(d.css("position")) && (u = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - u.left), c && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), c && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - u.left : o.offset.left - u.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - u.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= Math.abs(o.parentData.left)), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, c && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, c && (o.size.width = o.size.height * o.aspectRatio))
        },
        stop: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.containerOffset,
                n = e.containerPosition,
                a = e.containerElement,
                o = t(e.helper),
                r = o.offset(),
                h = o.outerWidth() - e.sizeDiff.width,
                l = o.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            }), e._helper && !i.animate && /static/.test(a.css("position")) && t(this).css({
                left: r.left - n.left - s.left,
                width: h,
                height: l
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = function(e) {
                    t(e).each(function() {
                        var e = t(this);
                        e.data("ui-resizable-alsoresize", {
                            width: parseInt(e.width(), 10),
                            height: parseInt(e.height(), 10),
                            left: parseInt(e.css("left"), 10),
                            top: parseInt(e.css("top"), 10)
                        })
                    })
                };
            "object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : t.each(i.alsoResize, function(t) {
                s(t)
            })
        },
        resize: function(e, i) {
            var s = t(this).data("ui-resizable"),
                n = s.options,
                a = s.originalSize,
                o = s.originalPosition,
                r = {
                    height: s.size.height - a.height || 0,
                    width: s.size.width - a.width || 0,
                    top: s.position.top - o.top || 0,
                    left: s.position.left - o.left || 0
                },
                h = function(e, s) {
                    t(e).each(function() {
                        var e = t(this),
                            n = t(this).data("ui-resizable-alsoresize"),
                            a = {},
                            o = s && s.length ? s : e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        t.each(o, function(t, e) {
                            var i = (n[e] || 0) + (r[e] || 0);
                            i && i >= 0 && (a[e] = i || null)
                        }), e.css(a)
                    })
                };
            "object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : t.each(n.alsoResize, function(t, e) {
                h(t, e)
            })
        },
        stop: function() {
            t(this).removeData("resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: s.height,
                width: s.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.ghost.css({
                position: "relative",
                height: e.size.height,
                width: e.size.width
            })
        },
        stop: function() {
            var e = t(this).data("ui-resizable");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e = t(this).data("ui-resizable"),
                i = e.options,
                s = e.size,
                n = e.originalSize,
                a = e.originalPosition,
                o = e.axis,
                r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
                h = r[0] || 1,
                l = r[1] || 1,
                c = Math.round((s.width - n.width) / h) * h,
                u = Math.round((s.height - n.height) / l) * l,
                d = n.width + c,
                p = n.height + u,
                f = i.maxWidth && d > i.maxWidth,
                g = i.maxHeight && p > i.maxHeight,
                m = i.minWidth && i.minWidth > d,
                v = i.minHeight && i.minHeight > p;
            i.grid = r, m && (d += h), v && (p += l), f && (d -= h), g && (p -= l), /^(se|s|e)$/.test(o) ? (e.size.width = d, e.size.height = p) : /^(ne)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.top = a.top - u) : /^(sw)$/.test(o) ? (e.size.width = d, e.size.height = p, e.position.left = a.left - c) : (p - l > 0 ? (e.size.height = p, e.position.top = a.top - u) : (e.size.height = l, e.position.top = a.top + n.height - l), d - h > 0 ? (e.size.width = d, e.position.left = a.left - c) : (e.size.width = h, e.position.left = a.left + n.width - h))
        }
    })
})(jQuery);
(function(t) {
    t.widget("ui.selectable", t.ui.mouse, {
        version: "",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function() {
            var e, i = this;
            this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e = t(i.options.filter, i.element[0]), e.addClass("ui-selectee"), e.each(function() {
                    var e = t(this),
                        i = e.offset();
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: e,
                        left: i.left,
                        top: i.top,
                        right: i.left + e.outerWidth(),
                        bottom: i.top + e.outerHeight(),
                        startselected: !1,
                        selected: e.hasClass("ui-selected"),
                        selecting: e.hasClass("ui-selecting"),
                        unselecting: e.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = t("<div class='ui-selectable-helper'></div>")
        },
        _destroy: function() {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
        },
        _mouseStart: function(e) {
            var i = this,
                s = this.options;
            this.opos = [e.pageX, e.pageY], this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {
                    unselecting: s.element
                }))
            }), t(e.target).parents().addBack().each(function() {
                var s, n = t.data(this, "selectable-item");
                return n ? (s = !e.metaKey && !e.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", e, {
                    selecting: n.element
                }) : i._trigger("unselecting", e, {
                    unselecting: n.element
                }), !1) : undefined
            }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this,
                    n = this.options,
                    a = this.opos[0],
                    o = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return a > r && (i = r, r = a, a = i), o > l && (i = l, l = o, o = i), this.helper.css({
                    left: a,
                    top: o,
                    width: r - a,
                    height: l - o
                }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1;
                    i && i.element !== s.element[0] && ("touch" === n.tolerance ? h = !(i.left > r || a > i.right || i.top > l || o > i.bottom) : "fit" === n.tolerance && (h = i.left > a && r > i.right && i.top > o && l > i.bottom), h ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {
                        selecting: i.element
                    }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {
                        unselecting: i.element
                    }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {
                        unselecting: i.element
                    })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {
                    unselected: s.element
                })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var s = t.data(this, "selectable-item");
                s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {
                    selected: s.element
                })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    })
})(jQuery);
(function(t) {
    function e(t, e, i) {
        return t > e && e + i > t
    }

    function i(t) {
        return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
    }
    t.widget("ui.sortable", t.ui.mouse, {
        version: "",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _create: function() {
            var t = this.options;
            this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
        },
        _destroy: function() {
            this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _setOption: function(e, i) {
            "disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function(e, i) {
            var s = null,
                n = !1,
                o = this;
            return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function() {
                return t.data(this, o.widgetName + "-item") === o ? (s = t(this), !1) : undefined
            }), t.data(e.target, o.widgetName + "-item") === o && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function() {
                this === e.target && (n = !0)
            }), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
        },
        _mouseStart: function(e, i, s) {
            var n, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, t.extend(this.offset, {
                    click: {
                        left: e.pageX - this.offset.left,
                        top: e.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
                for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, s, n, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - t(document).scrollTop() < a.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - a.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < a.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + a.scrollSpeed)), e.pageX - t(document).scrollLeft() < a.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - a.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < a.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + a.scrollSpeed))), r !== !1 && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (s = this.items[i], n = s.item[0], o = this._intersectsWithPointer(s), o && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                    this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this,
                        n = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() {
            if (this.dragging) {
                this._mouseUp({
                    target: null
                }), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                s = [];
            return e = e || {}, i.each(function() {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                s = this.positionAbs.top,
                n = s + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                h = r + t.height,
                l = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || s + l > r && h > s + l,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
                n = i && s,
                o = this._getDragVerticalDirection(),
                a = this._getDragHorizontalDirection();
            return n ? this.floating ? a && "right" === a || "down" === o ? 2 : 1 : o && ("down" === o ? 2 : 1) : !1
        },
        _intersectsWithSides: function(t) {
            var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && s || "left" === o && !s : n && ("down" === n && i || "up" === n && !i)
        },
        _getDragVerticalDirection: function() {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function(t) {
            return this._refreshItems(t), this.refreshPositions(), this
        },
        _connectWith: function() {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function(e) {
            function i() {
                r.push(this)
            }
            var s, n, o, a, r = [],
                h = [],
                l = this._connectWith();
            if (l && e)
                for (s = l.length - 1; s >= 0; s--)
                    for (o = t(l[s]), n = o.length - 1; n >= 0; n--) a = t.data(o[n], this.widgetFullName), a && a !== this && !a.options.disabled && h.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (h.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = h.length - 1; s >= 0; s--) h[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, s, n, o, a, r, h, l, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
                        item: this.currentItem
                    }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (n = t(d[i]), s = n.length - 1; s >= 0; s--) o = t.data(n[s], this.widgetFullName), o && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, {
                        item: this.currentItem
                    }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", a), c.push({
                    item: h,
                    instance: a,
                    width: 0,
                    height: 0,
                    left: 0,
                    top: 0
                })
        },
        refreshPositions: function(e) {
            this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, s, n, o;
            for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), o = n.offset(), s.left = o.left, s.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, s = e.options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function() {
                    var s = e.currentItem[0].nodeName.toLowerCase(),
                        n = t("<" + s + ">", e.document[0]).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                    return "tr" === s ? e.currentItem.children().each(function() {
                        t("<td>&#160;</td>", e.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(n)
                    }) : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
                },
                update: function(t, n) {
                    (!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _contactContainers: function(s) {
            var n, o, a, r, h, l, c, u, d, p, f = null,
                g = null;
            for (n = this.containers.length - 1; n >= 0; n--)
                if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
                    if (this._intersectsWith(this.containers[n].containerCache)) {
                        if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
                        f = this.containers[n], g = n
                    } else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
            if (f)
                if (1 === this.containers.length) this.containers[g].containerCache.over || (this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1);
                else {
                    for (a = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], o = this.items.length - 1; o >= 0; o--) t.contains(this.containers[g].element[0], this.items[o].item[0]) && this.items[o].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[o].top, this.items[o].height)) && (u = this.items[o].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[o][l] - c) && (d = !0, u += this.items[o][l]), a > Math.abs(u - c) && (a = Math.abs(u - c), r = this.items[o], this.direction = d ? "up" : "down"));
                    if (!r && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[g]) return;
                    r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[g].element, !0), this._trigger("change", s, this._uiHash()), this.containers[g]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[g], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[g]._trigger("over", s, this._uiHash(this)), this.containers[g].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function(e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var e, i, s, n = this.options;
            "parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(n[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : n.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : n.scrollLeft()) * s
            }
        },
        _generatePosition: function(e) {
            var i, s, n = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                h = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / n.grid[1]) * n.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((o - this.originalPageX) / n.grid[0]) * n.grid[0], o = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
                left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function(t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var n = this.counter;
            this._delay(function() {
                n === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function(t, e) {
            function i(t, e, i) {
                return function(s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }
            this.reverting = !1;
            var s, n = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS)("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && n.push(function(t) {
                    this._trigger("receive", t, this._uiHash(this.fromOutside))
                }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || n.push(function(t) {
                    this._trigger("update", t, this._uiHash())
                }), this !== this.currentContainer && (e || (n.push(function(t) {
                    this._trigger("remove", t, this._uiHash())
                }), n.push(function(t) {
                    return function(e) {
                        t._trigger("receive", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)), n.push(function(t) {
                    return function(e) {
                        t._trigger("update", e, this._uiHash(this))
                    }
                }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || n.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (n.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
                if (!e) {
                    for (this._trigger("beforeStop", t, this._uiHash()), s = 0; n.length > s; s++) n[s].call(this, t);
                    this._trigger("stop", t, this._uiHash())
                }
                return this.fromOutside = !1, !1
            }
            if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
                for (s = 0; n.length > s; s++) n[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
        },
        _uiHash: function(e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    })
})(jQuery);
(function(e) {
    var t = 0,
        i = {},
        a = {};
    i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {
        version: "",
        options: {
            active: 0,
            animate: {},
            collapsible: !1,
            event: "click",
            header: "> li > :first-child,> :not(li):even",
            heightStyle: "auto",
            icons: {
                activeHeader: "ui-icon-triangle-1-s",
                header: "ui-icon-triangle-1-e"
            },
            activate: null,
            beforeActivate: null
        },
        _create: function() {
            var t = this.options;
            this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() {
            return {
                header: this.active,
                panel: this.active.length ? this.active.next() : e(),
                content: this.active.length ? this.active.next() : e()
            }
        },
        _createIcons: function() {
            var t = this.options.icons;
            t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
        },
        _destroyIcons: function() {
            this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
        },
        _destroy: function() {
            var e;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function() {
                /^ui-accordion/.test(this.id) && this.removeAttribute("id")
            }), "content" !== this.options.heightStyle && e.css("height", "")
        },
        _setOption: function(e, t) {
            return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
        },
        _keydown: function(t) {
            if (!t.altKey && !t.ctrlKey) {
                var i = e.ui.keyCode,
                    a = this.headers.length,
                    s = this.headers.index(t.target),
                    n = !1;
                switch (t.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(s + 1) % a];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(s - 1 + a) % a];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(t);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[a - 1]
                }
                n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
            }
        },
        _panelKeyDown: function(t) {
            t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
        },
        refresh: function() {
            var t = this.options;
            this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
        },
        _refresh: function() {
            var i, a = this.options,
                s = a.heightStyle,
                n = this.element.parent(),
                r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
            this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function(t) {
                var i = e(this),
                    a = i.attr("id"),
                    s = i.next(),
                    n = s.attr("id");
                a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({
                "aria-hidden": "true"
            }).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({
                "aria-hidden": "false"
            }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function() {
                var t = e(this),
                    a = t.css("position");
                "absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
            }), this.headers.each(function() {
                i -= e(this).outerHeight(!0)
            }), this.headers.next().each(function() {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function() {
                i = Math.max(i, e(this).css("height", "").height())
            }).height(i))
        },
        _activate: function(t) {
            var i = this._findActive(t)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function(t) {
            return "number" == typeof t ? this.headers.eq(t) : e()
        },
        _setupEvents: function(t) {
            var i = {
                keydown: "_keydown"
            };
            t && e.each(t.split(" "), function(e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
                keydown: "_panelKeyDown"
            }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(t) {
            var i = this.options,
                a = this.active,
                s = e(t.currentTarget),
                n = s[0] === a[0],
                r = n && i.collapsible,
                o = r ? e() : s.next(),
                h = a.next(),
                d = {
                    oldHeader: a,
                    oldPanel: h,
                    newHeader: r ? e() : s,
                    newPanel: o
                };
            t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
        },
        _toggle: function(t) {
            var i = t.newPanel,
                a = this.prevShow.length ? this.prevShow : t.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({
                "aria-hidden": "true"
            }), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function() {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                tabIndex: 0,
                "aria-expanded": "true"
            })
        },
        _animate: function(e, t, s) {
            var n, r, o, h = this,
                d = 0,
                c = e.length && (!t.length || e.index() < t.index()),
                l = this.options.animate || {},
                u = c && l.down || l,
                v = function() {
                    h._toggleComplete(s)
                };
            return "number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
                duration: o,
                easing: r,
                step: function(e, t) {
                    t.now = Math.round(e)
                }
            }), e.hide().animate(a, {
                duration: o,
                easing: r,
                complete: v,
                step: function(e, i) {
                    i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
                }
            }), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
        },
        _toggleComplete: function(e) {
            var t = e.oldPanel;
            t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
        }
    })
})(jQuery);
(function(e) {
    e.widget("ui.autocomplete", {
        version: "",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var t, i, s, n = this.element[0].nodeName.toLowerCase(),
                a = "textarea" === n,
                o = "input" === n;
            this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(n) {
                    if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
                    t = !1, s = !1, i = !1;
                    var a = e.ui.keyCode;
                    switch (n.keyCode) {
                        case a.PAGE_UP:
                            t = !0, this._move("previousPage", n);
                            break;
                        case a.PAGE_DOWN:
                            t = !0, this._move("nextPage", n);
                            break;
                        case a.UP:
                            t = !0, this._keyEvent("previous", n);
                            break;
                        case a.DOWN:
                            t = !0, this._keyEvent("next", n);
                            break;
                        case a.ENTER:
                        case a.NUMPAD_ENTER:
                            this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
                            break;
                        case a.TAB:
                            this.menu.active && this.menu.select(n);
                            break;
                        case a.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(n)
                    }
                },
                keypress: function(s) {
                    if (t) return t = !1, (!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault(), undefined;
                    if (!i) {
                        var n = e.ui.keyCode;
                        switch (s.keyCode) {
                            case n.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case n.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case n.UP:
                                this._keyEvent("previous", s);
                                break;
                            case n.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                },
                input: function(e) {
                    return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
                },
                focus: function() {
                    this.selectedItem = null, this.previous = this._value()
                },
                blur: function(e) {
                    return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
                }
            }), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                role: null
            }).hide().data("ui-menu"), this._on(this.menu.element, {
                mousedown: function(t) {
                    t.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                        delete this.cancelBlur
                    });
                    var i = this.menu.element[0];
                    e(t.target).closest(".ui-menu-item").length || this._delay(function() {
                        var t = this;
                        this.document.one("mousedown", function(s) {
                            s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
                        })
                    })
                },
                menufocus: function(t, i) {
                    if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function() {
                        e(t.target).trigger(t.originalEvent)
                    }), undefined;
                    var s = i.item.data("ui-autocomplete-item");
                    !1 !== this._trigger("focus", t, {
                        item: s
                    }) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
                },
                menuselect: function(e, t) {
                    var i = t.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s, this.selectedItem = i
                    })), !1 !== this._trigger("select", e, {
                        item: i
                    }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
                }
            }), this.liveRegion = e("<span>", {
                role: "status",
                "aria-live": "polite"
            }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function() {
            clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(e, t) {
            this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
        },
        _initSource: function() {
            var t, i, s = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(i, s) {
                s(e.ui.autocomplete.filter(t, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(t, n) {
                s.xhr && s.xhr.abort(), s.xhr = e.ajax({
                    url: i,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        n(e)
                    },
                    error: function() {
                        n([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function(e) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
            }, this.options.delay)
        },
        search: function(e, t) {
            return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
        },
        _search: function(e) {
            this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
                term: e
            }, this._response())
        },
        _response: function() {
            var t = ++this.requestIndex;
            return e.proxy(function(e) {
                t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function(e) {
            e && (e = this._normalize(e)), this._trigger("response", null, {
                content: e
            }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
        },
        close: function(e) {
            this.cancelSearch = !0, this._close(e)
        },
        _close: function(e) {
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this._value() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t : e.map(t, function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                } : e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                }, t)
            })
        },
        _suggest: function(t) {
            var i = this.menu.element.empty();
            this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
            }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, i) {
            var s = this;
            e.each(i, function(e, i) {
                s._renderItemData(t, i)
            })
        },
        _renderItemData: function(e, t) {
            return this._renderItem(e, t).data("ui-autocomplete-item", t)
        },
        _renderItem: function(t, i) {
            return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
        },
        widget: function() {
            return this.menu.element
        },
        _value: function() {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(e, t) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }), e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, i) {
            var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
            return e.grep(t, function(e) {
                return s.test(e.label || e.value || e)
            })
        }
    }), e.widget("ui.autocomplete", e.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function(e) {
                    return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        },
        __response: function(e) {
            var t;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
        }
    })
})(jQuery);
(function(e) {
    var t, i = "ui-button ui-widget ui-state-default ui-corner-all",
        n = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
        s = function() {
            var t = e(this);
            setTimeout(function() {
                t.find(":ui-button").button("refresh")
            }, 1)
        },
        a = function(t) {
            var i = t.name,
                n = t.form,
                s = e([]);
            return i && (i = i.replace(/'/g, "\\'"), s = n ? e(n).find("[name='" + i + "']") : e("[name='" + i + "']", t.ownerDocument).filter(function() {
                return !this.form
            })), s
        };
    e.widget("ui.button", {
        version: "",
        defaultElement: "<button>",
        options: {
            disabled: null,
            text: !0,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function() {
            this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, s), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
            var n = this,
                o = this.options,
                r = "checkbox" === this.type || "radio" === this.type,
                h = r ? "" : "ui-state-active";
            null === o.label && (o.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(i).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                o.disabled || this === t && e(this).addClass("ui-state-active")
            }).bind("mouseleave" + this.eventNamespace, function() {
                o.disabled || e(this).removeClass(h)
            }).bind("click" + this.eventNamespace, function(e) {
                o.disabled && (e.preventDefault(), e.stopImmediatePropagation())
            }), this._on({
                focus: function() {
                    this.buttonElement.addClass("ui-state-focus")
                },
                blur: function() {
                    this.buttonElement.removeClass("ui-state-focus")
                }
            }), r && this.element.bind("change" + this.eventNamespace, function() {
                n.refresh()
            }), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                return o.disabled ? !1 : undefined
            }) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                if (o.disabled) return !1;
                e(this).addClass("ui-state-active"), n.buttonElement.attr("aria-pressed", "true");
                var t = n.element[0];
                a(t).not(t).map(function() {
                    return e(this).button("widget")[0]
                }).removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                return o.disabled ? !1 : (e(this).addClass("ui-state-active"), t = this, n.document.one("mouseup", function() {
                    t = null
                }), undefined)
            }).bind("mouseup" + this.eventNamespace, function() {
                return o.disabled ? !1 : (e(this).removeClass("ui-state-active"), undefined)
            }).bind("keydown" + this.eventNamespace, function(t) {
                return o.disabled ? !1 : ((t.keyCode === e.ui.keyCode.SPACE || t.keyCode === e.ui.keyCode.ENTER) && e(this).addClass("ui-state-active"), undefined)
            }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                e(this).removeClass("ui-state-active")
            }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                t.keyCode === e.ui.keyCode.SPACE && e(this).click()
            })), this._setOption("disabled", o.disabled), this._resetButton()
        },
        _determineButtonType: function() {
            var e, t, i;
            this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (e = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = e.find(t), this.buttonElement.length || (e = e.length ? e.siblings() : this.element.siblings(), this.buttonElement = e.filter(t), this.buttonElement.length || (this.buttonElement = e.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
        },
        widget: function() {
            return this.buttonElement
        },
        _destroy: function() {
            this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(i + " ui-state-active " + n).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
        },
        _setOption: function(e, t) {
            return this._super(e, t), "disabled" === e ? (this.element.prop("disabled", !!t), t && this.buttonElement.removeClass("ui-state-focus"), undefined) : (this._resetButton(), undefined)
        },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOption("disabled", t), "radio" === this.type ? a(this.element[0]).each(function() {
                e(this).is(":checked") ? e(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
            }) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
        },
        _resetButton: function() {
            if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
            var t = this.buttonElement.removeClass(n),
                i = e("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),
                s = this.options.icons,
                a = s.primary && s.secondary,
                o = [];
            s.primary || s.secondary ? (this.options.text && o.push("ui-button-text-icon" + (a ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && t.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && t.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (o.push(a ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || t.attr("title", e.trim(i)))) : o.push("ui-button-text-only"), t.addClass(o.join(" "))
        }
    }), e.widget("ui.buttonset", {
        version: "",
        options: {
            items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
        },
        _create: function() {
            this.element.addClass("ui-buttonset")
        },
        _init: function() {
            this.refresh()
        },
        _setOption: function(e, t) {
            "disabled" === e && this.buttons.button("option", e, t), this._super(e, t)
        },
        refresh: function() {
            var t = "rtl" === this.element.css("direction");
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(t ? "ui-corner-left" : "ui-corner-right").end().end()
        },
        _destroy: function() {
            this.element.removeClass("ui-buttonset"), this.buttons.map(function() {
                return e(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
        }
    })
})(jQuery);
(function(e, t) {
    function i() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, e.extend(this._defaults, this.regional[""]), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return t.delegate(i, "mouseout", function() {
            e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
        }).delegate(i, "mouseover", function() {
            e.datepicker._isDisabledDatepicker(n.inline ? t.parent()[0] : n.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
        })
    }

    function s(t, i) {
        e.extend(t, i);
        for (var a in i) null == i[a] && (t[a] = i[a]);
        return t
    }
    e.extend(e.ui, {
        datepicker: {
            version: ""
        }
    });
    var n, r = "datepicker";
    e.extend(i.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() {
            return this.dpDiv
        },
        setDefaults: function(e) {
            return s(this._defaults, e || {}), this
        },
        _attachDatepicker: function(t, i) {
            var a, s, n;
            a = t.nodeName.toLowerCase(), s = "div" === a || "span" === a, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), n = this._newInst(e(t), s), n.settings = e.extend({}, i || {}), "input" === a ? this._connectDatepicker(t, n) : s && this._inlineDatepicker(t, n)
        },
        _newInst: function(t, i) {
            var s = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
            return {
                id: s,
                input: t,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: i,
                dpDiv: i ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function(t, i) {
            var a = e(t);
            i.append = e([]), i.trigger = e([]), a.hasClass(this.markerClassName) || (this._attachments(a, i), a.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), e.data(t, r, i), i.settings.disabled && this._disableDatepicker(t))
        },
        _attachments: function(t, i) {
            var a, s, n, r = this._get(i, "appendText"),
                o = this._get(i, "isRTL");
            i.append && i.append.remove(), r && (i.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](i.append)), t.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), a = this._get(i, "showOn"), ("focus" === a || "both" === a) && t.focus(this._showDatepicker), ("button" === a || "both" === a) && (s = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = e(this._get(i, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: s,
                title: s
            }) : e("<button type='button'></button>").addClass(this._triggerClass).html(n ? e("<img/>").attr({
                src: n,
                alt: s,
                title: s
            }) : s)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
            }))
        },
        _autoSize: function(e) {
            if (this._get(e, "autoSize") && !e.inline) {
                var t, i, a, s, n = new Date(2009, 11, 20),
                    r = this._get(e, "dateFormat");
                r.match(/[DM]/) && (t = function(e) {
                    for (i = 0, a = 0, s = 0; e.length > s; s++) e[s].length > i && (i = e[s].length, a = s);
                    return a
                }, n.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), e.input.attr("size", this._formatDate(e, n).length)
            }
        },
        _inlineDatepicker: function(t, i) {
            var a = e(t);
            a.hasClass(this.markerClassName) || (a.addClass(this.markerClassName).append(i.dpDiv), e.data(t, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(t, i, a, n, o) {
            var u, c, h, l, d, p = this._dialogInst;
            return p || (this.uuid += 1, u = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + u + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, e.data(this._dialogInput[0], r, p)), s(p.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (c = document.documentElement.clientWidth, h = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [c / 2 - 100 + l, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = a, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], r, p), this
        },
        _destroyDatepicker: function(t) {
            var i, a = e(t),
                s = e.data(t, r);
            a.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), e.removeData(t, r), "input" === i ? (s.append.remove(), s.trigger.remove(), a.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && a.removeClass(this.markerClassName).empty())
        },
        _enableDatepicker: function(t) {
            var i, a, s = e(t),
                n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !1, n.trigger.filter("button").each(function() {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().removeClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }))
        },
        _disableDatepicker: function(t) {
            var i, a, s = e(t),
                n = e.data(t, r);
            s.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), "input" === i ? (t.disabled = !0, n.trigger.filter("button").each(function() {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && (a = s.children("." + this._inlineClass), a.children().addClass("ui-state-disabled"), a.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function(e) {
                return e === t ? null : e
            }), this._disabledInputs[this._disabledInputs.length] = t)
        },
        _isDisabledDatepicker: function(e) {
            if (!e) return !1;
            for (var t = 0; this._disabledInputs.length > t; t++)
                if (this._disabledInputs[t] === e) return !0;
            return !1
        },
        _getInst: function(t) {
            try {
                return e.data(t, r)
            } catch (i) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function(i, a, n) {
            var r, o, u, c, h = this._getInst(i);
            return 2 === arguments.length && "string" == typeof a ? "defaults" === a ? e.extend({}, e.datepicker._defaults) : h ? "all" === a ? e.extend({}, h.settings) : this._get(h, a) : null : (r = a || {}, "string" == typeof a && (r = {}, r[a] = n), h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), u = this._getMinMaxDate(h, "min"), c = this._getMinMaxDate(h, "max"), s(h.settings, r), null !== u && r.dateFormat !== t && r.minDate === t && (h.settings.minDate = this._formatDate(h, u)), null !== c && r.dateFormat !== t && r.maxDate === t && (h.settings.maxDate = this._formatDate(h, c)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(e(i), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)), t)
        },
        _changeDatepicker: function(e, t, i) {
            this._optionDatepicker(e, t, i)
        },
        _refreshDatepicker: function(e) {
            var t = this._getInst(e);
            t && this._updateDatepicker(t)
        },
        _setDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(e, t) {
            var i = this._getInst(e);
            return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
        },
        _doKeyDown: function(t) {
            var i, a, s, n = e.datepicker._getInst(t.target),
                r = !0,
                o = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
                case 9:
                    e.datepicker._hideDatepicker(), r = !1;
                    break;
                case 13:
                    return s = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", n.dpDiv), s[0] && e.datepicker._selectDay(t.target, n.selectedMonth, n.selectedYear, s[0]), i = e.datepicker._get(n, "onSelect"), i ? (a = e.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [a, n])) : e.datepicker._hideDatepicker(), !1;
                case 27:
                    e.datepicker._hideDatepicker();
                    break;
                case 33:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 36:
                    (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
                    break;
                case 37:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(n, "stepBigMonths") : -e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                case 39:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(n, "stepBigMonths") : +e.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
                    break;
                default:
                    r = !1
            } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
            r && (t.preventDefault(), t.stopPropagation())
        },
        _doKeyPress: function(i) {
            var a, s, n = e.datepicker._getInst(i.target);
            return e.datepicker._get(n, "constrainInput") ? (a = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > s || !a || a.indexOf(s) > -1) : t
        },
        _doKeyUp: function(t) {
            var i, a = e.datepicker._getInst(t.target);
            if (a.input.val() !== a.lastVal) try {
                i = e.datepicker.parseDate(e.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, e.datepicker._getFormatConfig(a)), i && (e.datepicker._setDateFromField(a), e.datepicker._updateAlternate(a), e.datepicker._updateDatepicker(a))
            } catch (s) {}
            return !0
        },
        _showDatepicker: function(t) {
            if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
                var i, a, n, r, o, u, c;
                i = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== i && (e.datepicker._curInst.dpDiv.stop(!0, !0), i && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), a = e.datepicker._get(i, "beforeShow"), n = a ? a.apply(t, [t, i]) : {}, n !== !1 && (s(i.settings, n), i.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(i), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function() {
                    return r |= "fixed" === e(this).css("position"), !r
                }), o = {
                    left: e.datepicker._pos[0],
                    top: e.datepicker._pos[1]
                }, e.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                }), e.datepicker._updateDatepicker(i), o = e.datepicker._checkOffset(i, o, r), i.dpDiv.css({
                    position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
                    display: "none",
                    left: o.left + "px",
                    top: o.top + "px"
                }), i.inline || (u = e.datepicker._get(i, "showAnim"), c = e.datepicker._get(i, "duration"), i.dpDiv.zIndex(e(t).zIndex() + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[u] ? i.dpDiv.show(u, e.datepicker._get(i, "showOptions"), c) : i.dpDiv[u || "show"](u ? c : null), e.datepicker._shouldFocusInput(i) && i.input.focus(), e.datepicker._curInst = i))
            }
        },
        _updateDatepicker: function(t) {
            this.maxRows = 4, n = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t), t.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            var i, a = this._getNumberOfMonths(t),
                s = a[1],
                r = 17;
            t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", r * s + "em"), t.dpDiv[(1 !== a[0] || 1 !== a[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (i = t.yearshtml, setTimeout(function() {
                i === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), i = t.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function(e) {
            return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
        },
        _checkOffset: function(t, i, a) {
            var s = t.dpDiv.outerWidth(),
                n = t.dpDiv.outerHeight(),
                r = t.input ? t.input.outerWidth() : 0,
                o = t.input ? t.input.outerHeight() : 0,
                u = document.documentElement.clientWidth + (a ? 0 : e(document).scrollLeft()),
                c = document.documentElement.clientHeight + (a ? 0 : e(document).scrollTop());
            return i.left -= this._get(t, "isRTL") ? s - r : 0, i.left -= a && i.left === t.input.offset().left ? e(document).scrollLeft() : 0, i.top -= a && i.top === t.input.offset().top + o ? e(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > u && u > s ? Math.abs(i.left + s - u) : 0), i.top -= Math.min(i.top, i.top + n > c && c > n ? Math.abs(n + o) : 0), i
        },
        _findPos: function(t) {
            for (var i, a = this._getInst(t), s = this._get(a, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[s ? "previousSibling" : "nextSibling"];
            return i = e(t).offset(), [i.left, i.top]
        },
        _hideDatepicker: function(t) {
            var i, a, s, n, o = this._curInst;
            !o || t && o !== e.data(t, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), a = this._get(o, "duration"), s = function() {
                e.datepicker._tidyDialog(o)
            }, e.effects && (e.effects.effect[i] || e.effects[i]) ? o.dpDiv.hide(i, e.datepicker._get(o, "showOptions"), a, s) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? a : null, s), i || s(), this._datepickerShowing = !1, n = this._get(o, "onClose"), n && n.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(e) {
            e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function(t) {
            if (e.datepicker._curInst) {
                var i = e(t.target),
                    a = e.datepicker._getInst(i[0]);
                (i[0].id !== e.datepicker._mainDivId && 0 === i.parents("#" + e.datepicker._mainDivId).length && !i.hasClass(e.datepicker.markerClassName) && !i.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || i.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== a) && e.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(n, i + ("M" === a ? this._get(n, "showCurrentAtPos") : 0), a), this._updateDatepicker(n))
        },
        _gotoToday: function(t) {
            var i, a = e(t),
                s = this._getInst(a[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(a)
        },
        _selectMonthYear: function(t, i, a) {
            var s = e(t),
                n = this._getInst(s[0]);
            n["selected" + ("M" === a ? "Month" : "Year")] = n["draw" + ("M" === a ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(s)
        },
        _selectDay: function(t, i, a, s) {
            var n, r = e(t);
            e(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (n = this._getInst(r[0]), n.selectedDay = n.currentDay = e("a", s).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = a, this._selectDate(t, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function(t) {
            var i = e(t);
            this._selectDate(i, "")
        },
        _selectDate: function(t, i) {
            var a, s = e(t),
                n = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), a = this._get(n, "onSelect"), a ? a.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.focus(), this._lastInput = null)
        },
        _updateAlternate: function(t) {
            var i, a, s, n = this._get(t, "altField");
            n && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), a = this._getDate(t), s = this.formatDate(i, a, this._getFormatConfig(t)), e(n).each(function() {
                e(this).val(s)
            }))
        },
        noWeekends: function(e) {
            var t = e.getDay();
            return [t > 0 && 6 > t, ""]
        },
        iso8601Week: function(e) {
            var t, i = new Date(e.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), t = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((t - i) / 864e5) / 7) + 1
        },
        parseDate: function(i, a, s) {
            if (null == i || null == a) throw "Invalid arguments";
            if (a = "object" == typeof a ? "" + a : a + "", "" === a) return null;
            var n, r, o, u, c = 0,
                h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                l = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                p = (s ? s.dayNames : null) || this._defaults.dayNames,
                g = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                m = (s ? s.monthNames : null) || this._defaults.monthNames,
                f = -1,
                _ = -1,
                v = -1,
                k = -1,
                y = !1,
                b = function(e) {
                    var t = i.length > n + 1 && i.charAt(n + 1) === e;
                    return t && n++, t
                },
                D = function(e) {
                    var t = b(e),
                        i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
                        s = RegExp("^\\d{1," + i + "}"),
                        n = a.substring(c).match(s);
                    if (!n) throw "Missing number at position " + c;
                    return c += n[0].length, parseInt(n[0], 10)
                },
                w = function(i, s, n) {
                    var r = -1,
                        o = e.map(b(i) ? n : s, function(e, t) {
                            return [
                                [t, e]
                            ]
                        }).sort(function(e, t) {
                            return -(e[1].length - t[1].length)
                        });
                    if (e.each(o, function(e, i) {
                            var s = i[1];
                            return a.substr(c, s.length).toLowerCase() === s.toLowerCase() ? (r = i[0], c += s.length, !1) : t
                        }), -1 !== r) return r + 1;
                    throw "Unknown name at position " + c
                },
                M = function() {
                    if (a.charAt(c) !== i.charAt(n)) throw "Unexpected literal at position " + c;
                    c++
                };
            for (n = 0; i.length > n; n++)
                if (y) "'" !== i.charAt(n) || b("'") ? M() : y = !1;
                else switch (i.charAt(n)) {
                    case "d":
                        v = D("d");
                        break;
                    case "D":
                        w("D", d, p);
                        break;
                    case "o":
                        k = D("o");
                        break;
                    case "m":
                        _ = D("m");
                        break;
                    case "M":
                        _ = w("M", g, m);
                        break;
                    case "y":
                        f = D("y");
                        break;
                    case "@":
                        u = new Date(D("@")), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                        break;
                    case "!":
                        u = new Date((D("!") - this._ticksTo1970) / 1e4), f = u.getFullYear(), _ = u.getMonth() + 1, v = u.getDate();
                        break;
                    case "'":
                        b("'") ? M() : y = !0;
                        break;
                    default:
                        M()
                }
            if (a.length > c && (o = a.substr(c), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
            if (-1 === f ? f = (new Date).getFullYear() : 100 > f && (f += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (l >= f ? 0 : -100)), k > -1)
                for (_ = 1, v = k;;) {
                    if (r = this._getDaysInMonth(f, _ - 1), r >= v) break;
                    _++, v -= r
                }
            if (u = this._daylightSavingAdjust(new Date(f, _ - 1, v)), u.getFullYear() !== f || u.getMonth() + 1 !== _ || u.getDate() !== v) throw "Invalid date";
            return u
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(e, t, i) {
            if (!t) return "";
            var a, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                o = (i ? i.monthNames : null) || this._defaults.monthNames,
                u = function(t) {
                    var i = e.length > a + 1 && e.charAt(a + 1) === t;
                    return i && a++, i
                },
                c = function(e, t, i) {
                    var a = "" + t;
                    if (u(e))
                        for (; i > a.length;) a = "0" + a;
                    return a
                },
                h = function(e, t, i, a) {
                    return u(e) ? a[t] : i[t]
                },
                l = "",
                d = !1;
            if (t)
                for (a = 0; e.length > a; a++)
                    if (d) "'" !== e.charAt(a) || u("'") ? l += e.charAt(a) : d = !1;
                    else switch (e.charAt(a)) {
                        case "d":
                            l += c("d", t.getDate(), 2);
                            break;
                        case "D":
                            l += h("D", t.getDay(), s, n);
                            break;
                        case "o":
                            l += c("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            l += c("m", t.getMonth() + 1, 2);
                            break;
                        case "M":
                            l += h("M", t.getMonth(), r, o);
                            break;
                        case "y":
                            l += u("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
                            break;
                        case "@":
                            l += t.getTime();
                            break;
                        case "!":
                            l += 1e4 * t.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            u("'") ? l += "'" : d = !0;
                            break;
                        default:
                            l += e.charAt(a)
                    }
            return l
        },
        _possibleChars: function(e) {
            var t, i = "",
                a = !1,
                s = function(i) {
                    var a = e.length > t + 1 && e.charAt(t + 1) === i;
                    return a && t++, a
                };
            for (t = 0; e.length > t; t++)
                if (a) "'" !== e.charAt(t) || s("'") ? i += e.charAt(t) : a = !1;
                else switch (e.charAt(t)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : a = !0;
                        break;
                    default:
                        i += e.charAt(t)
                }
            return i
        },
        _get: function(e, i) {
            return e.settings[i] !== t ? e.settings[i] : this._defaults[i]
        },
        _setDateFromField: function(e, t) {
            if (e.input.val() !== e.lastVal) {
                var i = this._get(e, "dateFormat"),
                    a = e.lastVal = e.input ? e.input.val() : null,
                    s = this._getDefaultDate(e),
                    n = s,
                    r = this._getFormatConfig(e);
                try {
                    n = this.parseDate(i, a, r) || s
                } catch (o) {
                    a = t ? "" : a
                }
                e.selectedDay = n.getDate(), e.drawMonth = e.selectedMonth = n.getMonth(), e.drawYear = e.selectedYear = n.getFullYear(), e.currentDay = a ? n.getDate() : 0, e.currentMonth = a ? n.getMonth() : 0, e.currentYear = a ? n.getFullYear() : 0, this._adjustInstDate(e)
            }
        },
        _getDefaultDate: function(e) {
            return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
        },
        _determineDate: function(t, i, a) {
            var s = function(e) {
                    var t = new Date;
                    return t.setDate(t.getDate() + e), t
                },
                n = function(i) {
                    try {
                        return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), i, e.datepicker._getFormatConfig(t))
                    } catch (a) {}
                    for (var s = (i.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, n = s.getFullYear(), r = s.getMonth(), o = s.getDate(), u = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, c = u.exec(i); c;) {
                        switch (c[2] || "d") {
                            case "d":
                            case "D":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                            case "W":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "m":
                            case "M":
                                r += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r));
                                break;
                            case "y":
                            case "Y":
                                n += parseInt(c[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(n, r))
                        }
                        c = u.exec(i)
                    }
                    return new Date(n, r, o)
                },
                r = null == i || "" === i ? a : "string" == typeof i ? n(i) : "number" == typeof i ? isNaN(i) ? a : s(i) : new Date(i.getTime());
            return r = r && "Invalid Date" == "" + r ? a : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
        },
        _daylightSavingAdjust: function(e) {
            return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
        },
        _setDate: function(e, t, i) {
            var a = !t,
                s = e.selectedMonth,
                n = e.selectedYear,
                r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
            e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), s === e.selectedMonth && n === e.selectedYear || i || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(a ? "" : this._formatDate(e))
        },
        _getDate: function(e) {
            var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return t
        },
        _attachHandlers: function(t) {
            var i = this._get(t, "stepMonths"),
                a = "#" + t.id.replace(/\\\\/g, "\\");
            t.dpDiv.find("[data-handler]").map(function() {
                var t = {
                    prev: function() {
                        e.datepicker._adjustDate(a, -i, "M")
                    },
                    next: function() {
                        e.datepicker._adjustDate(a, +i, "M")
                    },
                    hide: function() {
                        e.datepicker._hideDatepicker()
                    },
                    today: function() {
                        e.datepicker._gotoToday(a)
                    },
                    selectDay: function() {
                        return e.datepicker._selectDay(a, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    },
                    selectMonth: function() {
                        return e.datepicker._selectMonthYear(a, this, "M"), !1
                    },
                    selectYear: function() {
                        return e.datepicker._selectMonthYear(a, this, "Y"), !1
                    }
                };
                e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(e) {
            var t, i, a, s, n, r, o, u, c, h, l, d, p, g, m, f, _, v, k, y, b, D, w, M, C, x, I, N, T, A, E, S, Y, F, P, O, j, K, R, H = new Date,
                W = this._daylightSavingAdjust(new Date(H.getFullYear(), H.getMonth(), H.getDate())),
                L = this._get(e, "isRTL"),
                U = this._get(e, "showButtonPanel"),
                B = this._get(e, "hideIfNoPrevNext"),
                z = this._get(e, "navigationAsDateFormat"),
                q = this._getNumberOfMonths(e),
                G = this._get(e, "showCurrentAtPos"),
                J = this._get(e, "stepMonths"),
                Q = 1 !== q[0] || 1 !== q[1],
                V = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
                $ = this._getMinMaxDate(e, "min"),
                X = this._getMinMaxDate(e, "max"),
                Z = e.drawMonth - G,
                et = e.drawYear;
            if (0 > Z && (Z += 12, et--), X)
                for (t = this._daylightSavingAdjust(new Date(X.getFullYear(), X.getMonth() - q[0] * q[1] + 1, X.getDate())), t = $ && $ > t ? $ : t; this._daylightSavingAdjust(new Date(et, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, et--);
            for (e.drawMonth = Z, e.drawYear = et, i = this._get(e, "prevText"), i = z ? this.formatDate(i, this._daylightSavingAdjust(new Date(et, Z - J, 1)), this._getFormatConfig(e)) : i, a = this._canAdjustMonth(e, -1, et, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>" : B ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(e, "nextText"), s = z ? this.formatDate(s, this._daylightSavingAdjust(new Date(et, Z + J, 1)), this._getFormatConfig(e)) : s, n = this._canAdjustMonth(e, 1, et, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>" : B ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (L ? "w" : "e") + "'>" + s + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? V : W, r = z ? this.formatDate(r, o, this._getFormatConfig(e)) : r, u = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", c = U ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (L ? u : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (L ? "" : u) + "</div>" : "", h = parseInt(this._get(e, "firstDay"), 10), h = isNaN(h) ? 0 : h, l = this._get(e, "showWeek"), d = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), g = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), _ = this._get(e, "showOtherMonths"), v = this._get(e, "selectOtherMonths"), k = this._getDefaultDate(e), y = "", D = 0; q[0] > D; D++) {
                for (w = "", this.maxRows = 4, M = 0; q[1] > M; M++) {
                    if (C = this._daylightSavingAdjust(new Date(et, Z, e.selectedDay)), x = " ui-corner-all", I = "", Q) {
                        if (I += "<div class='ui-datepicker-group", q[1] > 1) switch (M) {
                            case 0:
                                I += " ui-datepicker-group-first", x = " ui-corner-" + (L ? "right" : "left");
                                break;
                            case q[1] - 1:
                                I += " ui-datepicker-group-last", x = " ui-corner-" + (L ? "left" : "right");
                                break;
                            default:
                                I += " ui-datepicker-group-middle", x = ""
                        }
                        I += "'>"
                    }
                    for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + x + "'>" + (/all|left/.test(x) && 0 === D ? L ? n : a : "") + (/all|right/.test(x) && 0 === D ? L ? a : n : "") + this._generateMonthYearHeader(e, Z, et, $, X, D > 0 || M > 0, g, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", N = l ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", b = 0; 7 > b; b++) T = (b + h) % 7, N += "<th" + ((b + h + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[T] + "'>" + p[T] + "</span></th>";
                    for (I += N + "</tr></thead><tbody>", A = this._getDaysInMonth(et, Z), et === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, A)), E = (this._getFirstDayOfMonth(et, Z) - h + 7) % 7, S = Math.ceil((E + A) / 7), Y = Q ? this.maxRows > S ? this.maxRows : S : S, this.maxRows = Y, F = this._daylightSavingAdjust(new Date(et, Z, 1 - E)), P = 0; Y > P; P++) {
                        for (I += "<tr>", O = l ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(F) + "</td>" : "", b = 0; 7 > b; b++) j = f ? f.apply(e.input ? e.input[0] : null, [F]) : [!0, ""], K = F.getMonth() !== Z, R = K && !v || !j[0] || $ && $ > F || X && F > X, O += "<td class='" + ((b + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (K ? " ui-datepicker-other-month" : "") + (F.getTime() === C.getTime() && Z === e.selectedMonth && e._keyEvent || k.getTime() === F.getTime() && k.getTime() === C.getTime() ? " " + this._dayOverClass : "") + (R ? " " + this._unselectableClass + " ui-state-disabled" : "") + (K && !_ ? "" : " " + j[1] + (F.getTime() === V.getTime() ? " " + this._currentClass : "") + (F.getTime() === W.getTime() ? " ui-datepicker-today" : "")) + "'" + (K && !_ || !j[2] ? "" : " title='" + j[2].replace(/'/g, "&#39;") + "'") + (R ? "" : " data-handler='selectDay' data-event='click' data-month='" + F.getMonth() + "' data-year='" + F.getFullYear() + "'") + ">" + (K && !_ ? "&#xa0;" : R ? "<span class='ui-state-default'>" + F.getDate() + "</span>" : "<a class='ui-state-default" + (F.getTime() === W.getTime() ? " ui-state-highlight" : "") + (F.getTime() === V.getTime() ? " ui-state-active" : "") + (K ? " ui-priority-secondary" : "") + "' href='#'>" + F.getDate() + "</a>") + "</td>", F.setDate(F.getDate() + 1), F = this._daylightSavingAdjust(F);
                        I += O + "</tr>"
                    }
                    Z++, Z > 11 && (Z = 0, et++), I += "</tbody></table>" + (Q ? "</div>" + (q[0] > 0 && M === q[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), w += I
                }
                y += w
            }
            return y += c, e._keyEvent = !1, y
        },
        _generateMonthYearHeader: function(e, t, i, a, s, n, r, o) {
            var u, c, h, l, d, p, g, m, f = this._get(e, "changeMonth"),
                _ = this._get(e, "changeYear"),
                v = this._get(e, "showMonthAfterYear"),
                k = "<div class='ui-datepicker-title'>",
                y = "";
            if (n || !f) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
            else {
                for (u = a && a.getFullYear() === i, c = s && s.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; 12 > h; h++)(!u || h >= a.getMonth()) && (!c || s.getMonth() >= h) && (y += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "</option>");
                y += "</select>"
            }
            if (v || (k += y + (!n && f && _ ? "" : "&#xa0;")), !e.yearshtml)
                if (e.yearshtml = "", n || !_) k += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (l = this._get(e, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(e) {
                            var t = e.match(/c[+\-].*/) ? i + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? d + parseInt(e, 10) : parseInt(e, 10);
                            return isNaN(t) ? d : t
                        }, g = p(l[0]), m = Math.max(g, p(l[1] || "")), g = a ? Math.max(g, a.getFullYear()) : g, m = s ? Math.min(m, s.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= g; g++) e.yearshtml += "<option value='" + g + "'" + (g === i ? " selected='selected'" : "") + ">" + g + "</option>";
                    e.yearshtml += "</select>", k += e.yearshtml, e.yearshtml = null
                }
            return k += this._get(e, "yearSuffix"), v && (k += (!n && f && _ ? "" : "&#xa0;") + y), k += "</div>"
        },
        _adjustInstDate: function(e, t, i) {
            var a = e.drawYear + ("Y" === i ? t : 0),
                s = e.drawMonth + ("M" === i ? t : 0),
                n = Math.min(e.selectedDay, this._getDaysInMonth(a, s)) + ("D" === i ? t : 0),
                r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(a, s, n)));
            e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(e)
        },
        _restrictMinMax: function(e, t) {
            var i = this._getMinMaxDate(e, "min"),
                a = this._getMinMaxDate(e, "max"),
                s = i && i > t ? i : t;
            return a && s > a ? a : s
        },
        _notifyChange: function(e) {
            var t = this._get(e, "onChangeMonthYear");
            t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
        },
        _getNumberOfMonths: function(e) {
            var t = this._get(e, "numberOfMonths");
            return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
        },
        _getMinMaxDate: function(e, t) {
            return this._determineDate(e, this._get(e, t + "Date"), null)
        },
        _getDaysInMonth: function(e, t) {
            return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
        },
        _getFirstDayOfMonth: function(e, t) {
            return new Date(e, t, 1).getDay()
        },
        _canAdjustMonth: function(e, t, i, a) {
            var s = this._getNumberOfMonths(e),
                n = this._daylightSavingAdjust(new Date(i, a + (0 > t ? t : s[0] * s[1]), 1));
            return 0 > t && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(e, n)
        },
        _isInRange: function(e, t) {
            var i, a, s = this._getMinMaxDate(e, "min"),
                n = this._getMinMaxDate(e, "max"),
                r = null,
                o = null,
                u = this._get(e, "yearRange");
            return u && (i = u.split(":"), a = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += a), i[1].match(/[+\-].*/) && (o += a)), (!s || t.getTime() >= s.getTime()) && (!n || t.getTime() <= n.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
        },
        _getFormatConfig: function(e) {
            var t = this._get(e, "shortYearCutoff");
            return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                shortYearCutoff: t,
                dayNamesShort: this._get(e, "dayNamesShort"),
                dayNames: this._get(e, "dayNames"),
                monthNamesShort: this._get(e, "monthNamesShort"),
                monthNames: this._get(e, "monthNames")
            }
        },
        _formatDate: function(e, t, i, a) {
            t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
            var s = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(a, i, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
            return this.formatDate(this._get(e, "dateFormat"), s, this._getFormatConfig(e))
        }
    }), e.fn.datepicker = function(t) {
        if (!this.length) return this;
        e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i)) : this.each(function() {
            "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(i)) : e.datepicker._attachDatepicker(this, t)
        }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(i))
    }, e.datepicker = new i, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = ""
})(jQuery);
(function(e) {
    var t = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        i = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        };
    e.widget("ui.dialog", {
        version: "",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(t) {
                    var i = e(this).css(t).offset().top;
                    0 > i && e(this).css("top", t.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        _create: function() {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && e.fn.draggable && this._makeDraggable(), this.options.resizable && e.fn.resizable && this._makeResizable(), this._isOpen = !1
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        _appendTo: function() {
            var t = this.options.appendTo;
            return t && (t.jquery || t.nodeType) ? e(t) : this.document.find(t || "body").eq(0)
        },
        _destroy: function() {
            var e, t = this.originalPosition;
            this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), e = t.parent.children().eq(t.index), e.length && e[0] !== this.element[0] ? e.before(this.element) : t.parent.append(this.element)
        },
        widget: function() {
            return this.uiDialog
        },
        disable: e.noop,
        enable: e.noop,
        close: function(t) {
            var i, a = this;
            if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                if (this._isOpen = !1, this._destroyOverlay(), !this.opener.filter(":focusable").focus().length) try {
                    i = this.document[0].activeElement, i && "body" !== i.nodeName.toLowerCase() && e(i).blur()
                } catch (s) {}
                this._hide(this.uiDialog, this.options.hide, function() {
                    a._trigger("close", t)
                })
            }
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function() {
            this._moveToTop()
        },
        _moveToTop: function(e, t) {
            var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
            return i && !t && this._trigger("focus", e), i
        },
        open: function() {
            var t = this;
            return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = e(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function() {
                t._focusTabbable(), t._trigger("focus")
            }), this._trigger("open"), undefined)
        },
        _focusTabbable: function() {
            var e = this.element.find("[autofocus]");
            e.length || (e = this.element.find(":tabbable")), e.length || (e = this.uiDialogButtonPane.find(":tabbable")), e.length || (e = this.uiDialogTitlebarClose.filter(":tabbable")), e.length || (e = this.uiDialog), e.eq(0).focus()
        },
        _keepFocus: function(t) {
            function i() {
                var t = this.document[0].activeElement,
                    i = this.uiDialog[0] === t || e.contains(this.uiDialog[0], t);
                i || this._focusTabbable()
            }
            t.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._on(this.uiDialog, {
                keydown: function(t) {
                    if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === e.ui.keyCode.ESCAPE) return t.preventDefault(), this.close(t), undefined;
                    if (t.keyCode === e.ui.keyCode.TAB) {
                        var i = this.uiDialog.find(":tabbable"),
                            a = i.filter(":first"),
                            s = i.filter(":last");
                        t.target !== s[0] && t.target !== this.uiDialog[0] || t.shiftKey ? t.target !== a[0] && t.target !== this.uiDialog[0] || !t.shiftKey || (s.focus(1), t.preventDefault()) : (a.focus(1), t.preventDefault())
                    }
                },
                mousedown: function(e) {
                    this._moveToTop(e) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                "aria-describedby": this.element.uniqueId().attr("id")
            })
        },
        _createTitlebar: function() {
            var t;
            this.uiDialogTitlebar = e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
                mousedown: function(t) {
                    e(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                }
            }), this.uiDialogTitlebarClose = e("<button type='button'></button>").button({
                label: this.options.closeText,
                icons: {
                    primary: "ui-icon-closethick"
                },
                text: !1
            }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
                click: function(e) {
                    e.preventDefault(), this.close(e)
                }
            }), t = e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(t), this.uiDialog.attr({
                "aria-labelledby": t.attr("id")
            })
        },
        _title: function(e) {
            this.options.title || e.html("&#160;"), e.text(this.options.title)
        },
        _createButtonPane: function() {
            this.uiDialogButtonPane = e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
        },
        _createButtons: function() {
            var t = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), e.isEmptyObject(i) || e.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (e.each(i, function(i, a) {
                var s, n;
                a = e.isFunction(a) ? {
                    click: a,
                    text: i
                } : a, a = e.extend({
                    type: "button"
                }, a), s = a.click, a.click = function() {
                    s.apply(t.element[0], arguments)
                }, n = {
                    icons: a.icons,
                    text: a.showText
                }, delete a.icons, delete a.showText, e("<button></button>", a).button(n).appendTo(t.uiButtonSet)
            }), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
        },
        _makeDraggable: function() {
            function t(e) {
                return {
                    position: e.position,
                    offset: e.offset
                }
            }
            var i = this,
                a = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(a, s) {
                    e(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", a, t(s))
                },
                drag: function(e, a) {
                    i._trigger("drag", e, t(a))
                },
                stop: function(s, n) {
                    a.position = [n.position.left - i.document.scrollLeft(), n.position.top - i.document.scrollTop()], e(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, t(n))
                }
            })
        },
        _makeResizable: function() {
            function t(e) {
                return {
                    originalPosition: e.originalPosition,
                    originalSize: e.originalSize,
                    position: e.position,
                    size: e.size
                }
            }
            var i = this,
                a = this.options,
                s = a.resizable,
                n = this.uiDialog.css("position"),
                r = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: a.maxWidth,
                maxHeight: a.maxHeight,
                minWidth: a.minWidth,
                minHeight: this._minHeight(),
                handles: r,
                start: function(a, s) {
                    e(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", a, t(s))
                },
                resize: function(e, a) {
                    i._trigger("resize", e, t(a))
                },
                stop: function(s, n) {
                    a.height = e(this).height(), a.width = e(this).width(), e(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, t(n))
                }
            }).css("position", n)
        },
        _minHeight: function() {
            var e = this.options;
            return "auto" === e.height ? e.minHeight : Math.min(e.minHeight, e.height)
        },
        _position: function() {
            var e = this.uiDialog.is(":visible");
            e || this.uiDialog.show(), this.uiDialog.position(this.options.position), e || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var s = this,
                n = !1,
                r = {};
            e.each(a, function(e, a) {
                s._setOption(e, a), e in t && (n = !0), e in i && (r[e] = a)
            }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", r)
        },
        _setOption: function(e, t) {
            var i, a, s = this.uiDialog;
            "dialogClass" === e && s.removeClass(this.options.dialogClass).addClass(t), "disabled" !== e && (this._super(e, t), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({
                label: "" + t
            }), "draggable" === e && (i = s.is(":data(ui-draggable)"), i && !t && s.draggable("destroy"), !i && t && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (a = s.is(":data(ui-resizable)"), a && !t && s.resizable("destroy"), a && "string" == typeof t && s.resizable("option", "handles", t), a || t === !1 || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function() {
            var e, t, i, a = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), a.minWidth > a.width && (a.width = a.minWidth), e = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).outerHeight(), t = Math.max(0, a.minHeight - e), i = "number" == typeof a.maxHeight ? Math.max(0, a.maxHeight - e) : "none", "auto" === a.height ? this.element.css({
                minHeight: t,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, a.height - e)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() {
            this.iframeBlocks = this.document.find("iframe").map(function() {
                var t = e(this);
                return e("<div>").css({
                    position: "absolute",
                    width: t.outerWidth(),
                    height: t.outerHeight()
                }).appendTo(t.parent()).offset(t.offset())[0]
            })
        },
        _unblockFrames: function() {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function(t) {
            return e(t.target).closest(".ui-dialog").length ? !0 : !!e(t.target).closest(".ui-datepicker").length
        },
        _createOverlay: function() {
            if (this.options.modal) {
                var t = this,
                    i = this.widgetFullName;
                e.ui.dialog.overlayInstances || this._delay(function() {
                    e.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function(a) {
                        t._allowInteraction(a) || (a.preventDefault(), e(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
                    })
                }), this.overlay = e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
                    mousedown: "_keepFocus"
                }), e.ui.dialog.overlayInstances++
            }
        },
        _destroyOverlay: function() {
            this.options.modal && this.overlay && (e.ui.dialog.overlayInstances--, e.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
        }
    }), e.ui.dialog.overlayInstances = 0, e.uiBackCompat !== !1 && e.widget("ui.dialog", e.ui.dialog, {
        _position: function() {
            var t, i = this.options.position,
                a = [],
                s = [0, 0];
            i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (a = i.split ? i.split(" ") : [i[0], i[1]], 1 === a.length && (a[1] = a[0]), e.each(["left", "top"], function(e, t) {
                +a[e] === a[e] && (s[e] = a[e], a[e] = t)
            }), i = {
                my: a[0] + (0 > s[0] ? s[0] : "+" + s[0]) + " " + a[1] + (0 > s[1] ? s[1] : "+" + s[1]),
                at: a.join(" ")
            }), i = e.extend({}, e.ui.dialog.prototype.options.position, i)) : i = e.ui.dialog.prototype.options.position, t = this.uiDialog.is(":visible"), t || this.uiDialog.show(), this.uiDialog.position(i), t || this.uiDialog.hide()
        }
    })
})(jQuery);
(function(t) {
    t.widget("ui.menu", {
        version: "",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {
                submenu: "ui-icon-carat-1-e"
            },
            menus: "ul",
            position: {
                my: "left top",
                at: "right top"
            },
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                role: this.options.role,
                tabIndex: 0
            }).bind("click" + this.eventNamespace, t.proxy(function(t) {
                this.options.disabled && t.preventDefault()
            }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
                "mousedown .ui-menu-item > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-state-disabled > a": function(t) {
                    t.preventDefault()
                },
                "click .ui-menu-item:has(a)": function(e) {
                    var i = t(e.target).closest(".ui-menu-item");
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && t(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    var i = t(e.currentTarget);
                    i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.children(".ui-menu-item").eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) {
                    this._delay(function() {
                        t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                    })
                },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function(e) {
                    t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
                }
            })
        },
        _destroy: function() {
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-carat") && e.remove()
            }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(e) {
            function i(t) {
                return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            }
            var s, n, a, o, r, l = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    l = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    }), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function() {
                        return r.test(t(this).children("a").text())
                    })), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function() {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
            }
            l && e.preventDefault()
        },
        _activate: function(t) {
            this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function() {
            var e, i = this.options.icons.submenu,
                s = this.element.find(this.options.menus);
            this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function() {
                var e = t(this),
                    s = e.prev("a"),
                    n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
                s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
            }), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
                tabIndex: -1,
                role: this._itemRole()
            }), e.children(":not(.ui-menu-item)").each(function() {
                var e = t(this);
                /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
            }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
            return {
                menu: "menuitem",
                listbox: "option"
            }[this.options.role]
        },
        _setOption: function(t, e) {
            "icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
        },
        focus: function(t, e) {
            var i, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() {
                this._close()
            }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
                item: e
            })
        },
        _scrollIntoView: function(e) {
            var i, s, n, a, o, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
        },
        blur: function(t, e) {
            e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
                item: this.active
            }))
        },
        _startOpening: function(t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function(e) {
            var i = t.extend({ of: this.active
            }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
            }, this.delay)
        },
        _close: function(t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
        },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
            e && e.length && (this._open(e.parent()), this._delay(function() {
                this.focus(t, e)
            }))
        },
        next: function(t) {
            this._move("next", "first", t)
        },
        previous: function(t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
        },
        nextPage: function(e) {
            var i, s, n;
            return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                return i = t(this), 0 > i.offset().top - s - n
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
        },
        previousPage: function(e) {
            var i, s, n;
            return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                return i = t(this), i.offset().top - s + n > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
        },
        _hasScroll: function() {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {
                item: this.active
            };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        }
    })
})(jQuery);
(function(t, e) {
    t.widget("ui.progressbar", {
        version: "",
        options: {
            max: 100,
            value: 0,
            change: null,
            complete: null
        },
        min: 0,
        _create: function() {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
        },
        _destroy: function() {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
        },
        value: function(t) {
            return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
        },
        _constrainedValue: function(t) {
            return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _percentage: function() {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    })
})(jQuery);
(function(t) {
    var e = 5;
    t.widget("ui.slider", t.ui.mouse, {
        version: "",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
        },
        _refresh: function() {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function() {
            var e, i, s = this.options,
                n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
                o = [];
            for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push(a);
            this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function(e) {
                t(this).data("ui-slider-handle-index", e)
            })
        },
        _createRange: function() {
            var e = this.options,
                i = "";
            e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                left: "",
                bottom: ""
            }) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() {
            var t = this.handles.add(this.range).filter("a");
            this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
        },
        _destroy: function() {
            this.handles.remove(), this.range && this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
        },
        _mouseCapture: function(e) {
            var i, s, n, a, o, r, l, h, u = this,
                c = this.options;
            return c.disabled ? !1 : (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(s - u.values(e));
                (n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
            }), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), l = a.offset(), h = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = h ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - l.left - a.width() / 2,
                top: e.pageY - l.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
        },
        _mouseStart: function() {
            return !0
        },
        _mouseDrag: function(t) {
            var e = {
                    x: t.pageX,
                    y: t.pageY
                },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) {
            return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function() {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function(t) {
            var e, i, s, n, a;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
        },
        _start: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
        },
        _slide: function(t, e, i) {
            var s, n, a;
            this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i,
                values: n
            }), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i))) : i !== this.value() && (a = this._trigger("slide", t, {
                handle: this.handles[e],
                value: i
            }), a !== !1 && this.value(i))
        },
        _stop: function(t, e) {
            var i = {
                handle: this.handles[e],
                value: this.value()
            };
            this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
        },
        _change: function(t, e) {
            if (!this._keySliding && !this._mouseSliding) {
                var i = {
                    handle: this.handles[e],
                    value: this.value()
                };
                this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
            }
        },
        value: function(t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
        },
        values: function(e, i) {
            var s, n, a;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
            for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var s, n = 0;
            switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
                case "orientation":
                    this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "min":
                case "max":
                    this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _value: function() {
            var t = this.options.value;
            return t = this._trimAlignValue(t)
        },
        _values: function(t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
            if (this.options.values && this.options.values.length) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _valueMin: function() {
            return this.options.min
        },
        _valueMax: function() {
            return this.options.max
        },
        _refreshValue: function() {
            var e, i, s, n, a, o = this.options.range,
                r = this.options,
                l = this,
                h = this._animateOff ? !1 : r.animate,
                u = {};
            this.options.values && this.options.values.length ? this.handles.each(function(s) {
                i = 100 * ((l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin())), u["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](u, r.animate), l.options.range === !0 && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    left: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    width: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({
                    bottom: i + "%"
                }, r.animate), 1 === s && l.range[h ? "animate" : "css"]({
                    height: i - e + "%"
                }, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                width: i + "%"
            }, r.animate), "max" === o && "horizontal" === this.orientation && this.range[h ? "animate" : "css"]({
                width: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({
                height: i + "%"
            }, r.animate), "max" === o && "vertical" === this.orientation && this.range[h ? "animate" : "css"]({
                height: 100 - i + "%"
            }, {
                queue: !1,
                duration: r.animate
            }))
        },
        _handleEvents: {
            keydown: function(i) {
                var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
                switch (i.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
                }
                switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
                    case t.ui.keyCode.HOME:
                        a = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        a = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (n === this._valueMax()) return;
                        a = this._trimAlignValue(n + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (n === this._valueMin()) return;
                        a = this._trimAlignValue(n - o)
                }
                this._slide(i, r, a)
            },
            click: function(t) {
                t.preventDefault()
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
            }
        }
    })
})(jQuery);
(function(t) {
    function e(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.widget("ui.spinner", {
        version: "",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            culture: null,
            icons: {
                down: "ui-icon-triangle-1-s",
                up: "ui-icon-triangle-1-n"
            },
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function() {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function() {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function() {
            var e = {},
                i = this.element;
            return t.each(["min", "max", "step"], function(t, s) {
                var n = i.attr(s);
                void 0 !== n && n.length && (e[s] = n)
            }), e
        },
        _events: {
            keydown: function(t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            },
            keyup: "_stop",
            focus: function() {
                this.previous = this.element.val()
            },
            blur: function(t) {
                return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
            },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() {
                    var t = this.element[0] === this.document[0].activeElement;
                    t || (this.element.focus(), this.previous = s, this._delay(function() {
                        this.previous = s
                    }))
                }
                var s;
                s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur, i.call(this)
                }), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
            },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _draw: function() {
            var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
            this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
        },
        _keydown: function(e) {
            var i = this.options,
                s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _uiSpinnerHtml: function() {
            return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
        },
        _buttonHtml: function() {
            return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
        },
        _start: function(t) {
            return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
        },
        _repeat: function(t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
                value: i
            }) === !1 || (this._value(i), this.counter++)
        },
        _increment: function(e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function() {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) {
            var e, i, s = this.options;
            return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function(t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function(t, e) {
            if ("culture" === t || "numberFormat" === t) {
                var i = this._parse(this.element.val());
                return this.options[t] = e, this.element.val(this._format(i)), void 0
            }("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
        },
        _setOptions: e(function(t) {
            this._super(t), this._value(this.element.val())
        }),
        _parse: function(t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function(t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function() {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        _value: function(t, e) {
            var i;
            "" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function() {
            this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: e(function(t) {
            this._stepUp(t)
        }),
        _stepUp: function(t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: e(function(t) {
            this._stepDown(t)
        }),
        _stepDown: function(t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: e(function(t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: e(function(t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function(t) {
            return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
        },
        widget: function() {
            return this.uiSpinner
        }
    })
})(jQuery);
(function(t) {
    function e(e, i) {
        var s = (e.attr("aria-describedby") || "").split(/\s+/);
        s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
    }

    function i(e) {
        var i = e.data("ui-tooltip-id"),
            s = (e.attr("aria-describedby") || "").split(/\s+/),
            n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
    }
    var s = 0;
    t.widget("ui.tooltip", {
        version: "",
        options: {
            content: function() {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {
                my: "left top+15",
                at: "left bottom",
                collision: "flipfit flip"
            },
            show: !0,
            tooltipClass: null,
            track: !1,
            close: null,
            open: null
        },
        _create: function() {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
        },
        _setOption: function(e, i) {
            var s = this;
            return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) {
                s._updateContent(e)
            }), void 0)
        },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0)
            }), this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
            })
        },
        _enable: function() {
            this.element.find(this.options.items).addBack().each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            })
        },
        open: function(e) {
            var i = this,
                s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function() {
                var e, s = t(this);
                s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._updateContent(s, e))
        },
        _updateContent: function(t, e) {
            var i, s = this.options.content,
                n = this,
                o = e ? e.type : null;
            return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function(i) {
                t.data("ui-tooltip-open") && n._delay(function() {
                    e && (e.type = o), this._open(e, t, i)
                })
            }), i && this._open(e, t, i), void 0)
        },
        _open: function(i, s, n) {
            function o(t) {
                l.of = t, a.is(":hidden") || a.position(l)
            }
            var a, r, h, l = t.extend({}, this.options.position);
            if (n) {
                if (a = this._find(s), a.length) return a.find(".ui-tooltip-content").html(n), void 0;
                s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), a = this._tooltip(s), e(s, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
                    mousemove: o
                }), o(i)) : a.position(t.extend({ of: s
                }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                    a.is(":visible") && (o(l.of), clearInterval(h))
                }, t.fx.interval)), this._trigger("open", i, {
                    tooltip: a
                }), r = {
                    keyup: function(e) {
                        if (e.keyCode === t.ui.keyCode.ESCAPE) {
                            var i = t.Event(e);
                            i.currentTarget = s[0], this.close(i, !0)
                        }
                    },
                    remove: function() {
                        this._removeTooltip(a)
                    }
                }, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
            }
        },
        close: function(e) {
            var s = this,
                n = t(e ? e.currentTarget : this.element),
                o = this._find(n);
            this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), o.stop(!0), this._hide(o, this.options.hide, function() {
                s._removeTooltip(t(this))
            }), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), this.closing = !0, this._trigger("close", e, {
                tooltip: o
            }), this.closing = !1)
        },
        _tooltip: function(e) {
            var i = "ui-tooltip-" + s++,
                n = t("<div>").attr({
                    id: i,
                    role: "tooltip"
                }).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
            return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
        },
        _find: function(e) {
            var i = e.data("ui-tooltip-id");
            return i ? t("#" + i) : t()
        },
        _removeTooltip: function(t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, s) {
                var n = t.Event("blur");
                n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
            })
        }
    })
})(jQuery);
(function(t, e) {
    var i = "ui-effects-";
    t.effects = {
            effect: {}
        },
        function(t, e) {
            function i(t, e, i) {
                var s = u[e.type] || {};
                return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
            }

            function s(i) {
                var s = h(),
                    n = s._rgba = [];
                return i = i.toLowerCase(), f(l, function(t, a) {
                    var o, r = a.re.exec(i),
                        l = r && a.parse(r),
                        h = a.space || "rgba";
                    return l ? (o = s[h](l), s[c[h].cache] = o[c[h].cache], n = s._rgba = o._rgba, !1) : e
                }), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
            }

            function n(t, e, i) {
                return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
            }
            var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                r = /^([\-+])=\s*(\d+\.?\d*)/,
                l = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [t[1], t[2], t[3], t[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(t) {
                        return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(t) {
                        return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(t) {
                        return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(t) {
                        return [t[1], t[2] / 100, t[3] / 100, t[4]]
                    }
                }],
                h = t.Color = function(e, i, s, n) {
                    return new t.Color.fn.parse(e, i, s, n)
                },
                c = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                u = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                d = h.support = {},
                p = t("<p>")[0],
                f = t.each;
            p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function(t, e) {
                e.cache = "_" + t, e.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), h.fn = t.extend(h.prototype, {
                parse: function(n, o, r, l) {
                    if (n === e) return this._rgba = [null, null, null, null], this;
                    (n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
                    var u = this,
                        d = t.type(n),
                        p = this._rgba = [];
                    return o !== e && (n = [n, o, r, l], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function(t, e) {
                        p[e.idx] = i(n[e.idx], e)
                    }), this) : "object" === d ? (n instanceof h ? f(c, function(t, e) {
                        n[e.cache] && (u[e.cache] = n[e.cache].slice())
                    }) : f(c, function(e, s) {
                        var a = s.cache;
                        f(s.props, function(t, e) {
                            if (!u[a] && s.to) {
                                if ("alpha" === t || null == n[t]) return;
                                u[a] = s.to(u._rgba)
                            }
                            u[a][e.idx] = i(n[t], e, !0)
                        }), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
                    }), this) : e
                },
                is: function(t) {
                    var i = h(t),
                        s = !0,
                        n = this;
                    return f(c, function(t, a) {
                        var o, r = i[a.cache];
                        return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function(t, i) {
                            return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
                        })), s
                    }), s
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return f(c, function(i, s) {
                        e[s.cache] && t.push(i)
                    }), t.pop()
                },
                transition: function(t, e) {
                    var s = h(t),
                        n = s._space(),
                        a = c[n],
                        o = 0 === this.alpha() ? h("transparent") : this,
                        r = o[a.cache] || a.to(o._rgba),
                        l = r.slice();
                    return s = s[a.cache], f(a.props, function(t, n) {
                        var a = n.idx,
                            o = r[a],
                            h = s[a],
                            c = u[n.type] || {};
                        null !== h && (null === o ? l[a] = h : (c.mod && (h - o > c.mod / 2 ? o += c.mod : o - h > c.mod / 2 && (o -= c.mod)), l[a] = i((h - o) * e + o, n)))
                    }), this[n](l)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        s = i.pop(),
                        n = h(e)._rgba;
                    return h(t.map(i, function(t, e) {
                        return (1 - s) * n[e] + s * t
                    }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) {
                            return null == t ? e > 2 ? 1 : 0 : t
                        });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) {
                            return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                        });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        s = i.pop();
                    return e && i.push(~~(255 * s)), "#" + t.map(i, function(t) {
                        return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), h.fn.parse.prototype = h.fn, c.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, s = t[0] / 255,
                    n = t[1] / 255,
                    a = t[2] / 255,
                    o = t[3],
                    r = Math.max(s, n, a),
                    l = Math.min(s, n, a),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return e = l === r ? 0 : s === r ? 60 * (n - a) / h + 360 : n === r ? 60 * (a - s) / h + 120 : 60 * (s - n) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
            }, c.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    s = t[2],
                    a = t[3],
                    o = .5 >= s ? s * (1 + i) : s + i - s * i,
                    r = 2 * s - o;
                return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
            }, f(c, function(s, n) {
                var a = n.props,
                    o = n.cache,
                    l = n.to,
                    c = n.from;
                h.fn[s] = function(s) {
                    if (l && !this[o] && (this[o] = l(this._rgba)), s === e) return this[o].slice();
                    var n, r = t.type(s),
                        u = "array" === r || "object" === r ? s : arguments,
                        d = this[o].slice();
                    return f(a, function(t, e) {
                        var s = u["object" === r ? t : e.idx];
                        null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
                    }), c ? (n = h(c(d)), n[o] = d, n) : h(d)
                }, f(a, function(e, i) {
                    h.fn[e] || (h.fn[e] = function(n) {
                        var a, o = t.type(n),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), h[i.idx] = n, this[l](h)))
                    })
                })
            }), h.hook = function(e) {
                var i = e.split(" ");
                f(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, n) {
                            var a, o, r = "";
                            if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
                                if (n = h(a || n), !d.rgba && 1 !== n._rgba[3]) {
                                    for (o = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && o && o.style;) try {
                                        r = t.css(o, "backgroundColor"), o = o.parentNode
                                    } catch (l) {}
                                    n = n.blend(r && "transparent" !== r ? r : "_default")
                                }
                                n = n.toRgbaString()
                            }
                            try {
                                e.style[i] = n
                            } catch (l) {}
                        }
                    }, t.fx.step[i] = function(e) {
                        e.colorInit || (e.start = h(e.elem, i), e.end = h(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                    }
                })
            }, h.hook(o), t.cssHooks.borderColor = {
                expand: function(t) {
                    var e = {};
                    return f(["Top", "Right", "Bottom", "Left"], function(i, s) {
                        e["border" + s + "Color"] = t
                    }), e
                }
            }, a = t.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery),
        function() {
            function i(e) {
                var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    a = {};
                if (n && n.length && n[0] && n[n[0]])
                    for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
                else
                    for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
                return a
            }

            function s(e, i) {
                var s, n, o = {};
                for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
                return o
            }
            var n = ["add", "remove", "toggle"],
                a = {
                    border: 1,
                    borderBottom: 1,
                    borderColor: 1,
                    borderLeft: 1,
                    borderRight: 1,
                    borderTop: 1,
                    borderWidth: 1,
                    margin: 1,
                    padding: 1
                };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }), t.effects.animateClass = function(e, a, o, r) {
                var l = t.speed(a, o, r);
                return this.queue(function() {
                    var a, o = t(this),
                        r = o.attr("class") || "",
                        h = l.children ? o.find("*").addBack() : o;
                    h = h.map(function() {
                        var e = t(this);
                        return {
                            el: e,
                            start: i(this)
                        }
                    }), a = function() {
                        t.each(n, function(t, i) {
                            e[i] && o[i + "Class"](e[i])
                        })
                    }, a(), h = h.map(function() {
                        return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
                    }), o.attr("class", r), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            s = t.extend({}, l, {
                                queue: !1,
                                complete: function() {
                                    i.resolve(e)
                                }
                            });
                        return this.el.animate(this.diff, s), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        a(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) {
                                e.css(t, "")
                            })
                        }), l.complete.call(o[0])
                    })
                })
            }, t.fn.extend({
                addClass: function(e) {
                    return function(i, s, n, a) {
                        return s ? t.effects.animateClass.call(this, {
                            add: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.addClass),
                removeClass: function(e) {
                    return function(i, s, n, a) {
                        return arguments.length > 1 ? t.effects.animateClass.call(this, {
                            remove: i
                        }, s, n, a) : e.apply(this, arguments)
                    }
                }(t.fn.removeClass),
                toggleClass: function(i) {
                    return function(s, n, a, o, r) {
                        return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
                            add: s
                        } : {
                            remove: s
                        }, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
                            toggle: s
                        }, n, a, o)
                    }
                }(t.fn.toggleClass),
                switchClass: function(e, i, s, n, a) {
                    return t.effects.animateClass.call(this, {
                        add: i,
                        remove: e
                    }, s, n, a)
                }
            })
        }(),
        function() {
            function s(e, i, s, n) {
                return t.isPlainObject(e) && (i = e, e = e.effect), e = {
                    effect: e
                }, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
            }

            function n(e) {
                return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
            }
            t.extend(t.effects, {
                version: "",
                save: function(t, e) {
                    for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
                },
                restore: function(t, s) {
                    var n, a;
                    for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
                },
                setMode: function(t, e) {
                    return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
                },
                getBaseline: function(t, e) {
                    var i, s;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            s = 0;
                            break;
                        case "center":
                            s = .5;
                            break;
                        case "right":
                            s = 1;
                            break;
                        default:
                            s = t[1] / e.width
                    }
                    return {
                        x: s,
                        y: i
                    }
                },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = {
                            width: e.outerWidth(!0),
                            height: e.outerHeight(!0),
                            "float": e.css("float")
                        },
                        s = t("<div></div>").addClass("ui-effects-wrapper").css({
                            fontSize: "100%",
                            background: "transparent",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }),
                        n = {
                            width: e.width(),
                            height: e.height()
                        },
                        a = document.activeElement;
                    try {
                        a.id
                    } catch (o) {
                        a = document.body
                    }
                    return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
                        position: "relative"
                    }), e.css({
                        position: "relative"
                    })) : (t.extend(i, {
                        position: e.css("position"),
                        zIndex: e.css("z-index")
                    }), t.each(["top", "left", "bottom", "right"], function(t, s) {
                        i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                    }), e.css({
                        position: "relative",
                        top: 0,
                        left: 0,
                        right: "auto",
                        bottom: "auto"
                    })), e.css(n), s.css(i).show()
                },
                removeWrapper: function(e) {
                    var i = document.activeElement;
                    return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
                },
                setTransition: function(e, i, s, n) {
                    return n = n || {}, t.each(i, function(t, i) {
                        var a = e.cssUnit(i);
                        a[0] > 0 && (n[i] = a[0] * s + a[1])
                    }), n
                }
            }), t.fn.extend({
                effect: function() {
                    function e(e) {
                        function s() {
                            t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
                        }
                        var n = t(this),
                            a = i.complete,
                            r = i.mode;
                        (n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
                    }
                    var i = s.apply(this, arguments),
                        n = i.mode,
                        a = i.queue,
                        o = t.effects.effect[i.effect];
                    return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function() {
                        i.complete && i.complete.call(this)
                    }) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
                },
                show: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "show", this.effect.call(this, i)
                    }
                }(t.fn.show),
                hide: function(t) {
                    return function(e) {
                        if (n(e)) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "hide", this.effect.call(this, i)
                    }
                }(t.fn.hide),
                toggle: function(t) {
                    return function(e) {
                        if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
                        var i = s.apply(this, arguments);
                        return i.mode = "toggle", this.effect.call(this, i)
                    }
                }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        s = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) {
                        i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                    }), s
                }
            })
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) {
                e[i] = function(e) {
                    return Math.pow(e, t + 2)
                }
            }), t.extend(e, {
                Sine: function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                Circ: function(t) {
                    return 1 - Math.sqrt(1 - t * t)
                },
                Elastic: function(t) {
                    return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
                },
                Back: function(t) {
                    return t * t * (3 * t - 2)
                },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) {
                t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) {
                    return 1 - i(1 - t)
                }, t.easing["easeInOut" + e] = function(t) {
                    return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
                }
            })
        }()
})(jQuery);
(function(t) {
    var e = /up|down|vertical/,
        i = /up|left|vertical|horizontal/;
    t.effects.effect.blind = function(s, n) {
        var a, o, r, l = t(this),
            h = ["position", "top", "bottom", "left", "right", "height", "width"],
            c = t.effects.setMode(l, s.mode || "hide"),
            u = s.direction || "up",
            d = e.test(u),
            p = d ? "height" : "width",
            f = d ? "top" : "left",
            g = i.test(u),
            m = {},
            v = "show" === c;
        l.parent().is(".ui-effects-wrapper") ? t.effects.save(l.parent(), h) : t.effects.save(l, h), l.show(), a = t.effects.createWrapper(l).css({
            overflow: "hidden"
        }), o = a[p](), r = parseFloat(a.css(f)) || 0, m[p] = v ? o : 0, g || (l.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
            position: "absolute"
        }), m[f] = v ? r : o + r), v && (a.css(p, 0), g || a.css(f, r + o)), a.animate(m, {
            duration: s.duration,
            easing: s.easing,
            queue: !1,
            complete: function() {
                "hide" === c && l.hide(), t.effects.restore(l, h), t.effects.removeWrapper(l), n()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.bounce = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(o, e.mode || "effect"),
            h = "hide" === l,
            c = "show" === l,
            u = e.direction || "up",
            d = e.distance,
            p = e.times || 5,
            f = 2 * p + (c || h ? 1 : 0),
            g = e.duration / f,
            m = e.easing,
            v = "up" === u || "down" === u ? "top" : "left",
            _ = "up" === u || "left" === u,
            b = o.queue(),
            y = b.length;
        for ((c || h) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
                opacity: 1
            }, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, g, m)), h && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m).animate(a, g, m), d = h ? 2 * d : d / 2;
        h && (n = {
            opacity: 0
        }, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, g, m)), o.queue(function() {
            h && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
        }), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.clip = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "height", "width"],
            l = t.effects.setMode(o, e.mode || "hide"),
            h = "show" === l,
            c = e.direction || "vertical",
            u = "vertical" === c,
            d = u ? "height" : "width",
            p = u ? "top" : "left",
            f = {};
        t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
            overflow: "hidden"
        }), n = "IMG" === o[0].tagName ? s : o, a = n[d](), h && (n.css(d, 0), n.css(p, a / 2)), f[d] = h ? a : 0, f[p] = h ? 0 : a / 2, n.animate(f, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                h || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.drop = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
            o = t.effects.setMode(n, e.mode || "hide"),
            r = "show" === o,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l ? "pos" : "neg",
            u = {
                opacity: r ? 1 : 0
            };
        t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(h, "pos" === c ? -s : s), u[h] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.fade = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "toggle");
        s.animate({
            opacity: n
        }, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.highlight = function(e, i) {
        var s = t(this),
            n = ["backgroundImage", "backgroundColor", "opacity"],
            a = t.effects.setMode(s, e.mode || "show"),
            o = {
                backgroundColor: s.css("backgroundColor")
            };
        "hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === a && s.hide(), t.effects.restore(s, n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.pulsate = function(e, i) {
        var s, n = t(this),
            a = t.effects.setMode(n, e.mode || "show"),
            o = "show" === a,
            r = "hide" === a,
            l = o || "hide" === a,
            h = 2 * (e.times || 5) + (l ? 1 : 0),
            c = e.duration / h,
            u = 0,
            d = n.queue(),
            p = d.length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; h > s; s++) n.animate({
            opacity: u
        }, c, e.easing), u = 1 - u;
        n.animate({
            opacity: u
        }, c, e.easing), n.queue(function() {
            r && n.hide(), i()
        }), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, h + 1))), n.dequeue()
    }
})(jQuery);
(function(t) {
    t.effects.effect.puff = function(e, i) {
        var s = t(this),
            n = t.effects.setMode(s, e.mode || "hide"),
            a = "hide" === n,
            o = parseInt(e.percent, 10) || 150,
            r = o / 100,
            l = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            };
        t.extend(e, {
            effect: "scale",
            queue: !1,
            fade: !0,
            mode: n,
            complete: i,
            percent: a ? o : 100,
            from: a ? l : {
                height: l.height * r,
                width: l.width * r,
                outerHeight: l.outerHeight * r,
                outerWidth: l.outerWidth * r
            }
        }), s.effect(e)
    }, t.effects.effect.scale = function(e, i) {
        var s = t(this),
            n = t.extend(!0, {}, e),
            a = t.effects.setMode(s, e.mode || "effect"),
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
            r = e.direction || "both",
            l = e.origin,
            h = {
                height: s.height(),
                width: s.width(),
                outerHeight: s.outerHeight(),
                outerWidth: s.outerWidth()
            },
            c = {
                y: "horizontal" !== r ? o / 100 : 1,
                x: "vertical" !== r ? o / 100 : 1
            };
        n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = l || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
            height: 0,
            width: 0,
            outerHeight: 0,
            outerWidth: 0
        } : h), n.to = {
            height: h.height * c.y,
            width: h.width * c.x,
            outerHeight: h.outerHeight * c.y,
            outerWidth: h.outerWidth * c.x
        }, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
    }, t.effects.effect.size = function(e, i) {
        var s, n, a, o = t(this),
            r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
            l = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
            h = ["width", "height", "overflow"],
            c = ["fontSize"],
            u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            p = t.effects.setMode(o, e.mode || "effect"),
            f = e.restore || "effect" !== p,
            g = e.scale || "both",
            m = e.origin || ["middle", "center"],
            v = o.css("position"),
            _ = f ? r : l,
            b = {
                height: 0,
                width: 0,
                outerHeight: 0,
                outerWidth: 0
            };
        "show" === p && o.show(), s = {
            height: o.height(),
            width: o.width(),
            outerHeight: o.outerHeight(),
            outerWidth: o.outerWidth()
        }, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
            from: {
                y: o.from.height / s.height,
                x: o.from.width / s.width
            },
            to: {
                y: o.to.height / s.height,
                x: o.to.width / s.width
            }
        }, ("box" === g || "both" === g) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === g || "both" === g) && a.from.y !== a.to.y && (_ = _.concat(c).concat(h), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), m && (n = t.effects.getBaseline(m, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === g || "both" === g) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), h = r.concat(u).concat(d), o.find("*[width]").each(function() {
            var i = t(this),
                s = {
                    height: i.height(),
                    width: i.width(),
                    outerHeight: i.outerHeight(),
                    outerWidth: i.outerWidth()
                };
            f && t.effects.save(i, h), i.from = {
                height: s.height * a.from.y,
                width: s.width * a.from.x,
                outerHeight: s.outerHeight * a.from.y,
                outerWidth: s.outerWidth * a.from.x
            }, i.to = {
                height: s.height * a.to.y,
                width: s.width * a.to.x,
                outerHeight: s.height * a.to.y,
                outerWidth: s.width * a.to.x
            }, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function() {
                f && t.effects.restore(i, h)
            })
        })), o.animate(o.to, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
                    position: "relative",
                    top: o.to.top,
                    left: o.to.left
                }) : t.each(["top", "left"], function(t, e) {
                    o.css(e, function(e, i) {
                        var s = parseInt(i, 10),
                            n = t ? o.to.left : o.to.top;
                        return "auto" === i ? n + "px" : s + n + "px"
                    })
                })), t.effects.removeWrapper(o), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.slide = function(e, i) {
        var s, n = t(this),
            a = ["position", "top", "bottom", "left", "right", "width", "height"],
            o = t.effects.setMode(n, e.mode || "show"),
            r = "show" === o,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = {};
        t.effects.save(n, a), n.show(), s = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
            overflow: "hidden"
        }), r && n.css(h, c ? isNaN(s) ? "-" + s : -s : s), u[h] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                "hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
            }
        })
    }
})(jQuery);
(function(t) {
    t.effects.effect.transfer = function(e, i) {
        var s = t(this),
            n = t(e.to),
            a = "fixed" === n.css("position"),
            o = t("body"),
            r = a ? o.scrollTop() : 0,
            l = a ? o.scrollLeft() : 0,
            h = n.offset(),
            c = {
                top: h.top - r,
                left: h.left - l,
                height: n.innerHeight(),
                width: n.innerWidth()
            },
            u = s.offset(),
            d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
                top: u.top - r,
                left: u.left - l,
                height: s.innerHeight(),
                width: s.innerWidth(),
                position: a ? "fixed" : "absolute"
            }).animate(c, e.duration, e.easing, function() {
                d.remove(), i()
            })
    }
})(jQuery);

// Multiple Ticker 
(function(e) {
    e.fn.vTicker = function(t) {
        var n = {
            speed: 700,
            pause: 4e3,
            showItems: 2,
            animation: "",
            mousePause: true,
            isPaused: false,
            direction: "down",
            height: 0
        };
        var t = e.extend(n, t);
        var r = false;
        moveUp = function(t, n, r) {
            if (r.isPaused) return;
            var i = t.children("ul");
            var s = i.children("li:first").clone(true);
            if (r.height > 0) {
                n = i.children("li:first").height()
            }
            i.animate({
                top: "-=" + n + "px"
            }, r.speed, function() {
                e(this).children("li:first").remove();
                e(this).css("top", "0px")
            });
            if (r.animation == "fade") {
                i.children("li:first").fadeOut(r.speed);
                if (r.height == 0) {
                    i.children("li:eq(" + r.showItems + ")").hide().fadeIn(r.speed).show()
                }
            }
            s.appendTo(i)
        };
        moveDown = function(t, n, r) {
            if (r.isPaused) return;
            var i = t.children("ul");
            var s = i.children("li:last").clone(true);
            if (r.height > 0) {
                n = i.children("li:first").height()
            }
            i.css("top", "-" + n + "px").prepend(s);
            i.animate({
                top: 0
            }, r.speed, function() {
                e(this).children("li:last").remove()
            });
            if (r.animation == "fade") {
                if (r.height == 0) {
                    i.children("li:eq(" + r.showItems + ")").fadeOut(r.speed)
                }
                i.children("li:first").hide().fadeIn(r.speed).show()
            }
        };
        return this.each(function() {
            var n = e(this);
            var i = 0;
            n.css({
                overflow: "hidden",
                position: "relative"
            }).children("ul").css({
                position: "absolute"
            });
            if (t.height == 0) {
                n.children("ul").children("li").each(function() {
                    if (e(this).height() > i) {
                        i = e(this).height()
                    }
                });
                n.children("ul").children("li").each(function() {
                    e(this).height(i)
                });
                n.height(i * t.showItems)
            } else {
                n.height(t.height)
            }
            var s = setInterval(function() {
                if (t.direction == "up") {
                    moveUp(n, i, t)
                } else {
                    moveDown(n, i, t)
                }
            }, t.pause);
            if (t.mousePause) {
                n.bind("mouseenter", function() {
                    t.isPaused = true
                }).bind("mouseleave", function() {
                    t.isPaused = false
                })
            }
            //alert(e(n).parent().children().attr('title'));
            e(n).parent().children('a').click(function() {
                if (r == false) {
                    r = true;
                    t.isPaused = true;
                    e(this).addClass("play");
                    e(this).removeClass("pause")
                } else {
                    r = false;
                    t.isPaused = false;
                    e(this).addClass("pause");
                    e(this).removeClass("play")
                }
            })
        })
    }
})(jQuery);

/**
 * Swiper 4.4.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: December 19, 2018
 */
! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function() {
    "use strict";
    var f = "undefined" == typeof document ? {
            body: {},
            addEventListener: function() {},
            removeEventListener: function() {},
            activeElement: {
                blur: function() {},
                nodeName: ""
            },
            querySelector: function() {
                return null
            },
            querySelectorAll: function() {
                return []
            },
            getElementById: function() {
                return null
            },
            createEvent: function() {
                return {
                    initEvent: function() {}
                }
            },
            createElement: function() {
                return {
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute: function() {},
                    getElementsByTagName: function() {
                        return []
                    }
                }
            },
            location: {
                hash: ""
            }
        } : document,
        J = "undefined" == typeof window ? {
            document: f,
            navigator: {
                userAgent: ""
            },
            location: {},
            history: {},
            CustomEvent: function() {
                return this
            },
            addEventListener: function() {},
            removeEventListener: function() {},
            getComputedStyle: function() {
                return {
                    getPropertyValue: function() {
                        return ""
                    }
                }
            },
            Image: function() {},
            Date: function() {},
            screen: {},
            setTimeout: function() {},
            clearTimeout: function() {}
        } : window,
        l = function(e) {
            for (var t = 0; t < e.length; t += 1) this[t] = e[t];
            return this.length = e.length, this
        };

    function L(e, t) {
        var a = [],
            i = 0;
        if (e && !t && e instanceof l) return e;
        if (e)
            if ("string" == typeof e) {
                var s, r, n = e.trim();
                if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
                    var o = "div";
                    for (0 === n.indexOf("<li") && (o = "ul"), 0 === n.indexOf("<tr") && (o = "tbody"), 0 !== n.indexOf("<td") && 0 !== n.indexOf("<th") || (o = "tr"), 0 === n.indexOf("<tbody") && (o = "table"), 0 === n.indexOf("<option") && (o = "select"), (r = f.createElement(o)).innerHTML = n, i = 0; i < r.childNodes.length; i += 1) a.push(r.childNodes[i])
                } else
                    for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || f).querySelectorAll(e.trim()) : [f.getElementById(e.trim().split("#")[1])], i = 0; i < s.length; i += 1) s[i] && a.push(s[i])
            } else if (e.nodeType || e === J || e === f) a.push(e);
        else if (0 < e.length && e[0].nodeType)
            for (i = 0; i < e.length; i += 1) a.push(e[i]);
        return new l(a)
    }

    function r(e) {
        for (var t = [], a = 0; a < e.length; a += 1) - 1 === t.indexOf(e[a]) && t.push(e[a]);
        return t
    }
    L.fn = l.prototype, L.Class = l, L.Dom7 = l;
    var t = {
        addClass: function(e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.add(t[a]);
            return this
        },
        removeClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.remove(t[a]);
            return this
        },
        hasClass: function(e) {
            return !!this[0] && this[0].classList.contains(e)
        },
        toggleClass: function(e) {
            for (var t = e.split(" "), a = 0; a < t.length; a += 1)
                for (var i = 0; i < this.length; i += 1) void 0 !== this[i] && void 0 !== this[i].classList && this[i].classList.toggle(t[a]);
            return this
        },
        attr: function(e, t) {
            var a = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var i = 0; i < this.length; i += 1)
                if (2 === a.length) this[i].setAttribute(e, t);
                else
                    for (var s in e) this[i][s] = e[s], this[i].setAttribute(s, e[s]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        data: function(e, t) {
            var a;
            if (void 0 !== t) {
                for (var i = 0; i < this.length; i += 1)(a = this[i]).dom7ElementDataStorage || (a.dom7ElementDataStorage = {}), a.dom7ElementDataStorage[e] = t;
                return this
            }
            if (a = this[0]) {
                if (a.dom7ElementDataStorage && e in a.dom7ElementDataStorage) return a.dom7ElementDataStorage[e];
                var s = a.getAttribute("data-" + e);
                return s || void 0
            }
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransform = e, a.transform = e
            }
            return this
        },
        transition: function(e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var a = this[t].style;
                a.webkitTransitionDuration = e, a.transitionDuration = e
            }
            return this
        },
        on: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                r = t[1],
                n = t[2],
                s = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var a = e.target.dom7EventData || [];
                    if (a.indexOf(e) < 0 && a.unshift(e), L(t).is(r)) n.apply(t, a);
                    else
                        for (var i = L(t).parents(), s = 0; s < i.length; s += 1) L(i[s]).is(r) && n.apply(i[s], a)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t)
            }
            "function" == typeof t[1] && (i = (e = t)[0], n = e[1], s = e[2], r = void 0), s || (s = !1);
            for (var d, p = i.split(" "), c = 0; c < this.length; c += 1) {
                var u = this[c];
                if (r)
                    for (d = 0; d < p.length; d += 1) {
                        var h = p[d];
                        u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[h] || (u.dom7LiveListeners[h] = []), u.dom7LiveListeners[h].push({
                            listener: n,
                            proxyListener: o
                        }), u.addEventListener(h, o, s)
                    } else
                        for (d = 0; d < p.length; d += 1) {
                            var v = p[d];
                            u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[v] || (u.dom7Listeners[v] = []), u.dom7Listeners[v].push({
                                listener: n,
                                proxyListener: l
                            }), u.addEventListener(v, l, s)
                        }
            }
            return this
        },
        off: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            var i = t[0],
                s = t[1],
                r = t[2],
                n = t[3];
            "function" == typeof t[1] && (i = (e = t)[0], r = e[1], n = e[2], s = void 0), n || (n = !1);
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], p = 0; p < this.length; p += 1) {
                    var c = this[p],
                        u = void 0;
                    if (!s && c.dom7Listeners ? u = c.dom7Listeners[d] : s && c.dom7LiveListeners && (u = c.dom7LiveListeners[d]), u && u.length)
                        for (var h = u.length - 1; 0 <= h; h -= 1) {
                            var v = u[h];
                            r && v.listener === r ? (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1)) : r || (c.removeEventListener(d, v.proxyListener, n), u.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var a = e[0].split(" "), i = e[1], s = 0; s < a.length; s += 1)
                for (var r = a[s], n = 0; n < this.length; n += 1) {
                    var o = this[n],
                        l = void 0;
                    try {
                        l = new J.CustomEvent(r, {
                            detail: i,
                            bubbles: !0,
                            cancelable: !0
                        })
                    } catch (e) {
                        (l = f.createEvent("Event")).initEvent(r, !0, !0), l.detail = i
                    }
                    o.dom7EventData = e.filter(function(e, t) {
                        return 0 < t
                    }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
                }
            return this
        },
        transitionEnd: function(t) {
            var a, i = ["webkitTransitionEnd", "transitionend"],
                s = this;

            function r(e) {
                if (e.target === this)
                    for (t.call(this, e), a = 0; a < i.length; a += 1) s.off(i[a], r)
            }
            if (t)
                for (a = 0; a < i.length; a += 1) s.on(i[a], r);
            return this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        offset: function() {
            if (0 < this.length) {
                var e = this[0],
                    t = e.getBoundingClientRect(),
                    a = f.body,
                    i = e.clientTop || a.clientTop || 0,
                    s = e.clientLeft || a.clientLeft || 0,
                    r = e === J ? J.scrollY : e.scrollTop,
                    n = e === J ? J.scrollX : e.scrollLeft;
                return {
                    top: t.top + r - i,
                    left: t.left + n - s
                }
            }
            return null
        },
        css: function(e, t) {
            var a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (a = 0; a < this.length; a += 1)
                        for (var i in e) this[a].style[i] = e[i];
                    return this
                }
                if (this[0]) return J.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
                return this
            }
            return this
        },
        each: function(e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1)
                if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, a, i = this[0];
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for (t = L(e), a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            if (e === f) return i === f;
            if (e === J) return i === J;
            if (e.nodeType || e instanceof l) {
                for (t = e.nodeType ? [e] : e, a = 0; a < t.length; a += 1)
                    if (t[a] === i) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t, a = this.length;
            return new l(a - 1 < e ? [] : e < 0 ? (t = a + e) < 0 ? [] : [this[t]] : [this[e]])
        },
        append: function() {
            for (var e, t = [], a = arguments.length; a--;) t[a] = arguments[a];
            for (var i = 0; i < t.length; i += 1) {
                e = t[i];
                for (var s = 0; s < this.length; s += 1)
                    if ("string" == typeof e) {
                        var r = f.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[s].appendChild(r.firstChild)
                    } else if (e instanceof l)
                    for (var n = 0; n < e.length; n += 1) this[s].appendChild(e[n]);
                else this[s].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            var t, a;
            for (t = 0; t < this.length; t += 1)
                if ("string" == typeof e) {
                    var i = f.createElement("div");
                    for (i.innerHTML = e, a = i.childNodes.length - 1; 0 <= a; a -= 1) this[t].insertBefore(i.childNodes[a], this[t].childNodes[0])
                } else if (e instanceof l)
                for (a = 0; a < e.length; a += 1) this[t].insertBefore(e[a], this[t].childNodes[0]);
            else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && L(this[0].nextElementSibling).is(e) ? new l([this[0].nextElementSibling]) : new l([]) : this[0].nextElementSibling ? new l([this[0].nextElementSibling]) : new l([]) : new l([])
        },
        nextAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.nextElementSibling;) {
                var i = a.nextElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && L(t.previousElementSibling).is(e) ? new l([t.previousElementSibling]) : new l([]) : t.previousElementSibling ? new l([t.previousElementSibling]) : new l([])
            }
            return new l([])
        },
        prevAll: function(e) {
            var t = [],
                a = this[0];
            if (!a) return new l([]);
            for (; a.previousElementSibling;) {
                var i = a.previousElementSibling;
                e ? L(i).is(e) && t.push(i) : t.push(i), a = i
            }
            return new l(t)
        },
        parent: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1) null !== this[a].parentNode && (e ? L(this[a].parentNode).is(e) && t.push(this[a].parentNode) : t.push(this[a].parentNode));
            return L(r(t))
        },
        parents: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].parentNode; i;) e ? L(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
            return L(r(t))
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? new l([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].querySelectorAll(e), s = 0; s < i.length; s += 1) t.push(i[s]);
            return new l(t)
        },
        children: function(e) {
            for (var t = [], a = 0; a < this.length; a += 1)
                for (var i = this[a].childNodes, s = 0; s < i.length; s += 1) e ? 1 === i[s].nodeType && L(i[s]).is(e) && t.push(i[s]) : 1 === i[s].nodeType && t.push(i[s]);
            return new l(r(t))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        },
        add: function() {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var a, i;
            for (a = 0; a < e.length; a += 1) {
                var s = L(e[a]);
                for (i = 0; i < s.length; i += 1) this[this.length] = s[i], this.length += 1
            }
            return this
        },
        styles: function() {
            return this[0] ? J.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(t).forEach(function(e) {
        L.fn[e] = t[e]
    });
    var e, a, i, ee = {
            deleteProps: function(e) {
                var t = e;
                Object.keys(t).forEach(function(e) {
                    try {
                        t[e] = null
                    } catch (e) {}
                    try {
                        delete t[e]
                    } catch (e) {}
                })
            },
            nextTick: function(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            },
            now: function() {
                return Date.now()
            },
            getTranslate: function(e, t) {
                var a, i, s;
                void 0 === t && (t = "x");
                var r = J.getComputedStyle(e, null);
                return J.WebKitCSSMatrix ? (6 < (i = r.transform || r.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), s = new J.WebKitCSSMatrix("none" === i ? "" : i)) : a = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = J.WebKitCSSMatrix ? s.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t && (i = J.WebKitCSSMatrix ? s.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0
            },
            parseUrlQuery: function(e) {
                var t, a, i, s, r = {},
                    n = e || J.location.href;
                if ("string" == typeof n && n.length)
                    for (s = (a = (n = -1 < n.indexOf("?") ? n.replace(/\S*\?/, "") : "").split("&").filter(function(e) {
                            return "" !== e
                        })).length, t = 0; t < s; t += 1) i = a[t].replace(/#\S+/g, "").split("="), r[decodeURIComponent(i[0])] = void 0 === i[1] ? void 0 : decodeURIComponent(i[1]) || "";
                return r
            },
            isObject: function(e) {
                return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
            },
            extend: function() {
                for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
                for (var a = Object(e[0]), i = 1; i < e.length; i += 1) {
                    var s = e[i];
                    if (null != s)
                        for (var r = Object.keys(Object(s)), n = 0, o = r.length; n < o; n += 1) {
                            var l = r[n],
                                d = Object.getOwnPropertyDescriptor(s, l);
                            void 0 !== d && d.enumerable && (ee.isObject(a[l]) && ee.isObject(s[l]) ? ee.extend(a[l], s[l]) : !ee.isObject(a[l]) && ee.isObject(s[l]) ? (a[l] = {}, ee.extend(a[l], s[l])) : a[l] = s[l])
                        }
                }
                return a
            }
        },
        te = (i = f.createElement("div"), {
            touch: J.Modernizr && !0 === J.Modernizr.touch || !!(0 < J.navigator.maxTouchPoints || "ontouchstart" in J || J.DocumentTouch && f instanceof J.DocumentTouch),
            pointerEvents: !!(J.navigator.pointerEnabled || J.PointerEvent || "maxTouchPoints" in J.navigator),
            prefixedPointerEvents: !!J.navigator.msPointerEnabled,
            transition: (a = i.style, "transition" in a || "webkitTransition" in a || "MozTransition" in a),
            transforms3d: J.Modernizr && !0 === J.Modernizr.csstransforms3d || (e = i.style, "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e),
            flexbox: function() {
                for (var e = i.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), a = 0; a < t.length; a += 1)
                    if (t[a] in e) return !0;
                return !1
            }(),
            observer: "MutationObserver" in J || "WebkitMutationObserver" in J,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    J.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in J
        }),
        s = function(e) {
            void 0 === e && (e = {});
            var t = this;
            t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function(e) {
                t.on(e, t.params.on[e])
            })
        },
        n = {
            components: {
                configurable: !0
            }
        };
    s.prototype.on = function(e, t, a) {
        var i = this;
        if ("function" != typeof t) return i;
        var s = a ? "unshift" : "push";
        return e.split(" ").forEach(function(e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][s](t)
        }), i
    }, s.prototype.once = function(i, s, e) {
        var r = this;
        if ("function" != typeof s) return r;
        return r.on(i, function e() {
            for (var t = [], a = arguments.length; a--;) t[a] = arguments[a];
            s.apply(r, t), r.off(i, e)
        }, e)
    }, s.prototype.off = function(e, i) {
        var s = this;
        return s.eventsListeners && e.split(" ").forEach(function(a) {
            void 0 === i ? s.eventsListeners[a] = [] : s.eventsListeners[a] && s.eventsListeners[a].length && s.eventsListeners[a].forEach(function(e, t) {
                e === i && s.eventsListeners[a].splice(t, 1)
            })
        }), s
    }, s.prototype.emit = function() {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var a, i, s, r = this;
        return r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (a = e[0], i = e.slice(1, e.length), s = r) : (a = e[0].events, i = e[0].data, s = e[0].context || r), (Array.isArray(a) ? a : a.split(" ")).forEach(function(e) {
            if (r.eventsListeners && r.eventsListeners[e]) {
                var t = [];
                r.eventsListeners[e].forEach(function(e) {
                    t.push(e)
                }), t.forEach(function(e) {
                    e.apply(s, i)
                })
            }
        })), r
    }, s.prototype.useModulesParams = function(a) {
        var i = this;
        i.modules && Object.keys(i.modules).forEach(function(e) {
            var t = i.modules[e];
            t.params && ee.extend(a, t.params)
        })
    }, s.prototype.useModules = function(i) {
        void 0 === i && (i = {});
        var s = this;
        s.modules && Object.keys(s.modules).forEach(function(e) {
            var a = s.modules[e],
                t = i[e] || {};
            a.instance && Object.keys(a.instance).forEach(function(e) {
                var t = a.instance[e];
                s[e] = "function" == typeof t ? t.bind(s) : t
            }), a.on && s.on && Object.keys(a.on).forEach(function(e) {
                s.on(e, a.on[e])
            }), a.create && a.create.bind(s)(t)
        })
    }, n.components.set = function(e) {
        this.use && this.use(e)
    }, s.installModule = function(t) {
        for (var e = [], a = arguments.length - 1; 0 < a--;) e[a] = arguments[a + 1];
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var s = t.name || Object.keys(i.prototype.modules).length + "_" + ee.now();
        return (i.prototype.modules[s] = t).proto && Object.keys(t.proto).forEach(function(e) {
            i.prototype[e] = t.proto[e]
        }), t.static && Object.keys(t.static).forEach(function(e) {
            i[e] = t.static[e]
        }), t.install && t.install.apply(i, e), i
    }, s.use = function(e) {
        for (var t = [], a = arguments.length - 1; 0 < a--;) t[a] = arguments[a + 1];
        var i = this;
        return Array.isArray(e) ? (e.forEach(function(e) {
            return i.installModule(e)
        }), i) : i.installModule.apply(i, [e].concat(t))
    }, Object.defineProperties(s, n);
    var o = {
        updateSize: function() {
            var e, t, a = this,
                i = a.$el;
            e = void 0 !== a.params.width ? a.params.width : i[0].clientWidth, t = void 0 !== a.params.height ? a.params.height : i[0].clientHeight, 0 === e && a.isHorizontal() || 0 === t && a.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), ee.extend(a, {
                width: e,
                height: t,
                size: a.isHorizontal() ? e : t
            }))
        },
        updateSlides: function() {
            var e = this,
                t = e.params,
                a = e.$wrapperEl,
                i = e.size,
                s = e.rtlTranslate,
                r = e.wrongRTL,
                n = e.virtual && t.virtual.enabled,
                o = n ? e.virtual.slides.length : e.slides.length,
                l = a.children("." + e.params.slideClass),
                d = n ? e.virtual.slides.length : l.length,
                p = [],
                c = [],
                u = [],
                h = t.slidesOffsetBefore;
            "function" == typeof h && (h = t.slidesOffsetBefore.call(e));
            var v = t.slidesOffsetAfter;
            "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
            var f = e.snapGrid.length,
                m = e.snapGrid.length,
                g = t.spaceBetween,
                b = -h,
                w = 0,
                y = 0;
            if (void 0 !== i) {
                var x, T;
                "string" == typeof g && 0 <= g.indexOf("%") && (g = parseFloat(g.replace("%", "")) / 100 * i), e.virtualSize = -g, s ? l.css({
                    marginLeft: "",
                    marginTop: ""
                }) : l.css({
                    marginRight: "",
                    marginBottom: ""
                }), 1 < t.slidesPerColumn && (x = Math.floor(d / t.slidesPerColumn) === d / e.params.slidesPerColumn ? d : Math.ceil(d / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
                for (var E, S = t.slidesPerColumn, C = x / S, M = Math.floor(d / t.slidesPerColumn), k = 0; k < d; k += 1) {
                    T = 0;
                    var P = l.eq(k);
                    if (1 < t.slidesPerColumn) {
                        var z = void 0,
                            $ = void 0,
                            L = void 0;
                        "column" === t.slidesPerColumnFill ? (L = k - ($ = Math.floor(k / S)) * S, (M < $ || $ === M && L === S - 1) && S <= (L += 1) && (L = 0, $ += 1), z = $ + L * x / S, P.css({
                            "-webkit-box-ordinal-group": z,
                            "-moz-box-ordinal-group": z,
                            "-ms-flex-order": z,
                            "-webkit-order": z,
                            order: z
                        })) : $ = k - (L = Math.floor(k / C)) * C, P.css("margin-" + (e.isHorizontal() ? "top" : "left"), 0 !== L && t.spaceBetween && t.spaceBetween + "px").attr("data-swiper-column", $).attr("data-swiper-row", L)
                    }
                    if ("none" !== P.css("display")) {
                        if ("auto" === t.slidesPerView) {
                            var I = J.getComputedStyle(P[0], null),
                                D = P[0].style.transform,
                                O = P[0].style.webkitTransform;
                            if (D && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), t.roundLengths) T = e.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
                            else if (e.isHorizontal()) {
                                var A = parseFloat(I.getPropertyValue("width")),
                                    N = parseFloat(I.getPropertyValue("padding-left")),
                                    H = parseFloat(I.getPropertyValue("padding-right")),
                                    G = parseFloat(I.getPropertyValue("margin-left")),
                                    B = parseFloat(I.getPropertyValue("margin-right")),
                                    X = I.getPropertyValue("box-sizing");
                                T = X && "border-box" === X ? A + G + B : A + N + H + G + B
                            } else {
                                var Y = parseFloat(I.getPropertyValue("height")),
                                    V = parseFloat(I.getPropertyValue("padding-top")),
                                    F = parseFloat(I.getPropertyValue("padding-bottom")),
                                    R = parseFloat(I.getPropertyValue("margin-top")),
                                    q = parseFloat(I.getPropertyValue("margin-bottom")),
                                    W = I.getPropertyValue("box-sizing");
                                T = W && "border-box" === W ? Y + R + q : Y + V + F + R + q
                            }
                            D && (P[0].style.transform = D), O && (P[0].style.webkitTransform = O), t.roundLengths && (T = Math.floor(T))
                        } else T = (i - (t.slidesPerView - 1) * g) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), l[k] && (e.isHorizontal() ? l[k].style.width = T + "px" : l[k].style.height = T + "px");
                        l[k] && (l[k].swiperSlideSize = T), u.push(T), t.centeredSlides ? (b = b + T / 2 + w / 2 + g, 0 === w && 0 !== k && (b = b - i / 2 - g), 0 === k && (b = b - i / 2 - g), Math.abs(b) < .001 && (b = 0), t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b)) : (t.roundLengths && (b = Math.floor(b)), y % t.slidesPerGroup == 0 && p.push(b), c.push(b), b = b + T + g), e.virtualSize += T + g, w = T, y += 1
                    }
                }
                if (e.virtualSize = Math.max(e.virtualSize, i) + v, s && r && ("slide" === t.effect || "coverflow" === t.effect) && a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }), te.flexbox && !t.setWrapperSize || (e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    })), 1 < t.slidesPerColumn && (e.virtualSize = (T + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? a.css({
                        width: e.virtualSize + t.spaceBetween + "px"
                    }) : a.css({
                        height: e.virtualSize + t.spaceBetween + "px"
                    }), t.centeredSlides)) {
                    E = [];
                    for (var j = 0; j < p.length; j += 1) {
                        var U = p[j];
                        t.roundLengths && (U = Math.floor(U)), p[j] < e.virtualSize + p[0] && E.push(U)
                    }
                    p = E
                }
                if (!t.centeredSlides) {
                    E = [];
                    for (var K = 0; K < p.length; K += 1) {
                        var _ = p[K];
                        t.roundLengths && (_ = Math.floor(_)), p[K] <= e.virtualSize - i && E.push(_)
                    }
                    p = E, 1 < Math.floor(e.virtualSize - i) - Math.floor(p[p.length - 1]) && p.push(e.virtualSize - i)
                }
                if (0 === p.length && (p = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
                        marginLeft: g + "px"
                    }) : l.css({
                        marginRight: g + "px"
                    }) : l.css({
                        marginBottom: g + "px"
                    })), t.centerInsufficientSlides) {
                    var Z = 0;
                    if (u.forEach(function(e) {
                            Z += e + (t.spaceBetween ? t.spaceBetween : 0)
                        }), (Z -= t.spaceBetween) < i) {
                        var Q = (i - Z) / 2;
                        p.forEach(function(e, t) {
                            p[t] = e - Q
                        }), c.forEach(function(e, t) {
                            c[t] = e + Q
                        })
                    }
                }
                ee.extend(e, {
                    slides: l,
                    snapGrid: p,
                    slidesGrid: c,
                    slidesSizesGrid: u
                }), d !== o && e.emit("slidesLengthChange"), p.length !== f && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), c.length !== m && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset()
            }
        },
        updateAutoHeight: function(e) {
            var t, a = this,
                i = [],
                s = 0;
            if ("number" == typeof e ? a.setTransition(e) : !0 === e && a.setTransition(a.params.speed), "auto" !== a.params.slidesPerView && 1 < a.params.slidesPerView)
                for (t = 0; t < Math.ceil(a.params.slidesPerView); t += 1) {
                    var r = a.activeIndex + t;
                    if (r > a.slides.length) break;
                    i.push(a.slides.eq(r)[0])
                } else i.push(a.slides.eq(a.activeIndex)[0]);
            for (t = 0; t < i.length; t += 1)
                if (void 0 !== i[t]) {
                    var n = i[t].offsetHeight;
                    s = s < n ? n : s
                }
            s && a.$wrapperEl.css("height", s + "px")
        },
        updateSlidesOffset: function() {
            for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.slides,
                s = t.rtlTranslate;
            if (0 !== i.length) {
                void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                var r = -e;
                s && (r = e), i.removeClass(a.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                for (var n = 0; n < i.length; n += 1) {
                    var o = i[n],
                        l = (r + (a.centeredSlides ? t.minTranslate() : 0) - o.swiperSlideOffset) / (o.swiperSlideSize + a.spaceBetween);
                    if (a.watchSlidesVisibility) {
                        var d = -(r - o.swiperSlideOffset),
                            p = d + t.slidesSizesGrid[n];
                        (0 <= d && d < t.size || 0 < p && p <= t.size || d <= 0 && p >= t.size) && (t.visibleSlides.push(o), t.visibleSlidesIndexes.push(n), i.eq(n).addClass(a.slideVisibleClass))
                    }
                    o.progress = s ? -l : l
                }
                t.visibleSlides = L(t.visibleSlides)
            }
        },
        updateProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            var t = this,
                a = t.params,
                i = t.maxTranslate() - t.minTranslate(),
                s = t.progress,
                r = t.isBeginning,
                n = t.isEnd,
                o = r,
                l = n;
            0 === i ? n = r = !(s = 0) : (r = (s = (e - t.minTranslate()) / i) <= 0, n = 1 <= s), ee.extend(t, {
                progress: s,
                isBeginning: r,
                isEnd: n
            }), (a.watchSlidesProgress || a.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), n && !l && t.emit("reachEnd toEdge"), (o && !r || l && !n) && t.emit("fromEdge"), t.emit("progress", s)
        },
        updateSlidesClasses: function() {
            var e, t = this,
                a = t.slides,
                i = t.params,
                s = t.$wrapperEl,
                r = t.activeIndex,
                n = t.realIndex,
                o = t.virtual && i.virtual.enabled;
            a.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = o ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : a.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
            var l = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
            i.loop && 0 === l.length && (l = a.eq(0)).addClass(i.slideNextClass);
            var d = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
            i.loop && 0 === d.length && (d = a.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), d.hasClass(i.slideDuplicateClass) ? s.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : s.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + d.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
        },
        updateActiveIndex: function(e) {
            var t, a = this,
                i = a.rtlTranslate ? a.translate : -a.translate,
                s = a.slidesGrid,
                r = a.snapGrid,
                n = a.params,
                o = a.activeIndex,
                l = a.realIndex,
                d = a.snapIndex,
                p = e;
            if (void 0 === p) {
                for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? i >= s[c] && i < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : i >= s[c] && i < s[c + 1] && (p = c + 1) : i >= s[c] && (p = c);
                n.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
            }
            if ((t = 0 <= r.indexOf(i) ? r.indexOf(i) : Math.floor(p / n.slidesPerGroup)) >= r.length && (t = r.length - 1), p !== o) {
                var u = parseInt(a.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
                ee.extend(a, {
                    snapIndex: t,
                    realIndex: u,
                    previousIndex: o,
                    activeIndex: p
                }), a.emit("activeIndexChange"), a.emit("snapIndexChange"), l !== u && a.emit("realIndexChange"), a.emit("slideChange")
            } else t !== d && (a.snapIndex = t, a.emit("snapIndexChange"))
        },
        updateClickedSlide: function(e) {
            var t = this,
                a = t.params,
                i = L(e.target).closest("." + a.slideClass)[0],
                s = !1;
            if (i)
                for (var r = 0; r < t.slides.length; r += 1) t.slides[r] === i && (s = !0);
            if (!i || !s) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
            t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(L(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = L(i).index(), a.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
        }
    };
    var d = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            var t = this.params,
                a = this.rtlTranslate,
                i = this.translate,
                s = this.$wrapperEl;
            if (t.virtualTranslate) return a ? -i : i;
            var r = ee.getTranslate(s[0], e);
            return a && (r = -r), r || 0
        },
        setTranslate: function(e, t) {
            var a = this,
                i = a.rtlTranslate,
                s = a.params,
                r = a.$wrapperEl,
                n = a.progress,
                o = 0,
                l = 0;
            a.isHorizontal() ? o = i ? -e : e : l = e, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (te.transforms3d ? r.transform("translate3d(" + o + "px, " + l + "px, 0px)") : r.transform("translate(" + o + "px, " + l + "px)")), a.previousTranslate = a.translate, a.translate = a.isHorizontal() ? o : l;
            var d = a.maxTranslate() - a.minTranslate();
            (0 === d ? 0 : (e - a.minTranslate()) / d) !== n && a.updateProgress(e), a.emit("setTranslate", a.translate, t)
        },
        minTranslate: function() {
            return -this.snapGrid[0]
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1]
        }
    };
    var p = {
        setTransition: function(e, t) {
            this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
        },
        transitionStart: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.params,
                r = a.previousIndex;
            s.autoHeight && a.updateAutoHeight();
            var n = t;
            if (n || (n = r < i ? "next" : i < r ? "prev" : "reset"), a.emit("transitionStart"), e && i !== r) {
                if ("reset" === n) return void a.emit("slideResetTransitionStart");
                a.emit("slideChangeTransitionStart"), "next" === n ? a.emit("slideNextTransitionStart") : a.emit("slidePrevTransitionStart")
            }
        },
        transitionEnd: function(e, t) {
            void 0 === e && (e = !0);
            var a = this,
                i = a.activeIndex,
                s = a.previousIndex;
            a.animating = !1, a.setTransition(0);
            var r = t;
            if (r || (r = s < i ? "next" : i < s ? "prev" : "reset"), a.emit("transitionEnd"), e && i !== s) {
                if ("reset" === r) return void a.emit("slideResetTransitionEnd");
                a.emit("slideChangeTransitionEnd"), "next" === r ? a.emit("slideNextTransitionEnd") : a.emit("slidePrevTransitionEnd")
            }
        }
    };
    var c = {
        slideTo: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = this,
                r = e;
            r < 0 && (r = 0);
            var n = s.params,
                o = s.snapGrid,
                l = s.slidesGrid,
                d = s.previousIndex,
                p = s.activeIndex,
                c = s.rtlTranslate;
            if (s.animating && n.preventInteractionOnTransition) return !1;
            var u = Math.floor(r / n.slidesPerGroup);
            u >= o.length && (u = o.length - 1), (p || n.initialSlide || 0) === (d || 0) && a && s.emit("beforeSlideChangeStart");
            var h, v = -o[u];
            if (s.updateProgress(v), n.normalizeSlideIndex)
                for (var f = 0; f < l.length; f += 1) - Math.floor(100 * v) >= Math.floor(100 * l[f]) && (r = f);
            if (s.initialized && r !== p) {
                if (!s.allowSlideNext && v < s.translate && v < s.minTranslate()) return !1;
                if (!s.allowSlidePrev && v > s.translate && v > s.maxTranslate() && (p || 0) !== r) return !1
            }
            return h = p < r ? "next" : r < p ? "prev" : "reset", c && -v === s.translate || !c && v === s.translate ? (s.updateActiveIndex(r), n.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== n.effect && s.setTranslate(v), "reset" !== h && (s.transitionStart(a, h), s.transitionEnd(a, h)), !1) : (0 !== t && te.transition ? (s.setTransition(t), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(a, h))
            }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(v), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(a, h), s.transitionEnd(a, h)), !0)
        },
        slideToLoop: function(e, t, a, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === a && (a = !0);
            var s = e;
            return this.params.loop && (s += this.loopedSlides), this.slideTo(s, t, a, i)
        },
        slideNext: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating;
            return s.loop ? !r && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)) : i.slideTo(i.activeIndex + s.slidesPerGroup, e, t, a)
        },
        slidePrev: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.params,
                r = i.animating,
                n = i.snapGrid,
                o = i.slidesGrid,
                l = i.rtlTranslate;
            if (s.loop) {
                if (r) return !1;
                i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
            }

            function d(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            var p, c = d(l ? i.translate : -i.translate),
                u = n.map(function(e) {
                    return d(e)
                }),
                h = (o.map(function(e) {
                    return d(e)
                }), n[u.indexOf(c)], n[u.indexOf(c) - 1]);
            return void 0 !== h && (p = o.indexOf(h)) < 0 && (p = i.activeIndex - 1), i.slideTo(p, e, t, a)
        },
        slideReset: function(e, t, a) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, a)
        },
        slideToClosest: function(e, t, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            var i = this,
                s = i.activeIndex,
                r = Math.floor(s / i.params.slidesPerGroup);
            if (r < i.snapGrid.length - 1) {
                var n = i.rtlTranslate ? i.translate : -i.translate,
                    o = i.snapGrid[r];
                (i.snapGrid[r + 1] - o) / 2 < n - o && (s = i.params.slidesPerGroup)
            }
            return i.slideTo(s, e, t, a)
        },
        slideToClickedSlide: function() {
            var e, t = this,
                a = t.params,
                i = t.$wrapperEl,
                s = "auto" === a.slidesPerView ? t.slidesPerViewDynamic() : a.slidesPerView,
                r = t.clickedIndex;
            if (a.loop) {
                if (t.animating) return;
                e = parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10), a.centeredSlides ? r < t.loopedSlides - s / 2 || r > t.slides.length - t.loopedSlides + s / 2 ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r) : r > t.slides.length - s ? (t.loopFix(), r = i.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + a.slideDuplicateClass + ")").eq(0).index(), ee.nextTick(function() {
                    t.slideTo(r)
                })) : t.slideTo(r)
            } else t.slideTo(r)
        }
    };
    var u = {
        loopCreate: function() {
            var i = this,
                e = i.params,
                t = i.$wrapperEl;
            t.children("." + e.slideClass + "." + e.slideDuplicateClass).remove();
            var s = t.children("." + e.slideClass);
            if (e.loopFillGroupWithBlank) {
                var a = e.slidesPerGroup - s.length % e.slidesPerGroup;
                if (a !== e.slidesPerGroup) {
                    for (var r = 0; r < a; r += 1) {
                        var n = L(f.createElement("div")).addClass(e.slideClass + " " + e.slideBlankClass);
                        t.append(n)
                    }
                    s = t.children("." + e.slideClass)
                }
            }
            "auto" !== e.slidesPerView || e.loopedSlides || (e.loopedSlides = s.length), i.loopedSlides = parseInt(e.loopedSlides || e.slidesPerView, 10), i.loopedSlides += e.loopAdditionalSlides, i.loopedSlides > s.length && (i.loopedSlides = s.length);
            var o = [],
                l = [];
            s.each(function(e, t) {
                var a = L(t);
                e < i.loopedSlides && l.push(t), e < s.length && e >= s.length - i.loopedSlides && o.push(t), a.attr("data-swiper-slide-index", e)
            });
            for (var d = 0; d < l.length; d += 1) t.append(L(l[d].cloneNode(!0)).addClass(e.slideDuplicateClass));
            for (var p = o.length - 1; 0 <= p; p -= 1) t.prepend(L(o[p].cloneNode(!0)).addClass(e.slideDuplicateClass))
        },
        loopFix: function() {
            var e, t = this,
                a = t.params,
                i = t.activeIndex,
                s = t.slides,
                r = t.loopedSlides,
                n = t.allowSlidePrev,
                o = t.allowSlideNext,
                l = t.snapGrid,
                d = t.rtlTranslate;
            t.allowSlidePrev = !0, t.allowSlideNext = !0;
            var p = -l[i] - t.getTranslate();
            i < r ? (e = s.length - 3 * r + i, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p)) : ("auto" === a.slidesPerView && 2 * r <= i || i >= s.length - r) && (e = -s.length + i + r, e += r, t.slideTo(e, 0, !1, !0) && 0 !== p && t.setTranslate((d ? -t.translate : t.translate) - p));
            t.allowSlidePrev = n, t.allowSlideNext = o
        },
        loopDestroy: function() {
            var e = this.$wrapperEl,
                t = this.params,
                a = this.slides;
            e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), a.removeAttr("data-swiper-slide-index")
        }
    };
    var h = {
        setGrabCursor: function(e) {
            if (!(te.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked)) {
                var t = this.el;
                t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
            }
        },
        unsetGrabCursor: function() {
            te.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "")
        }
    };
    var v = {
            appendSlide: function(e) {
                var t = this,
                    a = t.$wrapperEl,
                    i = t.params;
                if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                    for (var s = 0; s < e.length; s += 1) e[s] && a.append(e[s]);
                else a.append(e);
                i.loop && t.loopCreate(), i.observer && te.observer || t.update()
            },
            prependSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && t.loopDestroy();
                var r = s + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var n = 0; n < e.length; n += 1) e[n] && i.prepend(e[n]);
                    r = s + e.length
                } else i.prepend(e);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), t.slideTo(r, 0, !1)
            },
            addSlide: function(e, t) {
                var a = this,
                    i = a.$wrapperEl,
                    s = a.params,
                    r = a.activeIndex;
                s.loop && (r -= a.loopedSlides, a.loopDestroy(), a.slides = i.children("." + s.slideClass));
                var n = a.slides.length;
                if (e <= 0) a.prependSlide(t);
                else if (n <= e) a.appendSlide(t);
                else {
                    for (var o = e < r ? r + 1 : r, l = [], d = n - 1; e <= d; d -= 1) {
                        var p = a.slides.eq(d);
                        p.remove(), l.unshift(p)
                    }
                    if ("object" == typeof t && "length" in t) {
                        for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                        o = e < r ? r + t.length : r
                    } else i.append(t);
                    for (var u = 0; u < l.length; u += 1) i.append(l[u]);
                    s.loop && a.loopCreate(), s.observer && te.observer || a.update(), s.loop ? a.slideTo(o + a.loopedSlides, 0, !1) : a.slideTo(o, 0, !1)
                }
            },
            removeSlide: function(e) {
                var t = this,
                    a = t.params,
                    i = t.$wrapperEl,
                    s = t.activeIndex;
                a.loop && (s -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + a.slideClass));
                var r, n = s;
                if ("object" == typeof e && "length" in e) {
                    for (var o = 0; o < e.length; o += 1) r = e[o], t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1);
                    n = Math.max(n, 0)
                } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < n && (n -= 1), n = Math.max(n, 0);
                a.loop && t.loopCreate(), a.observer && te.observer || t.update(), a.loop ? t.slideTo(n + t.loopedSlides, 0, !1) : t.slideTo(n, 0, !1)
            },
            removeAllSlides: function() {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        },
        m = function() {
            var e = J.navigator.userAgent,
                t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: J.cordova || J.phonegap,
                    phonegap: J.cordova || J.phonegap
                },
                a = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
                i = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                s = e.match(/(iPad).*OS\s([\d_]+)/),
                r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                n = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (a && (t.os = "windows", t.osVersion = a[2], t.windows = !0), i && !a && (t.os = "android", t.osVersion = i[2], t.android = !0, t.androidChrome = 0 <= e.toLowerCase().indexOf("chrome")), (s || n || r) && (t.os = "ios", t.ios = !0), n && !r && (t.osVersion = n[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && 0 <= e.indexOf("Version/") && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (n || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var o = t.osVersion.split("."),
                    l = f.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (r || n) && (1 * o[0] == 7 ? 1 <= 1 * o[1] : 7 < 1 * o[0]) && l && 0 <= l.getAttribute("content").indexOf("minimal-ui")
            }
            return t.pixelRatio = J.devicePixelRatio || 1, t
        }();

    function g() {
        var e = this,
            t = e.params,
            a = e.el;
        if (!a || 0 !== a.offsetWidth) {
            t.breakpoints && e.setBreakpoint();
            var i = e.allowSlideNext,
                s = e.allowSlidePrev,
                r = e.snapGrid;
            if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
                var n = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());
                e.setTranslate(n), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight()
            } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || 1 < t.slidesPerView) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
            e.allowSlidePrev = s, e.allowSlideNext = i, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow()
        }
    }
    var b = {
        attachEvents: function() {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl;
            e.onTouchStart = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches;
                if (!t.animating || !i.preventInteractionOnTransition) {
                    var r = e;
                    if (r.originalEvent && (r = r.originalEvent), a.isTouchEvent = "touchstart" === r.type, (a.isTouchEvent || !("which" in r) || 3 !== r.which) && !(!a.isTouchEvent && "button" in r && 0 < r.button || a.isTouched && a.isMoved))
                        if (i.noSwiping && L(r.target).closest(i.noSwipingSelector ? i.noSwipingSelector : "." + i.noSwipingClass)[0]) t.allowClick = !0;
                        else if (!i.swipeHandler || L(r).closest(i.swipeHandler)[0]) {
                        s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
                        var n = s.currentX,
                            o = s.currentY,
                            l = i.edgeSwipeDetection || i.iOSEdgeSwipeDetection,
                            d = i.edgeSwipeThreshold || i.iOSEdgeSwipeThreshold;
                        if (!l || !(n <= d || n >= J.screen.width - d)) {
                            if (ee.extend(a, {
                                    isTouched: !0,
                                    isMoved: !1,
                                    allowTouchCallbacks: !0,
                                    isScrolling: void 0,
                                    startMoving: void 0
                                }), s.startX = n, s.startY = o, a.touchStartTime = ee.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < i.threshold && (a.allowThresholdMove = !1), "touchstart" !== r.type) {
                                var p = !0;
                                L(r.target).is(a.formElements) && (p = !1), f.activeElement && L(f.activeElement).is(a.formElements) && f.activeElement !== r.target && f.activeElement.blur();
                                var c = p && t.allowTouchMove && i.touchStartPreventDefault;
                                (i.touchStartForcePreventDefault || c) && r.preventDefault()
                            }
                            t.emit("touchStart", r)
                        }
                    }
                }
            }.bind(e), e.onTouchMove = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = e;
                if (n.originalEvent && (n = n.originalEvent), a.isTouched) {
                    if (!a.isTouchEvent || "mousemove" !== n.type) {
                        var o = "touchmove" === n.type ? n.targetTouches[0].pageX : n.pageX,
                            l = "touchmove" === n.type ? n.targetTouches[0].pageY : n.pageY;
                        if (n.preventedByNestedSwiper) return s.startX = o, void(s.startY = l);
                        if (!t.allowTouchMove) return t.allowClick = !1, void(a.isTouched && (ee.extend(s, {
                            startX: o,
                            startY: l,
                            currentX: o,
                            currentY: l
                        }), a.touchStartTime = ee.now()));
                        if (a.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
                            if (t.isVertical()) {
                                if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return a.isTouched = !1, void(a.isMoved = !1)
                            } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
                        if (a.isTouchEvent && f.activeElement && n.target === f.activeElement && L(n.target).is(a.formElements)) return a.isMoved = !0, void(t.allowClick = !1);
                        if (a.allowTouchCallbacks && t.emit("touchMove", n), !(n.targetTouches && 1 < n.targetTouches.length)) {
                            s.currentX = o, s.currentY = l;
                            var d, p = s.currentX - s.startX,
                                c = s.currentY - s.startY;
                            if (!(t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < t.params.threshold))
                                if (void 0 === a.isScrolling && (t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? a.isScrolling = !1 : 25 <= p * p + c * c && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, a.isScrolling = t.isHorizontal() ? d > i.touchAngle : 90 - d > i.touchAngle)), a.isScrolling && t.emit("touchMoveOpposite", n), void 0 === a.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (a.startMoving = !0)), a.isScrolling) a.isTouched = !1;
                                else if (a.startMoving) {
                                t.allowClick = !1, n.preventDefault(), i.touchMoveStopPropagation && !i.nested && n.stopPropagation(), a.isMoved || (i.loop && t.loopFix(), a.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), a.allowMomentumBounce = !1, !i.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", n)), t.emit("sliderMove", n), a.isMoved = !0;
                                var u = t.isHorizontal() ? p : c;
                                s.diff = u, u *= i.touchRatio, r && (u = -u), t.swipeDirection = 0 < u ? "prev" : "next", a.currentTranslate = u + a.startTranslate;
                                var h = !0,
                                    v = i.resistanceRatio;
                                if (i.touchReleaseOnEdges && (v = 0), 0 < u && a.currentTranslate > t.minTranslate() ? (h = !1, i.resistance && (a.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + a.startTranslate + u, v))) : u < 0 && a.currentTranslate < t.maxTranslate() && (h = !1, i.resistance && (a.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - a.startTranslate - u, v))), h && (n.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && a.currentTranslate < a.startTranslate && (a.currentTranslate = a.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && a.currentTranslate > a.startTranslate && (a.currentTranslate = a.startTranslate), 0 < i.threshold) {
                                    if (!(Math.abs(u) > i.threshold || a.allowThresholdMove)) return void(a.currentTranslate = a.startTranslate);
                                    if (!a.allowThresholdMove) return a.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, a.currentTranslate = a.startTranslate, void(s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY)
                                }
                                i.followFinger && ((i.freeMode || i.watchSlidesProgress || i.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), i.freeMode && (0 === a.velocities.length && a.velocities.push({
                                    position: s[t.isHorizontal() ? "startX" : "startY"],
                                    time: a.touchStartTime
                                }), a.velocities.push({
                                    position: s[t.isHorizontal() ? "currentX" : "currentY"],
                                    time: ee.now()
                                })), t.updateProgress(a.currentTranslate), t.setTranslate(a.currentTranslate))
                            }
                        }
                    }
                } else a.startMoving && a.isScrolling && t.emit("touchMoveOpposite", n)
            }.bind(e), e.onTouchEnd = function(e) {
                var t = this,
                    a = t.touchEventsData,
                    i = t.params,
                    s = t.touches,
                    r = t.rtlTranslate,
                    n = t.$wrapperEl,
                    o = t.slidesGrid,
                    l = t.snapGrid,
                    d = e;
                if (d.originalEvent && (d = d.originalEvent), a.allowTouchCallbacks && t.emit("touchEnd", d), a.allowTouchCallbacks = !1, !a.isTouched) return a.isMoved && i.grabCursor && t.setGrabCursor(!1), a.isMoved = !1, void(a.startMoving = !1);
                i.grabCursor && a.isMoved && a.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var p, c = ee.now(),
                    u = c - a.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), u < 300 && 300 < c - a.lastClickTime && (a.clickTimeout && clearTimeout(a.clickTimeout), a.clickTimeout = ee.nextTick(function() {
                        t && !t.destroyed && t.emit("click", d)
                    }, 300)), u < 300 && c - a.lastClickTime < 300 && (a.clickTimeout && clearTimeout(a.clickTimeout), t.emit("doubleTap", d))), a.lastClickTime = ee.now(), ee.nextTick(function() {
                        t.destroyed || (t.allowClick = !0)
                    }), !a.isTouched || !a.isMoved || !t.swipeDirection || 0 === s.diff || a.currentTranslate === a.startTranslate) return a.isTouched = !1, a.isMoved = !1, void(a.startMoving = !1);
                if (a.isTouched = !1, a.isMoved = !1, a.startMoving = !1, p = i.followFinger ? r ? t.translate : -t.translate : -a.currentTranslate, i.freeMode) {
                    if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (p > -t.maxTranslate()) return void(t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
                    if (i.freeModeMomentum) {
                        if (1 < a.velocities.length) {
                            var h = a.velocities.pop(),
                                v = a.velocities.pop(),
                                f = h.position - v.position,
                                m = h.time - v.time;
                            t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < m || 300 < ee.now() - h.time) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= i.freeModeMomentumVelocityRatio, a.velocities.length = 0;
                        var g = 1e3 * i.freeModeMomentumRatio,
                            b = t.velocity * g,
                            w = t.translate + b;
                        r && (w = -w);
                        var y, x, T = !1,
                            E = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) i.freeModeMomentumBounce ? (w + t.maxTranslate() < -E && (w = t.maxTranslate() - E), y = t.maxTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.maxTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (w > t.minTranslate()) i.freeModeMomentumBounce ? (w - t.minTranslate() > E && (w = t.minTranslate() + E), y = t.minTranslate(), T = !0, a.allowMomentumBounce = !0) : w = t.minTranslate(), i.loop && i.centeredSlides && (x = !0);
                        else if (i.freeModeSticky) {
                            for (var S, C = 0; C < l.length; C += 1)
                                if (l[C] > -w) {
                                    S = C;
                                    break
                                }
                            w = -(w = Math.abs(l[S] - w) < Math.abs(l[S - 1] - w) || "next" === t.swipeDirection ? l[S] : l[S - 1])
                        }
                        if (x && t.once("transitionEnd", function() {
                                t.loopFix()
                            }), 0 !== t.velocity) g = r ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity);
                        else if (i.freeModeSticky) return void t.slideToClosest();
                        i.freeModeMomentumBounce && T ? (t.updateProgress(y), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && a.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(y), n.transitionEnd(function() {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(g), t.setTranslate(w), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, n.transitionEnd(function() {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    } else if (i.freeModeSticky) return void t.slideToClosest();
                    (!i.freeModeMomentum || u >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var M = 0, k = t.slidesSizesGrid[0], P = 0; P < o.length; P += i.slidesPerGroup) void 0 !== o[P + i.slidesPerGroup] ? p >= o[P] && p < o[P + i.slidesPerGroup] && (k = o[(M = P) + i.slidesPerGroup] - o[P]) : p >= o[P] && (M = P, k = o[o.length - 1] - o[o.length - 2]);
                    var z = (p - o[M]) / k;
                    if (u > i.longSwipesMs) {
                        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (z >= i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M)), "prev" === t.swipeDirection && (z > 1 - i.longSwipesRatio ? t.slideTo(M + i.slidesPerGroup) : t.slideTo(M))
                    } else {
                        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(M + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M)
                    }
                }
            }.bind(e), e.onClick = function(e) {
                this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
            }.bind(e);
            var r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("touchstart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.addEventListener(a.start, e.onTouchStart, o), r.addEventListener(a.move, e.onTouchMove, te.passiveListener ? {
                        passive: !1,
                        capture: n
                    } : n), r.addEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), f.addEventListener("mousemove", e.onTouchMove, n), f.addEventListener("mouseup", e.onTouchEnd, !1))
            } else r.addEventListener(a.start, e.onTouchStart, !1), f.addEventListener(a.move, e.onTouchMove, n), f.addEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g, !0)
        },
        detachEvents: function() {
            var e = this,
                t = e.params,
                a = e.touchEvents,
                i = e.el,
                s = e.wrapperEl,
                r = "container" === t.touchEventsTarget ? i : s,
                n = !!t.nested;
            if (te.touch || !te.pointerEvents && !te.prefixedPointerEvents) {
                if (te.touch) {
                    var o = !("onTouchStart" !== a.start || !te.passiveListener || !t.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r.removeEventListener(a.start, e.onTouchStart, o), r.removeEventListener(a.move, e.onTouchMove, n), r.removeEventListener(a.end, e.onTouchEnd, o)
                }(t.simulateTouch && !m.ios && !m.android || t.simulateTouch && !te.touch && m.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), f.removeEventListener("mousemove", e.onTouchMove, n), f.removeEventListener("mouseup", e.onTouchEnd, !1))
            } else r.removeEventListener(a.start, e.onTouchStart, !1), f.removeEventListener(a.move, e.onTouchMove, n), f.removeEventListener(a.end, e.onTouchEnd, !1);
            (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(m.ios || m.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", g)
        }
    };
    var w, y = {
            setBreakpoint: function() {
                var e = this,
                    t = e.activeIndex,
                    a = e.initialized,
                    i = e.loopedSlides;
                void 0 === i && (i = 0);
                var s = e.params,
                    r = s.breakpoints;
                if (r && (!r || 0 !== Object.keys(r).length)) {
                    var n = e.getBreakpoint(r);
                    if (n && e.currentBreakpoint !== n) {
                        var o = n in r ? r[n] : void 0;
                        o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function(e) {
                            var t = o[e];
                            void 0 !== t && (o[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                        });
                        var l = o || e.originalParams,
                            d = s.loop && l.slidesPerView !== s.slidesPerView;
                        ee.extend(e.params, l), ee.extend(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), e.currentBreakpoint = n, d && a && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    }
                }
            },
            getBreakpoint: function(e) {
                if (e) {
                    var t = !1,
                        a = [];
                    Object.keys(e).forEach(function(e) {
                        a.push(e)
                    }), a.sort(function(e, t) {
                        return parseInt(e, 10) - parseInt(t, 10)
                    });
                    for (var i = 0; i < a.length; i += 1) {
                        var s = a[i];
                        this.params.breakpointsInverse ? s <= J.innerWidth && (t = s) : s >= J.innerWidth && !t && (t = s)
                    }
                    return t || "max"
                }
            }
        },
        I = {
            isIE: !!J.navigator.userAgent.match(/Trident/g) || !!J.navigator.userAgent.match(/MSIE/g),
            isEdge: !!J.navigator.userAgent.match(/Edge/g),
            isSafari: (w = J.navigator.userAgent.toLowerCase(), 0 <= w.indexOf("safari") && w.indexOf("chrome") < 0 && w.indexOf("android") < 0),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(J.navigator.userAgent)
        };
    var x = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            preventInteractionOnTransition: !1,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsInverse: !1,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        },
        T = {
            update: o,
            translate: d,
            transition: p,
            slide: c,
            loop: u,
            grabCursor: h,
            manipulation: v,
            events: b,
            breakpoints: y,
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.isLocked;
                    e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var t = this.classNames,
                        a = this.params,
                        e = this.rtl,
                        i = this.$el,
                        s = [];
                    s.push(a.direction), a.freeMode && s.push("free-mode"), te.flexbox || s.push("no-flexbox"), a.autoHeight && s.push("autoheight"), e && s.push("rtl"), 1 < a.slidesPerColumn && s.push("multirow"), m.android && s.push("android"), m.ios && s.push("ios"), (I.isIE || I.isEdge) && (te.pointerEvents || te.prefixedPointerEvents) && s.push("wp8-" + a.direction), s.forEach(function(e) {
                        t.push(a.containerModifierClass + e)
                    }), i.addClass(t.join(" "))
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function(e, t, a, i, s, r) {
                    var n;

                    function o() {
                        r && r()
                    }
                    e.complete && s ? o() : t ? ((n = new J.Image).onload = o, n.onerror = o, i && (n.sizes = i), a && (n.srcset = a), t && (n.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var a = 0; a < e.imagesToLoad.length; a += 1) {
                        var i = e.imagesToLoad[a];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        E = {},
        S = function(u) {
            function h() {
                for (var e, t, s, a = [], i = arguments.length; i--;) a[i] = arguments[i];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? s = a[0] : (t = (e = a)[0], s = e[1]), s || (s = {}), s = ee.extend({}, s), t && !s.el && (s.el = t), u.call(this, s), Object.keys(T).forEach(function(t) {
                    Object.keys(T[t]).forEach(function(e) {
                        h.prototype[e] || (h.prototype[e] = T[t][e])
                    })
                });
                var r = this;
                void 0 === r.modules && (r.modules = {}), Object.keys(r.modules).forEach(function(e) {
                    var t = r.modules[e];
                    if (t.params) {
                        var a = Object.keys(t.params)[0],
                            i = t.params[a];
                        if ("object" != typeof i || null === i) return;
                        if (!(a in s && "enabled" in i)) return;
                        !0 === s[a] && (s[a] = {
                            enabled: !0
                        }), "object" != typeof s[a] || "enabled" in s[a] || (s[a].enabled = !0), s[a] || (s[a] = {
                            enabled: !1
                        })
                    }
                });
                var n = ee.extend({}, x);
                r.useModulesParams(n), r.params = ee.extend({}, n, E, s), r.originalParams = ee.extend({}, r.params), r.passedParams = ee.extend({}, s);
                var o = (r.$ = L)(r.params.el);
                if (t = o[0]) {
                    if (1 < o.length) {
                        var l = [];
                        return o.each(function(e, t) {
                            var a = ee.extend({}, s, {
                                el: t
                            });
                            l.push(new h(a))
                        }), l
                    }
                    t.swiper = r, o.data("swiper", r);
                    var d, p, c = o.children("." + r.params.wrapperClass);
                    return ee.extend(r, {
                        $el: o,
                        el: t,
                        $wrapperEl: c,
                        wrapperEl: c[0],
                        classNames: [],
                        slides: L(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function() {
                            return "horizontal" === r.params.direction
                        },
                        isVertical: function() {
                            return "vertical" === r.params.direction
                        },
                        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction"),
                        rtlTranslate: "horizontal" === r.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === o.css("direction")),
                        wrongRTL: "-webkit-box" === c.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev,
                        touchEvents: (d = ["touchstart", "touchmove", "touchend"], p = ["mousedown", "mousemove", "mouseup"], te.pointerEvents ? p = ["pointerdown", "pointermove", "pointerup"] : te.prefixedPointerEvents && (p = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), r.touchEventsTouch = {
                            start: d[0],
                            move: d[1],
                            end: d[2]
                        }, r.touchEventsDesktop = {
                            start: p[0],
                            move: p[1],
                            end: p[2]
                        }, te.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: ee.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: r.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), r.useModules(), r.params.init && r.init(), r
                }
            }
            u && (h.__proto__ = u);
            var e = {
                extendedDefaults: {
                    configurable: !0
                },
                defaults: {
                    configurable: !0
                },
                Class: {
                    configurable: !0
                },
                $: {
                    configurable: !0
                }
            };
            return ((h.prototype = Object.create(u && u.prototype)).constructor = h).prototype.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    a = e.slides,
                    i = e.slidesGrid,
                    s = e.size,
                    r = e.activeIndex,
                    n = 1;
                if (t.centeredSlides) {
                    for (var o, l = a[r].swiperSlideSize, d = r + 1; d < a.length; d += 1) a[d] && !o && (n += 1, s < (l += a[d].swiperSlideSize) && (o = !0));
                    for (var p = r - 1; 0 <= p; p -= 1) a[p] && !o && (n += 1, s < (l += a[p].swiperSlideSize) && (o = !0))
                } else
                    for (var c = r + 1; c < a.length; c += 1) i[c] - i[r] < s && (n += 1);
                return n
            }, h.prototype.update = function() {
                var a = this;
                if (a && !a.destroyed) {
                    var e = a.snapGrid,
                        t = a.params;
                    t.breakpoints && a.setBreakpoint(), a.updateSize(), a.updateSlides(), a.updateProgress(), a.updateSlidesClasses(), a.params.freeMode ? (i(), a.params.autoHeight && a.updateAutoHeight()) : (("auto" === a.params.slidesPerView || 1 < a.params.slidesPerView) && a.isEnd && !a.params.centeredSlides ? a.slideTo(a.slides.length - 1, 0, !1, !0) : a.slideTo(a.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== a.snapGrid && a.checkOverflow(), a.emit("update")
                }

                function i() {
                    var e = a.rtlTranslate ? -1 * a.translate : a.translate,
                        t = Math.min(Math.max(e, a.maxTranslate()), a.minTranslate());
                    a.setTranslate(t), a.updateActiveIndex(), a.updateSlidesClasses()
                }
            }, h.prototype.init = function() {
                var e = this;
                e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"))
            }, h.prototype.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var a = this,
                    i = a.params,
                    s = a.$el,
                    r = a.$wrapperEl,
                    n = a.slides;
                return void 0 === a.params || a.destroyed || (a.emit("beforeDestroy"), a.initialized = !1, a.detachEvents(), i.loop && a.loopDestroy(), t && (a.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), a.emit("destroy"), Object.keys(a.eventsListeners).forEach(function(e) {
                    a.off(e)
                }), !1 !== e && (a.$el[0].swiper = null, a.$el.data("swiper", null), ee.deleteProps(a)), a.destroyed = !0), null
            }, h.extendDefaults = function(e) {
                ee.extend(E, e)
            }, e.extendedDefaults.get = function() {
                return E
            }, e.defaults.get = function() {
                return x
            }, e.Class.get = function() {
                return u
            }, e.$.get = function() {
                return L
            }, Object.defineProperties(h, e), h
        }(s),
        C = {
            name: "device",
            proto: {
                device: m
            },
            static: {
                device: m
            }
        },
        M = {
            name: "support",
            proto: {
                support: te
            },
            static: {
                support: te
            }
        },
        k = {
            name: "browser",
            proto: {
                browser: I
            },
            static: {
                browser: I
            }
        },
        P = {
            name: "resize",
            create: function() {
                var e = this;
                ee.extend(e, {
                    resize: {
                        resizeHandler: function() {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function() {
                    J.addEventListener("resize", this.resize.resizeHandler), J.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                },
                destroy: function() {
                    J.removeEventListener("resize", this.resize.resizeHandler), J.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        },
        z = {
            func: J.MutationObserver || J.WebkitMutationObserver,
            attach: function(e, t) {
                void 0 === t && (t = {});
                var a = this,
                    i = new z.func(function(e) {
                        if (1 !== e.length) {
                            var t = function() {
                                a.emit("observerUpdate", e[0])
                            };
                            J.requestAnimationFrame ? J.requestAnimationFrame(t) : J.setTimeout(t, 0)
                        } else a.emit("observerUpdate", e[0])
                    });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), a.observer.observers.push(i)
            },
            init: function() {
                var e = this;
                if (te.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), a = 0; a < t.length; a += 1) e.observer.attach(t[a]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        $ = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                ee.extend(this, {
                    observer: {
                        init: z.init.bind(this),
                        attach: z.attach.bind(this),
                        destroy: z.destroy.bind(this),
                        observers: []
                    }
                })
            },
            on: {
                init: function() {
                    this.observer.init()
                },
                destroy: function() {
                    this.observer.destroy()
                }
            }
        },
        D = {
            update: function(e) {
                var t = this,
                    a = t.params,
                    i = a.slidesPerView,
                    s = a.slidesPerGroup,
                    r = a.centeredSlides,
                    n = t.params.virtual,
                    o = n.addSlidesBefore,
                    l = n.addSlidesAfter,
                    d = t.virtual,
                    p = d.from,
                    c = d.to,
                    u = d.slides,
                    h = d.slidesGrid,
                    v = d.renderSlide,
                    f = d.offset;
                t.updateActiveIndex();
                var m, g, b, w = t.activeIndex || 0;
                m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", r ? (g = Math.floor(i / 2) + s + o, b = Math.floor(i / 2) + s + l) : (g = i + (s - 1) + o, b = s + l);
                var y = Math.max((w || 0) - b, 0),
                    x = Math.min((w || 0) + g, u.length - 1),
                    T = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

                function E() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (ee.extend(t.virtual, {
                        from: y,
                        to: x,
                        offset: T,
                        slidesGrid: t.slidesGrid
                    }), p === y && c === x && !e) return t.slidesGrid !== h && T !== f && t.slides.css(m, T + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: T,
                    from: y,
                    to: x,
                    slides: function() {
                        for (var e = [], t = y; t <= x; t += 1) e.push(u[t]);
                        return e
                    }()
                }), void E();
                var S = [],
                    C = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var M = p; M <= c; M += 1)(M < y || x < M) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + M + '"]').remove();
                for (var k = 0; k < u.length; k += 1) y <= k && k <= x && (void 0 === c || e ? C.push(k) : (c < k && C.push(k), k < p && S.push(k)));
                C.forEach(function(e) {
                    t.$wrapperEl.append(v(u[e], e))
                }), S.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(v(u[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(m, T + "px"), E()
            },
            renderSlide: function(e, t) {
                var a = this,
                    i = a.params.virtual;
                if (i.cache && a.virtual.cache[t]) return a.virtual.cache[t];
                var s = i.renderSlide ? L(i.renderSlide.call(a, e, t)) : L('<div class="' + a.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), i.cache && (a.virtual.cache[t] = s), s
            },
            appendSlide: function(e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var t = this;
                if (t.virtual.slides.unshift(e), t.params.virtual.cache) {
                    var a = t.virtual.cache,
                        i = {};
                    Object.keys(a).forEach(function(e) {
                        i[e + 1] = a[e]
                    }), t.virtual.cache = i
                }
                t.virtual.update(!0), t.slideNext(0)
            }
        },
        O = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    virtual: {
                        update: D.update.bind(e),
                        appendSlide: D.appendSlide.bind(e),
                        prependSlide: D.prependSlide.bind(e),
                        renderSlide: D.renderSlide.bind(e),
                        slides: e.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if (e.params.virtual.enabled) {
                        e.classNames.push(e.params.containerModifierClass + "virtual");
                        var t = {
                            watchSlidesProgress: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update()
                    }
                },
                setTranslate: function() {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        },
        A = {
            handle: function(e) {
                var t = this,
                    a = t.rtlTranslate,
                    i = e;
                i.originalEvent && (i = i.originalEvent);
                var s = i.keyCode || i.charCode;
                if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;
                if (!(i.shiftKey || i.altKey || i.ctrlKey || i.metaKey || f.activeElement && f.activeElement.nodeName && ("input" === f.activeElement.nodeName.toLowerCase() || "textarea" === f.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
                        var r = !1;
                        if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                        var n = J.innerWidth,
                            o = J.innerHeight,
                            l = t.$el.offset();
                        a && (l.left -= t.$el[0].scrollLeft);
                        for (var d = [
                                [l.left, l.top],
                                [l.left + t.width, l.top],
                                [l.left, l.top + t.height],
                                [l.left + t.width, l.top + t.height]
                            ], p = 0; p < d.length; p += 1) {
                            var c = d[p];
                            0 <= c[0] && c[0] <= n && 0 <= c[1] && c[1] <= o && (r = !0)
                        }
                        if (!r) return
                    }
                    t.isHorizontal() ? (37 !== s && 39 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), (39 === s && !a || 37 === s && a) && t.slideNext(), (37 === s && !a || 39 === s && a) && t.slidePrev()) : (38 !== s && 40 !== s || (i.preventDefault ? i.preventDefault() : i.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s)
                }
            },
            enable: function() {
                this.keyboard.enabled || (L(f).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                this.keyboard.enabled && (L(f).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        N = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: A.enable.bind(this),
                        disable: A.disable.bind(this),
                        handle: A.handle.bind(this)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.keyboard.enabled && this.keyboard.enable()
                },
                destroy: function() {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        };
    var H = {
            lastScrollTime: ee.now(),
            event: -1 < J.navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : function() {
                var e = "onwheel",
                    t = e in f;
                if (!t) {
                    var a = f.createElement("div");
                    a.setAttribute(e, "return;"), t = "function" == typeof a[e]
                }
                return !t && f.implementation && f.implementation.hasFeature && !0 !== f.implementation.hasFeature("", "") && (t = f.implementation.hasFeature("Events.wheel", "3.0")), t
            }() ? "wheel" : "mousewheel",
            normalize: function(e) {
                var t = 0,
                    a = 0,
                    i = 0,
                    s = 0;
                return "detail" in e && (a = e.detail), "wheelDelta" in e && (a = -e.wheelDelta / 120), "wheelDeltaY" in e && (a = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = a, a = 0), i = 10 * t, s = 10 * a, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || s) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, s *= 40) : (i *= 800, s *= 800)), i && !t && (t = i < 1 ? -1 : 1), s && !a && (a = s < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: a,
                    pixelX: i,
                    pixelY: s
                }
            },
            handleMouseEnter: function() {
                this.mouseEntered = !0
            },
            handleMouseLeave: function() {
                this.mouseEntered = !1
            },
            handle: function(e) {
                var t = e,
                    a = this,
                    i = a.params.mousewheel;
                if (!a.mouseEntered && !i.releaseOnEdges) return !0;
                t.originalEvent && (t = t.originalEvent);
                var s = 0,
                    r = a.rtlTranslate ? -1 : 1,
                    n = H.normalize(t);
                if (i.forceToAxis)
                    if (a.isHorizontal()) {
                        if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return !0;
                        s = n.pixelX * r
                    } else {
                        if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return !0;
                        s = n.pixelY
                    }
                else s = Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
                if (0 === s) return !0;
                if (i.invert && (s = -s), a.params.freeMode) {
                    a.params.loop && a.loopFix();
                    var o = a.getTranslate() + s * i.sensitivity,
                        l = a.isBeginning,
                        d = a.isEnd;
                    if (o >= a.minTranslate() && (o = a.minTranslate()), o <= a.maxTranslate() && (o = a.maxTranslate()), a.setTransition(0), a.setTranslate(o), a.updateProgress(), a.updateActiveIndex(), a.updateSlidesClasses(), (!l && a.isBeginning || !d && a.isEnd) && a.updateSlidesClasses(), a.params.freeModeSticky && (clearTimeout(a.mousewheel.timeout), a.mousewheel.timeout = ee.nextTick(function() {
                            a.slideToClosest()
                        }, 300)), a.emit("scroll", t), a.params.autoplay && a.params.autoplayDisableOnInteraction && a.autoplay.stop(), o === a.minTranslate() || o === a.maxTranslate()) return !0
                } else {
                    if (60 < ee.now() - a.mousewheel.lastScrollTime)
                        if (s < 0)
                            if (a.isEnd && !a.params.loop || a.animating) {
                                if (i.releaseOnEdges) return !0
                            } else a.slideNext(), a.emit("scroll", t);
                    else if (a.isBeginning && !a.params.loop || a.animating) {
                        if (i.releaseOnEdges) return !0
                    } else a.slidePrev(), a.emit("scroll", t);
                    a.mousewheel.lastScrollTime = (new J.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function() {
                var e = this;
                if (!H.event) return !1;
                if (e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(H.event, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = this;
                if (!H.event) return !1;
                if (!e.mousewheel.enabled) return !1;
                var t = e.$el;
                return "container" !== e.params.mousewheel.eventsTarged && (t = L(e.params.mousewheel.eventsTarged)), t.off(H.event, e.mousewheel.handle), !(e.mousewheel.enabled = !1)
            }
        },
        G = {
            update: function() {
                var e = this,
                    t = e.params.navigation;
                if (!e.params.loop) {
                    var a = e.navigation,
                        i = a.$nextEl,
                        s = a.$prevEl;
                    s && 0 < s.length && (e.isBeginning ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && 0 < i.length && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass))
                }
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, a = this,
                    i = a.params.navigation;
                (i.nextEl || i.prevEl) && (i.nextEl && (e = L(i.nextEl), a.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === a.$el.find(i.nextEl).length && (e = a.$el.find(i.nextEl))), i.prevEl && (t = L(i.prevEl), a.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === a.$el.find(i.prevEl).length && (t = a.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", a.navigation.onNextClick), t && 0 < t.length && t.on("click", a.navigation.onPrevClick), ee.extend(a.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }))
            },
            destroy: function() {
                var e = this,
                    t = e.navigation,
                    a = t.$nextEl,
                    i = t.$prevEl;
                a && a.length && (a.off("click", e.navigation.onNextClick), a.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass))
            }
        },
        B = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    s = e.params.pagination;
                if (s.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var r, a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        n = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > a - 1 - 2 * e.loopedSlides && (r -= a - 2 * e.loopedSlides), n - 1 < r && (r -= n), r < 0 && "bullets" !== e.params.paginationType && (r = n + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var o, l, d, p = e.pagination.bullets;
                        if (s.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), i.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (s.dynamicMainBullets + 4) + "px"), 1 < s.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = r - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, s.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(s.bulletActiveClass + " " + s.bulletActiveClass + "-next " + s.bulletActiveClass + "-next-next " + s.bulletActiveClass + "-prev " + s.bulletActiveClass + "-prev-prev " + s.bulletActiveClass + "-main"), 1 < i.length) p.each(function(e, t) {
                            var a = L(t),
                                i = a.index();
                            i === r && a.addClass(s.bulletActiveClass), s.dynamicBullets && (o <= i && i <= l && a.addClass(s.bulletActiveClass + "-main"), i === o && a.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), i === l && a.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next"))
                        });
                        else if (p.eq(r).addClass(s.bulletActiveClass), s.dynamicBullets) {
                            for (var c = p.eq(o), u = p.eq(l), h = o; h <= l; h += 1) p.eq(h).addClass(s.bulletActiveClass + "-main");
                            c.prev().addClass(s.bulletActiveClass + "-prev").prev().addClass(s.bulletActiveClass + "-prev-prev"), u.next().addClass(s.bulletActiveClass + "-next").next().addClass(s.bulletActiveClass + "-next-next")
                        }
                        if (s.dynamicBullets) {
                            var v = Math.min(p.length, s.dynamicMainBullets + 4),
                                f = (e.pagination.bulletSize * v - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize,
                                m = t ? "right" : "left";
                            p.css(e.isHorizontal() ? m : "top", f + "px")
                        }
                    }
                    if ("fraction" === s.type && (i.find("." + s.currentClass).text(s.formatFractionCurrent(r + 1)), i.find("." + s.totalClass).text(s.formatFractionTotal(n))), "progressbar" === s.type) {
                        var g;
                        g = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                        var b = (r + 1) / n,
                            w = 1,
                            y = 1;
                        "horizontal" === g ? w = b : y = b, i.find("." + s.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + w + ") scaleY(" + y + ")").transition(e.params.speed)
                    }
                    "custom" === s.type && s.renderCustom ? (i.html(s.renderCustom(e, r + 1, n)), e.emit("paginationRender", e, i[0])) : e.emit("paginationUpdate", e, i[0]), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                        i = e.pagination.$el,
                        s = "";
                    if ("bullets" === t.type) {
                        for (var r = e.params.loop ? Math.ceil((a - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length, n = 0; n < r; n += 1) t.renderBullet ? s += t.renderBullet.call(e, n, t.bulletClass) : s += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(s), e.pagination.bullets = i.find("." + t.bulletClass)
                    }
                    "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var a = this,
                    e = a.params.pagination;
                if (e.el) {
                    var t = L(e.el);
                    0 !== t.length && (a.params.uniqueNavElements && "string" == typeof e.el && 1 < t.length && 1 === a.$el.find(e.el).length && (t = a.$el.find(e.el)), "bullets" === e.type && e.clickable && t.addClass(e.clickableClass), t.addClass(e.modifierClass + e.type), "bullets" === e.type && e.dynamicBullets && (t.addClass("" + e.modifierClass + e.type + "-dynamic"), a.pagination.dynamicBulletIndex = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && t.addClass(e.progressbarOppositeClass), e.clickable && t.on("click", "." + e.bulletClass, function(e) {
                        e.preventDefault();
                        var t = L(this).index() * a.params.slidesPerGroup;
                        a.params.loop && (t += a.loopedSlides), a.slideTo(t)
                    }), ee.extend(a.pagination, {
                        $el: t,
                        el: t[0]
                    }))
                }
            },
            destroy: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var a = e.pagination.$el;
                    a.removeClass(t.hiddenClass), a.removeClass(t.modifierClass + t.type), e.pagination.bullets && e.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && a.off("click", "." + t.bulletClass)
                }
            }
        },
        X = {
            setTranslate: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.rtlTranslate,
                        i = e.progress,
                        s = t.dragSize,
                        r = t.trackSize,
                        n = t.$dragEl,
                        o = t.$el,
                        l = e.params.scrollbar,
                        d = s,
                        p = (r - s) * i;
                    a ? 0 < (p = -p) ? (d = s - p, p = 0) : r < -p + s && (d = r + p) : p < 0 ? (d = s + p, p = 0) : r < p + s && (d = r - p), e.isHorizontal() ? (te.transforms3d ? n.transform("translate3d(" + p + "px, 0, 0)") : n.transform("translateX(" + p + "px)"), n[0].style.width = d + "px") : (te.transforms3d ? n.transform("translate3d(0px, " + p + "px, 0)") : n.transform("translateY(" + p + "px)"), n[0].style.height = d + "px"), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function() {
                        o[0].style.opacity = 0, o.transition(400)
                    }, 1e3))
                }
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e = this;
                if (e.params.scrollbar.el && e.scrollbar.el) {
                    var t = e.scrollbar,
                        a = t.$dragEl,
                        i = t.$el;
                    a[0].style.width = "", a[0].style.height = "";
                    var s, r = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
                        n = e.size / e.virtualSize,
                        o = n * (r / e.size);
                    s = "auto" === e.params.scrollbar.dragSize ? r * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? a[0].style.width = s + "px" : a[0].style.height = s + "px", i[0].style.display = 1 <= n ? "none" : "", e.params.scrollbarHide && (i[0].style.opacity = 0), ee.extend(t, {
                        trackSize: r,
                        divider: n,
                        moveDivider: o,
                        dragSize: s
                    }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass)
                }
            },
            setDragPosition: function(e) {
                var t, a = this,
                    i = a.scrollbar,
                    s = a.rtlTranslate,
                    r = i.$el,
                    n = i.dragSize,
                    o = i.trackSize;
                t = ((a.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - r.offset()[a.isHorizontal() ? "left" : "top"] - n / 2) / (o - n), t = Math.max(Math.min(t, 1), 0), s && (t = 1 - t);
                var l = a.minTranslate() + (a.maxTranslate() - a.minTranslate()) * t;
                a.updateProgress(l), a.setTranslate(l), a.updateActiveIndex(), a.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar,
                    s = t.$wrapperEl,
                    r = i.$el,
                    n = i.$dragEl;
                t.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), s.transition(100), n.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), r.transition(0), a.hide && r.css("opacity", 1), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    a = this.$wrapperEl,
                    i = t.$el,
                    s = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), a.transition(0), i.transition(0), s.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    a = t.params.scrollbar,
                    i = t.scrollbar.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, a.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = ee.nextTick(function() {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), a.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.addEventListener(a.start, e.scrollbar.onDragStart, n), r.addEventListener(a.move, e.scrollbar.onDragMove, n), r.addEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(i.start, e.scrollbar.onDragStart, n), f.addEventListener(i.move, e.scrollbar.onDragMove, n), f.addEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            disableDraggable: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.touchEventsTouch,
                        i = e.touchEventsDesktop,
                        s = e.params,
                        r = t.$el[0],
                        n = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !1,
                            capture: !1
                        },
                        o = !(!te.passiveListener || !s.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    te.touch ? (r.removeEventListener(a.start, e.scrollbar.onDragStart, n), r.removeEventListener(a.move, e.scrollbar.onDragMove, n), r.removeEventListener(a.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(i.start, e.scrollbar.onDragStart, n), f.removeEventListener(i.move, e.scrollbar.onDragMove, n), f.removeEventListener(i.end, e.scrollbar.onDragEnd, o))
                }
            },
            init: function() {
                var e = this;
                if (e.params.scrollbar.el) {
                    var t = e.scrollbar,
                        a = e.$el,
                        i = e.params.scrollbar,
                        s = L(i.el);
                    e.params.uniqueNavElements && "string" == typeof i.el && 1 < s.length && 1 === a.find(i.el).length && (s = a.find(i.el));
                    var r = s.find("." + e.params.scrollbar.dragClass);
                    0 === r.length && (r = L('<div class="' + e.params.scrollbar.dragClass + '"></div>'), s.append(r)), ee.extend(t, {
                        $el: s,
                        el: s[0],
                        $dragEl: r,
                        dragEl: r[0]
                    }), i.draggable && t.enableDraggable()
                }
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        Y = {
            setTransform: function(e, t) {
                var a = this.rtl,
                    i = L(e),
                    s = a ? -1 : 1,
                    r = i.attr("data-swiper-parallax") || "0",
                    n = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    l = i.attr("data-swiper-parallax-scale"),
                    d = i.attr("data-swiper-parallax-opacity");
                if (n || o ? (n = n || "0", o = o || "0") : this.isHorizontal() ? (n = r, o = "0") : (o = r, n = "0"), n = 0 <= n.indexOf("%") ? parseInt(n, 10) * t * s + "%" : n * t * s + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != d) {
                    var p = d - (d - 1) * (1 - Math.abs(t));
                    i[0].style.opacity = p
                }
                if (null == l) i.transform("translate3d(" + n + ", " + o + ", 0px)");
                else {
                    var c = l - (l - 1) * (1 - Math.abs(t));
                    i.transform("translate3d(" + n + ", " + o + ", 0px) scale(" + c + ")")
                }
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    s = i.progress,
                    r = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    i.parallax.setTransform(t, s)
                }), t.each(function(e, t) {
                    var a = t.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (a += Math.ceil(e / 2) - s * (r.length - 1)), a = Math.min(Math.max(a, -1), 1), L(t).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                        i.parallax.setTransform(t, a)
                    })
                })
            },
            setTransition: function(s) {
                void 0 === s && (s = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(e, t) {
                    var a = L(t),
                        i = parseInt(a.attr("data-swiper-parallax-duration"), 10) || s;
                    0 === s && (i = 0), a.transition(i)
                })
            }
        },
        V = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    a = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(s - a, 2))
            },
            onGestureStart: function(e) {
                var t = this,
                    a = t.params.zoom,
                    i = t.zoom,
                    s = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !te.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, s.scaleStart = V.getDistanceBetweenTouches(e)
                }
                s.$slideEl && s.$slideEl.length || (s.$slideEl = L(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + a.containerClass), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    a.fakeGestureMoved = !0, i.scaleMove = V.getDistanceBetweenTouches(e)
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = te.gestures ? e.scale * a.currentScale : i.scaleMove / i.scaleStart * a.currentScale, a.scale > i.maxRatio && (a.scale = i.maxRatio - 1 + Math.pow(a.scale - i.maxRatio + 1, .5)), a.scale < t.minRatio && (a.scale = t.minRatio + 1 - Math.pow(t.minRatio - a.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
            },
            onGestureEnd: function(e) {
                var t = this.params.zoom,
                    a = this.zoom,
                    i = a.gesture;
                if (!te.gestures) {
                    if (!a.fakeGestureTouched || !a.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !m.android) return;
                    a.fakeGestureTouched = !1, a.fakeGestureMoved = !1
                }
                i.$imageEl && 0 !== i.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (i.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.zoom,
                    a = t.gesture,
                    i = t.image;
                a.$imageEl && 0 !== a.$imageEl.length && (i.isTouched || (m.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            },
            onTouchMove: function(e) {
                var t = this,
                    a = t.zoom,
                    i = a.gesture,
                    s = a.image,
                    r = a.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (t.allowClick = !1, s.isTouched && i.$slideEl)) {
                    s.isMoved || (s.width = i.$imageEl[0].offsetWidth, s.height = i.$imageEl[0].offsetHeight, s.startX = ee.getTranslate(i.$imageWrapEl[0], "x") || 0, s.startY = ee.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
                    var n = s.width * a.scale,
                        o = s.height * a.scale;
                    if (!(n < i.slideWidth && o < i.slideHeight)) {
                        if (s.minX = Math.min(i.slideWidth / 2 - n / 2, 0), s.maxX = -s.minX, s.minY = Math.min(i.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !a.isScaling) {
                            if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                            if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    a = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!a.isTouched || !a.isMoved) return a.isTouched = !1, void(a.isMoved = !1);
                    a.isTouched = !1, a.isMoved = !1;
                    var s = 300,
                        r = 300,
                        n = i.x * s,
                        o = a.currentX + n,
                        l = i.y * r,
                        d = a.currentY + l;
                    0 !== i.x && (s = Math.abs((o - a.currentX) / i.x)), 0 !== i.y && (r = Math.abs((d - a.currentY) / i.y));
                    var p = Math.max(s, r);
                    a.currentX = o, a.currentY = d;
                    var c = a.width * e.scale,
                        u = a.height * e.scale;
                    a.minX = Math.min(t.slideWidth / 2 - c / 2, 0), a.maxX = -a.minX, a.minY = Math.min(t.slideHeight / 2 - u / 2, 0), a.maxY = -a.minY, a.currentX = Math.max(Math.min(a.currentX, a.maxX), a.minX), a.currentY = Math.max(Math.min(a.currentY, a.maxY), a.minY), t.$imageWrapEl.transition(p).transform("translate3d(" + a.currentX + "px, " + a.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, a, i, s, r, n, o, l, d, p, c, u, h, v, f, m, g = this,
                    b = g.zoom,
                    w = g.params.zoom,
                    y = b.gesture,
                    x = b.image;
                (y.$slideEl || (y.$slideEl = g.clickedSlide ? L(g.clickedSlide) : g.slides.eq(g.activeIndex), y.$imageEl = y.$slideEl.find("img, svg, canvas"), y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass)), y.$imageEl && 0 !== y.$imageEl.length) && (y.$slideEl.addClass("" + w.zoomedSlideClass), void 0 === x.touchesStart.x && e ? (t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (t = x.touchesStart.x, a = x.touchesStart.y), b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio, e ? (f = y.$slideEl[0].offsetWidth, m = y.$slideEl[0].offsetHeight, i = y.$slideEl.offset().left + f / 2 - t, s = y.$slideEl.offset().top + m / 2 - a, o = y.$imageEl[0].offsetWidth, l = y.$imageEl[0].offsetHeight, d = o * b.scale, p = l * b.scale, h = -(c = Math.min(f / 2 - d / 2, 0)), v = -(u = Math.min(m / 2 - p / 2, 0)), (r = i * b.scale) < c && (r = c), h < r && (r = h), (n = s * b.scale) < u && (n = u), v < n && (n = v)) : n = r = 0, y.$imageWrapEl.transition(300).transform("translate3d(" + r + "px, " + n + "px,0)"), y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"))
            },
            out: function() {
                var e = this,
                    t = e.zoom,
                    a = e.params.zoom,
                    i = t.gesture;
                i.$slideEl || (i.$slideEl = e.clickedSlide ? L(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent("." + a.containerClass)), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("" + a.zoomedSlideClass), i.$slideEl = void 0)
            },
            enable: function() {
                var e = this,
                    t = e.zoom;
                if (!t.enabled) {
                    t.enabled = !0;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.on(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            },
            disable: function() {
                var e = this,
                    t = e.zoom;
                if (t.enabled) {
                    e.zoom.enabled = !1;
                    var a = !("touchstart" !== e.touchEvents.start || !te.passiveListener || !e.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    te.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, a)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, a), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, a), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, a)), e.$wrapperEl.off(e.touchEvents.move, "." + e.params.zoom.containerClass, t.onTouchMove)
                }
            }
        },
        F = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d = this,
                    p = d.params.lazy;
                if (void 0 !== e && 0 !== d.slides.length) {
                    var c = d.virtual && d.params.virtual.enabled ? d.$wrapperEl.children("." + d.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : d.slides.eq(e),
                        t = c.find("." + p.elementClass + ":not(." + p.loadedClass + "):not(." + p.loadingClass + ")");
                    !c.hasClass(p.elementClass) || c.hasClass(p.loadedClass) || c.hasClass(p.loadingClass) || (t = t.add(c[0])), 0 !== t.length && t.each(function(e, t) {
                        var i = L(t);
                        i.addClass(p.loadingClass);
                        var s = i.attr("data-background"),
                            r = i.attr("data-src"),
                            n = i.attr("data-srcset"),
                            o = i.attr("data-sizes");
                        d.loadImage(i[0], r || s, n, o, !1, function() {
                            if (null != d && d && (!d || d.params) && !d.destroyed) {
                                if (s ? (i.css("background-image", 'url("' + s + '")'), i.removeAttr("data-background")) : (n && (i.attr("srcset", n), i.removeAttr("data-srcset")), o && (i.attr("sizes", o), i.removeAttr("data-sizes")), r && (i.attr("src", r), i.removeAttr("data-src"))), i.addClass(p.loadedClass).removeClass(p.loadingClass), c.find("." + p.preloaderClass).remove(), d.params.loop && l) {
                                    var e = c.attr("data-swiper-slide-index");
                                    if (c.hasClass(d.params.slideDuplicateClass)) {
                                        var t = d.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + d.params.slideDuplicateClass + ")");
                                        d.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = d.$wrapperEl.children("." + d.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        d.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                d.emit("lazyImageReady", c[0], i[0])
                            }
                        }), d.emit("lazyImageLoad", c[0], i[0])
                    })
                }
            },
            load: function() {
                var i = this,
                    t = i.$wrapperEl,
                    a = i.params,
                    s = i.slides,
                    e = i.activeIndex,
                    r = i.virtual && a.virtual.enabled,
                    n = a.lazy,
                    o = a.slidesPerView;

                function l(e) {
                    if (r) {
                        if (t.children("." + a.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (s[e]) return !0;
                    return !1
                }

                function d(e) {
                    return r ? L(e).attr("data-swiper-slide-index") : L(e).index()
                }
                if ("auto" === o && (o = 0), i.lazy.initialImageLoaded || (i.lazy.initialImageLoaded = !0), i.params.watchSlidesVisibility) t.children("." + a.slideVisibleClass).each(function(e, t) {
                    var a = r ? L(t).attr("data-swiper-slide-index") : L(t).index();
                    i.lazy.loadInSlide(a)
                });
                else if (1 < o)
                    for (var p = e; p < e + o; p += 1) l(p) && i.lazy.loadInSlide(p);
                else i.lazy.loadInSlide(e);
                if (n.loadPrevNext)
                    if (1 < o || n.loadPrevNextAmount && 1 < n.loadPrevNextAmount) {
                        for (var c = n.loadPrevNextAmount, u = o, h = Math.min(e + u + Math.max(c, u), s.length), v = Math.max(e - Math.max(u, c), 0), f = e + o; f < h; f += 1) l(f) && i.lazy.loadInSlide(f);
                        for (var m = v; m < e; m += 1) l(m) && i.lazy.loadInSlide(m)
                    } else {
                        var g = t.children("." + a.slideNextClass);
                        0 < g.length && i.lazy.loadInSlide(d(g));
                        var b = t.children("." + a.slidePrevClass);
                        0 < b.length && i.lazy.loadInSlide(d(b))
                    }
            }
        },
        R = {
            LinearSpline: function(e, t) {
                var a, i, s, r, n, o = function(e, t) {
                    for (i = -1, a = e.length; 1 < a - i;) e[s = a + i >> 1] <= t ? i = s : a = s;
                    return a
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (n = o(this.x, e), r = n - 1, (e - this.x[r]) * (this.y[n] - this.y[r]) / (this.x[n] - this.x[r]) + this.y[r]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                var t = this;
                t.controller.spline || (t.controller.spline = t.params.loop ? new R.LinearSpline(t.slidesGrid, e.slidesGrid) : new R.LinearSpline(t.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var a, i, s = this,
                    r = s.controller.control;

                function n(e) {
                    var t = s.rtlTranslate ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), i = -s.controller.spline.interpolate(-t)), i && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), i = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(r))
                    for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof S && n(r[o]);
                else r instanceof S && t !== r && n(r)
            },
            setTransition: function(t, e) {
                var a, i = this,
                    s = i.controller.control;

                function r(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && ee.nextTick(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        s && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(s))
                    for (a = 0; a < s.length; a += 1) s[a] !== e && s[a] instanceof S && r(s[a]);
                else s instanceof S && e !== s && r(s)
            }
        },
        q = {
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterKey: function(e) {
                var t = this,
                    a = t.params.a11y;
                if (13 === e.keyCode) {
                    var i = L(e.target);
                    t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(a.lastSlideMessage) : t.a11y.notify(a.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(a.firstSlideMessage) : t.a11y.notify(a.prevSlideMessage)), t.pagination && i.is("." + t.params.pagination.bulletClass) && i[0].click()
                }
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e = this;
                if (!e.params.loop) {
                    var t = e.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    i && 0 < i.length && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), a && 0 < a.length && (e.isEnd ? e.a11y.disableEl(a) : e.a11y.enableEl(a))
                }
            },
            updatePagination: function() {
                var i = this,
                    s = i.params.a11y;
                i.pagination && i.params.pagination.clickable && i.pagination.bullets && i.pagination.bullets.length && i.pagination.bullets.each(function(e, t) {
                    var a = L(t);
                    i.a11y.makeElFocusable(a), i.a11y.addElRole(a, "button"), i.a11y.addElLabel(a, s.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                })
            },
            init: function() {
                var e = this;
                e.$el.append(e.a11y.liveRegion);
                var t, a, i = e.params.a11y;
                e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (a = e.navigation.$prevEl), t && (e.a11y.makeElFocusable(t), e.a11y.addElRole(t, "button"), e.a11y.addElLabel(t, i.nextSlideMessage), t.on("keydown", e.a11y.onEnterKey)), a && (e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, i.prevSlideMessage), a.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", "." + e.params.pagination.bulletClass, e.a11y.onEnterKey)
            },
            destroy: function() {
                var e, t, a = this;
                a.a11y.liveRegion && 0 < a.a11y.liveRegion.length && a.a11y.liveRegion.remove(), a.navigation && a.navigation.$nextEl && (e = a.navigation.$nextEl), a.navigation && a.navigation.$prevEl && (t = a.navigation.$prevEl), e && e.off("keydown", a.a11y.onEnterKey), t && t.off("keydown", a.a11y.onEnterKey), a.pagination && a.params.pagination.clickable && a.pagination.bullets && a.pagination.bullets.length && a.pagination.$el.off("keydown", "." + a.params.pagination.bulletClass, a.a11y.onEnterKey)
            }
        },
        W = {
            init: function() {
                var e = this;
                if (e.params.history) {
                    if (!J.history || !J.history.pushState) return e.params.history.enabled = !1, void(e.params.hashNavigation.enabled = !0);
                    var t = e.history;
                    t.initialized = !0, t.paths = W.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || J.addEventListener("popstate", e.history.setHistoryPopState))
                }
            },
            destroy: function() {
                this.params.history.replaceState || J.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = W.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function() {
                var e = J.location.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    t = e.length;
                return {
                    key: e[t - 2],
                    value: e[t - 1]
                }
            },
            setHistory: function(e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var a = this.slides.eq(t),
                        i = W.slugify(a.attr("data-history"));
                    J.location.pathname.includes(e) || (i = e + "/" + i);
                    var s = J.history.state;
                    s && s.value === i || (this.params.history.replaceState ? J.history.propertyIsEnumerable({
                        value: i
                    }, null, i) : J.history.propertyIsEnumerable({
                        value: i
                    }, null, i))
                }
            },
            slugify: function(e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, a) {
                var i = this;
                if (t)
                    for (var s = 0, r = i.slides.length; s < r; s += 1) {
                        var n = i.slides.eq(s);
                        if (W.slugify(n.attr("data-history")) === t && !n.hasClass(i.params.slideDuplicateClass)) {
                            var o = n.index();
                            i.slideTo(o, e, a)
                        }
                    } else i.slideTo(0, e, a)
            }
        },
        j = {
            onHashCange: function() {
                var e = this,
                    t = f.location.hash.replace("#", "");
                if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
                    var a = e.$wrapperEl.children("." + e.params.slideClass + '[data-hash="' + t + '"]').index();
                    if (void 0 === a) return;
                    e.slideTo(a)
                }
            },
            setHash: function() {
                var e = this;
                if (e.hashNavigation.initialized && e.params.hashNavigation.enabled)
                    if (e.params.hashNavigation.replaceState && J.history && J.history.replaceState) J.history.propertyIsEnumerable(null, null, "#" + e.slides.eq(e.activeIndex).attr("data-hash") || "");
                    else {
                        var t = e.slides.eq(e.activeIndex),
                            a = t.attr("data-hash") || t.attr("data-history");
                        f.location.hash = a || ""
                    }
            },
            init: function() {
                var e = this;
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var t = f.location.hash.replace("#", "");
                    if (t)
                        for (var a = 0, i = e.slides.length; a < i; a += 1) {
                            var s = e.slides.eq(a);
                            if ((s.attr("data-hash") || s.attr("data-history")) === t && !s.hasClass(e.params.slideDuplicateClass)) {
                                var r = s.index();
                                e.slideTo(r, 0, e.params.runCallbacksOnInit, !0)
                            }
                        }
                    e.params.hashNavigation.watchState && L(J).on("hashchange", e.hashNavigation.onHashCange)
                }
            },
            destroy: function() {
                this.params.hashNavigation.watchState && L(J).off("hashchange", this.hashNavigation.onHashCange)
            }
        },
        U = {
            run: function() {
                var e = this,
                    t = e.slides.eq(e.activeIndex),
                    a = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (a = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = ee.nextTick(function() {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, a)
            },
            start: function() {
                var e = this;
                return void 0 === e.autoplay.timeout && (!e.autoplay.running && (e.autoplay.running = !0, e.emit("autoplayStart"), e.autoplay.run(), !0))
            },
            stop: function() {
                var e = this;
                return !!e.autoplay.running && (void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        },
        K = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = 0; a < t.length; a += 1) {
                    var i = e.slides.eq(a),
                        s = -i[0].swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    var r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    var n = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({
                        opacity: n
                    }).transform("translate3d(" + s + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.$wrapperEl;
                if (t.transition(e), a.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    t.transitionEnd(function() {
                        if (!s && a && !a.destroyed) {
                            s = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) i.trigger(e[t])
                        }
                    })
                }
            }
        },
        _ = {
            setTranslate: function() {
                var e, t = this,
                    a = t.$el,
                    i = t.$wrapperEl,
                    s = t.slides,
                    r = t.width,
                    n = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.params.cubeEffect,
                    p = t.isHorizontal(),
                    c = t.virtual && t.params.virtual.enabled,
                    u = 0;
                d.shadow && (p ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: r + "px"
                })) : 0 === (e = a.find(".swiper-cube-shadow")).length && (e = L('<div class="swiper-cube-shadow"></div>'), a.append(e)));
                for (var h = 0; h < s.length; h += 1) {
                    var v = s.eq(h),
                        f = h;
                    c && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var m = 90 * f,
                        g = Math.floor(m / 360);
                    o && (m = -m, g = Math.floor(-m / 360));
                    var b = Math.max(Math.min(v[0].progress, 1), -1),
                        w = 0,
                        y = 0,
                        x = 0;
                    f % 4 == 0 ? (w = 4 * -g * l, x = 0) : (f - 1) % 4 == 0 ? (w = 0, x = 4 * -g * l) : (f - 2) % 4 == 0 ? (w = l + 4 * g * l, x = l) : (f - 3) % 4 == 0 && (w = -l, x = 3 * l + 4 * l * g), o && (w = -w), p || (y = w, w = 0);
                    var T = "rotateX(" + (p ? 0 : -m) + "deg) rotateY(" + (p ? m : 0) + "deg) translate3d(" + w + "px, " + y + "px, " + x + "px)";
                    if (b <= 1 && -1 < b && (u = 90 * f + 90 * b, o && (u = 90 * -f - 90 * b)), v.transform(T), d.slideShadows) {
                        var E = p ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = p ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (p ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (p ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = Math.max(-b, 0)), S.length && (S[0].style.opacity = Math.max(b, 0))
                    }
                }
                if (i.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), d.shadow)
                    if (p) e.transform("translate3d(0px, " + (r / 2 + d.shadowOffset) + "px, " + -r / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + d.shadowScale + ")");
                    else {
                        var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                            M = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                            k = d.shadowScale,
                            P = d.shadowScale / M,
                            z = d.shadowOffset;
                        e.transform("scale3d(" + k + ", 1, " + P + ") translate3d(0px, " + (n / 2 + z) + "px, " + -n / 2 / P + "px) rotateX(-90deg)")
                    }
                var $ = I.isSafari || I.isUiWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + $ + "px) rotateX(" + (t.isHorizontal() ? 0 : u) + "deg) rotateY(" + (t.isHorizontal() ? -u : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        Z = {
            setTranslate: function() {
                for (var e = this, t = e.slides, a = e.rtlTranslate, i = 0; i < t.length; i += 1) {
                    var s = t.eq(i),
                        r = s[0].progress;
                    e.params.flipEffect.limitRotation && (r = Math.max(Math.min(s[0].progress, 1), -1));
                    var n = -180 * r,
                        o = 0,
                        l = -s[0].swiperSlideOffset,
                        d = 0;
                    if (e.isHorizontal() ? a && (n = -n) : (d = l, o = -n, n = l = 0), s[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, e.params.flipEffect.slideShadows) {
                        var p = e.isHorizontal() ? s.find(".swiper-slide-shadow-left") : s.find(".swiper-slide-shadow-top"),
                            c = e.isHorizontal() ? s.find(".swiper-slide-shadow-right") : s.find(".swiper-slide-shadow-bottom");
                        0 === p.length && (p = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), s.append(p)), 0 === c.length && (c = L('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), s.append(c)), p.length && (p[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    s.transform("translate3d(" + l + "px, " + d + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                }
            },
            setTransition: function(e) {
                var a = this,
                    t = a.slides,
                    i = a.activeIndex,
                    s = a.$wrapperEl;
                if (t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), a.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    t.eq(i).transitionEnd(function() {
                        if (!r && a && !a.destroyed) {
                            r = !0, a.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) s.trigger(e[t])
                        }
                    })
                }
            }
        },
        Q = {
            setTranslate: function() {
                for (var e = this, t = e.width, a = e.height, i = e.slides, s = e.$wrapperEl, r = e.slidesSizesGrid, n = e.params.coverflowEffect, o = e.isHorizontal(), l = e.translate, d = o ? t / 2 - l : a / 2 - l, p = o ? n.rotate : -n.rotate, c = n.depth, u = 0, h = i.length; u < h; u += 1) {
                    var v = i.eq(u),
                        f = r[u],
                        m = (d - v[0].swiperSlideOffset - f / 2) / f * n.modifier,
                        g = o ? p * m : 0,
                        b = o ? 0 : p * m,
                        w = -c * Math.abs(m),
                        y = o ? 0 : n.stretch * m,
                        x = o ? n.stretch * m : 0;
                    Math.abs(x) < .001 && (x = 0), Math.abs(y) < .001 && (y = 0), Math.abs(w) < .001 && (w = 0), Math.abs(g) < .001 && (g = 0), Math.abs(b) < .001 && (b = 0);
                    var T = "translate3d(" + x + "px," + y + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + g + "deg)";
                    if (v.transform(T), v[0].style.zIndex = 1 - Math.abs(Math.round(m)), n.slideShadows) {
                        var E = o ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
                            S = o ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
                        0 === E.length && (E = L('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), v.append(E)), 0 === S.length && (S = L('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), v.append(S)), E.length && (E[0].style.opacity = 0 < m ? m : 0), S.length && (S[0].style.opacity = 0 < -m ? -m : 0)
                    }
                }(te.pointerEvents || te.prefixedPointerEvents) && (s[0].style.perspectiveOrigin = d + "px 50%")
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        ae = {
            init: function() {
                var e = this,
                    t = e.params.thumbs,
                    a = e.constructor;
                t.swiper instanceof a ? (e.thumbs.swiper = t.swiper, ee.extend(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), ee.extend(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : ee.isObject(t.swiper) && (e.thumbs.swiper = new a(ee.extend({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick)
            },
            onThumbClick: function() {
                var e = this,
                    t = e.thumbs.swiper;
                if (t) {
                    var a = t.clickedIndex,
                        i = t.clickedSlide;
                    if (!(i && L(i).hasClass(e.params.thumbs.slideThumbActiveClass) || null == a)) {
                        var s;
                        if (s = t.params.loop ? parseInt(L(t.clickedSlide).attr("data-swiper-slide-index"), 10) : a, e.params.loop) {
                            var r = e.activeIndex;
                            e.slides.eq(r).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, r = e.activeIndex);
                            var n = e.slides.eq(r).prevAll('[data-swiper-slide-index="' + s + '"]').eq(0).index(),
                                o = e.slides.eq(r).nextAll('[data-swiper-slide-index="' + s + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r < r - n ? o : n
                        }
                        e.slideTo(s)
                    }
                }
            },
            update: function(e) {
                var t = this,
                    a = t.thumbs.swiper;
                if (a) {
                    var i = "auto" === a.params.slidesPerView ? a.slidesPerViewDynamic() : a.params.slidesPerView;
                    if (t.realIndex !== a.realIndex) {
                        var s, r = a.activeIndex;
                        if (a.params.loop) {
                            a.slides.eq(r).hasClass(a.params.slideDuplicateClass) && (a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft, r = a.activeIndex);
                            var n = a.slides.eq(r).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(),
                                o = a.slides.eq(r).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index();
                            s = void 0 === n ? o : void 0 === o ? n : o - r == r - n ? r : o - r < r - n ? o : n
                        } else s = t.realIndex;
                        a.visibleSlidesIndexes.indexOf(s) < 0 && (a.params.centeredSlides ? s = r < s ? s - Math.floor(i / 2) + 1 : s + Math.floor(i / 2) - 1 : r < s && (s = s - i + 1), a.slideTo(s, e ? 0 : void 0))
                    }
                    var l = 1,
                        d = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (l = t.params.slidesPerView), a.slides.removeClass(d), a.params.loop)
                        for (var p = 0; p < l; p += 1) a.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + p) + '"]').addClass(d);
                    else
                        for (var c = 0; c < l; c += 1) a.slides.eq(t.realIndex + c).addClass(d)
                }
            }
        },
        ie = [C, M, k, P, $, O, N, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    mousewheel: {
                        enabled: !1,
                        enable: H.enable.bind(e),
                        disable: H.disable.bind(e),
                        handle: H.handle.bind(e),
                        handleMouseEnter: H.handleMouseEnter.bind(e),
                        handleMouseLeave: H.handleMouseLeave.bind(e),
                        lastScrollTime: ee.now()
                    }
                })
            },
            on: {
                init: function() {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                },
                destroy: function() {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    navigation: {
                        init: G.init.bind(e),
                        update: G.update.bind(e),
                        destroy: G.destroy.bind(e),
                        onNextClick: G.onNextClick.bind(e),
                        onPrevClick: G.onPrevClick.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.navigation.init(), this.navigation.update()
                },
                toEdge: function() {
                    this.navigation.update()
                },
                fromEdge: function() {
                    this.navigation.update()
                },
                destroy: function() {
                    this.navigation.destroy()
                },
                click: function(e) {
                    var t = this.navigation,
                        a = t.$nextEl,
                        i = t.$prevEl;
                    !this.params.navigation.hideOnClick || L(e.target).is(i) || L(e.target).is(a) || (a && a.toggleClass(this.params.navigation.hiddenClass), i && i.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    pagination: {
                        init: B.init.bind(e),
                        render: B.render.bind(e),
                        update: B.update.bind(e),
                        destroy: B.destroy.bind(e),
                        dynamicBulletIndex: 0
                    }
                })
            },
            on: {
                init: function() {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                },
                activeIndexChange: function() {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                },
                snapIndexChange: function() {
                    this.params.loop || this.pagination.update()
                },
                slidesLengthChange: function() {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                },
                snapGridLengthChange: function() {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                },
                destroy: function() {
                    this.pagination.destroy()
                },
                click: function(e) {
                    var t = this;
                    t.params.pagination.el && t.params.pagination.hideOnClick && 0 < t.pagination.$el.length && !L(e.target).hasClass(t.params.pagination.bulletClass) && t.pagination.$el.toggleClass(t.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    scrollbar: {
                        init: X.init.bind(e),
                        destroy: X.destroy.bind(e),
                        updateSize: X.updateSize.bind(e),
                        setTranslate: X.setTranslate.bind(e),
                        setTransition: X.setTransition.bind(e),
                        enableDraggable: X.enableDraggable.bind(e),
                        disableDraggable: X.disableDraggable.bind(e),
                        setDragPosition: X.setDragPosition.bind(e),
                        onDragStart: X.onDragStart.bind(e),
                        onDragMove: X.onDragMove.bind(e),
                        onDragEnd: X.onDragEnd.bind(e),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function() {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                },
                update: function() {
                    this.scrollbar.updateSize()
                },
                resize: function() {
                    this.scrollbar.updateSize()
                },
                observerUpdate: function() {
                    this.scrollbar.updateSize()
                },
                setTranslate: function() {
                    this.scrollbar.setTranslate()
                },
                setTransition: function(e) {
                    this.scrollbar.setTransition(e)
                },
                destroy: function() {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    parallax: {
                        setTransform: Y.setTransform.bind(this),
                        setTranslate: Y.setTranslate.bind(this),
                        setTransition: Y.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                },
                init: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTranslate: function() {
                    this.params.parallax && this.parallax.setTranslate()
                },
                setTransition: function(e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this,
                    t = {
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function(e) {
                    t[e] = V[e].bind(i)
                }), ee.extend(i, {
                    zoom: t
                });
                var s = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return s
                    },
                    set: function(e) {
                        if (s !== e) {
                            var t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0,
                                a = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0;
                            i.emit("zoomChange", e, t, a)
                        }
                        s = e
                    }
                })
            },
            on: {
                init: function() {
                    this.params.zoom.enabled && this.zoom.enable()
                },
                destroy: function() {
                    this.zoom.disable()
                },
                touchStart: function(e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                },
                touchEnd: function(e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                },
                doubleTap: function(e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                },
                transitionEnd: function() {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                ee.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: F.load.bind(this),
                        loadInSlide: F.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                },
                init: function() {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                },
                scroll: function() {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                },
                resize: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                scrollbarDragMove: function() {
                    this.params.lazy.enabled && this.lazy.load()
                },
                transitionStart: function() {
                    var e = this;
                    e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load()
                },
                transitionEnd: function() {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    controller: {
                        control: e.params.controller.control,
                        getInterpolateFunction: R.getInterpolateFunction.bind(e),
                        setTranslate: R.setTranslate.bind(e),
                        setTransition: R.setTransition.bind(e)
                    }
                })
            },
            on: {
                update: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                resize: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                observerUpdate: function() {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                },
                setTranslate: function(e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                },
                setTransition: function(e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    a11y: {
                        liveRegion: L('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    }
                }), Object.keys(q).forEach(function(e) {
                    t.a11y[e] = q[e].bind(t)
                })
            },
            on: {
                init: function() {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                },
                toEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                fromEdge: function() {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                },
                paginationUpdate: function() {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                },
                destroy: function() {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    history: {
                        init: W.init.bind(e),
                        setHistory: W.setHistory.bind(e),
                        setHistoryPopState: W.setHistoryPopState.bind(e),
                        scrollToSlide: W.scrollToSlide.bind(e),
                        destroy: W.destroy.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.history.enabled && this.history.init()
                },
                destroy: function() {
                    this.params.history.enabled && this.history.destroy()
                },
                transitionEnd: function() {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                var e = this;
                ee.extend(e, {
                    hashNavigation: {
                        initialized: !1,
                        init: j.init.bind(e),
                        destroy: j.destroy.bind(e),
                        setHash: j.setHash.bind(e),
                        onHashCange: j.onHashCange.bind(e)
                    }
                })
            },
            on: {
                init: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                },
                destroy: function() {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                },
                transitionEnd: function() {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function() {
                var t = this;
                ee.extend(t, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: U.run.bind(t),
                        start: U.start.bind(t),
                        stop: U.stop.bind(t),
                        pause: U.pause.bind(t),
                        onTransitionEnd: function(e) {
                            t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                        }
                    }
                })
            },
            on: {
                init: function() {
                    this.params.autoplay.enabled && this.autoplay.start()
                },
                beforeTransitionStart: function(e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                },
                sliderFirstMove: function() {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                },
                destroy: function() {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                ee.extend(this, {
                    fadeEffect: {
                        setTranslate: K.setTranslate.bind(this),
                        setTransition: K.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("fade" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "fade");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                ee.extend(this, {
                    cubeEffect: {
                        setTranslate: _.setTranslate.bind(this),
                        setTransition: _.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("cube" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                },
                setTransition: function(e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    flipEffect: {
                        setTranslate: Z.setTranslate.bind(this),
                        setTransition: Z.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    if ("flip" === e.params.effect) {
                        e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d");
                        var t = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        ee.extend(e.params, t), ee.extend(e.originalParams, t)
                    }
                },
                setTranslate: function() {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                },
                setTransition: function(e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                ee.extend(this, {
                    coverflowEffect: {
                        setTranslate: Q.setTranslate.bind(this),
                        setTransition: Q.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this;
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function() {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                },
                setTransition: function(e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                ee.extend(this, {
                    thumbs: {
                        swiper: null,
                        init: ae.init.bind(this),
                        update: ae.update.bind(this),
                        onThumbClick: ae.onThumbClick.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function() {
                    var e = this.params.thumbs;
                    e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0))
                },
                slideChange: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                update: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                resize: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                observerUpdate: function() {
                    this.thumbs.swiper && this.thumbs.update()
                },
                setTransition: function(e) {
                    var t = this.thumbs.swiper;
                    t && t.setTransition(e)
                },
                beforeDestroy: function() {
                    var e = this.thumbs.swiper;
                    e && this.thumbs.swiperCreated && e && e.destroy()
                }
            }
        }];
    return void 0 === S.use && (S.use = S.Class.use, S.installModule = S.Class.installModule), S.use(ie), S
});
/* sourceMappingURL=swiper.min.js.map */


/*** jQuery plugin paroller.js v1.0 * https://github.com/tgomilar/paroller.js * preview: https://tgomilar.github.io/paroller/**/
! function($) {
    "use strict";
    var r = $("[data-paroller-factor]"),
        t = {
            bgVertical: function(r, t) {
                return r.css({
                    "background-position": "center " + -t + "px"
                })
            },
            bgHorizontal: function(r, t) {
                return r.css({
                    "background-position": -t + "px center"
                })
            },
            vertical: function(r, t) {
                return r.css({
                    "-webkit-transform": "translateY(" + t + "px)",
                    "-moz-transform": "translateY(" + t + "px)",
                    transform: "translateY(" + t + "px)"
                })
            },
            horizontal: function(r, t) {
                return r.css({
                    "-webkit-transform": "translateX(" + t + "px)",
                    "-moz-transform": "translateX(" + t + "px)",
                    transform: "translateX(" + t + "px)"
                })
            }
        };
    $.fn.paroller = function(o) {
        var a = $(window).height(),
            n = $(document).height(),
            o = $.extend({
                factor: 0,
                type: "background",
                direction: "vertical"
            }, o);
        r.each(function() {
            var r = $(this),
                e = r.offset().top,
                i = r.outerHeight(),
                c = r.data("paroller-factor"),
                l = r.data("paroller-type"),
                s = r.data("paroller-direction"),
                u = c ? c : o.factor,
                f = l ? l : o.type,
                d = s ? s : o.direction,
                p = Math.round(e * u),
                h = Math.round((e - a / 2 + i) * u);
            "background" == f ? "vertical" == d ? t.bgVertical(r, p) : "horizontal" == d && t.bgHorizontal(r, p) : "foreground" == f && ("vertical" == d ? t.vertical(r, h) : "horizontal" == d && t.horizontal(r, h)), $(window).on("scroll", function() {
                var o = $(this).scrollTop();
                p = Math.round((e - o) * u), h = Math.round((e - a / 2 + i - o) * u), "background" == f ? "vertical" == d ? t.bgVertical(r, p) : "horizontal" == d && t.bgHorizontal(r, p) : "foreground" == f && n > o && ("vertical" == d ? t.vertical(r, h) : "horizontal" == d && t.horizontal(r, h))
            })
        })
    }
}(jQuery);



/**AOS Aninmation**/
! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(o) {
            if (n[o]) return n[o].exports;
            var i = n[o] = {
                exports: {},
                id: o,
                loaded: !1
            };
            return e[o].call(i.exports, i, i.exports, t), i.loaded = !0, i.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "dist/", t(0)
    }([function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                }
                return e
            },
            r = n(1),
            a = (o(r), n(6)),
            u = o(a),
            c = n(7),
            f = o(c),
            s = n(8),
            d = o(s),
            l = n(9),
            p = o(l),
            m = n(10),
            b = o(m),
            v = n(11),
            y = o(v),
            g = n(14),
            h = o(g),
            w = [],
            k = !1,
            x = document.all && !window.atob,
            j = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            O = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (k = !0), k) return w = (0, y.default)(w, j), (0, b.default)(w, j.once), w
            },
            _ = function() {
                w = (0, h.default)(), O()
            },
            S = function() {
                w.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            z = function(e) {
                return e === !0 || "mobile" === e && p.default.mobile() || "phone" === e && p.default.phone() || "tablet" === e && p.default.tablet() || "function" == typeof e && e() === !0
            },
            A = function(e) {
                return j = i(j, e), w = (0, h.default)(), z(j.disable) || x ? S() : (document.querySelector("body").setAttribute("data-aos-easing", j.easing), document.querySelector("body").setAttribute("data-aos-duration", j.duration), document.querySelector("body").setAttribute("data-aos-delay", j.delay), "DOMContentLoaded" === j.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? O(!0) : "load" === j.startEvent ? window.addEventListener(j.startEvent, function() {
                    O(!0)
                }) : document.addEventListener(j.startEvent, function() {
                    O(!0)
                }), window.addEventListener("resize", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("orientationchange", (0, f.default)(O, j.debounceDelay, !0)), window.addEventListener("scroll", (0, u.default)(function() {
                    (0, b.default)(w, j.once)
                }, j.throttleDelay)), j.disableMutationObserver || (0, d.default)("[data-aos]", _), w)
            };
        e.exports = {
            init: A,
            refresh: O,
            refreshHard: _
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function o(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, k = t, g = e.apply(o, n)
                }

                function r(e) {
                    return k = e, h = setTimeout(s, t), _ ? o(e) : g
                }

                function a(e) {
                    var n = e - w,
                        o = e - k,
                        i = t - n;
                    return S ? j(i, y - o) : i
                }

                function c(e) {
                    var n = e - w,
                        o = e - k;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function s() {
                    var e = O();
                    return c(e) ? d(e) : void(h = setTimeout(s, a(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? o(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), k = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(O())
                }

                function m() {
                    var e = O(),
                        n = c(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(s, t), o(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, k = 0,
                    _ = !1,
                    S = !1,
                    z = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return t = u(t) || 0, i(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? x(u(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
            }

            function o(e, t, o) {
                var r = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError(f);
                return i(o) && (r = "leading" in o ? !!o.leading : r, a = "trailing" in o ? !!o.trailing : a), n(e, t, {
                    leading: r,
                    maxWait: t,
                    trailing: a
                })
            }

            function i(e) {
                var t = "undefined" == typeof e ? "undefined" : c(e);
                return !!e && ("object" == t || "function" == t)
            }

            function r(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : c(e))
            }

            function a(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : c(e)) || r(e) && k.call(e) == d
            }

            function u(e) {
                if ("number" == typeof e) return e;
                if (a(e)) return s;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var n = m.test(e);
                return n || b.test(e) ? v(e.slice(2), n ? 2 : 8) : p.test(e) ? s : +e
            }
            var c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                f = "Expected a function",
                s = NaN,
                d = "[object Symbol]",
                l = /^\s+|\s+$/g,
                p = /^[-+]0x[0-9a-f]+$/i,
                m = /^0b[01]+$/i,
                b = /^0o[0-7]+$/i,
                v = parseInt,
                y = "object" == ("undefined" == typeof t ? "undefined" : c(t)) && t && t.Object === Object && t,
                g = "object" == ("undefined" == typeof self ? "undefined" : c(self)) && self && self.Object === Object && self,
                h = y || g || Function("return this")(),
                w = Object.prototype,
                k = w.toString,
                x = Math.max,
                j = Math.min,
                O = function() {
                    return h.Date.now()
                };
            e.exports = o
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function n(e, t, n) {
                function i(t) {
                    var n = b,
                        o = v;
                    return b = v = void 0, O = t, g = e.apply(o, n)
                }

                function r(e) {
                    return O = e, h = setTimeout(s, t), _ ? i(e) : g
                }

                function u(e) {
                    var n = e - w,
                        o = e - O,
                        i = t - n;
                    return S ? x(i, y - o) : i
                }

                function f(e) {
                    var n = e - w,
                        o = e - O;
                    return void 0 === w || n >= t || n < 0 || S && o >= y
                }

                function s() {
                    var e = j();
                    return f(e) ? d(e) : void(h = setTimeout(s, u(e)))
                }

                function d(e) {
                    return h = void 0, z && b ? i(e) : (b = v = void 0, g)
                }

                function l() {
                    void 0 !== h && clearTimeout(h), O = 0, b = w = v = h = void 0
                }

                function p() {
                    return void 0 === h ? g : d(j())
                }

                function m() {
                    var e = j(),
                        n = f(e);
                    if (b = arguments, v = this, w = e, n) {
                        if (void 0 === h) return r(w);
                        if (S) return h = setTimeout(s, t), i(w)
                    }
                    return void 0 === h && (h = setTimeout(s, t)), g
                }
                var b, v, y, g, h, w, O = 0,
                    _ = !1,
                    S = !1,
                    z = !0;
                if ("function" != typeof e) throw new TypeError(c);
                return t = a(t) || 0, o(n) && (_ = !!n.leading, S = "maxWait" in n, y = S ? k(a(n.maxWait) || 0, t) : y, z = "trailing" in n ? !!n.trailing : z), m.cancel = l, m.flush = p, m
            }

            function o(e) {
                var t = "undefined" == typeof e ? "undefined" : u(e);
                return !!e && ("object" == t || "function" == t)
            }

            function i(e) {
                return !!e && "object" == ("undefined" == typeof e ? "undefined" : u(e))
            }

            function r(e) {
                return "symbol" == ("undefined" == typeof e ? "undefined" : u(e)) || i(e) && w.call(e) == s
            }

            function a(e) {
                if ("number" == typeof e) return e;
                if (r(e)) return f;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(d, "");
                var n = p.test(e);
                return n || m.test(e) ? b(e.slice(2), n ? 2 : 8) : l.test(e) ? f : +e
            }
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                c = "Expected a function",
                f = NaN,
                s = "[object Symbol]",
                d = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                p = /^0b[01]+$/i,
                m = /^0o[0-7]+$/i,
                b = parseInt,
                v = "object" == ("undefined" == typeof t ? "undefined" : u(t)) && t && t.Object === Object && t,
                y = "object" == ("undefined" == typeof self ? "undefined" : u(self)) && self && self.Object === Object && self,
                g = v || y || Function("return this")(),
                h = Object.prototype,
                w = h.toString,
                k = Math.max,
                x = Math.min,
                j = function() {
                    return g.Date.now()
                };
            e.exports = n
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            var n = new r(o);
            a = t, n.observe(i.documentElement, {
                childList: !0,
                subtree: !0,
                removedNodes: !0
            })
        }

        function o(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    n = Array.prototype.slice.call(e.removedNodes),
                    o = t.concat(n).filter(function(e) {
                        return e.hasAttribute && e.hasAttribute("data-aos")
                    }).length;
                o && a()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = window.document,
            r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
            a = function() {};
        t.default = n
    }, function(e, t) {
        "use strict";

        function n(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var o = t[n];
                        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                    }
                }
                return function(t, n, o) {
                    return n && e(t.prototype, n), o && e(t, o), t
                }
            }(),
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            u = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            c = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            f = function() {
                function e() {
                    n(this, e)
                }
                return i(e, [{
                    key: "phone",
                    value: function() {
                        var e = o();
                        return !(!r.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = o();
                        return !(!u.test(e) && !c.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new f
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e, t, n) {
                var o = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : "undefined" != typeof o && ("false" === o || !n && "true" !== o) && e.node.classList.remove("aos-animate")
            },
            o = function(e, t) {
                var o = window.pageYOffset,
                    i = window.innerHeight;
                e.forEach(function(e, r) {
                    n(e, i + o, t)
                })
            };
        t.default = o
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(12),
            r = o(i),
            a = function(e, t) {
                return e.forEach(function(e, n) {
                    e.node.classList.add("aos-init"), e.position = (0, r.default)(e.node, t.offset)
                }), e
            };
        t.default = a
    }, function(e, t, n) {
        "use strict";

        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = n(13),
            r = o(i),
            a = function(e, t) {
                var n = 0,
                    o = 0,
                    i = window.innerHeight,
                    a = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (a.offset && !isNaN(a.offset) && (o = parseInt(a.offset)), a.anchor && document.querySelectorAll(a.anchor) && (e = document.querySelectorAll(a.anchor)[0]), n = (0, r.default)(e).top, a.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        n += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        n += e.offsetHeight;
                        break;
                    case "top-center":
                        n += i / 2;
                        break;
                    case "bottom-center":
                        n += i / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        n += i / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        n += i;
                        break;
                    case "bottom-top":
                        n += e.offsetHeight + i;
                        break;
                    case "center-top":
                        n += e.offsetHeight / 2 + i
                }
                return a.anchorPlacement || a.offset || isNaN(t) || (o = t), n + o
            };
        t.default = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            for (var t = 0, n = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), n += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: n,
                left: t
            }
        };
        t.default = n
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = n
    }])
});

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});


//Read more less
(function(a) {
    a.fn.moreLines = function(b) {
        this.each(function() {
            var h = a(this),
                m = h.find("p"),
                p = "b-morelines_",
                q = "js-morelines_",
                l = "section",
                e = parseFloat(h.css("line-height")),
                r = 1,
                k = h.innerHeight(),
                f = a.extend({
                    linecount: r,
                    baseclass: p,
                    basejsclass: q,
                    classspecific: l,
                    buttontxtmore: "more lines",
                    buttontxtless: "less lines",
                    animationspeed: r
                }, b),
                i = f.baseclass + f.classspecific + "_ellipsis",
                d = f.baseclass + f.classspecific + "_button",
                g = f.baseclass + f.classspecific + "_wrapper",
                o = f.basejsclass + f.classspecific + "_wrapper",
                c = a("<div>").addClass(g + " " + o).css({
                    "max-width": h.css("width")
                }),
                n = e * f.linecount;
            h.wrap(c);
            if (h.parent().not(o)) {
                if (k > n) {
                    h.addClass(i).css({
                        "min-height": n,
                        "max-height": n,
                        overflow: "hidden"
                    });
                    var j = a("<div>", {
                        "class": d,
                        click: function() {
                            h.toggleClass(i);
                            a(this).toggleClass(d + "_active");
                            if (h.css("max-height") !== "none") {
                                h.css({
                                    height: n,
                                    "max-height": ""
                                }).animate({
                                    height: k
                                }, f.animationspeed, function() {
                                    j.html(f.buttontxtless)
                                })
                            } else {
                                a("html,body").animate({
                                    scrollTop: a(".productRightDetail").offset().top
                                }, "slow");
                                h.animate({
                                    height: n
                                }, f.animationspeed, function() {
                                    j.html(f.buttontxtmore);
                                    h.css("max-height", n)
                                })
                            }
                        },
                        html: f.buttontxtmore
                    });
                    h.after(j)
                }
            }
        });
        return this
    }
}(jQuery));

//SMOKE.JS
(function(e, t) {
    var n = {
        smoketimeout: [],
        init: false,
        zindex: 1e3,
        i: 0,
        bodyload: function(e) {
            var r = t.createElement("div");
            r.setAttribute("id", "smoke-out-" + e);
            r.className = "smoke-base";
            r.style.zIndex = n.zindex;
            n.zindex++;
            t.body.appendChild(r)
        },
        newdialog: function() {
            var t = (new Date).getTime();
            t = Math.random(1, 99) + t;
            if (!n.init) {
                n.listen(e, "load", function() {
                    n.bodyload(t)
                })
            } else {
                n.bodyload(t)
            }
            return t
        },
        forceload: function() {},
        build: function(t, r) {
            n.i++;
            r.stack = n.i;
            t = t.replace(/\n/g, "<br />");
            t = t.replace(/\r/g, "<br />");
            var i = "",
                s = "OK",
                o = "Cancel",
                u = "",
                a = "",
                f;
            if (r.type === "prompt") {
                i = '<div class="dialog-prompt">' + '<input id="dialog-input-' + r.newid + '" type="text" ' + (r.params.value ? 'value="' + r.params.value + '"' : "") + " />" + "</div>"
            }
            if (r.params.ok) {
                s = r.params.ok
            }
            if (r.params.cancel) {
                o = r.params.cancel
            }
            if (r.params.classname) {
                u = r.params.classname
            }
            if (r.type !== "signal") {
                a = '<div class="dialog-buttons">';
                if (r.type === "alert") {
                    a += '<button id="alert-ok-' + r.newid + '">' + s + "</button>"
                } else if (r.type === "quiz") {
                    if (r.params.button_1) {
                        a += '<button class="quiz-button" id="' + r.type + "-ok1-" + r.newid + '">' + r.params.button_1 + "</button>"
                    }
                    if (r.params.button_2) {
                        a += '<button class="quiz-button" id="' + r.type + "-ok2-" + r.newid + '">' + r.params.button_2 + "</button>"
                    }
                    if (r.params.button_3) {
                        a += '<button class="quiz-button" id="' + r.type + "-ok3-" + r.newid + '">' + r.params.button_3 + "</button>"
                    }
                    if (r.params.button_cancel) {
                        a += '<button id="' + r.type + "-cancel-" + r.newid + '" class="cancel">' + r.params.button_cancel + "</button>"
                    }
                } else if (r.type === "prompt" || r.type === "confirm") {
                    if (r.params.reverseButtons) {
                        a += '<button id="' + r.type + "-ok-" + r.newid + '">' + s + "</button>" + '<button id="' + r.type + "-cancel-" + r.newid + '" class="cancel">' + o + "</button>"
                    } else {
                        a += '<button id="' + r.type + "-cancel-" + r.newid + '" class="cancel">' + o + "</button>" + '<button id="' + r.type + "-ok-" + r.newid + '">' + s + "</button>"
                    }
                }
                a += "</div>"
            }
            f = '<div id="smoke-bg-' + r.newid + '" class="smokebg"></div>' + '<div class="dialog smoke ' + u + '">' + '<div class="dialog-inner">' + t + i + a + "</div>" + "</div>";
            if (!n.init) {
                n.listen(e, "load", function() {
                    n.finishbuild(t, r, f)
                })
            } else {
                n.finishbuild(t, r, f)
            }
        },
        finishbuild: function(e, r, i) {
            var s = t.getElementById("smoke-out-" + r.newid);
            s.className = "smoke-base smoke-visible  smoke-" + r.type;
            s.innerHTML = i;
            while (s.innerHTML === "") {
                s.innerHTML = i
            }
            if (n.smoketimeout[r.newid]) {
                clearTimeout(n.smoketimeout[r.newid])
            }
            n.listen(t.getElementById("smoke-bg-" + r.newid), "click", function() {
                n.destroy(r.type, r.newid);
                if (r.type === "prompt" || r.type === "confirm" || r.type === "quiz") {
                    r.callback(false)
                } else if (r.type === "alert" && typeof r.callback !== "undefined") {
                    r.callback()
                }
            });
            switch (r.type) {
                case "alert":
                    n.finishbuildAlert(e, r, i);
                    break;
                case "confirm":
                    n.finishbuildConfirm(e, r, i);
                    break;
                case "quiz":
                    n.finishbuildQuiz(e, r, i);
                    break;
                case "prompt":
                    n.finishbuildPrompt(e, r, i);
                    break;
                case "signal":
                    n.finishbuildSignal(e, r, i);
                    break;
                default:
                    throw "Unknown type: " + r.type
            }
        },
        finishbuildAlert: function(r, i, s) {
            n.listen(t.getElementById("alert-ok-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                if (typeof i.callback !== "undefined") {
                    i.callback()
                }
            });
            t.onkeyup = function(t) {
                if (!t) {
                    t = e.event
                }
                if (t.keyCode === 13 || t.keyCode === 32 || t.keyCode === 27) {
                    n.destroy(i.type, i.newid);
                    if (typeof i.callback !== "undefined") {
                        i.callback()
                    }
                }
            }
        },
        finishbuildConfirm: function(r, i, s) {
            n.listen(t.getElementById("confirm-cancel-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(false)
            });
            n.listen(t.getElementById("confirm-ok-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(true)
            });
            t.onkeyup = function(t) {
                if (!t) {
                    t = e.event
                }
                if (t.keyCode === 13 || t.keyCode === 32) {
                    n.destroy(i.type, i.newid);
                    i.callback(true)
                } else if (t.keyCode === 27) {
                    n.destroy(i.type, i.newid);
                    i.callback(false)
                }
            }
        },
        finishbuildQuiz: function(r, i, s) {
            var o, u, a;
            n.listen(t.getElementById("quiz-cancel-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(false)
            });
            if (o = t.getElementById("quiz-ok1-" + i.newid)) n.listen(o, "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(o.innerHTML)
            });
            if (u = t.getElementById("quiz-ok2-" + i.newid)) n.listen(u, "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(u.innerHTML)
            });
            if (a = t.getElementById("quiz-ok3-" + i.newid)) n.listen(a, "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(a.innerHTML)
            });
            t.onkeyup = function(t) {
                if (!t) {
                    t = e.event
                }
                if (t.keyCode === 27) {
                    n.destroy(i.type, i.newid);
                    i.callback(false)
                }
            }
        },
        finishbuildPrompt: function(r, i, s) {
            var o = t.getElementById("dialog-input-" + i.newid);
            setTimeout(function() {
                o.focus();
                o.select()
            }, 100);
            n.listen(t.getElementById("prompt-cancel-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(false)
            });
            n.listen(t.getElementById("prompt-ok-" + i.newid), "click", function() {
                n.destroy(i.type, i.newid);
                i.callback(o.value)
            });
            t.onkeyup = function(t) {
                if (!t) {
                    t = e.event
                }
                if (t.keyCode === 13) {
                    n.destroy(i.type, i.newid);
                    i.callback(o.value)
                } else if (t.keyCode === 27) {
                    n.destroy(i.type, i.newid);
                    i.callback(false)
                }
            }
        },
        finishbuildSignal: function(r, i, s) {
            t.onkeyup = function(t) {
                if (!t) {
                    t = e.event
                }
                if (t.keyCode === 27) {
                    n.destroy(i.type, i.newid);
                    if (typeof i.callback !== "undefined") {
                        i.callback()
                    }
                }
            };
            n.smoketimeout[i.newid] = setTimeout(function() {
                n.destroy(i.type, i.newid);
                if (typeof i.callback !== "undefined") {
                    i.callback()
                }
            }, i.timeout)
        },
        destroy: function(e, r) {
            var i = t.getElementById("smoke-out-" + r);
            if (e !== "quiz") {
                var s = t.getElementById(e + "-ok-" + r)
            }
            var o = t.getElementById(e + "-cancel-" + r);
            i.className = "smoke-base";
            if (s) {
                n.stoplistening(s, "click", function() {});
                t.onkeyup = null
            }
            if (e === "quiz") {
                var u = t.getElementsByClassName("quiz-button");
                for (var a = 0; a < u.length; a++) {
                    n.stoplistening(u[a], "click", function() {});
                    t.onkeyup = null
                }
            }
            if (o) {
                n.stoplistening(o, "click", function() {})
            }
            n.i = 0;
            i.innerHTML = ""
        },
        alert: function(e, t, r) {
            if (typeof r !== "object") {
                r = false
            }
            var i = n.newdialog();
            n.build(e, {
                type: "alert",
                callback: t,
                params: r,
                newid: i
            })
        },
        signal: function(e, t, r) {
            if (typeof r !== "object") {
                r = false
            }
            var i = 5e3;
            if (r.duration !== "undefined") {
                i = r.duration
            }
            var s = n.newdialog();
            n.build(e, {
                type: "signal",
                callback: t,
                timeout: i,
                params: r,
                newid: s
            })
        },
        confirm: function(e, t, r) {
            if (typeof r !== "object") {
                r = false
            }
            var i = n.newdialog();
            n.build(e, {
                type: "confirm",
                callback: t,
                params: r,
                newid: i
            })
        },
        quiz: function(e, t, r) {
            if (typeof r !== "object") {
                r = false
            }
            var i = n.newdialog();
            n.build(e, {
                type: "quiz",
                callback: t,
                params: r,
                newid: i
            })
        },
        prompt: function(e, t, r) {
            if (typeof r !== "object") {
                r = false
            }
            var i = n.newdialog();
            return n.build(e, {
                type: "prompt",
                callback: t,
                params: r,
                newid: i
            })
        },
        listen: function(e, t, n) {
            if (e.addEventListener) {
                return e.addEventListener(t, n, false)
            }
            if (e.attachEvent) {
                return e.attachEvent("on" + t, n)
            }
            return false
        },
        stoplistening: function(e, t, n) {
            if (e.removeEventListener) {
                return e.removeEventListener(t, n, false)
            }
            if (e.detachEvent) {
                return e.detachEvent("on" + t, n)
            }
            return false
        }
    };
    n.init = true;
    if (typeof module != "undefined" && module.exports) {
        module.exports = n
    } else if (typeof define === "function" && define.amd) {
        define("smoke", [], function() {
            return n
        })
    } else {
        this.smoke = n
    }
})(window, document)

// target _blank Popup function 
!(function(b) {
    b.fn.RedirectConfirm = function(a) {
        var k = {
            selector: "a",
            excluding: "data-rc-exclude",
            title: "Exiting our website",
            message: "You are now leaving our website. We are not responsible for any external Web sites or their content.",
            continuelbl: "Continue",
            returnlbl: "Return",
            targetUrl: "_blank"
        };
        var a = b.extend(k, a);
        var j = false;
        var m = function(d) {
            var c = d.split(",");
            return c.slice(-2).join(".")
        };
        var n = m(location.hostname);
        var l = new Array();
        var i = b('<div id="redirectconfirm-modal" class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-body"><p>' + a.message + '</p></div><div class="modal-footer"><a href="#" class="btn btn-default" data-dismiss="modal">' + a.returnlbl + '</a><a href="' + b(this).attr("href") + '" target="' + a.targetUrl + '" class="btn btn-primary btn-continue">' + a.continuelbl + "</a></div></div></div></div>").appendTo("body");
        b(a.selector).each(function() {
            var d = jQuery(this);
            var c = d.attr(a.excluding);
            if (c == "true" && c != "undefined") {
                d.attr(a.excluding, true)
            }
            if (d.get(0).hostname && m(d.get(0).hostname) != n && !c) {
                d.click(function(e) {
                    if (!j) {
                        l.push(b(this).attr("href"));
                        e.preventDefault();
                        e.stopPropagation();
                        i.on("show", function() {
                            i.find(".btn-continue").click(function() {
                                j = true;
                                d.get(0).click();
                                b("body").removeClass("modal-open");
                                location.reload()
                            })
                        });
                        i.on("hide", function() {
                            j = false;
                            b("body").removeClass("modal-open")
                        });
                        i.find(".btn-continue").click(function() {
                            b("body").removeClass("modal-open")
                        });
                        i.find(".modal-body > p").html(a.message.replace("{url}", d.attr("href")));
                        b("body").addClass("modal-open")
                    }
                })
            }
        })
    }
})(jQuery);