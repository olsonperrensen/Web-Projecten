!(function (e, t) {
    "object" == typeof exports && "undefined" != typeof module
      ? t()
      : "function" == typeof define && define.amd
      ? define(t)
      : t();
  })(this, function () {
    "use strict";
    function e() {
      function e() {
        function e() {
          R ||
            ((R = !0),
            (Q = setInterval(a, 1e3)),
            h[0].classList.remove("loader--paused"),
            window.innerWidth > K && T[0].focus()),
            L[0].classList.add("controls--running"),
            b[0].classList.add("task-form--show"),
            M[0].classList.add("timer-wrapper--running");
        }
        function t() {
          (R = !1),
            clearInterval(Q),
            M[0].classList.remove("timer-wrapper--running"),
            h[0].classList.add("loader--paused"),
            (document.title = "Takt");
        }
        function n() {
          t(), o(), (P = 0), (G[0].innerText = "00"), (F[0].innerText = "00");
        }
        function a() {
          var e = Math.floor(P / 60),
            t = P % 60;
          (P += 1),
            (G[0].innerText = t >= 10 ? t : "0" + t),
            (F[0].innerText = e >= 10 ? e : "0" + e),
            (document.title = _[0].innerHTML + ":" + E[0].innerHTML);
        }
        function l() {
          var e = Math.floor(P / 60),
            t = P % 60,
            a = "" + e + ":" + t,
            l = e,
            s = t,
            i = T[0].value,
            c = q[0].value;
          r(i, c, a, l, s), v(), o(), n();
        }
        function o() {
          (T[0].value = ""),
            (q[0].value = ""),
            b[0].classList.remove("task-form--show"),
            (H[0].innerHTML = ""),
            (j[0].style.display = "none"),
            L[0].classList.remove("controls--running");
        }
        function r(e, t, n, a, l) {
          var o = JSON.parse(localStorage.getItem("storageString")) || [],
            r = { title: e, project: t, time: n, minutes: a, seconds: l };
          o.push(r), localStorage.setItem("storageString", JSON.stringify(o));
        }
        function s(e) {
          var t = JSON.parse(localStorage.getItem("storageString")),
            n = e.closest("li").getAttribute("data-name");
          Array.prototype.forEach.call(t, function (e, a) {
            if (t[a].title == n)
              return (
                t.splice(a, 1),
                localStorage.setItem("storageString", JSON.stringify(t)),
                !1
              );
          }),
            v();
        }
        function i(e, t, n, a) {
          (J[0].value = e),
            (x[0].value = t),
            (W[0].value = n),
            (z[0].value = a),
            O[0].setAttribute("data-name", e),
            c();
        }
        function c() {
          O[0].style.display = "block";
        }
        function d() {
          O[0].style.display = "none";
        }
        function u(e) {
          var t = JSON.parse(localStorage.getItem("storageString")),
            n = e.closest("li").getAttribute("data-name");
          Array.prototype.forEach.call(t, function (e, a) {
            if (t[a].title == n)
              return (
                i(t[a].title, t[a].project, t[a].minutes, t[a].seconds),
                localStorage.setItem("storageString", JSON.stringify(t)),
                !1
              );
          });
        }
        function m() {
          var e = JSON.parse(localStorage.getItem("storageString")),
            t = O[0].getAttribute("data-name");
          return (
            Array.prototype.forEach.call(e, function (n, a) {
              if (e[a].title == t)
                return (
                  (e[a].title = J[0].value),
                  (e[a].project = x[0].value),
                  (e[a].minutes = W[0].value),
                  (e[a].seconds = z[0].value),
                  localStorage.setItem("storageString", JSON.stringify(e)),
                  !1
                );
            }),
            v(),
            d(),
            !1
          );
        }
        function p() {
          localStorage.removeItem("storageString"), v();
        }
        function v() {
          if (((I[0].innerHTML = ""), localStorage.getItem("storageString"))) {
            for (
              var e = JSON.parse(localStorage.getItem("storageString")),
                t = e.length,
                n = 0;
              n < t;
              n++
            ) {
              var a = e[n].minutes,
                l = e[n].seconds;
              0 == a
                ? (I[0].innerHTML +=
                    '<li data-name="' +
                    e[n].title +
                    '"><button class="edit-task"></button><button class="delete-task"></button><div>Task name: <span>' +
                    e[n].title +
                    "</span></div><div>Task project: <span>" +
                    e[n].project +
                    "</span></div><div>Task duration: <span>" +
                    l +
                    " seconds</span></div></li>")
                : (I[0].innerHTML +=
                    '<li data-name="' +
                    e[n].title +
                    '"><button class="edit-task"></button><button class="delete-task"></button><div>Task name: <span>' +
                    e[n].title +
                    "</span></div><div>Task project: <span>" +
                    e[n].project +
                    "</span></div><div>Task duration: <span>" +
                    a +
                    " minutes and " +
                    l +
                    " seconds</span></div></li>");
            }
            (B[0].innerHTML = "Completed tasks:"),
              N[0].classList.add("time-list-meta--show");
          } else (B[0].innerHTML = "No completed tasks"), N[0].classList.remove("time-list-meta--show");
        }
        function S() {
          g[0].addEventListener("click", e),
            f[0].addEventListener("click", t),
            k[0].addEventListener("click", n),
            y[0].addEventListener("click", l),
            A[0].addEventListener("click", p),
            b[0].addEventListener("submit", function (e) {
              e.preventDefault(),
                (j[0].style.display = "block"),
                (H[0].innerHTML =
                  "<div>" + T[0].value + "</div><div>" + q[0].value + "</div>");
            }),
            document.addEventListener("click", function (e) {
              if (e.target && "delete-task" == e.target.className) {
                var t = e.target;
                s(t);
              }
            }),
            document.addEventListener("click", function (e) {
              if (e.target && "edit-task" == e.target.className) {
                var t = e.target;
                u(t);
              }
            }),
            w[0].addEventListener("click", d()),
            D[0].addEventListener("submit", function (e) {
              e.preventDefault(), m();
            }),
            C[0].addEventListener("click", function (e) {
              e.preventDefault(), m();
            });
        }
        var g = document.querySelectorAll(".start"),
          f = document.querySelectorAll(".stop"),
          k = document.querySelectorAll(".cancel"),
          y = document.querySelectorAll(".finish"),
          A = document.querySelectorAll(".clear"),
          L = document.querySelectorAll(".controls"),
          T = document.querySelectorAll(".task-label"),
          q = document.querySelectorAll(".task-project"),
          b = document.querySelectorAll(".task-form"),
          M = document.querySelectorAll(".timer-wrapper"),
          h = document.querySelectorAll(".loader"),
          j = document.querySelectorAll(".current-task"),
          H = document.querySelectorAll(".current-task__data"),
          I = document.querySelectorAll(".time-list"),
          N = document.querySelectorAll(".time-list-meta"),
          _ = document.querySelectorAll(".timer .minutes"),
          E = document.querySelectorAll(".timer .seconds"),
          O = document.querySelectorAll(".modal"),
          w = document.querySelectorAll(".modal__cancel"),
          J = document.querySelectorAll(".modal__title"),
          x = document.querySelectorAll(".modal__project"),
          C = document.querySelectorAll(".modal__save"),
          D = document.querySelectorAll(".modal__form"),
          W = document.querySelectorAll(".modal__minutes"),
          z = document.querySelectorAll(".modal__seconds"),
          B = document.querySelectorAll(".task-area .completed-tasks"),
          F = document.querySelectorAll(".minutes"),
          G = document.querySelectorAll(".seconds"),
          K = 650,
          P = 0,
          Q = null,
          R = !1;
        S();
      }
      function t() {
        document.addEventListener("DOMContentLoaded", function () {
          document.querySelectorAll(".app--main") && e();
        });
      }
      t();
    }
    function t() {
      function e() {
        if (localStorage.getItem("storageString")) {
          var e = JSON.parse(localStorage.getItem("storageString")),
            t = e.length;
          if (0 !== t) {
            for (var o = 0; o < t; o++) {
              var r = e[o].minutes,
                s = e[o].seconds;
              0 == r
                ? (n[0].innerHTML +=
                    '<li data-name="' +
                    e[o].title +
                    '"><button class="edit-task"></button><button class="delete-task"></button><div>Task name: <span>' +
                    e[o].title +
                    "</span></div><div>Task project: <span>" +
                    e[o].project +
                    "</span></div><div>Task duration: <span>" +
                    s +
                    " seconds</span></div></li>")
                : (n[0].innerHTML +=
                    '<li data-name="' +
                    e[o].title +
                    '"><button class="edit-task"></button><button class="delete-task"></button><div>Task name: <span>' +
                    e[o].title +
                    "</span></div><div>Task project: <span>" +
                    e[o].project +
                    "</span></div><div>Task duration: <span>" +
                    r +
                    " minutes and " +
                    s +
                    " seconds</span></div></li>");
            }
            (l[0].innerHTML = "Completed tasks:"),
              a[0].classList.add("time-list-meta--show");
          }
        } else (l[0].innerHTML = "No completed tasks"), a[0].classList.remove("time-list-meta--show");
      }
      function t() {
        document.querySelectorAll(".app--main") && e();
      }
      var n = document.querySelectorAll(".time-list"),
        a = document.querySelectorAll(".time-list-meta"),
        l = document.querySelectorAll(".task-area .completed-tasks");
      t();
    }
    function n() {
      function e() {
        if (localStorage.getItem("storageString")) {
          var e = JSON.parse(localStorage.getItem("storageString")),
            t = e.length;
          if (0 !== t) {
            for (var l = 0; l < t; l++) {
              var o = e[l].time.split(":"),
                r = o[0],
                s = o[1];
              0 == r
                ? (n.innerHTML =
                    "<li><div>Task name: <span>" +
                    e[l].title +
                    "</span></div><div>Task project: <span>" +
                    e[l].project +
                    "</span></div><div>Task duration: <span>" +
                    s +
                    " seconds</span></div></li>")
                : (n.innerHTML =
                    "<li><div>Task name: <span>" +
                    e[l].title +
                    "</span></div><div>Task project: <span>" +
                    e[l].project +
                    "</span></div><div>Task duration: <span>" +
                    r +
                    " minutes and " +
                    s +
                    " seconds</span></div></li>");
            }
            a[0].innerHTML = "Completed tasks:";
          }
        } else a[0].innerHTML = "No existing tasks";
      }
      function t() {
        document.querySelectorAll(".app--main") && e();
      }
      var n = document.querySelectorAll(".time-list"),
        a = document.querySelectorAll(".task-area .completed-tasks");
      t();
    }
    e(), t(), n();
  });
  