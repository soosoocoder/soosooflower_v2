import express from "express";
import { deletePhoto, editPhoto, photoDetail, photos, upload } from "../controllers/photoController";
import routes from "../routes";

const photoRouter = express.Router();

photoRouter.get("/", photos )
photoRouter.get(routes.upload, upload);
photoRouter.get(routes.photoDetail, photoDetail);
photoRouter.get(routes.editphoto, editPhoto);
photoRouter.get(routes.deletephoto, deletePhoto);

export default photoRouter;