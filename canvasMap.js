var map;		//地图
var coordConvert;	//坐标转换服务对象

function loadMap(){
    require([
        "esri/map",
	"esri/SpatialReference",
	"esri/geometry/Point",
	"src/BaseLayer/BaseMap",
	"src/BaseLayer/CoordConvert",
    ], function(Map, SpatialReference, Point, BaseMap, CoordConvert){
        map = new Map("map", {basemap:"streets", zoom: 10, force3DTransforms: true, logo: false, wrapAround180: false});
	map.onload("load", function(){
		$("map_zoom_slider").style.visibility = "hidden";
		map.setLevel(10);
		map.centerAt(new Point());
	});
	coordConvert = new CoordConvert();
	map.spatialReference = new SpatialReference({"wkid": 102100});
        
        });
}
