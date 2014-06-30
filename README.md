# WordPress Plugin Boilerplate Powered

The WordPress Plugin Boilerplate Powered serves as a powered foundation and aims to provide a clear and consistent guide for building your WordPress plugins. Just download, replace a few instances of 'plugin-name' with the name of your own plugin, and you'll get to the meat of coding your plugin in no time!.

## Features

* Plugin Boilerplate Powered is based on Plugin Boilerplate
* deploy.sh script for simple upload on Wordpress.Org SVN
* Shortcode example code
* Contain https://github.com/jtsternberg/CPT_Core
* Contain https://github.com/jtsternberg/Taxonomy_Core
* Contain https://github.com/WebDevStudios/Custom-Metaboxes-and-Fields-for-WordPress & https://github.com/humanmade/Custom-Meta-Boxes
* Contain https://github.com/tommcfarlin/WordPress-Widget-Boilerplate
* Settings link in the plugins list
* Dashicon as dependence of admin stylesheet
* Support for your CPTs in At glance widget in dashboard
* Support for CMBF in the options page
* Added function for custom template (like WooCommerce)

###WordPress Plugin Boilerplate Feature
* The Plugin Boilerplate Powered is fully-based on the WordPress [Plugin API](http://codex.wordpress.org/Plugin_API).
* Uses [PHPDoc](http://en.wikipedia.org/wiki/PHPDoc) conventions to document the code.
* Example values are given, so you can see what needs to be changed.
* Uses a strict file organization scheme to make sure the assets are easily maintainable.
* Note that this boilerplate includes a `.pot` as a starting translation file.
* Notes on managing assets prior to deployment are covered below
* Tools used for translation are below

###Extra

* Support for a custom use of Wordpress Media Picker: https://github.com/thomasgriffin/New-Media-Image-Uploader  
* WP Code Generator http://generatewp.com/

## Contents

The WordPress Plugin Boilerplate Powered includes the following files:

* This README, a ChangeLog, and a `gitignore` file.
* A subdirectory called `plugin-name` that represents the core plugin file.

## Installation

1. Copy the `plugin-name` directory into your `wp-content/plugins` directory
2. Navigate to the *Plugins* dashboard page
3. Locate the menu item that reads *TODO*
4. Click on *Activate*

This will activate the WordPress Plugin Boilerplate. Because the Boilerplate has no real functionality, nothing will be added to WordPress; however, this demonstrates exactly how your plugin should behave while you're working with the Boilerplate.

###Git Clone
	
	git clone https://github.com/Mte90/WordPress-Plugin-Boilerplate-Powered
	cd WordPress-Plugin-Boilerplate-Powered
	git submodule update --init --recursive

## Recommended Tools

### Localization Tools

The WordPress Plugin Boilerplate uses a variable to store the text domain used when internationalizing strings throughout the Boilerplate. To take advantage of this method,
there are tools that are recommended for providing correct, translatable files:

* [Poedit](http://www.poedit.net/)
* [makepot](http://i18n.svn.wordpress.org/tools/trunk/)
* [i18n](https://github.com/grappler/i18n)
* [grunt-wp-i18n](https://github.com/blazersix/grunt-wp-i18n)

Any of the above tools should provide you with the proper tooling to localize the plugin.

## License

The WordPress Plugin Boilerplate Powered is licensed under the GPL v2 or later.

> This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License, version 2, as
published by the Free Software Foundation.

> This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

> You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA

## Important Notes

### Licensing

The WordPress Plugin Boilerplate Powered is licensed under the GPL v2 or later; however, if you opt to use third-party code that is not compatible with v2, then you may need to switch to using code that is GPL v3 compatible.

For reference, [here's a discussion](http://make.wordpress.org/themes/2013/03/04/licensing-note-apache-and-gpl/) that covers the Apache 2.0 License used by [Bootstrap](http://twitter.github.io/bootstrap/).

### Includes

Note that if you include your own classes, or third-party libraries, there are three locations in which said files may go:

1. `plugin-name/includes` is where shared functionality should be placed between `public` and `admin`
2. `plugin-name/admin/includes` is where dashboard-specific classes and dependencies should be placed
3. `plugin-name/public/includes` is where public-specific classes and dependencies should be placed

## Assets

The assets directory provides two files that are used to represent plugin header images.

When committing your work to the WordPress Plugin Repository, these files should reside in their own `assets` directory, not in the root of the plugin. The initial repository will contain three directories:

1. `branches`
2. `tags`
3. `trunk`

You'll need to add an `assets` directory into the root of the repository. So the final directory structure should include *four* directories:

1. `assets`
2. `branches`
3. `tags`
4. `trunk`

Next, copy the contents of the `assets` directory that are bundled with the Boilerplate into the root of the repository. This is how the WordPress Plugin Repository will retrieve the plugin header image.

Of course, you'll want to customize the header images from the place holders that are provided with the Boilerplate.

For more, in-depth information about this, read [this post](http://make.wordpress.org/plugins/2012/09/13/last-december-we-added-header-images-to-the/) by [Otto](https://twitter.com/Otto42).

Plugin screenshots can be saved to one of two locations:

1. The old way is to keep them in the root of the plugin directory. This will increase the size of the download of the plugin, but make the images accessible for those who install it. This is deprecated in the WordPress Plugin Boilerplate
2. With the alternative way, you can save the screenshots in the `assets` directory, as well. The repository will look here for the screenshot files as well; however, they will not be included in the plugin download thus reducing the size of the plugin. As of its latest version, the WordPress Plugin Boilerplate now follows this convention.
