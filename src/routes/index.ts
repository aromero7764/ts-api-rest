import { Router } from "express";
import { readdirSync } from "fs";

/* 
Cargador dinamico de rutas
*/

const PATH_ROUTER = `${__dirname}`;
const router = Router();
/* 
eliminate .ts extension
*/
const cleanFileName = (fileName: string) => {
  return fileName.split(".").shift();
};

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  if (cleanName != "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
      console.log(`se esta cargando la ruta... ${cleanName}`);
      router.use(`/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
