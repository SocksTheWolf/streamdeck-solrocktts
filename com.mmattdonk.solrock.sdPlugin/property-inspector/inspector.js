/// <reference path="../libs/js/property-inspector.js" />
/// <reference path="../libs/js/utils.js" />

$PI.onConnected((jsn) => {
	const gsForm = document.querySelector('#global-settings');
	const {actionInfo, appInfo, connection, messageType, port, uuid} = jsn;
	const {payload, context} = actionInfo;
	const {settings} = payload;

	gsForm.addEventListener(
		'input',
		Utils.debounce(150, () => {
		    const value = Utils.getFormValue(gsForm);
		    $PI.setGlobalSettings(value);
		})
	);

	// Clean up the input for overlay id if the user pastes the entire url in.
	const OverlayID = document.getElementById("IDInputBox");	
	OverlayID.addEventListener('input', function() {
		this.value = this.value.replace("https://solrock.mmattdonk.com/overlay/", "");
	}.bind(OverlayID));
	
	$PI.getGlobalSettings();
});

$PI.onDidReceiveGlobalSettings(({payload}) => {
	const {settings} = payload;
	Utils.setFormValue(settings, document.querySelector('#global-settings'));
});

function OpenDashboard() {
	$PI.openUrl("https://solrock.mmattdonk.com/dashboard");
}
