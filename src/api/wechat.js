// 获取用户设置
// 可以用来判断某一项是否已经被用户设置
// auth参数表示需要判断的某个权限
export function getSetting(auth, onSuccess, onFail) {
  mpvue.getSetting({
    success(res) {
      if (res.authSetting[`scope.${auth}`]) {
        onSuccess(res);
        // console.log(
        //   "getSetting success!!",
        //   res.authSetting["scope.userInfo"]
        // );
      } else {
        // console.log("s1.getSetting fail!!", res);
        onFail(res);
      }
    },
    fail(res) {
      console.log("1.getSetting fail!!", res);
    }
  });
}
