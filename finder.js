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
    $(document).ready(function() {
        $(document).ready(function() {
            $("#closeFinder").click(function() {
                $("#eventFinder").fadeOut(300, function() {
                    $(this).remove();
                });
            });
            if ($("body.pane-entity-view").length) {
                $(".list-group-item.site-builder-link a").removeAttr('href');
                $(".list-group-item.site-builder-link a").attr('disabled');
                $(".list-group-item.site-builder-link a").addClass('disabled');
            }
        });
        var ecoIdNum = $("input").attr("value");
        var ecoURL = "https&#58;//ecoadmin.wbresearch.com/admin/event/";
        var fileName = location.href.split("/").slice(-1);
        var wbrCSSname = $('#wbrcss').attr('href').split("/").slice(-1);
        var wbrCSSURL = $('#wbrcss').attr('href');
        $("body").prepend("
		<ul class='list-group text-center position-fixed shadow-lg mt-5 ml-5 border rounded' style='min-width:300px; z-index:9999999999999;' id='eventFinder'>
			<li class='list-group-item'><h4 class='list-group-item-heading text-primary'> ECO Admin Nav <a id='closeFinder' style='cursor: pointer;'><i class='fa-solid fa-circle-xmark text-grey'></i></a></h4></li> 
			<li class='list-group-item'>Style Sheet <strong>" + wbrCSSname + "</strong> <a href='" + wbrCSSURL + "' target='_blank' class='btn btn-danger btn-sm'><i class='fa-solid fa-arrow-up-right-from-square'></i></a></li> 
			<li class='list-group-item'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "#/' target='_blank'> Dashboard</a></li>
			<li class='list-group-item'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/agenda' target='_blank'> Agenda Builder</a></li>
			<li class='list-group-item'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/wizard' target='_blank'> Event Configuration</a></li>
			<li class='list-group-item'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/navigation' target='_blank'> Navigation</a></li>
			<li class='list-group-item'>
				<div class='row my-2'>
					<div class='col-6 px-1'><a class='btn btn-success btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/pages' target='_blank'> Event Pages</a></div>
					<div class='col-6 px-1'><a class='btn btn-danger btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/pages/search?q=" + fileName + "#/' target='_blank'>This Page</a></div>
				</div>
				<div class='row my-2'>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/pages/search?q=master#/' target='_blank'>Master</a></div>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/pages/search?q=index#/' target='_blank'>Index</a></div>
				</div>
			</li>
			<li class='list-group-item'>
				<div class='row my-2'>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/landing-pages' target='_blank'> Landing Pages</a></div>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/speakers' target='_blank'> Speakers</a></div>
				</div>
				<div class='row my-2'>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/mediapartner' target='_blank'> Media Partners</a></div>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/sponsor' target='_blank'> Sponsors</a></div>
				</div>
			</li>
			<li class='list-group-item'>
				<div class='row'>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/pricing' target='_blank'>Pricing</a></div>
					<div class='col-6 px-1'><a class='btn btn-primary btn-sm btn-block' href='" + ecoURL + ecoIdNum + "/discounts' target='_blank'>Discounts</a></div>
				</div>
			</li> 
		</ul>");
    });
});