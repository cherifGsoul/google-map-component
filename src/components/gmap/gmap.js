can.Component.extend({
	tag: 'g-map',
	//template:can.stache('init.stache'),
	scope: {
		define: {
			latitude: {
				value: '@',
				set: function(lat) {
					if (lat)
						return lat;
				}
			},
			longitude: {
				value: '@',
				set: function(lng) {
					if (lng)
						return lng;
				}
			},
			maptype:{
				value:'@',
				set:function(type){
					return type ? type :'roadmap';
				}
			}
		},
		zoom: 10,
		
		map: {},
	},
	events: {
		inserted: function(el, ev) {
			var latitude = this.scope.attr('latitude'),
				longitude = this.scope.attr('longitude'),
				mapOptions = {
					zoom: this.scope.attr('zoom'),
					center: new google.maps.LatLng(latitude, longitude),
					mapTypeId: this.scope.attr('maptype')
				}
			var map = new google.maps.Map(el[0], mapOptions);
			this.scope.attr('map', map);
		}
	}
});