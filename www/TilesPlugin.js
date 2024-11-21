var Tiles = {

	updateTileXml: function (successCallback, errorCallback, tileXml, tileTag) {
        cordova.exec(successCallback, errorCallback, "Tiles", "updateTileXml", [tileXml, tileTag]);
    },

    updateTilePreset: function (successCallback, errorCallback, tileType, tileContent) {
        cordova.exec(successCallback, errorCallback, "Tiles", "updateTilePreset", [tileType, tileContent]);
    },

	clearTile: function (successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Tiles", "clearTile", null);
	},

    enableNotificationQueue: function (successCallback, errorCallback) {
		cordova.exec(successCallback, errorCallback, "Tiles", "enableNotificationQueue", null);
	},

	tileType: {
        TileSquareBlock: 0,
        TileSquareText02: 1,
        TileSquareText04: 2,
		TileSquareImage: 3,
		TileSquarePeekImageAndText02: 4,
		TileSquarePeekImageAndText04: 5
    },
}

module.exports = Tiles;
