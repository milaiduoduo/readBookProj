// 获取用户设置
// 可以用来判断某一项是否已经被用户设置
// auth参数表示需要判断的某个权限
export function w_getSetting(auth, onSuccess, onFail) {
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
      console.log("1.getSetting fail!!", res); //直接抛出异常
    }
  });
}

// 获取用户信息
export function w_getuserInfo(onSuccess, onFail) {
  mpvue.getUserInfo({
    success(res) {
      console.log("获取到用户信息：", res.userInfo);

      // 根据官网介绍如果用户信息获取成功，这会有一个scope.userInfo=true 的属性。所以我们以此来判断。
      const {
        userInfo
      } = res;
      if (userInfo) {
        onSuccess(userInfo);
      } else {
        onFail(res);
      }
    },
    fail(res) {
      console.log("获取用户信息失败：", res.userInfo)
      onFail(res); //直接抛出异常
    }
  })
}
