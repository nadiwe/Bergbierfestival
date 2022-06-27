
var permissionsManager: PermissionsManager

if (PermissionsManager.areLocationPermissionsGranted(this)) {

  // Permission sensitive logic called here, such as activating the Maps SDK's LocationComponent to show the device's location



} else {
	permissionsManager = PermissionsManager(this)
	permissionsManager.requestLocationPermissions(this)
}

override fun onRequestPermissionsResult(requestCode: Int, permissions: Array<String>,
	grantResults: IntArray) {
	permissionsManager.onRequestPermissionsResult(requestCode, permissions, grantResults)
}
