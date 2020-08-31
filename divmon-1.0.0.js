/**
 * Divmon JS.
 * 
 * @author  Mario Sakamoto <mskamot@gmail.com>
 * @license MIT http://www.opensource.org/licenses/MIT
 * @see     https://wtag.com.br/divmon
 * @version 1.0.0, 26 Jul 2014
 */
var file64 = "";

/**
 * Set attribute
 *
 * @param {Element} e Element
 * @param {String} a Attribute
 * @param {String} f Function
 */
function sA(e, a, f) {
	try {
		e.setAttribute(a, f);
	} catch(e) { }
}

/**
 * Get attribute
 *
 * @param {Element} e Element
 * @param {String} a Attribute
 * @return {String} Function
 */
function gA(e, a) {
	try {
		return e.getAttribute(a);
	} catch(e) { }
}

/**
 * Set border
 *
 * @param {Element} e Element
 * @param {String} b Border
 */
function sB(e, b) {
	try {
		e.style.border = b;
	} catch(e) { }
}

/**
 * Get border
 *
 * @param {Element} e Element
 * @return {String} Border
 */
function gB(e) {
	try {
		return e.style.border;
	} catch(e) { }
}

/**
 * Set border top
 *
 * @param {Element} e Element
 * @param {String} b Border top
 */
function sBt(e, b) {
	try {
		e.style.borderTop = b;
	} catch(e) { }	
}

/**
 * Get border top
 *
 * @param {Element} e Element
 * @return {String} Border top
 */
function gBt(e) {
	try {
		return e.style.borderTop;
	} catch(e) { }
}

/**
 * Set border right
 *
 * @param {Element} e Element
 * @param {String} b Border right
 */
function sBr(e, b) {
	try {
		e.style.borderRight = b;
	} catch(e) { }	
}

/**
 * Get border right
 *
 * @param {Element} e Element
 * @return {String} Border right
 */
function gBr(e) {
	try {
		return e.style.borderRight;
	} catch(e) { }
}

/**
 * Set border bottom
 *
 * @param {Element} e Element
 * @param {String} b Border bottom
 */
function sBb(e, b) {
	try {
		e.style.borderBottom = b;
	} catch(e) { }
}

/**
 * Get border bottom
 *
 * @param {Element} e Element
 * @return {String} Border bottom
 */
function gBb(e) {
	try {
		return e.style.borderBottom;
	} catch(e) { }
}

/**
 * Set border left
 *
 * @param {Element} e Element
 * @param {String} b Border left
 */
function sBl(e, b) {
	try {
		e.style.borderLeft = b;
	} catch(e) { }
}

/**
 * Get border left
 *
 * @param {Element} e Element
 * @return {String} Border left
 */
function gBl(e) {
	try {
		return e.style.borderLeft;
	} catch(e) { }
}

/**
 * Set class
 *
 * @param {Element} e Element
 * @param {String} c Class
 */
function sC(e, c) {
	try {
		e.className = c;
	} catch(e) { }
}

/**
 * Get class
 *
 * @param {Element} e Element
 * @return {String} Class
 */
function gC(e) {
	try {
		return e.className;
	} catch(e) { }
}

/**
 * Set display
 *
 * @param {Element} e Element
 * @param {String} d Display
 */
function sD(e, d) {
	try {
		e.style.display = d;
	} catch(e) { }	
}

/**
 * Get display
 *
 * @param {Element} e Element
 * @return {String} Display
 */
function gD(e) {
	try {
		return e.style.display;
	} catch(e) { }
}

/**
 * Set height
 *
 * @param {Element} e Element
 * @param {String} h Height
 */
function sE(e, h) {
	try {
		e.style.height = h;
	} catch(e) { }	
}

/**
 * Get height
 *
 * @param {Element} e Element
 */
function gE(e) {
	try {
		return e.style.height;
	} catch(e) { }	
}

/**
 * Get display
 *
 * @param {Element} e Element
 * @return {String} Display
 */
function gD(e) {
	try {
		return e.style.display;
	} catch(e) { }
}

/**
 * Set focus
 *
 * @param {Element} e Element
 */
function sF(e) {
	try {
		e.focus();
	} catch(e) { }
}

/**
 * Set background
 *
 * @param {Element} e Element
 * @param {String} g Background
 */
function sG(e, g) {
	try {
		e.style.background = g;
	} catch(e) { }
}

/**
 * Get background
 *
 * @param {Element} e Element
 * @return {String} Background
 */
function gG(e) {
	try {
		return e.style.background;
	} catch(e) { }
}

/**
 * Set HTML
 *
 * @param {Element} e Element
 * @param {String} h HTML
 */
function sH(e, h) {
	try {
		e.innerHTML = h;
	} catch(e) { }
}

/**
 * Get HTML
 *
 * @param {Element} e Element
 * @return {String} HTML
 */
function gH(e) {
	try {
		return e.innerHTML;
	} catch(e) { }
}

/**
 * Get id
 *
 * @param {String} i Id
 * @return {Element} Element
 */
function gI(i) {
	try {
		return document.getElementById(i);
	} catch(e) { }
}

/**
 * Get length
 *
 * @param {Element} e Element
 * @return {Integer} Length
 */
function gL(e) {
	try {
		return e.length;
	} catch(e) { }
}

/**
 * Get childs
 *
 * @param {Element} e Element
 * @param {String} c Child
 * @return {Array} Elements
 */
function gN(e, c) {
	try {
		return e.getElementsByTagName(c);
	} catch(e) { }
}

/**
 * Set color
 *
 * @param {Element} e Element
 * @param {String} o Color
 */
function sO(e, o) {
	try {
		e.style.color = o;
	} catch(e) { }	
}

/**
 * Get parent node
 *
 * @param {Element} e Element
 * @return {Element} Element
 */
function gP(e) {
	try {
		return e.parentNode;
	} catch(e) { }
}

/**
 * Set placeholder
 *
 * @param {String} e Element
 * @param {String} p Placeholder
 */
function sPh(e, p) {
	try {
		e.placeholder = p;
	} catch(e) { }	
}

/**
 * Get placeholder
 *
 * @param {String} e Element
 * @return {String} Placeholder
 */
function gPh(e) {
	try {
		return e.placeholder;
	} catch(e) { }
}

/**
 * Get classes
 *
 * @param {String} c Classes
 * @return {Array} Elements
 */
function gS(c) {
	try {
		return document.getElementsByClassName(c);
	} catch(e) { }
}

/**
 * Get tag name
 *
 * @param {String} n
 * @return {Array} Elements
 */
function gT(n) {
	try {
		return document.getElementsByTagName(n);
	} catch(e) { }
}

/**
 * Set value
 *
 * @param {Element} e Element
 * @param {String} v Value
 */
function sV(e, v) {
	try {
		e.value = v;
	} catch(e) { }
}

/**
 * Get value
 *
 * @param {Element} e Element
 * @return {String} Value
 */
function gV(e) {
	try {
		return e.value;
	} catch(e) { }
}

/**
 * Set width
 *
 * @param {Element} e Element
 * @param {String} w Width
 */
function sW(e, w) {
	try {
		e.style.width = w;
	} catch(e) { }	
}

/**
 * Get width
 *
 * @param {Element} e Element
 */
function gW(e) {
	try {
		return e.style.width;
	} catch(e) { }	
}

/**
 * Get type
 *
 * @param {Element} e Element
 * @return {String} Type
 */
function gY(e) {
	try {
		return e.type;
	} catch(e) { }
}

/**
 * Is empty.
 * 
 * @param  {Object} object 
 * @return {Boolean}
 */
function isEmpty(object) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
			return false;
		}
    }
    return true;
} 

/**
 * Initialize request.
 */
function initializeRequest() {
    if (window.XMLHttpRequest) {
        if (navigator.userAgent.indexOf("MSIE") != -1) {
            isIE = true;
		}
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        isIE = true;
        try {   	
            return new ActiveXObject("Microsoft.XMLHTTP");	
        } catch(e) {
    	    try {
    	        return new ActiveXObject("Msxml2.XMLHTTP");
    	    } catch(e) { }
        }
    }
}

/**
 * Request.
 *
 * @param {String} method The HTTP method
 * @param {String} uri The URI
 * @param {String} parameters The URI parameters
 * @param {String || Object} object The attributes with a JSON or Object 
 * @param {String} callback The name of function to call after response
 * @param {Boolean} convertion Convert the object to JSON string format 
 * @param {String} authorization Authorization token
 */
function request(method, uri, parameters, object, callback, convertion, authorization) {
	sD(gI("dv-loading"), "block");
	var request = initializeRequest();
	request.open(method, (parameters != "" ? (uri + "?" + parameters) : uri), true);			
	request.setRequestHeader("Authorization", authorization);
	request.setRequestHeader("Accept-Language", "pt-BR");
	request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	request.onreadystatechange = function() {
		if (request.readyState == 4 && (request.status == 200 || request.status == 300 || request.status == 400)) {
			sD(gI("dv-loading"), "none");
			eval(callback + "('" + request.responseText + "')");
		} else if (request.readyState == 4 && request.status == 500) {
			sD(gI("dv-loading"), "none");
			alert("500 Internal Server Error");
		} else if (request.readyState == 4 && (request.status == 404 || request.status == 501)) {
			sD(gI("dv-loading"), "none");
			alert("501 Not Implemented");
		} else if (request.readyState == 4 && request.status == 502) {
			sD(gI("dv-loading"), "none");
			alert("502 Bad Gateway");
		} else if (request.readyState == 4 && (request.status == 0 || request.status == 503)) {
			sD(gI("dv-loading"), "none");
			alert("503 Service Unavailable");
		} else if (request.readyState == 4 && request.status == 504) {
			sD(gI("dv-loading"), "none");
			alert("504 Gateway Timeout");
		} else if (request.readyState == 4 && request.status == 505) {
			sD(gI("dv-loading"), "none");
			alert("505 HTTP Version Not Supported");
		}
	};
	var data = "";
	if (method == "POST" || method == "PUT") {
		data = "request=" + (convertion ? JSON.stringify(object) : object);
	}
	request.send(data);
}

/**
 * Set cookie.
 * 
 * @param {String} cookieName 
 * @param {String} cookieValue 
 * @param {Integer} cookieExpirationDays 
 */
function setCookie(cookieName, cookieValue, cookieExpirationDays) {
	var date = new Date();
	date.setTime(date.getTime() + (cookieExpirationDays * 8 * 60 * 60 * 1000));
	var expires = "expires=" + date.toUTCString();
	document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

/**
 * Get cookie.
 * 
 * @param {String} cookieName 
 */
function getCookie(cookieName) {
	var name = cookieName + "=";
	var cookie = "";
	var cookiesList = document.cookie.split(";");
	for (var x = 0; x < cookiesList.length; x++) {
		cookie = cookiesList[x];
		while (cookie.charAt(0) == " ") {
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length);
		}
	}
	return "";
}

/**
 * Remove cookie.
 * 
 * @param {String} cookieName 
 */
function removeCookie(cookieName) {
	document.cookie = cookieName + "=;expires=Thu, 01 Jan 1970;path=/";
}

/**
 * Get parameter.
 * 
 * @param  {String} uri
 * @return {Object}
 */
function getParameter(uri) {
	var parameter = uri ? uri.split("?")[1] : window.location.search.slice(1);
	var object = {};
	if (parameter) {
		parameter = parameter.split("#")[0];
		var parameterList = parameter.split("&");
		var parameterItem = [];
		var paramName = "";
		var paramValue = "";
		var key = ""
		var index = "";
		for (var x = 0; x < parameterList.length; x++) {
			parameterItem = parameterList[x].split("=");
			paramName = parameterItem[0].toLowerCase();
			paramValue = typeof (parameterItem[1]) === "undefined" ? true : parameterItem[1];
			if (paramName.match(/\[(\d+)?\]$/)) {
				key = paramName.replace(/\[(\d+)?\]/, "");
				if (!object[key]) object[key] = [];
				if (paramName.match(/\[\d+\]$/)) {
					index = /\[(\d+)\]/.exec(paramName)[1];
					object[key][index] = paramValue;
				} else {
					object[key].push(paramValue);
				}
			} else {
				if (!object[paramName]) {
					object[paramName] = paramValue;
				} else if (object[paramName] && typeof object[paramName] === "string"){
					object[paramName] = [object[paramName]];
					object[paramName].push(paramValue);
				} else {
					object[paramName].push(paramValue);
				}
			}
		}
	}
	return object;
}

/**
 * Mask Preparation.
 */
function mask() {
	var pattern = "";
	var inputs = gT("input");
	for (var x = 0; x < gL(inputs); x++) {
		if (gC(inputs[x]).indexOf("dv-datetime") > 0) {
			pattern = "__/__/____ __:__";
		} else if (gC(inputs[x]).indexOf("dv-date") > 0) {
			pattern = "__/__/____";
		} else if (gC(inputs[x]).indexOf("dv-time") > 0) {
			pattern = "__:__:__";
		} else if (gC(inputs[x]).indexOf("dv-integer") > 0) {
			sA(inputs[x], "onkeypress", "integer(this, event);");
		} else if (gC(inputs[x]).indexOf("dv-double") > 0) {
			sA(inputs[x], "onkeypress", "decimal(this, event);");
			sA(inputs[x], "onkeydown", "decimalClean(this, event);");
		} else if (gC(inputs[x]).indexOf("dv-cpf") > 0) {
			pattern = "___.___.___-__";
		} else if (gC(inputs[x]).indexOf("dv-phone") > 0) {
			pattern = "(__) ____-____";
		} else if (gC(inputs[x]).indexOf("dv-cellphone") > 0) {
			pattern = "(__) _-____-____";
		} else if (gC(inputs[x]).indexOf("dv-cep") > 0) {
			pattern = "_____-___";
		}
		if (pattern != "") {
			sPh(inputs[x], pattern);
			sA(inputs[x], "onkeypress", "maskMe(this, event, '" + pattern + "');");
			sA(inputs[x], "onblur", "isMask(this, '" + pattern + "'); "  + (gA(inputs[x], "onblur") != null ? 
					gA(inputs[x], "onblur") : ""));
		} else if (gC(inputs[x]).indexOf("dv-required") > 0) {
			sA(inputs[x], "onblur", "isNull(this); " + (gA(inputs[x], "onblur") != null ? gA(inputs[x], "onblur") : 
					""));
		}
		pattern = "";
	}
}

/**
 * Mask effect.
 *
 * @param {Element} element
 * @param {Event} event
 * @param {String} pattern
 */
function maskMe(element, event, pattern) {
	if (event.keyCode < 48 || event.keyCode > 57) {
		event.returnValue = false;
	} else {
		var position = [];
		var mask = [];
		for (var x = 0; x < gL(pattern); x++) {
			if (pattern.charAt(x) != "_") {
				position.push(x);
				mask.push(pattern.charAt(x));
			}
		}
		for (var x = 0; x < gL(position); x++) {
			if (gL(gV(element)) == position[x]) {
				sV(element, gV(element) + mask[x]);
			} 
			if (gL(gV(element)) == gL(pattern)) {
				sV(element, gV(element).substring(0, gL(pattern) - 1));
			}	 
		}
	}
}

/**
 * Mask check.
 *
 * @param {Element} element
 * @param {String} pattern
 */
function isMask(element, pattern) {
	if (element.value == "" && gC(element).indexOf("dv-required") > 0) {
		sB(element, "solid 1px #cc2b2b");
		sG(element, "#fffafa");
		sPh(element, pattern + " Campo obrigatório");
	} else {
		mask = true;
		if (gL(gV(element)) == gL(pattern)) {
			for (var x = 0; x < gL(pattern); x++) {
				if (pattern.charAt(x) == "_") {
					if (isNaN(gV(element).charAt(x))) {
						mask = false;
						break;
					}
				} else {
					if (pattern.charAt(x) != gV(element).charAt(x)) {
						mask = false;
						break;
					}
				}
			}
			if (mask) {
				if (gC(element).indexOf("dv-required") > 0) {
					sB(element, "");
					sG(element, "");
					sPh(element, pattern + " Campo obrigatório");
				} else {
					sB(element, "");
					sG(element, "");
					sPh(element, pattern);
				}
			} else {
				if (gC(element).indexOf("dv-required") > 0) {
					sB(element, "solid 1px #cc2b2b");
					sG(element, "#fffafa");
					sV(element, "");
					sPh(element, pattern + " Campo obrigatório");
				} else {
					sB(element, "");
					sG(element, "");
					sV(element, "");
					sPh(element, pattern);
				}
			}
		} else {
			if (gC(element).indexOf("dv-required") > 0) {
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sV(element, "");
				sPh(element, pattern + " Campo obrigatório");
			} else {
				sB(element, "");
				sG(element, "");
				sV(element, "");
				sPh(element, pattern);
			}
		}
	}
}

/**
 * Null check.
 *
 * @param {Element} element
 */
function isNull(element) {
	if (gL(gV(element)) == 0) {
		sB(element, "solid 1px #cc2b2b");
		sG(element, "#fffafa");
		sPh(element, "Campo obrigatório");
	} else {
		if (gC(element).includes("dv-datalist-") > 0) {
			var datalist = gC(element).split("dv-datalist-")[1];
			var datalistIsValid = false;
			for (var x = 0; x < gI(datalist.split("-to-")[0]).options.length; x++) {
				if (gI(datalist.split("-to-")[0]).options[x].value == 
						document.getElementsByName(datalist.split("-to-")[1])[0].value) {
					datalistIsValid = true;
					break;
				}
			}
			if (datalistIsValid) {
				sB(element, "");
				sG(element, "");
			} else {
				sB(element, "solid 1px #cc2b2b");
				sG(element, "#fffafa");
				sPh(element, "Campo obrigatório");
			}
		} else {
			sB(element, "");
			sG(element, "");
		}
	}
}

/**
 * Integer check.
 *
 * @param {Element} element
 * @param {Event} event
 */
function integer(element, event) {
	if (event.keyCode < 48 || event.keyCode > 57) {
		event.returnValue = false;
	}
}

/**
 * Decimal effect.
 *
 * @param {Element} element
 * @param {Event} event
 */
function decimal(element, event) {
	if (event.keyCode < 48 || event.keyCode > 57) {
		event.returnValue = false;
	} else {
		event.returnValue = false;
		var mask = "";
		var metadata = gV(element).replace(/\,/g, "").replace(/\./g, "") + String.fromCharCode(event.keyCode);	
		if (metadata.charAt(0) == "0" && metadata.charAt(1) == "0") {
			metadata = metadata.replace("00", "");
		} else if (metadata.charAt(0) == "0") {
			metadata = metadata.replace("0", "");
		}
		if (gL(metadata) == 1) {
			mask = "0,0" + metadata;
		} else if (gL(metadata) == 2) {
			mask = "0," + metadata;
		} else if (gL(metadata) == 3) {
			mask = metadata.charAt(0) + "," + metadata.charAt(1) + metadata.charAt(2);
		}			
		else if (gL(metadata) > 3) {
			var number = metadata.substring(0, (gL(metadata) - 2));
			var decimal = metadata.substring((gL(metadata) - 2), gL(metadata));
			var position = 0;
			for (var i = (gL(number) - 1); i >= 0; i--) {
				if (position == 3) {
					position = 0;
					mask = number.charAt(i) + "." + mask;
				} else {
					mask = number.charAt(i) + mask
				}
				position++;
			}
			mask = mask + "," + decimal;
		}
		sV(element, mask);
	}
}

/**
 * Decimal back space.
 *
 * @param {Element} element
 * @param {Event} event
 */
function decimalClean(element, event) {
	if (event.keyCode == 8) {
		event.returnValue = false;
		var mask = "";
		var metadata = gV(element).replace(/\,/g, "").replace(/\./g, "") + String.fromCharCode(event.keyCode);			
		var data = metadata.substring(0, (gL(metadata) - 2));
		if (data.charAt(0) == "0" && data.charAt(1) == "0") {
			data = data.replace("00", "");
		} else if (data.charAt(0) == "0") {
			data = data.replace("0", "");
		}
		if (gL(data) == 1) {
			mask = "0,0" + data;
		} else if (gL(data) == 2) {
			mask = "0," + data;
		} else if (gL(data) == 3) {
			mask = data.charAt(0) + "," + data.charAt(1) + data.charAt(2);
		}
		else if (gL(data) > 3) {
			var number = data.substring(0, (gL(data) - 2));
			var decimal = data.substring((gL(data) - 2), gL(data));
			var position = 0;
			for (var x = (gL(number) - 1); x >= 0; x--) {
				if (position == 3) {
					position = 0;
					mask = number.charAt(x) + "." + mask;
				} else {
					mask = number.charAt(x) + mask
				}
				position++;
			}
			mask = mask + "," + decimal;
		}
		sV(element, mask);
	}
}

/**
 * Check form.
 *
 * @return {Element} element
 * @return {Boolean} The Validation
 */
function validate(element) {
	var ret = true;
	if (element != undefined) {
		for (var x = 0; x < gL(element); x++) {
			if (gY(element.elements[x]) != "submit") {
				if (gB(element.elements[x]).includes("#cc2b2b") || 
						gB(element.elements[x]).includes("rgb(204, 43, 43)")) {
					if (ret) {
						sF(element.elements[x]);
					}
					ret = false;
				}
				if (gC(element.elements[x]).indexOf("dv-required") > 0) {
					if (gV(element.elements[x]) == "") {
						sG(element.elements[x], "#fffafa");
						sB(element.elements[x], "solid 1px #cc2b2b");
						if (gC(element.elements[x]).indexOf("dv-datetime") > 0) {
							sPh(element.elements[x], "__/__/____ __:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-date") > 0) {
							sPh(element.elements[x], "__/__/____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-time") > 0) {
							sPh(element.elements[x], "__:__:__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cpf") > 0) {
							sPh(element.elements[x], "___.___.___-__ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-phone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cellphone") > 0) {
							sPh(element.elements[x], "(__) _-____-____ Campo obrigatório");
						} else if (gC(element.elements[x]).indexOf("dv-cep") > 0) {
							sPh(element.elements[x], "_____-___ Campo obrigatório");
						} else {
							sPh(element.elements[x], "Campo obrigatório");
						}
						if (ret) {
							sF(element.elements[x]);
						}
						ret = false;
					}
				}
			}
		}
	} else {
		ret = false;
	}
	return ret;
}

/**
 * Convert image to base64.
 *
 * @param {Element} file
 */
function convertImageToBase64(file) {
	var fileExtension = file.files[0].name.split(".").pop();
	if (fileExtension.toLowerCase() == "jpg" || fileExtension.toLowerCase() == "jpeg" || 
			fileExtension.toLowerCase() == "png") {	
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file.files[0]);
		fileReader.onloadend = function (fileReaderEvent) {
			gI("dv-preview-image").src = fileReaderEvent.target.result;
			sD(gI("dv-preview"), "block");
		};
		setSelectedImage(file);
		convertFileToBase64(file);
	} else {
		alert("Atenção! Só é permitido anexar arquivos com extensão JPG ou PNG.");
		file.value = "";
		clearSelectedImage(file);
		hiddenPreview();
	}
}

/**
 * Set selected image.
 */
function setSelectedImage(file) {
	sG(gI(file.id + ".label"), "#00695c");
	sB(gI(file.id + ".label"), "solid 1px #00695c");
	sO(gI(file.id + ".label"), "#ffffff");
	sC(gI(file.id + ".label.span"), "input-file-label-image-fill");
}

/**
 * Clear selected image.
 */
function clearSelectedImage(file) {
	gI(file.id + ".label").style = "";
	sC(gI(file.id + ".label.span"), "input-file-label-image-empty");
}

/**
 * Hidden preview.
 */
function hiddenPreview() {
	sD(gI("dv-preview"), "none");
}

/* 
 * Convert file to base64.
 *
 * @param {Element} file
 */
function convertFileToBase64(file) {
	if (file.files.length > 0) {
		var fileReader = new FileReader();
		fileReader.readAsDataURL(file.files[0]);
		fileReader.onloadend = function () {
			file64 = fileReader.result;
		}
	}
}

/**
 * Get data list id.
 *
 * @param  {String} listName
 * @param  {String} objectName
 * @return {Integer} id
 */
function getDataListId(listName, objectName) {
	var id;
	for (var x = 0; x < gI(listName).options.length; x++) {
		if (gI(listName).options[x].value == document.getElementsByName(objectName)[0].value) {
			id = gI(listName).options[x].getAttribute("data-id");
			break;
		}
	}
	return id;
}

/**
 * Get location.
 *
 * @param  {Element} element
 * @return {Integer} location
 */
function getLocation(element){
	var location = 0;
	if (element.offsetParent) {
		do {
			location += element.offsetTop;
		} while (element = element.offsetParent);
	}
	return location;
}

/**
 * Move to.
 *
 * @param {String} id
 */
function moveTo(id) {
	window.scrollTo(0, getLocation(gI(id)));
}

/**
 * Move to down.
 *
 * @param {String} id
 */
function moveToDown(id) {
	var location = getLocation(gI(id)) - window.pageYOffset;
	var until = 0;
	var forever = window.setInterval(
		function() {
			window.scrollBy(0, 10);
			until += 10;
			if (until > location) {
				clearInterval(forever);
				window.scrollBy(0, (until - location) * -1);
			}
		}, 1
	);
}

/**
 * Move to home.
 */
function moveToTop() {
	var location = window.pageYOffset;
	var until = 0;
	var forever = window.setInterval(
		function() {
			if (until > location) {
				clearInterval(forever);
			}
			window.scrollBy(0, -10);
			until += 10;
		}, 1
	);
}

/**
 * Show menu.
 */
function showMenu() {
	if (gD(gI("dv-menu")) == "none") {
		sD(gI("dv-menu"), "block");
	} else {
		sD(gI("dv-menu"), "none");
	}
}

/**
 * Form example.
 */
function formExample() {
	if (validate(gI("dv-form"))) {
		alert("Check your console.log");
		var radio = gI("first-radio").checked ? gV(gI("first-radio")) : gI("second-radio").checked ? 
				gV(gI("second-radio")) : gV(gI("third-radio"));
		var data = {
			"users.name" : gV(gI("users.name")),
			"users.nick" : gV(gI("users.nick")),
			"users.birthday" : gV(gI("users.birthday")),
			"users.photo" : file64,
			"users.about" : gV(gI("users.about")),
			"users.city" : gV(gI("users.city")),
			"users.cities" : getDataListId("cities", "city"),
			"users.cellphone" : gV(gI("users.cellphone")),
			"users.mail" : gV(gI("users.mail")),
			"radio" : gI("first-radio").checked ? gV(gI("first-radio")) : gI("second-radio").checked ? 
					gV(gI("second-radio")) : gV(gI("third-radio")),
			"checkbox" : [
				{
					"item" : gI("first-checkbox").checked ? gV(gI("first-checkbox")) : null
				}, 
				{
					"item" : gI("second-checkbox").checked ? gV(gI("second-checkbox")) : null	
				},
				{
					"item" : gI("third-checkbox").checked ? gV(gI("third-checkbox")) : null	
				},
				{
					"item" : gI("fourth-checkbox").checked ? gV(gI("fourth-checkbox")) : null	
				}				
			]
		};
		console.log(data);
	}
}

/*
 * Get selected line.
 */
function getSelectedLine(element) {
	alert("Check your console.log");
	console.log(element.id);
}

/**
 * Password controller.
 */
function passwordController(element) {
	var type = gI(element).type;
	if (type == "password") {
		gI(element).type = "text";
		gI(element + ".image").src = gz_root + "/res/img/icon/red-hide.svg";
		sC(gI(element + ".text"), "dv-bold dv-red");
		sH(gI(element + ".text"), "Hide");
	} else {
		gI(element).type = "password";
		gI(element + ".image").src = gz_root + "/res/img/icon/see.svg";
		sC(gI(element + ".text"), "dv-bold");
		sH(gI(element + ".text"), "Show");
	}
}

/**
 * Go to back page.
 */
function goBack() {
	var page = (gz_position * 1) - 1;
	if (page < 1) {
		page = 1;
	}
	toPage(page);
}

/**
 * Go to next page.
 *
 * @param {Integer} size
 */
function goNext(size) {
	var page = (gz_position * 1) + 1;
	if (page >= Math.ceil(size / gz_itensPerPage)) {
		goLast(size);
	} else {
		toPage(page);
	}
}

/**
 * Go to last page.
 *
 * @param {Integer} size
 */
function goLast(size) {
	if (size > gz_itensPerPage) {
		var zero = "";
		var page = 0;
		for (var i = gL("" + size); i <= gL("" + size); i++) {
			zero += "0"; 
		}
		var end = (Math.ceil(size / gz_itensPerPage)) + zero;
		page = end - 10; /* !important 10 */
		page = (page / 10) + 1;
		toPage(page);
	}
}

/**
 * To page.
 *
 * @param {Integer} page
 */
function toPage(page) {	
	if (gz_base != "") {
		if (gz_search != "") {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/called/" + 
						gz_base + "/search/" + gz_search + "/" + page + "/" + gz_order + "/historyBack/" + gz_historyBack);
			} else {
				goTo("/" + gz_screen + "/called/" +
						gz_base + "/search/" + gz_search + "/" + page + "/historyBack/" + gz_historyBack);
			}
		} else {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + page + "/" + gz_order + "/historyBack/" + gz_historyBack);	
			} else {
				goTo("/" + gz_screen + "/called/" +  
						gz_base + "/" + page + "/historyBack/" + gz_historyBack);	
			}
		}	
	} else if (gz_friendly != "") { 
		if (gz_order != "") {
			goTo("/" + gz_screen + "/" + gz_friendly + "/order/" + gz_order + "/" + page);		
		} else {
			goTo("/" + gz_screen + "/" + gz_friendly + "/" + page);	
		}
	} else {
		if (gz_search != "") {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/search/" + gz_search + "/order/" + gz_order + "/" + page);	
			} else {
				goTo("/" + gz_screen + "/search/" + gz_search + "/" + page);
			}
		} else {
			if (gz_order != "") {
				goTo("/" + gz_screen + "/order/" + gz_order + "/" + page);		
			} else {
				goTo("/" + gz_screen + "/" + page);
			}
		}
	}
}

/**
 * Go to link.
 *
 * @param {String} link
 */
function goTo(link) {
	location.href = gz_root + link;
}

/**
 * Pagination controller.
 */
function paginationController() {
	var position = parseInt(gz_position);
	var pages = parseInt(gz_pages);
	if (position == 1) {
		sD(gI("dv-first"), "none");
	} else {
		sD(gI("dv-first"), "inline-block");
	}
	if (position == pages) {
		sD(gI("dv-last"), "none");
	} else {
		sD(gI("dv-last"), "inline-block");
	}
	if (position > 2) {
		sD(gI("dv-back"), "inline-block");
		sH(gI("dv-back"), parseInt(position) - 1);
	}
	if (position < pages - 1) {
		sD(gI("dv-next"), "inline-block");
		sH(gI("dv-next"), position + 1);
	}
	sD(gI("dv-pagination"), "block");
}