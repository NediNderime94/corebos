/*************************************************************************************************
 * Copyright 2016 JPL TSolucio, S.L. -- This file is a part of TSOLUCIO coreBOS Customizations.
 * Licensed under the vtiger CRM Public License Version 1.1 (the "License"); you may not use this
 * file except in compliance with the License. You can redistribute it and/or modify it
 * under the terms of the License. JPL TSolucio, S.L. reserves all rights not expressly
 * granted by the License. coreBOS distributed by JPL TSolucio S.L. is distributed in
 * the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. Unless required by
 * applicable law or agreed to in writing, software distributed under the License is
 * distributed on an "AS IS" BASIS, WITHOUT ANY WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific language governing
 * permissions and limitations under the License. You may obtain a copy of the License
 * at <http://corebos.org/documentation/doku.php?id=en:devel:vpl11>
 *************************************************************************************************
 *  Module       : Dashboard Charts
 *  Version      : 1.0
 *  Author       : JPL TSolucio, S. L.
 *************************************************************************************************/

function loadDashBoard(oSelect) {
	jQuery('#dashChart').fadeOut();
	var oCombo = document.getElementById('dashboard_combo');
	var oCombo1 = document.getElementById('dashboard_combo1');
	oCombo.selectedIndex = oSelect.selectedIndex;
	oCombo1.selectedIndex = oSelect.selectedIndex;
	var type = oSelect.options[oSelect.selectedIndex].value;
	var url = '';
	if (type != 'DashboardHome') {
		url = 'module=Dashboard&action=DashboardAjax&display_view='+gdash_display_type+'&file=loadDashBoard&type='+type;
	} else {
		url = 'module=Dashboard&action=DashboardAjax&file=DashboardHome&display_view='+gdash_display_type;
	}
	jQuery.ajax({
		method:'POST',
		url:'index.php?'+ url
	}).done(function (response) {
		document.getElementById('dashChart').innerHTML=response;
		vtlib_executeJavascriptInElement(document.getElementById('dashChart'));
		jQuery('#dashChart').fadeIn(500);
		document.getElementById('dashTitle_div').innerHTML = oCombo.options[oCombo.selectedIndex].text;
	});
}

function changeView(displaytype) {
	gdash_displaytype = displaytype;
	var oCombo = document.getElementById('dashboard_combo');
	var type = oCombo.options[oCombo.selectedIndex].value;
	var currenttime = new Date();
	var time='&time='+currenttime.getTime();
	var url = '';
	if (type == 'DashboardHome') {
		if (displaytype == 'MATRIX') {
			url = 'index.php?module=Dashboard&action=index&display_view=MATRIX';
		} else {
			url = 'index.php?module=Dashboard&action=index&display_view=NORMAL';
		}
	} else {
		if (displaytype == 'MATRIX') {
			url = 'index.php?module=Dashboard&action=index&display_view=MATRIX&type='+type;
		} else {
			url = 'index.php?module=Dashboard&action=index&display_view=NORMAL&type='+type;
		}
	}
	window.document.location.href = url+time;
}

function getRandomColor() {
	return randomColor({
		luminosity: 'dark',
		hue: 'random'
	});
}

/**
 * DHTML date validation script. Courtesy of SmartWebby.com (http://www.smartwebby.com/dhtml/)
 */
// Declaring valid date character, minimum year and maximum year
var dtCh= '-';
var minYear=1900;
var maxYear=2100;

function isInteger(s) {
	var i;
	for (i = 0; i < s.length; i++) {
		// Check that current character is number.
		var c = s.charAt(i);
		if (((c < '0') || (c > '9'))) {
			return false;
		}
	}
	// All characters are numbers.
	return true;
}

function stripCharsInBag(s, bag) {
	var i;
	var returnString = '';
	// Search through string's characters one by one.
	// If character is not in bag, append to returnString.
	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (bag.indexOf(c) == -1) {
			returnString += c;
		}
	}
	return returnString;
}

function daysInFebruary(year) {
	// February has 29 days in any year evenly divisible by four,
	// EXCEPT for centurial years which are not also divisible by 400.
	return (((year % 4 == 0) && ( (!(year % 100 == 0)) || (year % 400 == 0))) ? 29 : 28 );
}

function DaysArray(n) {
	for (var i = 1; i <= n; i++) {
		this[i] = 31;
		if (i==4 || i==6 || i==9 || i==11) {
			this[i] = 30;
		}
		if (i==2) {
			this[i] = 29;
		}
	}
	return this;
}

function isDate(dtStr) {
	var daysInMonth = DaysArray(12);
	var pos1=dtStr.indexOf(dtCh);
	var pos2=dtStr.indexOf(dtCh, pos1+1);
	var strYear=dtStr.substring(0, pos1);
	var strMonth=dtStr.substring(pos1+1, pos2);
	var strDay=dtStr.substring(pos2+1);
	var strYr=strYear;
	if (strDay.charAt(0)=='0' && strDay.length>1) {
		strDay=strDay.substring(1);
	}
	if (strMonth.charAt(0)=='0' && strMonth.length>1) {
		strMonth=strMonth.substring(1);
	}
	for (var i = 1; i <= 3; i++) {
		if (strYr.charAt(0)=='0' && strYr.length>1) {
			strYr=strYr.substring(1);
		}
	}
	var month=parseInt(strMonth);
	var day=parseInt(strDay);
	var year=parseInt(strYr);
	if (pos1==-1 || pos2==-1) {
		alert(alert_arr.ERR_INVALID_DATE_FORMAT);
		return false;
	}
	if (strMonth.length<1 || month<1 || month>12) {
		alert(alert_arr.ERR_INVALID_MONTH);
		return false;
	}
	if (strDay.length<1 || day<1 || day>31 || (month==2 && day>daysInFebruary(year)) || day > daysInMonth[month]) {
		alert(alert_arr.ERR_INVALID_DAY);
		return false;
	}
	if (strYear.length != 4 || year==0 || year<minYear || year>maxYear) {
		alert(alert_arr.ERR_INVALID_YEAR);
		return false;
	}
	if (dtStr.indexOf(dtCh, pos2+1)!=-1 || isInteger(stripCharsInBag(dtStr, dtCh))==false) {
		alert(alert_arr.ERR_INVALID_DATE);
		return false;
	}
	return true;
}

function verify_chart_data(form) {
	if (form.date_start.value == '' && isDate(form.date_start.value)==false) {
		return false;
	} else if (form.date_end.value == '' && isDate(form.date_end.value)==false) {
		return false;
	} else {
		return true;
	}
}

function chk_form(form) {
	var a=form.date_start.value.split('-');
	var sdate=new Date(a[0], a[1], a[2]);
	a=form.date_end.value.split('-');
	var edate=new Date(a[0], a[1], a[2]);

	if (sdate>edate) {
		alert(alert_arr.STARTDATE+' '+alert_arr.SHOULDBE_LESS+' '+alert_arr.ENDDATE);
		return false;
	} else {
		return verify_chart_data(form);
	}
}
