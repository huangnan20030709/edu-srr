export function useSearchListApi(query) {
  return useHttpGet(
    "searchList",
    () => {
      let q = useQueryToString(query());
      return `/search${q}`;
    },
    {
      lazy: true,
    },
  );
}

export function useCouponListApi() {
  return useHttpGet("CouponList", "/coupon/list ");
}

export function useListApi(type, query = {}) {
  let q = useQueryToString(query);
  return useHttpGet(type + "List", `/${type}/list${q}`, {
    lazy: true,
  });
}

export function useReadDetailApi(type, query = {}) {
  let q = useQueryToString(query);
  return useHttpGet("readDetail", `/${type}/read${q}`, {
    lazy: true,
  });
}
