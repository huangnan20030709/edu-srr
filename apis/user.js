export function useLoginApi(body) {
  return useHttpPost("login", "/login", {
    body,
  });
}

export function useGetinfoApi() {
  return useHttpGet("getinfo", "/getinfo", {
    $: true,
  });
}
export function useRegApi(body) {
  return useHttpPost("reg", "/reg", {
    body,
  });
}

export function useLogoutApi() {
  return useHttpPost("logout", "/logout");
}

export function useGetCaptchaApi(phone) {
  return useHttpPost("GetCaptcha", "/get_captcha", {
    body: {
      phone,
    },
  });
}

export function useBindPhoneApi(body) {
  return useHttpPost("bindPhone", "/bind_mobile", {
    body,
  });
}

export function useForgetApi(body) {
  return useHttpPost("forget", "/forget", {
    body,
  });
}

export function useUserHistoryApi(query) {
  return useHttpGet(
    "userHistory",
    () => {
      let q = useQueryToString(query());
      return `/user_history/list${q}`;
    },
    {
      lazy: true,
    },
  );
}

export function useOrderListApi(page) {
  return useHttpGet("OrderList", `/order/list?page=${page}`, {
    lazy: true,
  });
}

export function useUserTestApi(page) {
  return useHttpGet("UserTest", `/user_test/list?page=${page}`, {
    lazy: true,
  });
}

export function useMypostListApi(page) {
  return useHttpGet("MypostList", `/mypost?page=${page}`, {
    lazy: true,
  });
}

export function useUserCouponApi(page) {
  return useHttpGet("UserCoupon", `/user_coupon?page=${page}`, {
    lazy: true,
  });
}

export function useMyFavaListApi(page) {
  return useHttpGet("MyFavaList", `/user_fava?page=${page}`, {
    lazy: true,
  });
}

export function useUncollectApi(body) {
  return useHttpPost("Uncollect", "/uncollect", {
    body,
  });
}

export function useUpdateUserInfoApi(body) {
  return useHttpPost("updateUserInfo", "/update_info", {
    body,
  });
}

export function useUploadConfig() {
  const token = useCookie("token");
  return {
    action: fetchConfig.baseURL + "/upload",
    headers: {
      appid: fetchConfig.headers.appid,
      token: token.value,
    },
  };
}

export function useUpdatePasswordApi(body) {
  return useHttpPost("updatePassword", "/update_password", {
    body,
  });
}

export function useCollectApi(body) {
  return useHttpPost("Collect", "/collect", {
    body,
  });
}

export function useReceiveUserCouponApi(body) {
  return useHttpPost("receiveUserCoupon", "/user_coupon/receive", {
    body,
  });
}
