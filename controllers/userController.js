export const join = (req, res) => res.render("join", {pageTitle : "Join"});
export const login = (req, res) => res.render("login", {pageTitle : "Log-In"});
export const logout = (req, res) => res.render("logout", {pageTitle : "Log-Out"});
export const users = (req, res) => res.render("users", {pageTitle : "Users"});
export const userProfile = (req, res) => res.render("userProfile", {pageTitle : "Profile"});
export const editProfile = (req, res) => res.render("editProfile", {pageTitle : "Edit Profile"});
export const changePassword = (req, res) => res.render("changePassword", {pageTitle : "Password"});