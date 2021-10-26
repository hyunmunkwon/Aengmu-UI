export default {
  install(Vue) {
    (Vue.prototype.$downloadObjectAsJson = function(exportObj, exportName) {
      var dataStr =
        "data:text/json;charset=utf-8," + encodeURIComponent(exportObj);
      var downloadAnchorNode = document.createElement("a");
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", exportName + ".json");
      document.body.appendChild(downloadAnchorNode); // required for firefox
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }),
      (Vue.prototype.$openDetailPage = function(route, accountNum, id) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;
        console.log("");
        let path = "#/" + route + "/detail/" + accountNum + "/" + id;
        console.log("test");
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage2 = function(route, accountNum, id, isprivate) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + accountNum + "/" + id + "/" + isprivate;
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage3 = function(route, type, accountNum, name) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + type + "/" + accountNum + "/" + name;
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage4 = function(route, type, accountNum, name,revision) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + type + "/" + accountNum + "/" + name+"/" + revision;
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage5 = function(route, accountNum, arn) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + accountNum + "/" + arn;

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage6 = function(route, id) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + id;
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$openDetailPage7 = function(route, accountName, backupName, date) {
        const popupX = window.screen.width / 2 - 600 / 2;
        const popupY = window.screen.height / 2 - 700 / 2;

        let path = "#/" + route + "/detail/" + accountName + "/" + backupName+ "/" + date;
        console.log(path);

        window.open(
          path,
          "_blank",
          `width=1000, height=600, 
            left=${popupX}, top=${popupY}, screenX=${popupX}, screenY=${popupY}, status=no, scrollbars=yes`
        );
      });
      (Vue.prototype.$getsystemList = function() {
        
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length));
          }
        }
        return "";

      });
  }
};
