export default defineEventHandler(async () => {
  return new Promise((reso) => {
    setTimeout(() => {
      reso({ name: "hn", age: 18 });
    }, 3000);
  });
});
