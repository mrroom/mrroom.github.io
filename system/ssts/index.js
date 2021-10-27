
var app = new Vue({
    el: "#main",
    data: function () {
        return {
          bg_color : "green",
          base64_image : "",
          qrcode_value : ""
        }
    },
    methods: {

      //칼라 변경 이벤트
      change_color() {

        console.log("change_color", this.bg_color);
        //앱 채널로 색상변경 보내기
        this.bg_color = "blue";
        console.log("web_color_change : ", this.bg_color);
        try {
          window["color_channel"].postMessage("red");
        }
        catch (err) {
          console.log("change_color : ", err);
        }

      },

      //앱에서 호출하는 함수
      app_change_color(color) {

        this.bg_color = color;

      },

      //사진찍기 이벤트
      take_picture() {

        console.log("take_picture");

        try {
          //앱 함수(JavascriptChannel)
          color_channel.postMessage("take_picture");
        }
        catch (err) {
          console.log("take_picture : ", err);
        }

      },
  
      //앱에서 호출하는 함수
      set_base64_image(base64_string) {

        var image_source = "data:image/jpeg;base64," + base64_string;
        console.log(image_source);
        this.base64_image = image_source;

      },
  
      //QR Code Scan 이벤트
      qrcode_scan() {

        console.log("qrcode_scan");

        try {
          //앱 함수(JavascriptChannel)
          color_channel.postMessage("qrcode_scan");
        }
        catch (err) {
          console.log("qrcode_scan : ", err);
        }

      },
  
      //앱에서 호출하는 함수
      set_qrcode_value(code_value) {

        console.log(code_value);
        this.qrcode_value = code_value;

      },


    },

    mounted: function () {
      console.log("mounted3");
      window.app_change_color = this.app_change_color;
    },
})

export default app;
