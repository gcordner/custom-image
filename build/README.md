## What This Plugin Does
This plugin creates a custom image block for the geoffcordner.com site. Because this site alternates between vertical (portrait) and horizontal (landscape) images, a class for portrait or landscape can be applied directly in the block, without needing to manually add custom classes. It also removes all uneccessary options like image size, alignment, etc. because those do not change.

## What to Include in the Plugin Upload

### PHP Files
Any PHP files that your plugin uses, such as `index.php`, `render.php` (if you still need server-side rendering), or any other PHP files that are part of the plugin’s functionality.

### Build/Compiled JavaScript and CSS Files
If you're using a build process (which is common with modern WordPress block development), you should include the compiled JavaScript and CSS files. These are typically found in a `build` or `dist` directory, depending on how you've configured your build setup.

### Assets and Static Files
Include any static assets that your plugin uses. This could be images, additional CSS files that aren’t processed by your build system, or static JavaScript files.

### `block.json` and Other Configuration Files
Include any configuration files such as `block.json` which WordPress uses to understand the block's properties and behaviors.

### Language Files
If your plugin has been internationalized and contains translations, include the language files.

### Readme and License Files
If you have a `README.md` or any license file (`LICENSE.txt`), include these as well. This is especially important if you are distributing the plugin publicly, as it provides users with necessary information about the plugin's use and distribution.

## What Not to Include

### `node_modules`
This directory contains the Node.js packages used during development and is not needed in production. It can be significantly large and is unnecessary for running the plugin.

### Source Files Before Compilation
If you are using a build tool to compile your JavaScript and CSS, you do not need to include the source files (like those found in `src` or similar directories) unless you want to allow users to modify the source directly.

### Development-specific Configuration Files
Files like `package.json`, `webpack.config.js`, `babel.config.js`, or any other configuration files used exclusively for development should not be included in the production version of the plugin.

## How to Prepare the Plugin for Upload

### Build the Plugin
Run your build process to make sure all JavaScript and CSS files are up to date.

### Create a Zip File
Typically, WordPress plugins are uploaded in `.zip` format. You should zip the plugin directory, excluding the `node_modules` directory and any other non-essential files.

### Upload Through WordPress
Log in to the WordPress admin panel, go to the Plugins section, and choose “Add New.” Then, upload the zip file using the "Upload Plugin" button.
