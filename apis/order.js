export function useGetGoodsInfoApi(id, type = "course") {
  return useHttpGet("", `/goods/read?type=${type}&id=${id}`, {
    lazy: true,
  });
}

export function useGetUseableUserCouponApi(id, type = "course") {
  return useHttpGet("GetUseableUserCoupon", `/user_coupon?goods_id=${id}&type=${type}&page=1`);
}

export function useCreateOrderApi(body, type) {
  let url = `/order/save`;

  if (type === "flashsale") {
    url = `/order/flashsale`;
  } else if (type == "group") {
    url = `/order/group`;
  }

  return useHttpPost("CreateOrder", url, {
    body,
  });
}

//微信pc支付
export function useWxpayApi(no) {
  return useHttpPost("wxpay", `/order/wxpay`, {
    body: {
      no,
    },
  });
}

export function useGetWxpayStatusApi(no) {
  return useHttpPost("getWxpayStatus", `/order/iswxpay`, {
    body: {
      no,
    },
    $: true,
  });
}

export function useGetGroupWorkListApi(group_id, page = 1) {
  return useHttpGet("getGroupWorkList", `/group_work/list?group_id=${group_id}&page=${page}`);
}
