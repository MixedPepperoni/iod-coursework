export function getSessionId() {
  const params = new URLSearchParams(window.location.search);
  const urlSession = params.get("session");

  if (urlSession) {
    localStorage.setItem("lunchbreak_session_id", urlSession);
    return urlSession;
  }

  let sessionId = localStorage.getItem("lunchbreak_session_id");
  if (!sessionId) {
    sessionId = "default-session";
    localStorage.setItem("lunchbreak_session_id", sessionId);
  }

  return sessionId;
}
// seems to work