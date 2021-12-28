var app = new Vue({
    el: "#app",

    //vuetify 객체(컴포넌트)를 사용
    vuetify: new Vuetify(),

    //ViewModel 변수 선언
    data: {
        latitude: null,
        longitude: null,
        map: null,
        center: [37.503609284204096, 127.047012169130437], //창원시청
        zoom: 13,
        url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        attribution:"&copy; <a target='_blank' href='http://osm.org/copyright'>OpenStreetMap</a> contributor",
        marker_list:[],
        marker_info_list:[
            {"title":"모비어스앤밸류체인(주)","lat_lng":[37.503609284204096, 127.047012169130437], "icon":"https://cdn-icons-png.flaticon.com/512/2593/2593478.png"},
            {"title":"신성통상(주)","lat_lng":[37.5318702343292, 127.14038651330682], "icon":"https://cdn-icons-png.flaticon.com/512/2593/2593478.png"},
            {"title":"트럭","lat_lng":[37.50467319490107, 127.04901846152671], "icon":"https://cdn-icons-png.flaticon.com/512/819/819489.png"},
        ],
        geolet : null,
        title : null

    },

    //이벤트 또는 함수 선언
    methods: {
        
        init_map(callback) {

            this.map = L.map("map").setView(this.center, this.zoom);
            L.tileLayer(this.url).addTo(this.map);

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

        set_location(latitude, longitude) {

            this.title = "Location : ";
            this.latitude = latitude;
            this.longitude = longitude;
            
            var marker = this.marker_list[2];
 
            var latLng = new L.LatLng(this.latitude, this.longitude);
            marker.setLatLng(latLng);

        },

    },

    mounted() { 

        //앱에서 호출하는 함수 등록
        window.set_location = this.set_location;

        this.init_map(()=> {
            
        });
        
    },

});


export default app;
