/**
 * Post experiment data to a lou-server instance.
 *
 * Note:
 *  1. This code doesn't check, whether the data has been transmitted successfully.
 *  2. Data transmission is asynchronous, so a ``postData()`` call returns immediately.
 *     If you want the transmission to finish, e.g. before changing to another URL,
 *     you have to use ``await postData(...)``.
 */
function postData(url, payload) {
  return fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({data: payload})
  })
}
