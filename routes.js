//global

const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

//users

const USERS = "/users";
const USER_PROFILE = "/:id";
const EDIT_PROFILE = "/:id/edit-profile";
const CHANGE_PASSWORD = "/:id/change-password";

// photos

const PHOTOS = "/photos";
const UPLOAD = "/upload";
const PHOTO_DETAIL = "/:id";
const EDIT_PHOTO = "/:id/edit";
const DELETE_PHOTO = "/:id/delete";

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    users: USERS,
    userProfile: USER_PROFILE,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    photos: PHOTOS,
    upload: UPLOAD,
    photoDetail: PHOTO_DETAIL,
    editphoto: EDIT_PHOTO,
    deletephoto : DELETE_PHOTO
};

export default routes;