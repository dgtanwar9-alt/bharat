(function () {
  "use strict";

  function trimTrailingSlash(value) {
    return String(value || "").replace(/\/+$/, "");
  }

  function detectBaseUrl() {
    if (typeof window === "undefined") return "";

    var runtimeOverride = trimTrailingSlash(window.SMARTTRIP_API_BASE || "");
    if (runtimeOverride) return runtimeOverride;

    var metaTag = document.querySelector('meta[name="smarttrip-api-base"]');
    var metaValue = trimTrailingSlash(metaTag && metaTag.content);
    if (metaValue) return metaValue;

    if (window.location.protocol === "file:") {
      return "http://localhost:5050";
    }

    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://localhost:5050";
    }

    return "";
  }

  function buildUrl(path) {
    var baseUrl = detectBaseUrl();
    if (!path) return baseUrl || "";

    if (/^https?:\/\//i.test(path)) {
      return path;
    }

    if (!baseUrl) {
      return path;
    }

    return baseUrl + (path.charAt(0) === "/" ? path : "/" + path);
  }

  async function request(path, options) {
    var response = await fetch(buildUrl(path), options || {});
    var payload = null;

    try {
      payload = await response.json();
    } catch (error) {
      payload = null;
    }

    if (!response.ok) {
      var errorMessage =
        (payload && (payload.error || payload.message || payload.reply)) ||
        "Request failed. Please try again.";
      throw new Error(errorMessage);
    }

    return payload;
  }

  function withJsonHeaders(options) {
    var requestOptions = Object.assign({}, options || {});
    requestOptions.headers = Object.assign(
      {
        "Content-Type": "application/json"
      },
      requestOptions.headers || {}
    );
    return requestOptions;
  }

  window.smartTripApi = {
    getBaseUrl: detectBaseUrl,
    buildUrl: buildUrl,
    getJson: function (path, options) {
      return request(path, Object.assign({ method: "GET" }, options || {}));
    },
    postJson: function (path, body, options) {
      return request(
        path,
        withJsonHeaders(
          Object.assign(
            {
              method: "POST",
              body: JSON.stringify(body || {})
            },
            options || {}
          )
        )
      );
    }
  };
})();

