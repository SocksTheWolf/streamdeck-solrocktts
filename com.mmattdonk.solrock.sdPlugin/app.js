/// <reference path="libs/js/action.js" />
/// <reference path="libs/js/stream-deck.js" />

const myAction = new Action('com.mmattdonk.solrock.skiptts');
const APIEndpoint = "https://solrock.mmattdonk.com/api/streamers/";
const APIKey = "4@K4rLC%G#dn$t!LhRtWVmvEZtstmuA&";
var OverlayID = "";

$SD.onConnected(({ actionInfo, appInfo, connection, messageType, port, uuid }) => {
	console.log('Solrock - Stream Deck connected!');
	// Fetch the user's global settings
	$SD.getGlobalSettings();
});

$SD.onDidReceiveGlobalSettings(({payload}) => {
	const {settings} = payload;
	OverlayID = settings.overlayId;
	// TODO: Grab the streamer ID then use that to be able to rollback tts
});

myAction.onKeyUp(({ action, context, device, event, payload }) => {
	if (OverlayID === "") {
		console.log('OverlayID does not exist, check settings!');
		$SD.showAlert(context);
		return;
	}
	
	const req = new XMLHttpRequest();
	req.open("POST", APIEndpoint + "skiptts");
	req.setRequestHeader("Content-Type", "application/json");
	req.setRequestHeader("secret", APIKey);
	req.setRequestHeader("source", "streamdeck");
	req.onreadystatechange = () => {
		if (req.readyState === 4) {
			const status = req.status;
			if (status === 0 || (status >= 200 && status < 400)) {
				$SD.showOk(context);
			} else {
				$SD.showAlert(context);
			}
		}
	};
	const payloadObject = {
		"overlayId": OverlayID
	};
	req.send(JSON.stringify(payloadObject));
});

