javascript: (function(e, a, g, h, f, c, b, d) {
	if (!(f = e.jQuery) || g > f.fn.jquery || h(f)) {
		c = a.createElement("script");
		c.type = "text/javascript";
		c.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + g + "/jquery.min.js";
		c.onload = c.onreadystatechange = function() {
			if (!b && (!(d = this.readyState) || d == "loaded" || d == "complete")) {
				h((f = e.jQuery).noConflict(1), b = 1);
				f(c).remove()
			}
		};
		a.documentElement.childNodes[0].appendChild(c)
	}
})(window, document, "1.3.2", function($, L) {
	if ($("#CurrentEventId").length > 0) {
		var eventNumber = $("#CurrentEventId").attr("value");
		var emsURL = 'href="http://emsadmin.wbresearch.com/secure/';
		var emsLang = '&langID=1033';
		$('#CurrentEventId').replaceWith($(
			'<ul class="list-group text-center" id="CurrentEventId" value="' + eventNumber + '" style="position:fixed; top:5%; left:5%; z-index:99999; font-size:14px; color:#428bca; -webkit-box-shadow: 4px 4px 5px 0px rgba(50, 50, 50, 0.55); -moz-box-shadow:4px 4px 5px 0px rgba(50, 50, 50, 0.55);box-shadow:4px 4px 5px 0px rgba(50, 50, 50, 0.55);">' + 
			'<li class="list-group-item"><span style="font-size:2em; font-weight:bold; color:#428bca;">' + eventNumber + '<i class="fa fa-times-circle panel-closer" style="color:#999;display: inline;margin-left:.25em; "aria-hidden="true">&nbsp;</i></span></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventAdmin.aspx?event=' + eventNumber + emsLang + '"> Event Admin</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventUpdate.aspx?event=' + eventNumber + emsLang + '"> Event Update</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventDynamicPage.aspx?event=' + eventNumber + emsLang + '">Event Page</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventDynamicPages.aspx?event=' + eventNumber + emsLang + '"> Event Page(s)</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventDynamicContent.aspx?event=' + eventNumber + emsLang + '">Event Content</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'NavigationManagement.aspx?event=' + eventNumber + emsLang + '"> Navigation</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'MediaCentre.aspx?event=' + eventNumber + emsLang + '">Resource Center</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'EventFilesGroupManagement.aspx?event=' + eventNumber + emsLang + '"> Files Group Mgmt</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'ApprovalPage.aspx?event=' + eventNumber + '&langID=1033&user=jvining">Approval Page</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'Manage301Redirect.aspx?event=' + eventNumber + emsLang + '"> Manage Redirection</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + emsURL + 'managepricing.aspx?event=' + eventNumber + emsLang + '">V2 Pricing Admin</a></li>' + 
			'<li class="list-group-item"><a target="_blank" ' + 'href="https://register.wbresearch.com/srspricing.aspx?eventid=' + eventNumber + '">V2 Pricing Page</a></li>' + 
			'<li class="list-group-item"><a href="?preview=true" class="btn btn-md btn-warning btn-block"><i class="fa fa-refresh" aria-hidden="true"></i> Preview</a></li>' + 
			'<li class="list-group-item"><a href="javascript:window.location.reload(true)" class="btn btn-md btn-success btn-block"><i class="fa fa-refresh" aria-hidden="true"></i></a></li>' + 
			'</ul>'));
	} else {
		$('body').append('<div class="panel-closer" style="position:fixed!important;top:0px!important;z-index:999999999999!important;text-align:center!important;height:40px!important;width:100%!important;background:#ff0000!important;color:#fff!important;font-size:20px!important;padding:10px!important;">This is not an EMS site</div>');
	}
	$('.panel-closer').click(function() {
		$('#CurrentEventId').addClass('hidden');
		$(this).addClass('hidden');
	});
});
