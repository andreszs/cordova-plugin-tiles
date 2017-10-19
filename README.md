| License | Platform | Travis CI | Snyk | Contribute |
| --- | --- | --- | --- | --- |
| ![License](https://img.shields.io/badge/license-MIT-orange.svg) | ![Platform](https://img.shields.io/badge/platform-windows-blue.svg) | [![Build Status](https://travis-ci.org/andreszs/cordova-plugin-tiles.svg?branch=master)](https://travis-ci.org/andreszs/cordova-plugin-tiles) | [![Known Vulnerabilities](https://snyk.io/test/github/andreszs/cordova-plugin-tiles/badge.svg)](https://snyk.io/test/github/andreszs/cordova-plugin-tiles) | [![Donate](https://img.shields.io/badge/donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=G33QACCVKYD7U) |

# cordova-plugin-tiles
Windows Tiles plugin for Apache Cordova and Windows Universal Platform (UWP). Compatible with Windows 10, Windows 10 Mobile, Windows Phone 8.1 and Windows Phone 8.

## Table of Contents

+ [Supported Platforms](#supported-platforms)
+ [Compatibility](#compatibility)
+ [Installation](#installation)
+ [Methods](#methods)
  - [Tiles.updateTilePreset](#updatetilepreset)
  - [Tiles.updateTileXml](#updatetilexml)
  - [Tiles.clearTile](#cleartile)
+ [Tile Showcase](#tile-showcase)
  - [TileSquareBlock](#tiles.tiletype.tilesquareblock)
  - [TileSquareText02](#tiles.tiletype.tilesquaretext02)
  - [TileSquareText04](#tiles.tiletype.tilesquaretext04)
  - [TileSquareImage](#tiles.tiletype.tilesquareimage)
  - [TileSquarePeekImageAndText02](#tiles.tiletype.tilesquarepeekimageandtext02)
  - [TileSquarePeekImageAndText04](#tiles.tiletype.tilesquarepeekimageandtext04)
+ [Image Tiles](#image-tiles)
+ [FAQ](#faq)

## Supported Platforms
- Windows Universal

## Compatibility
- [x] Windows 10
- [x] Windows 10 Mobile
- [x] Windows Phone 8.1
- [x] Windows Phone 8

## Installation
This requires Cordova 5.0+

    cordova plugin add cordova-plugin-tiles
    
It is also possible to install via repo URL directly (master, unstable)

    cordova plugin add https://github.com/andreszs/cordova-plugin-tiles.git
    
## Methods

<a id="updatetilepreset"></a>
#### :small_orange_diamond: Tiles.updateTilePreset(successCallback, errorCallback, tilePreset, tileContent)

Updates a tile from the preset of primary tiles provided by the plugin. This is the recommended and most compatible option, as it will ensure the tile is shown. Only presets compatible with all devices are available.

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>Function</code> | Function to call on success  |
| errorCallback | <code>Function</code> | Function to call on failure  |
| tilePreset | <code>[tilePreset](#tilepreset)</code> | Predefined tile schema to use |
| tileContent | <code>[tileContent](#tilecontent)</code> | Tile contents (text and/or images) |

```javascript
Tiles.updateTilePreset(successCallback, errorCallback, tilePreset, tileContent)
```

<a id="updatetilexml"></a>
#### :small_orange_diamond: Tiles.updateTileXml(successCallback, errorCallback, tileXml)

Updates a tile using your custom `tileXml` schema.

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>Function</code> | Function to call on success  |
| errorCallback | <code>Function</code> | Function to call on failure  |
| tileXml | <code>String</code> | A plain text XML tile.  |

This method allows you to create any type of tile, including [adaptive tiles](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-create-adaptive-tiles) which are cool but require Windows 10. With this method you could create peek tiles such as this:

![Adaptive Tiles Sample](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/adaptive_tile_xml.png)

- To view all tile templates available, see the [MSDN Tile Template Catalog](https://msdn.microsoft.com/library/windows/apps/hh761491), where XML sample code is included.
- To create XML adaptive tiles for Windows 10, use the [Notifications Visualizer](https://www.microsoft.com/en-us/store/p/notifications-visualizer/9nblggh5xsl1) app.

<a id="cleartile"></a>
#### :small_orange_diamond: Tiles.clearTile(successCallback, errorCallback)

Clears the primary tile back to its default appearance.

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>Function</code> | Function to call on success  |
| errorCallback | <code>Function</code> | Function to call on failure  |

<a name="tilepreset"></a>
### tilePreset : `enum`

Determines the desired tile type for updating a tile. Valid options are:

- Tiles.tileType.TileSquareBlock
- Tiles.tileType.TileSquareText02
- Tiles.tileType.TileSquareText04
- Tiles.tileType.TileSquareImage
- Tiles.tileType.TileSquarePeekImageAndText02
- Tiles.tileType.TileSquarePeekImageAndText04

Review the [Tile Showcase](#tile-showcase) section for details.

#### Remarks
- **Tile sizes:** The primary tile size is determined by the user when the tile is pinned, and we can't determine its current size. This plugin will update the medium and large tiles by requesting both sizes internally with a single preset name.

- **Tile Preset Naming Convention:** For convenience, the plugin's tile preset names are based on the [version 1 square tile preset](https://msdn.microsoft.com/library/windows/apps/hh761491) names. 

- **Supported Tile Templates:** Because the pinned tile size can be either small, medium or large, this plugin only supports tile schemes which can be displayed in both medium and large tiles.

<a name="tilecontent"></a>
### tileContent : `array`

An array that determines the contents of the tile. Depending on the tile template chosen, the number of strings is as follows:

| tilePreset | tileContent | Remarks |
| --- | --- | --- |
| TileSquareBlock | [number, text1, text2 ] | *text2 for wide tile only* |
| TileSquareText02 | [text1, text2] | |
| TileSquareText04 | [text1] | |
| TileSquareImage | [square img URI, wide img URI, alt] | *alt is the img's alternate text* |
| TileSquarePeekImageAndText02 | [square img URI, wide img URI, alt, text1, text2, text3] | *text3 for wide tile only* |
| TileSquarePeekImageAndText04 | [square img URI, wide img URI, alt, text1] | |

## Tile Showcase

Here you can preview all the resulting tile presets on different devices, with examples included.

<a id="tiles.tiletype.tilesquareblock"></a>
### :small_blue_diamond: Tiles.tileType.TileSquareBlock

```javascript
var tileContent = ['10', 'New', 'Wide tile sample text']; /* first argument should be a number */
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareBlock, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareBlock_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareBlock_wide.png) |
| Windows Phone 8.1 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareBlock_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareBlock_wide.png) |

**Windows Phone 8.1 remarks**: The wide-sized tile has a inconsistency between Windows 10 and WP 8.1. To ensure the tile is correctly displayed in Windows 10, this plugin will reorder the tile values internally. The result is that the tile shows values correctly in Windows 10, but scrambled in Windows Phone 8.1. Avoid using this tile type in WP8.1 devices.

<a id="tiles.tiletype.tilesquaretext02"></a>
### :small_blue_diamond: Tiles.tileType.TileSquareText02

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var text2 = 'Curabitur mattis quam sit amet urna fringilla, vitae tristique felis facilisis.';
var tileContent = [text1, text2];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareText02, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText02_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText02_wide.png) |
| Windows Phone 8.1 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText02_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText02_wide.png) |

<a id="tiles.tiletype.tilesquaretext04"></a>
### :small_blue_diamond: Tiles.tileType.TileSquareText04

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var tileContent = [text1];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareText04, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText04_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText04_wide.png) |
| Windows Phone 8.1 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText04_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText04_wide.png) |

<a id="tiles.tiletype.tilesquareimage"></a>
### :small_blue_diamond: Tiles.tileType.TileSquareImage

```javascript
var src1 = 'ms-appx:///www/images/led_square.png'; /* square 150x150 image */
var src2 = 'ms-appx:///www/images/led_wide.png'; /* wide 310x150 image */
var alt = 'Alternate text'; /* alt text for images */
var tileContent = [src1, src2, alt];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareImage, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_wide.png) |
| Windows Phone 8.1 | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_square.png) | ![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_wide.png) |

<a id="tiles.tiletype.tilesquarepeekimageandtext02"></a>
### :small_blue_diamond: Tiles.tileType.TileSquarePeekImageAndText02

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var text2 = 'Curabitur mattis quam sit amet urna fringilla, vitae tristique felis facilisis.';
var text3 = 'In luctus, mauris vel vestibulum faucibus, lectus est auctor sapien, sit amet euismod felis felis vel urna.';
var src1 = 'ms-appx:///www/images/led_square.png'; /* square 150x150 image */
var src2 = 'ms-appx:///www/images/led_wide.png'; /* wide 310x150 image */
var alt = 'Alternate text'; /* alt text for images */
var tileContent = [src1, src2, alt, text1, text2, text3];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquarePeekImageAndText02, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_square.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText02_square.png) | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText02_wide.png) |
| Windows Phone 8.1 | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_square.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText02_square.png) | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText02_wide.png) |

<a id="tiles.tiletype.tilesquarepeekimageandtext04"></a>
### :small_blue_diamond: Tiles.tileType.TileSquarePeekImageAndText04

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var src1 = 'ms-appx:///www/images/led_square.png'; /* square 150x150 image */
var src2 = 'ms-appx:///www/images/led_wide.png'; /* wide 310x150 image */
var alt = 'Alternate text'; /* alt text for images */
var tileContent = [src1, src2, alt, text1];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquarePeekImageAndText04, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_square.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText04_square.png) | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windows10/TileSquareText04_wide.png) |
| Windows Phone 8.1 | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_square.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText04_square.png) | Front<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://github.com/andreszs/cordova-plugin-tiles/blob/master/images/windowsphone81/TileSquareText04_wide.png) |

## Image Tiles

Your images for tile updates must be under 200KB and 1024 pixels resolution. 

> For tile updates, these can come either from the app package, local app data, or the web, using ms-appx:///, ms-appdata:///local, and http[s]:// URIs. These URIs are simply assigned to the src attributes of image elements within the XML tile templates. Note again that the first two URIs typically have three slashes at the beginning to denote "the current app"; http:// URIs also require that the Internet (Client) capability be declared in the app’s manifest.

The above information was taken from the free eBook [*Programming Windows Store Apps with HTML, CSS and JavaScript*](https://mva.microsoft.com/ebooks) by Microsoft Press and is &copy; of their respective owners.

### Using Images from the Web

You can use regular images from http and https URLs. **Warning:** When using images from the web, the tile update will be delayed until the image is downloaded. This delay can last a few seconds, depending on the network speed.

### Using Images from the App Package

You can use the images from your www/images directory with the `ms-appx:///` prefix. The following example is used to add the LED images in the Tiles Plugin Sample app.

```javascript
var src1 = 'ms-appx:///www/images/led_square.png';
var src2 = 'ms-appx:///www/images/led_wide.png';
```

### Using the App's Icon

To create a flip tile with the regular app's icon on one side, simply use one of the image [presets](#tilepreset) with the corresponding square and wide icons from the app package, as specified in `config.xml`. For the sample app we are using these files:

```javascript
var src1 = 'ms-appx:///images/Square150x150Logo.scale-100.png'; /* square tile icon */
var src2 = 'ms-appx:///images/SplashScreen.scale-100.png'; /* wide tile icon */
```

## FAQ

#### :small_blue_diamond: Does the plugin update the Primary or Secondary tile?
The plugin only updates **primary tiles**, which must be manually pinned by the user. [Dymanic creation of primary tiles](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-primary-tile-apis) would require the Windows 10 build 15063 API; I don't have neither the device nor the emulator to test that. Secondary tiles have additional disadvantages in Windows Phone 8.1, such as the fact that only 70x70 and 150x150 tiles can be used, excluding larger tile formats.

#### :small_blue_diamond: Can I use Adaptive Tiles?
You can create Windows 10 [adaptive tiles](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-create-adaptive-tiles) with the custom XML method. **Warning:** Adaptive tiles won't work on Windows Phone 8.

#### :small_blue_diamond: Can I use base-64 encoded images in tiles?
No, you can't. You should use local or web images only. However, if you find a way to make base-64 encoded images work, please post your solution in the Issues section.

#### :small_blue_diamond: How do I set the tile background color?
The tile's background color is determined by the `BackgroundColor` preference name in `config.xml`. You cannot dynamically set it using this plugin.

#### :small_blue_diamond: Does the plugin require the Notifications Extensions library?
No, the plugin does not depend on the [Notifications Extensions](https://github.com/WindowsNotifications/NotificationsExtensions) because they are aimed to Windows 10 only. This plugins fully supports the Windows Phone 8 devices family.

#### :small_blue_diamond: Does the plugin work in Windows Phone 7?
This plugin is for the *Universal Windows platform*. For Windows Phone 7 support, you can use the deprecated *Windows Phone platform* and the [com.kolwit.updatelivetile
](https://github.com/kolwit/com.kolwit.updatelivetile) plugin.

#### :small_blue_diamond: How can I report bugs or request new features?
Please post your request or bug report with detailed info on the [Issues](https://github.com/andreszs/cordova-plugin-tiles/issues) section and I'll review it as soon as possible. Don't forget to mention what devices are you using for testing, either real or emulated, and provide screenshots when possible.

#### :small_blue_diamond: How was this plugin tested?

This plugin has been tested with the Tiles Plugin Sample app created with Visual Studio 2015 on the following devices:
- [x] Windows 10.0.15063 desktop PC
- [x] Windows 10.0.14393 Mobile (Microsoft Lumia 435)
- [x] Windows Phone 8.10.14219 (Nokia Lumia 520)
- [x] Windows Phone 8.1 and Windows 10 Mobile emulators provided by Visual Studio 2015
