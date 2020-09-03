/**
 * Extras.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */

window.onload = handler;

function handler() {
	mask();
}

var root = "http://localhost/divmon-tools";
var gateway = "http://localhost/divmon-tools-api";

/**
 * Request example.
 */
function requestExample() {
	if (validate(gI("dv-form"))) {
		var data = {
			"@_YOUR_COLUMN_01" : gV(gI("@_YOUR_COLUMN_01")),
			"@_YOUR_COLUMN_02" : gV(gI("@_YOUR_COLUMN_02"))
		};		
		request("POST", gateway + "/@_YOUR_API", "", data, "responseExample", true, getCookie("authorization"));
	}
}

/**
 * Response example.
 *
 * @param {String} response 
 */
function responseExample(response) {
	var result = JSON.parse(response);
	if (!isEmpty(result)) {
		if (result.status == 200) {
			alert("Success!");
		} else {
			alert("Internal server error.");	
		}
	} else {
		alert("Internal server error.");
	}
}