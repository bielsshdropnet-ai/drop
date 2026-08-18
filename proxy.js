export default {
  async fetch(request) {

    const VPS_TARGET = "http://147.15.124.32:80";

    const url = new URL(request.url);

    const targetUrl =
      VPS_TARGET + url.pathname + url.search;

    const headers = new Headers(request.headers);

    const response = await fetch(targetUrl, {
      method: request.method,
      headers: headers,
      body:
        request.method !== "GET" &&
        request.method !== "HEAD"
          ? request.body
          : undefined
    });

    return new Response(response.body, {
      status: response.status,
      headers: response.headers
    });
  }
};