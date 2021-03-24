export const home = (req, res) => res.render("home", {pageTitle : "Home"});
export const search = (req, res) => res.render("search", {pageTitle : "Search"});
export const photos = (req, res) => res.render("photos", {pageTitle : "Photos"});
export const upload = (req, res) => res.render("upload", {pageTitle : "Upload"});
export const photoDetail = (req, res) => res.render("photoDetail", {pageTitle : "Details"});
export const editPhoto = (req, res) => res.render("editPhoto", {pageTitle : "Edit"});
export const deletePhoto = (req, res) => res.render("deletePhoto", {pageTitle : "Delete"});