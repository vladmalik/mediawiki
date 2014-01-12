/**************** Viewport for mobile devices **********************/

$("head").append('<meta name="viewport" content="width=600"/>'); 

/**************** Google fonts ******************/

WebFontConfig = {
	google: { families: [ 'Roboto+Slab:400,700:latin', 'Roboto+Condensed:400,700:latin', 'Roboto:400,700:latin' ] }
};
(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();

/***************** Add site title *****************/

var title = "<h1><a href='http://yoursite.com'>Sit Title</a></h1>";
$("#mw-head").prepend(title);


/***************** Add My Account menu *****************/

$(function() {

	var myAccount = '<div id="ref-menu-myaccount"><div class="ref-button">My Account<span class="ref-arrow-down"></span></div><ul></ul></div>';

	$("#mw-head").append(myAccount);

	var $myAccount = $("#ref-menu-myaccount");

	/* Move menu items to new menu */

	var pPersonal = $("#p-personal").find("ul").html();

	$($myAccount).find("ul")
	.append(pPersonal);

	/* Pulldown animation */

	var $myAccountButton = $($myAccount).find(".ref-button").find("span");
	
	$($myAccount).hover(function() {
			$(this).addClass("ref-open");
			$(this).find("ul")
			.fadeIn(300);
			$($myAccountButton).removeClass("ref-arrow-down");
			$($myAccountButton).addClass("ref-arrow-up");                    
		}, function() {
			$(this).removeClass("ref-open");
			$(this).find("ul")
			.stop().fadeOut(150);
			$($myAccountButton).removeClass("ref-arrow-up");
			$($myAccountButton).addClass("ref-arrow-down");
		 });
});


/**************** Search button *****************/

$(function() {

    var searchButton = '<div id="ref-button-search"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAYAAAC9+TVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAANVJREFUeNqcU8ENwyAMpFmgGYERGCEjMEJG6ERVRmCEjsCrb0ZI2gGoiYxkGeyWnnSRI5zDOY5LztkwOOCMdULqKCLIBZhyiwfQkb6GtVjZhxFZsWtC5TFjU8GG77XBAgOuJU3kRsaWRq6/ufbWJ7DFoz1BsS4Q0xtMpI6KyP6ryKKIWHUj4kliplZS4712OknIhCdH/fyWE0d26+ENfElZMSwTGxMr9R14aKGTcmGZP3TSRshod4JRFBoREYVGRbpCkxlHxGAewOsZxD8moROdF/IjwADiH+JqGNzUFgAAAABJRU5ErkJggg=="></div>';

	$("#mw-head").prepend(searchButton);
	$("#p-search").append("<div class='close'>x</div>");

	$("#ref-button-search").on("click", function () {
		$("#p-search").fadeIn(300).find("input[type='search']").focus().attr("placeholder", "");  
	});

	$("#p-search .close").on("click", function() {
		$("#p-search").fadeOut(150);
	});
	
});


/***************** Actions *****************/

$(function() {

	var caEdit = $("#ca-edit").find("a");
	var caTalk = $("#ca-talk").find("a");
	var caHistory = $("#ca-history").find("a");
	var caMove = $("#ca-move").find("a");
	var caWatch = $("#ca-watch").find("a");
	var caProtect = $("#ca-protect").find("a");
	var cancelLink = $("#mw-editform-cancel");

	var actions = '<div id="ref-actions-group"><a id="ref-button-edit" href="' + $(caEdit).attr("href") + '" title="Edit this page"><img width="18" height="19" title="" alt="Edit" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAATCAYAAACdkl3yAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAMVJREFUeNpi/P//PwOJwACIHYB4AxA/gIuCDCIBGwDxh/8I0ACTI8UQASC+8B8TTCDFIFyGwIACsQYtwGMIyAIBSg0BhZcCMV5LIGCIATGBHfAfPwhAVk9sNKODBHQ92AxRIGDIAmyWkxrNC3AFBbrAAULRTIxB+KL5AT5DkA0qIDaacWEmYL5VAOJveHI7KKdfIFgmAE1zgDo9i5hoxuc1B6TATEOKtQJSihhkg5CLBQESyykGRlBAQks9UGl3gIFMABBgAPCt0vDDmaOGAAAAAElFTkSuQmCC" /></a><a href="#" id="ref-button-save" title="Save changes"><img width="14" height="19" title="Save changes" alt="Save" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAATCAYAAACgADyUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAOdJREFUeNqUkuERgjAMhbH/OXACHMENxA0YgREYwREcATdgA3EC2UDcQGGA+uK1XAzliL3LNZR+76VtImttpI1hGHKfm0g5xnFsMV0xd/S9IVoB5QSxpa3W8cTyWxzHL6N0O0gRjWMp3NrVM8Jth+nBlo4eNH+4PT00gaSM2K+AZ/7DOIDe5o68YGVSnrG99Q+IoA1JQLVg+YWeQIJcKYNTiUgF2MgzGCj1pCjeiVfxxp45GOiMTJTchK77CwZckzVwagB3rl5AVGa66Ohc6dYq8b9Z6oxZy8GZbjl3UA3BTgVqx0eAAQCPhoeZzcjRyQAAAABJRU5ErkJggg==" /></a><a id="ref-button-cancel" href="' + $(cancelLink).attr("href") + '"  title="Cancel changes"><img width="14" height="14" title="Cancel changes" alt="Cancel" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAPBJREFUeNqMkkEOgjAQRYE9kRvo2o31BtxA1656AaNH8AgYD4Cs3HoDOQILDkBi3GM5QP1DWlImRSX5oZ3Omz+UCbXWwT9P13UCrySO47IPKKUE1EAayqgQF+LSnA85EdgtNDeFD6gsmRPtcydE+T14Z13lFvZAgc0PyXYi4QLtWazAN8oB/FLdC43AH/AN0M4NRJ7+nx5wiaILN8AdCdxMtPqGUjhXI0dAJwa9oNrZz6DSDMJwqynWD14daigZWrEzYR2vrC1JLUGtKVAwZ2kdG2d6zgCOnlmtHOe1BenG6Fe0gLKJIU/MuFEn1UeAAQAL7J7ERVHJeAAAAABJRU5ErkJggg==" /></a><a id="ref-button-talk" href="' + $(caTalk).attr("href") + '" title="View conversations"><img width="19" height="15" title="View conversations" alt="Conversations" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAPCAYAAAAGRPQsAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIVJREFUeNpi+P//vwEQP/hPPgDpbQBiBkYg8YGBgYGfgXJwEGTYfwYqASYGKoIRZNhHKpl1EWTYBAoNeQjEjUDswAhNGQFAnADEAlgUKwCxPBJ/IVQtJgAZRgAvQErtC/CpJcawD8QYRIxhBsQaBMub+AK3ARpmCURFBQHbAohxEQwDBBgAjgFJ+M9VSvoAAAAASUVORK5CYII=" /></a><div id="ref-menu-actions"><div class="ref-button"><span class="ref-arrow-down"></span></div><div id="ref-menu-actions-list"><ul><li class="ref-button-rename"><a href="' + $(caMove).attr("href") + '">Rename</a></li><li class="ref-button-watch"><a href="' + $(caWatch).attr("href") + '">Follow</a></li><li class="ref-button-protect"><a href="' + $(caProtect).attr("href") + '">Protect</a></li><li><a href="' + $(caHistory).attr("href") + '">View history</a></li><li><a href="http://yoursite.com/index.php?title=Special:Upload" target="__blank">Upload file</a></li></ul></div></div></div>';

	$("#firstHeading").append(actions);

	$("#ref-button-save").click(function(e) {
		$("#wpSave").click();
		e.preventDefault();
	});

	$("#ref-menu-actions").hover(function() {
		$("#ref-menu-actions-list").fadeIn(300);
		$(this).find("ref-arrow-down").removeClass("ref-arrow-down").addClass("ref-arrow-up");
		}, function() {
			$("#ref-menu-actions-list").fadeOut(150, function() { $(this).stop(); });
			$(this).find("ref-arrow-down").removeClass("ref-arrow-up").addClass("ref-arrow-down");    
		}
	);
});

$("#p-search").find("input[type=submit]").first().attr("value", "Go to page or Create");
$("#p-search").find("input[type=submit]").last().attr("value", "Search");

$("body.page-Special_Search #mw-content-text").append("<a id='ref-button-create' href='" + $("body.page-Special_Search .mw-search-createlink").find("a").attr("href") + "'><div>Create page</div></a>");

$("#editpage-copywarn").html("<p><strong>Do not submit copyrighted work unless properly credited and cited!</strong></p>");

$("#mw-search-top-table").find("td").append("<a id='search-filters'>Showing: " + $(".mw-search-formheader").find(".search-types").find(".current").find("a").html() + "</a>");

$("#search-filters").click(function () {
  $(".mw-search-formheader").fadeIn();
})

var searchResults = $("body.page-Special_Search .results-info").find("li");

if(searchResults.length > 0) {
    $("body.page-Special_Search .searchresults").prepend("<div id='ref-search-results'>" + searchResults.html() + "</div>");
}

$(".mw-newpages-pagename").first().parents("ul").addClass("new-pages");

/* Deduplication */

var uniqueUpdates = new Array();
var recentUpdates = $(".recent-updates").find("li").find(".mw-title");

$(recentUpdates).each(function() {

  var thisHtml = $(this).html();
  var matched = 0;
  var max = uniqueUpdates.length;
  for(i=0; i <= max; i++) {
      if(uniqueUpdates[i] == thisHtml) {
         $(this).parents("li").remove();
         matched = 1;
         break;
      }
  }
  if(matched == 0) { uniqueUpdates.push(thisHtml); }
  
});

if($("#pt-anonlogin").length == 0 && $("#pt-login").length == 0) {
	$("body").addClass("logged-in");
}
