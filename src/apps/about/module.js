import fb from "../../../firebase.config";

export default {
  namespaced: true,
  state: {
    loading: true
  },
  mutations: {},
  actions: {
    async getCv() {
      let url = await fb.storage
        .ref("docs/Oscar R.C. C.V..pdf")
        .getDownloadURL();
      let response = await fetch(url);
      let blob = new Blob([response.data], {
        type: response.headers.get("content-type")
      });
      let link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = this.name;
      link.click();
    }
  }
};
