# Solrock TTS Streamdeck Plugin
 A plugin for the Elgato Streamdeck to manage your [Solrock TTS](https://solrock.mmattdonk.com/) without the dashboard open. Currently only supports the Skip TTS function through the API.
 
# Download/Installing

 [Go to the releases tab](https://github.com/SocksTheWolf/streamdeck-solrocktts/releases/latest/), download the `com.mmattdonk.solrock.streamDeckPlugin` file. Double click to install.
 
# Set up

 Drag the Skip TTS button from the Solrock TTS category to an available button slot. Click on the button in the streamdeck program and enter in your Solrock Overlay ID. You can find this on [your dashboard](https://solrock.mmattdonk.com/dashboard), it's the URL that appears under the big red DANGER button. You can paste the entire URL and the plugin will auto-resolve your overlay id from the input.
 
 Once that value is set, you can now use the Skip TTS button as necessary. If the everything works, you'll be presented with a green checkmark when you press the button on your streamdeck. If there's an issue, a yellow caution sign will appear instead.
 
# Building
 Download the code repository. Find your [Streamdeck plugin install location](https://developer.elgato.com/documentation/stream-deck/sdk/create-your-own-plugin/) and paste the sdPlugin folder into that folder. Restart the Streamdeck application and you can work out of that directory.
