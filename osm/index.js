var app = new Vue({
    el: "#app",

    //vuetify 객체(컴포넌트)를 사용
    vuetify: new Vuetify(),

    //ViewModel 변수 선언
    data: {
        map: null,
        center: [35.228197115830504, 128.68184648445157], 
        zoom: 13,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:"&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributor",
        marker_list:[],
        marker_info_list:[
            {"title":"스마트업","lat_lng":[35.241234831695905, 128.6315400976197], "icon":"https://cdn-icons-png.flaticon.com/512/2593/2593478.png"},
            {"title":"창원시청","lat_lng":[35.228197115830504, 128.68184648445157], "icon":"https://cdn-icons-png.flaticon.com/512/2593/2593478.png"},
            {"title":"트럭","lat_lng":[35.241234831695905, 128.6315400976197], "icon":"https://cdn-icons-png.flaticon.com/512/819/819489.png"},
        ],
        geolet : null,
        title : null

    },

    //이벤트 또는 함수 선언
    methods: {
        
        init_map(callback) {
            this.map = L.map("map").setView(this.center, this.zoom);

            L.tileLayer(this.url).addTo(this.map);

            this.geolet = L.geolet({ position: "topleft", marker:false });
            this.geolet.addTo(this.map);

            this.map.on("geolet_success", (data) => { 
                console.log(100,data);
                this.center = data.latlng;
                
                var latlng = this.geolet.getLatLng();
                console.log(200,latlng);

                this.move_marker();
                
            });

            this.add_marker();

            if (callback) callback();

        },

        add_marker(callback) {

            this.marker_info_list.forEach((marker_info,index)=>{

                var icon = L.icon({
                    iconUrl: marker_info.icon,
                    iconSize:     [48, 48], 
                    popupAnchor:  [0, -40] 
                });

                var marker = L.marker(marker_info.lat_lng, {title:marker_info.title, icon: icon}).addTo(this.map).bindPopup(marker_info.title);
                this.marker_list.push(marker);

            });

            if (callback) callback();

        },


        move_marker() {

            var marker = this.marker_list[2];
 
            var interval_id = setInterval(() => {
                this.title  = this.geolet.getLatLng();
                console.log(500,marker._latlng, this.title);
                marker.setLatLng(this.geolet.getLatLng());
            }, 1000);

        }

    },

    mounted() { 

        this.init_map();
    },

});


export default app;
