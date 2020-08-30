/**
 * Extras.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */

/**
 * Request example.
 */
function requestExample() {
	if (validate(gI("dv-form"))) {
		var data = {
			"column01" : gV(gI("column01")),
			"column02" : gV(gI("column02"))
		};		
		request("POST", gz_root + "/api/@_YOUR_API", "", data, "responseExample", true, getCookie("authorization"));
	}
}

/**
 * Response example.
 */
function responseExample(response) {
	var result = JSON.parse(response);
	if (!isEmpty(result)) {
		if (result.response.status == 200) {
			alert("Success!");
			location.reload();
		} else {
			alert("Internal server error.");	
		}
	} else {
		alert("Internal server error.");
	}
}