export function usecourseListApi(page) {
  return useHttpGet("courseList", `/course/list?page=${page}`, {
    lazy: true,
  });
}

export function useReadCourseApi(query = {}) {
  let q = useQueryToString(query);
  return useHttpGet("readCourse", `/course/read${q}`, {
    lazy: true,
  });
}

export function useHotCourseListApi() {
  return useHttpGet("HotCourseList", `/hot`);
}

export function useLearnApi(body) {
  return useHttpPost("learn", "/order/learn", { body });
}
