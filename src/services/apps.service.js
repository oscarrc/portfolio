import fb from "../../firebase.config";

export const appsService = {
  getApps,
  getIcon
};

async function getApps() {
  return await fb.apps
    .get()
    .then(async apps => {
      const data = apps.docs.map(async app => {
        app = app.data();
        app.icon = await getIcon(app.icon);
        return app;
      });
      return await Promise.all(data);
    })
    .catch(error => {
      console.log(error);
    });
}

async function getIcon(icon) {
  return await fb.icons.child(icon).getDownloadURL();
}
