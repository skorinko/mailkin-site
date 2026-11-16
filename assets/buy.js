// Paddle checkout for /buy/.
// Live runs only once LIVE has a token and price (after Paddle approves mailkin.app).
// Sandbox runs on localhost or with ?sandbox in the URL; sandbox purchases issue test keys
// that the real app does not accept.
(function () {
  // Live is ready but off: Paddle answers transaction_checkout_not_enabled until it approves
  // the account. Then fill LIVE with token "live_3a65ae1bd0680dd040109a77e9b" and
  // price "pri_01m7j46bf27ea972j30s565193", and bump ?v= in /buy/index.html.
  var LIVE = { token: "", priceId: "" };
  var SANDBOX = { token: "test_c7d371fa18d912ce29e467dcd44", priceId: "pri_01m7gc7g25szscny07zt1n5cvf" };

  var params = new URLSearchParams(location.search);
  var local = location.hostname === "localhost" || location.hostname === "127.0.0.1";
  var sandbox = local || params.has("sandbox");
  var config = sandbox ? SANDBOX : LIVE;

  var button = document.getElementById("buy-button");
  var status = document.getElementById("buy-status");
  if (!button || !config.token || !window.Paddle) return;

  if (sandbox) {
    Paddle.Environment.set("sandbox");
    status.textContent = "Sandbox mode: test purchases only. Use card 4242 4242 4242 4242.";
  }

  Paddle.Initialize({
    token: config.token,
    checkout: { settings: { displayMode: "overlay", theme: "light", locale: "en", allowLogout: false } },
    eventCallback: function (event) {
      if (event.name === "checkout.completed") {
        var email = event.data && event.data.customer && event.data.customer.email;
        status.textContent = "Thank you! Your license key is on its way" + (email ? " to " + email : "") +
          ". It usually arrives within a minute. Check your spam folder if you don't see it.";
        button.textContent = "Purchase complete";
        button.setAttribute("aria-disabled", "true");
      }
    }
  });

  button.textContent = "Buy Mailkin";
  button.classList.remove("waiting");
  button.removeAttribute("aria-disabled");
  button.addEventListener("click", function (e) {
    e.preventDefault();
    if (button.getAttribute("aria-disabled") === "true") return;
    Paddle.Checkout.open({
      items: [{ priceId: config.priceId, quantity: 1 }],
      customData: { source: "mailkin.app/buy" }
    });
  });
})();
