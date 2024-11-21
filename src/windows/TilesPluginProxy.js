var cordova = require('cordova');
var Tiles = require('./Tiles');

module.exports = {

	/***
		Updates a tile based on a custom XML string provided.
	***/
	updateTileXml: function (successCallback, errorCallback, args) {

		var notifications = Windows.UI.Notifications;
		var tileDom = Windows.Data.Xml.Dom.XmlDocument();
		var tileXml = args[0];
        var tileTag = args[1];

		// Load an XML document using the supplied string. The document is parsed using the default parser settings.
		try {
			tileDom.loadXml(tileXml);
		} catch(e) {
			errorCallback('XML parsing error: ' + e.message);
			return;
		}

		// Create the notification from the XML DOM.
		var tileNotification = new notifications.TileNotification(tileDom);
        if (typeof(tileTag) !== 'undefined') {
            tileNotification.Tag = tileTag;
        }

		// Apply a change in content or appearance to the tile.
		try {
			notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
			successCallback('Tile updated OK');
		} catch(e) {
			errorCallback(e.message);
		}

    },

	/***
		Updates a tile based on a preloaded tile schema with the provided arguments.
	***/
    updateTilePreset: function (successCallback, errorCallback, args) {

		var notifications = Windows.UI.Notifications;
		var tileDom = Windows.Data.Xml.Dom.XmlDocument();
		var tileType = args[0];
		var tileContent = args[1];

		// Validate tileContents Array
		if(!Array.isArray(tileContent)){
			errorCallback('Error: tileContent argument expects an array');
			return;
		}

		// Select an XML tile schema based on current preset and content.
		switch(tileType){
			case Tiles.tileType.TileSquareBlock:
				// tileContent: [text1, text2, text3] (text3 for wide tile only)
				if(tileContent.length !== 2 && tileContent.length !== 3){
					errorCallback('Error: TileSquareBlock expects 2 or 3 strings in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150Block" fallback="TileSquareBlock">'+
						'<text id="1">'+tileContent[0]+'</text>'+
						'<text id="2">'+tileContent[1]+'</text>'+
					'</binding>'+
					/* This wide tile will have a wrong layout in Windows Phone 8.1 */
					'<binding template="TileWide310x150BlockAndText02" fallback="TileWideBlockAndText02">'+
						'<text id="1">'+tileContent[2]+'</text>'+
						'<text id="2">'+tileContent[0]+'</text>'+
						'<text id="3">'+tileContent[1]+'</text>'+
					'</binding>'+
					'</visual></tile>';
			break;
			case Tiles.tileType.TileSquareText02:
				// tileContent: [text1, text2]
				if(tileContent.length !== 2){
					errorCallback('Error: TileSquareText02 expects 2 strings in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150Text02" fallback="TileSquareText02">'+
						'<text id="1">'+tileContent[0]+'</text>'+
						'<text id="2">'+tileContent[1]+'</text>'+
					'</binding>'+
					'<binding template="TileWide310x150Text09" fallback="TileWideText09">'+
						'<text id="1">'+tileContent[0]+'</text>'+
						'<text id="2">'+tileContent[1]+'</text>'+
					'</binding>'+
					'</visual></tile>';
			break;
			case Tiles.tileType.TileSquareText04:
				// tileContent: [text1]
				if(tileContent.length !== 1){
					errorCallback('Error: TileSquareText04 expects 1 string in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150Text04" fallback="TileSquareText04">'+
						'<text id="1">'+tileContent[0]+'</text>'+
					'</binding>'+
					'<binding template="TileWide310x150Text03" fallback="TileWideText03">'+
						'<text id="1">'+tileContent[0]+'</text>'+
					'</binding>'+
					'</visual></tile>';
			break;
			case Tiles.tileType.TileSquareImage:
				// tileContent: [src1, src2, alt]
				if(tileContent.length !== 3){
					errorCallback('Error: TileSquareImage expects 3 strings in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150Image" fallback="TileSquareImage">'+
						'<image id="1" src="'+tileContent[0]+'" alt="'+tileContent[2]+'"/>'+
					'</binding>'+
					'<binding template="TileWide310x150Image" fallback="TileWideImage">'+
						'<image id="1" src="'+tileContent[1]+'" alt="'+tileContent[2]+'"/>'+
					'</binding>'+
					'</visual></tile>';
			break;
			case Tiles.tileType.TileSquarePeekImageAndText02:
				// tileContent: [src1, src2, alt, text1, text2, text3] (text3 for wide tile only)
				if(tileContent.length !== 5 && tileContent.length !== 6){
					errorCallback('Error: TileSquarePeekImageAndText02 expects 5 or 6 strings in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150PeekImageAndText02" fallback="TileSquarePeekImageAndText02">'+
						'<image id="1" src="'+tileContent[0]+'" alt="'+tileContent[2]+'"/>'+
						'<text id="1">'+tileContent[3]+'</text>'+
						'<text id="2">'+tileContent[4]+'</text>'+
					'</binding>'+
					'<binding template="TileWide310x150PeekImage01" fallback="TileWidePeekImage01">'+
						'<image id="1" src="'+tileContent[1]+'" alt="'+tileContent[2]+'"/>'+
						'<text id="1">'+tileContent[3]+'</text>'+
						'<text id="2">'+tileContent[4]+'</text>'+
						'<text id="3">'+tileContent[5]+'</text>'+
					'</binding>'+
					'</visual></tile>';
			break;
			case Tiles.tileType.TileSquarePeekImageAndText04:
				// tileContent: [src1, src2, alt, text1]
				if(tileContent.length !== 4){
					errorCallback('Error: TileSquarePeekImageAndText04 expects 4 strings in the tileContent argument array');
					return;
				}
				var tileXml = '<tile><visual branding="name" version="2">' +
					'<binding template="TileSquare150x150PeekImageAndText04" fallback="TileSquarePeekImageAndText04">'+
						'<image id="1" src="'+tileContent[0]+'" alt="'+tileContent[2]+'"/>'+
						'<text id="1">'+tileContent[3]+'</text>'+
					'</binding>'+
					'<binding template="TileWide310x150PeekImage04" fallback="TileWidePeekImage04">'+
						'<image id="1" src="'+tileContent[1]+'" alt="'+tileContent[2]+'"/>'+
						'<text id="1">'+tileContent[3]+'</text>'+
					'</binding>'+
					'</visual></tile>';
			break;
			default:
				errorCallback('Error: The tileType argument does not match any valid tile preset.');
				return;
		}

		// Load an XML document using the supplied string. The document is parsed using the default parser settings.
		try {
			tileDom.loadXml(tileXml);
		} catch(e) {
			errorCallback('XML parsing error: ' + e.message);
			return;
		}

		// Create the notification from the XML DOM.
		var tileNotification = new notifications.TileNotification(tileDom);

		// Apply a change in content or appearance to the tile.
		try {
			notifications.TileUpdateManager.createTileUpdaterForApplication().update(tileNotification);
			successCallback('Tile updated OK');
		} catch(e) {
			errorCallback(e.message);
		}

    },

	/***
		Clear the tile and reset it to its default state.
	***/
	clearTile: function (successCallback, errorCallback) {

		var notifications = Windows.UI.Notifications;
		try {
			notifications.TileUpdateManager.createTileUpdaterForApplication().clear();
			successCallback('Tile cleared OK');
		} catch(e) {
			errorCallback(e.message);
		}

	},

    /* Enable the notification queue */
    enableNotificationQueue: function(successCallback, errorCallback){

        var notifications = Windows.UI.Notifications;
        try {
            notifications.TileUpdateManager.createTileUpdaterForApplication().enableNotificationQueue(true);
            successCallback('Notification queue enabled OK');
        } catch (e) {
            errorCallback('Failed to change notification queue state: ' + e.message);
        }

    }

};

require("cordova/exec/proxy").add("Tiles", module.exports);

