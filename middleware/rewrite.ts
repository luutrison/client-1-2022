export default (req, res, next) => {
  if (req.path === "/hoso") {
    res.redirect("/pages/home/hoso.vue");
    return;
  }

  next();
};
