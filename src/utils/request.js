function createFly() {
  if (mpvuePlatform === 'wx') {
    console.log("平台名称：", mpvuePlatform);
    const Fly = require('flyio/dist/npm/wx')
    return new Fly()
  } else {
    return null;
  }
}

function handleError(err) {
  console.log(err);
}

export function get(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.get(url, params).then(response => {
        console.log(response);
        resolve(response)
      }).catch(err => {
        handleError(err);
        reject(err)
      })
    })
  } else {
    return null;
  }
}

export function post(url, params = {}) {
  const fly = createFly();
  if (fly) {
    return new Promise((resolve, reject) => {
      fly.post(url, params).then(response => {
        console.log(response);
        resolve(response)
      }).catch(err => {
        handleError(err);
        reject(err)
      })
    })
  } else {
    return null;
  }
}
