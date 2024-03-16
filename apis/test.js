export function useSubmitTestApi(body) {
  return useHttpPost("SubmitTest", "/user_test/save", {
    body,
  });
}

export function useReadTestpaperApi(id) {
  return useHttpGet("ReadTestpaper", "/testpaper/read?id=" + id);
}
