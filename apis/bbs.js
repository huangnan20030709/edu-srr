export function usePostSupportApi(post_id, type = "support") {
  return useHttpPost("postSupport", `/post/${type}`, {
    body: {
      post_id,
    },
  });
}

export function useDeletePostApi(id) {
  return useHttpPost("deletePost", `/post/delete`, {
    body: {
      id,
    },
  });
}

export function useBbsListApi() {
  return useHttpGet("bbsList", "/bbs?page=1", {
    lazy: true,
  });
}

export function usePostListApi(query) {
  return useHttpGet(
    "postList",
    () => {
      let q = useQueryToString(query());
      return `/post/list${q}`;
    },
    {
      lazy: true,
    },
  );
}

export function useReadPostApi(id) {
  return useHttpGet("readPost", "/post/read?id=" + id, {
    lazy: true,
  });
}

export function usePostCommentApi(query) {
  return useHttpGet(
    "postComment",
    () => {
      let q = useQueryToString(query());
      return `/post_comment${q}`;
    },
    {
      lazy: true,
    },
  );
}
