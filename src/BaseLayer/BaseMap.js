define([
	"src/Base/declare",
	"esri/layers/TiledMapServiceLayer",
	"esri/SpatialReference",
	"esri/geometry/Extent",
], function( declare, TiledMapServiceLayer, SpatialReference, Extent ){
	return declare ( "BaseLayer.BaseMap", TiledMapServiceLayer, {
		mapUrl: "",
		//constructor: function (required, required,required, optional)
		constructor: function (layerType, minLevel, maxLevel, mapurl) {
			this.type = layerType;
			this._layerInfo = this._getLayerInfo(layerType);
			this.spatialReference = new SpatialReference({"wkid": 102100});
		},
	});
});
