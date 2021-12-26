var app = new Vue({
    el: "#app",

    //vuetify 객체(컴포넌트)를 사용
    vuetify: new Vuetify(),

    //ViewModel 변수 선언
    data: {
        subject: "VueLeaflet 테스트",  //제목
        map: null,
        center: [35.243561635912094, 128.65269455210196], //[51.505, -0.159],
        zoom: 13,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:"&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributor",
        marker_list:[],
        marker_info_list:[
            {"title":"경남10버1234","lat_lng":[35.24, 128.66], "icon":"https://leafletjs.com/examples/custom-icons/leaf-green.png"},
            {"title":"경남10버3456","lat_lng":[35.25, 128.66], "icon":"https://leafletjs.com/examples/custom-icons/leaf-red.png"},
            {"title":"경남10버7890","lat_lng":[35.26, 128.66], "icon":"https://leafletjs.com/examples/custom-icons/leaf-orange.png"}
        ],
        geolet : null

    },

    //이벤트 또는 함수 선언
    methods: {

        get_geo_location(callback) {

            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {
                    console.log(position.coords);
                    //latitude: 35.1583935, longitude: 128.7053831
                    this.center = [position.coords.latitude, position.coords.longitude];

                    if (callback) callback();
                })
            }

        },
        
        init_map(callback) {
            this.map = L.map("map").setView(this.center, this.zoom);
            //this.map = L.map("map").fitWorld();
            //this.map.locate({setView: true, maxZoom: 16});

            L.tileLayer(this.url).addTo(this.map);

            this.geolet = L.geolet({ position: "topleft" });
            this.geolet.addTo(this.map);
            this.map.on("geolet_success", (data) => { 
                console.log(data);
                this.center = data.latlng;
                L.marker(this.center).addTo(this.map);

                var latlng = this.geolet.getLatLng();
                console.log(data);
            });

            // var gps = new L.Control.Gps({
            //     autoCenter:true
            // });//inizialize control
        
            // gps.on("gps:located", function(e) {
            //     console.log(e.latlng, map.getCenter())
            // })
            // .on("gps:disabled", function(e) {
            //     e.marker.closePopup()
            // });

            // this.map.addControl(gps);

            
            //marker.setLatLng([35.243561635912094, 128.66]);

            if (callback) callback();

        },

        add_marker(callback) {

            this.marker_info_list.forEach((marker_info,index)=>{

                var icon = L.icon({
                    iconUrl: marker_info.icon,
                    iconSize:     [38, 95], 
                    popupAnchor:  [0, -40] 
                });

                var marker = L.marker(marker_info.lat_lng, {title:marker_info.title, icon: icon}).addTo(this.map).bindPopup(marker_info.title);
                this.marker_list.push(marker);

            });

            if (callback) callback();

        },
        
        add_move_marker() {
            // var moving_marker = L.marker.movingMarker([[35.243561635912094, 128.65269455210196],[35.243561635912094, 129]],
            //     [20000]).addTo(this.map);

            // moving_marker.start();

            var marker = L.marker([35.243561635912094, 128.65269455210196]).addTo(this.map);;

            marker.slideTo(	[35.243561635912094, 129], {
                duration: 20000,
                keepAtCenter: true
            });

        },

        move_marker1() {

            var interval_id = setInterval(() => {
                x=x+0.01;
                this.marker_lat_lng[1] = x;
                console.log(this.marker_lat_lng);
            }, 1000);

        },

        move_marker() {

            var marker = this.marker_list[0];
            var x = marker._latlng.lng;

            var interval_id = setInterval(() => {
                x=x+0.001;
                marker._latlng.lng = x;
                marker.setLatLng(marker._latlng);
            }, 1000);

        }

    },

    mounted() { 

        //this.get_geo_location(() => {
            this.init_map(()=>{

                L.marker(this.center).addTo(this.map);
                // this.add_marker(()=>{
                //     this.move_marker();
                // });
                //this.add_move_marker();
            });
        //})
        
        
    },

});


export default app;
