# Solrock TTS Streamdeck Plugin
 A plugin for the Elgato Streamdeck to manage your [Solrock TTS](https://solrock.mmattdonk.com/) without the dashboard open. Currently only supports the Skip TTS function through the API.
 
# Download/Installing

 [Go to the releases tab](https://github.com/SocksTheWolf/streamdeck-solrocktts/releases/latest/), download the `com.mmattdonk.solrock.streamDeckPlugin` file. Double click to install.
 
# Set up

 1. Drag the Skip TTS button from the Solrock TTS category to an available button slot. 
 1. Click on the button in the streamdeck program to enter the settings. 
 2. Paste in your Solrock Overlay ID. You can find this on [your dashboard](https://solrock.mmattdonk.com/dashboard), it's the URL that appears under the big red DANGER button. **NOTE**: You can paste the entire URL and the plugin will auto-resolve your Overlay ID from the input.
 
 Once that value is set, you can now use the Skip TTS button! 
 
 If the everything works, you'll see a green checkmark on pressing the button. If there's an issue, a yellow caution sign will appear instead.
 
# Building
 
 1. Download the code repository
 2. Find your [Streamdeck plugin install location](https://developer.elgato.com/documentation/stream-deck/sdk/create-your-own-plugin/)
 3. Paste the sdPlugin folder into that folder
 4. Restart the Streamdeck application. 
 
You can now work out of the plugin directory. Do note that any modifications to `app.js` file typically require a restart of the Streamdeck software.
