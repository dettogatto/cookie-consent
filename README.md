# Cookie Consent Bar
[![Donate](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=27Q6J6NGK6JJ2&source=url)

This script can be used to block javascript and make your site GDPR compliant.

## Installation

To install upload the `cookie-consent.js` and `cookie-consent.css` to your website and link them in the `<head>` of all pages, like so:
```
<script type="text/javascript" src="cookie-consent/cookie-consent.js"></script>
<link rel="stylesheet" type="text/css" href="cookie-consent/cookie-consent.css" media="screen" />
```
Lastly you need to identify and block all the scripts that set up cookies on the user machine, like Google Analytics, Google Tag Manager, the Facebook Pixel, etc.
To block a script edit it like this:

`<script type="text/javascript" src="your-script-path"></script>`

V V V

`<script type="text/plain" src="your-script-path" data-cookieconsent></script>`

## Customization

To change the style of the popup you need to edit the `cookie-consent.css` file, using CSS.
Everything you need to edit should be at the top of the file, well documented.
