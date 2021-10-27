
var app = new Vue({
    el: "#app",
    data: function () {
        return {
          background_color : "white",
          base64_image : "",
          qrcode_value : ""
        }
    },
    methods: {

      //칼라 변경 이벤트
      change_color() {

        //앱 채널로 색상변경 보내기
        this.background_color = "blue";
        console.log("web_color_change : ", this.background_color);
        try {
            color_channel.postMessage(this.background_color);
        }
        catch (err) {
        }

      },

      //앱에서 호출하는 함수
      app_change_color(color) {

          this.background_color = color;

      },

      //사진찍기 이벤트
      take_picture() {

        console.log("take_picture");

        try {
            //앱 함수(JavascriptChannel)
            color_channel.postMessage("take_picture");
        }
        catch (err) {
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
        }

      },
  
      //앱에서 호출하는 함수
      set_qrcode_value(code_value) {

        console.log(code_value);
        this.qrcode_value = code_value;

      },

    },

    mounted: function () {
        
    },
})

export default app;
