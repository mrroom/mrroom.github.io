
var app = new Vue({
    el: "#main",
    data: function () {
        return {
          bg_color : "green",
          base64_image : "",
          qrcode_value : "",
          err_msg : ""
        }
    },
    methods: {

      //칼라 변경 이벤트
      change_color() {

        console.log("change_color", this.bg_color);
        //앱 채널로 색상변경 보내기
        try {
          this.bg_color = "blue";
          console.log("web_color_change : ", this.bg_color);
          window["color_channel"].postMessage("red");
        }
        catch (err) {
          console.log("change_color : ", err);
          this.err_msg = err;
        }

      },

      //앱에서 호출하는 함수
      app_change_color(color) {

        try {
          this.bg_color = color;
        }
        catch (err) {
          console.log("app_change_color : ", err);
          this.err_msg = err;
        }

      },

      //사진찍기 이벤트
      take_picture() {

        console.log("take_picture");

        try {
          //앱 함수(JavascriptChannel)
          window["color_channel"].postMessage("take_picture");
        }
        catch (err) {
          console.log("take_picture : ", err);
          this.err_msg = err;
        }

      },
  
      //앱에서 호출하는 함수
      set_base64_image(base64_string) {

        try {
          var image_source = "data:image/jpeg;base64," + base64_string;
          console.log(image_source);
          this.base64_image = image_source;
        }
        catch (err) {
          console.log("set_base64_image : ", err);
          this.err_msg = err;
        }

      },
  
      //QR Code Scan 이벤트
      qrcode_scan() {

        console.log("qrcode_scan");

        try {
          //앱 함수(JavascriptChannel)
          window["color_channel"].postMessage("qrcode_scan");
        }
        catch (err) {
          console.log("qrcode_scan : ", err);
          this.err_msg = err;
        }

      },
  
      //앱에서 호출하는 함수
      set_qrcode_value(code_value) {

        try {
          console.log(code_value);
          this.qrcode_value = code_value;
        }
        catch (err) {
          console.log("set_qrcode_value : ", err);
          this.err_msg = err;
        }

      },


    },

    mounted: function () {
      console.log("mounted4");

      //앱에서 호출하는 함수 등록
      window.app_change_color = this.app_change_color;
      window.set_base64_image = this.set_base64_image;
      window.set_qrcode_value = this.set_qrcode_value;

    },
})

export default app;
