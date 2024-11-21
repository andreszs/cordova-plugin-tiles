![npm](https://img.shields.io/npm/dt/cordova-plugin-tiles) ![npm](https://img.shields.io/npm/v/cordova-plugin-tiles) ![GitHub package.json version](https://img.shields.io/github/package-json/v/andreszs/cordova-plugin-tiles?color=FF6D00&label=master&logo=github) ![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/andreszs/cordova-plugin-tiles) ![GitHub top language](https://img.shields.io/github/languages/top/andreszs/cordova-plugin-tiles) ![GitHub](https://img.shields.io/github/license/andreszs/cordova-plugin-tiles) ![GitHub last commit](https://img.shields.io/github/last-commit/andreszs/cordova-plugin-tiles)

# cordova-plugin-tiles

Windows Tiles plugin for Apache Cordova and Windows Universal Platform (UWP). Compatible with Windows 10, Windows 10 Mobile, Windows Phone 8.1 and Windows Phone 8.

## Table of Contents

+ [Supported Platforms](#supported-platforms)
+ [Compatibility](#compatibility)
+ [Installation](#installation)
+ [Methods](#methods)
  - [enableNotificationQueue](#enableNotificationQueue)
  - [updateTilePreset](#updatetilepreset)
  - [updateTileXml](#updatetilexml)
  - [clearTile](#cleartile)
+ [Tile Showcase](#tile-showcase)
  - [TileSquareBlock](#tiles.tiletype.tilesquareblock)
  - [TileSquareText02](#tiles.tiletype.tilesquaretext02)
  - [TileSquareText04](#tiles.tiletype.tilesquaretext04)
  - [TileSquareImage](#tiles.tiletype.tilesquareimage)
  - [TileSquarePeekImageAndText02](#tiles.tiletype.tilesquarepeekimageandtext02)
  - [TileSquarePeekImageAndText04](#tiles.tiletype.tilesquarepeekimageandtext04)
+ [Image Tiles](#image-tiles)
+ [Sample App](#sample-app)
+ [FAQ](#faq)

## Supported Platforms

- Windows Universal
- Browser (filler platform only)

## Compatibility

- [x] Windows 10
- [x] Windows 10 Mobile
- [x] Windows Phone 8.1
- [x] Windows Phone 8

## Installation

### Install latest version from NPM

```bash
  cordova plugin add cordova-plugin-tiles
```

### Install latest version from master

```bash
  cordova plugin add https://github.com/andreszs/cordova-plugin-tiles
```

#### Current state from git

* Cordova: `cordova plugin add https://github.com/andreszs/cordova-plugin-tiles`
* PhoneGap: `phonegap local plugin add https://github.com/andreszs/cordova-plugin-tiles`

## Methods

<a id="enableNotificationQueue"></a>
#### :small_orange_diamond: cordova.plugins.Tiles.enableNotificationQueue(successCallback, errorCallback)

Enables the tile [notification queue](https://learn.microsoft.com/en-us/previous-versions/windows/apps/hh781199(v=win.10)).

Use of the notification queue allows a tile to display a rotation of up to five notifications. By default, a tile on the Start screen displays the content of a single notification until a new notification replaces the current notification. With notification queuing enabled, up to five notifications are maintained in the queue and the tile cycles through them. The notification queue can be used with all notification delivery types: local, scheduled, periodic, or push.

When queuing is enabled, a maximum of five tile notifications can automatically cycle on the tile. By default, the replacement policy for notifications in the queue is first in, first out (FIFO); when the queue is full and a new notification arrives, the oldest notification is removed. Note that the notification display order does not follow a strict linear pattern. Users can see the notifications in a different order than they arrived in.

<a id="updatetilepreset"></a>
#### :small_orange_diamond: cordova.plugins.Tiles.updateTilePreset(successCallback, errorCallback, tilePreset, tileContent)

Updates a tile from the preset of primary tiles provided by the plugin. This is the recommended and most compatible option, as it will ensure the tile is shown. Only presets compatible with all devices are available.

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>Function</code> | Function to call on success  |
| errorCallback | <code>Function</code> | Function to call on failure  |
| tilePreset | <code>[tilePreset](#tilepreset)</code> | Predefined tile schema to use |
| tileContent | <code>[tileContent](#tilecontent)</code> | Tile contents (text and/or images) |

Refer to the <code>[tilePreset](#tilepreset)</code> and <code>[tileContent](#tilecontent)</code> sections for information regarding these arguments. Your `tileContent` argument must be an array with the required options according to the selected `tilePreset`.

<a id="updatetilexml"></a>
#### :small_orange_diamond: cordova.plugins.Tiles.updateTileXml(successCallback, errorCallback, tileXml, tileTag)

Updates a tile using your custom `tileXml` schema.

| Param | Type | Description |
| --- | --- | --- |
| successCallback | <code>Function</code> | Function to call on success  |
| errorCallback | <code>Function</code> | Function to call on failure  |
| tileXml | <code>String</code> | A plain text XML tile.  |
| tileTag | <code>String</code> | A string of no more than 16 alphanumeric characters to identify notification in the [queue](https://learn.microsoft.com/en-us/previous-versions/windows/apps/hh868234(v=win.10).  |

This method allows you to create any type of tile, including [adaptive tiles](https://docs.microsoft.com/en-us/windows/uwp/controls-and-patterns/tiles-and-notifications-create-adaptive-tiles) which require Windows 10. With this method you could create peek tiles such as this:

![Adaptive Tiles Sample](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/adaptive_tile_xml.png)

##### Tiles reference pages:
- [Create adaptive tiles](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/create-adaptive-tiles "Create adaptive tiles")
- [Adaptive tiles schema](https://learn.microsoft.com/en-us/windows/uwp/launch-resume/adaptive-tiles-schema "Adaptive tiles schema")
- [Notifications Visualizer app](https://www.microsoft.com/en-us/store/p/notifications-visualizer/9nblggh5xsl1)
- [MSDN Tile Template Catalog](https://msdn.microsoft.com/library/windows/apps/hh761491)

<a id="cleartile"></a>
#### :small_orange_diamond: cordova.plugins.Tiles.clearTile(successCallback, errorCallback)

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
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquareBlock

```javascript
var tileContent = ['10', 'New', 'Wide tile sample text']; /* first argument should be a number */
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareBlock, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareBlock_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareBlock_wide.png) |

<a id="tiles.tiletype.tilesquaretext02"></a>
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquareText02

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var text2 = 'Curabitur mattis quam sit amet urna fringilla, vitae tristique felis facilisis.';
var tileContent = [text1, text2];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareText02, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText02_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText02_wide.png) |
| Windows Phone 8.1 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText02_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText02_wide.png) |

<a id="tiles.tiletype.tilesquaretext04"></a>
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquareText04

```javascript
var text1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
var tileContent = [text1];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareText04, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText04_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText04_wide.png) |
| Windows Phone 8.1 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText04_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText04_wide.png) |

<a id="tiles.tiletype.tilesquareimage"></a>
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquareImage

```javascript
var src1 = 'ms-appx:///www/images/led_square.png'; /* square 150x150 image */
var src2 = 'ms-appx:///www/images/led_wide.png'; /* wide 310x150 image */
var alt = 'Alternate text'; /* alt text for images */
var tileContent = [src1, src2, alt];
Tiles.updateTilePreset(tileSuccess, tileError, Tiles.tileType.TileSquareImage, tileContent);
```

| OS | Square Tile | Wide Tile |
| --- | --- | --- |
| Windows 10 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_wide.png) |
| Windows Phone 8.1 | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_square.png) | ![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_wide.png) |

<a id="tiles.tiletype.tilesquarepeekimageandtext02"></a>
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquarePeekImageAndText02

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
| Windows 10 | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_square.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText02_square.png) | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText02_wide.png) |
| Windows Phone 8.1 | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_square.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText02_square.png) | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText02_wide.png) |

<a id="tiles.tiletype.tilesquarepeekimageandtext04"></a>
### :small_blue_diamond: cordova.plugins.Tiles.tileType.TileSquarePeekImageAndText04

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
| Windows 10 | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_square.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText04_square.png) | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windows10/TileSquareText04_wide.png) |
| Windows Phone 8.1 | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_square.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText04_square.png) | Front<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareImage_wide.png)<br/>Back<br/>![tile](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/windowsphone81/TileSquareText04_wide.png) |

## Image Tiles

Your images for tile updates must be under 200KB and 1024 pixels resolution.

> For tile updates, these can come either from the app package, local app data, or the web, using ms-appx:///, ms-appdata:///local, and http[s]:// URIs. These URIs are simply assigned to the src attributes of image elements within the XML tile templates. Note again that the first two URIs typically have three slashes at the beginning to denote "the current app"; http:// URIs also require that the Internet (Client) capability be declared in the app�s manifest.

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

## Sample App

You can view the tiles plugin in action with the [Tiles Plugin Sample app](https://www.microsoft.com/store/apps/9nkz4fzh6bfq) which you can get from the store right now. The app also allows you to create and test your custom XML tile schemas easily.

![Windows Live Tiles Plugin Sample App](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/tiles_plugin_sample_app_1.png) ![Windows Live Tiles Plugin Sample App](https://raw.githubusercontent.com/andreszs/cordova-plugin-tiles/master/images/tiles_plugin_sample_app_2.png)

The app is compatible with:

> Windows 10, Windows 8.1, Windows 10 Mobile, Windows Phone 8.1

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

#### :small_blue_diamond: How does the plugin integrate with the Browser platform?
The plugin running in the Browser platform will simply output console commands showing what method was invoked.

#### :small_blue_diamond: Does the plugin work in Windows Phone 7?
This plugin is for the *Universal Windows platform*. For Windows Phone 7 support, you can use the deprecated *Windows Phone platform* and the [com.kolwit.updatelivetile
](https://github.com/kolwit/com.kolwit.updatelivetile) plugin.

#### :small_blue_diamond: How can I report bugs or request new features?
Please post your request or bug report with detailed info on the [Issues](https://github.com/andreszs/cordova-plugin-tiles/issues) section and I'll review it as soon as possible. Don't forget to mention what devices are you using for testing, either real or emulated, and provide screenshots when possible.

