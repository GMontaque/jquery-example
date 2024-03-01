// // $(document).ready(function () {
// // 	$("#stream1_btn").on("click", function () {
// // 		$(".stream1").removeClass("highlight_stream");
// // 		$(".stream2").removeClass("highlight_stream");
// // 		$(".stream3").removeClass("highlight_stream");
// // 		$(".stream1").addClass("highlight_stream");
// // 	});
// // 	$("#stream2_btn").on("click", function () {
// // 		$(".stream1").removeClass("highlight_stream");
// // 		$(".stream2").removeClass("highlight_stream");
// // 		$(".stream3").removeClass("highlight_stream");
// // 		$(".stream2").addClass("highlight_stream");
// // 	});
// // 	$("#stream3_btn").on("click", function () {
// // 		$(".stream1").removeClass("highlight_stream");
// // 		$(".stream2").removeClass("highlight_stream");
// // 		$(".stream3").removeClass("highlight_stream");
// // 		$(".stream3").addClass("highlight_stream");
// // 	});
// // });
// // $(document).ready(function () {
// // 	$("h2").removeClass("underline"); //underlines all <h2> elements
// // 	$("ul").removeClass("border"); //adds a border to all lists
// // });

// // $("tr:odd").addClass("odd");
// // $("tr:even").addClass("even");

// $(document).ready(function () {
// 	$("#stream1_btn").on("click", function () {
// 		$(".stream1").removeClass("highlight_stream");
// 		$(".stream2").removeClass("highlight_stream");
// 		$(".stream3").removeClass("highlight_stream");
// 		$(".stream1").addClass("highlight_stream");
// 	});
// 	$("#stream2_btn").on("click", function () {
// 		$(".stream1").removeClass("highlight_stream");
// 		$(".stream2").removeClass("highlight_stream");
// 		$(".stream3").removeClass("highlight_stream");
// 		$(".stream2").addClass("highlight_stream");
// 	});
// 	$("#stream3_btn").on("click", function () {
// 		$(".stream1").removeClass("highlight_stream");
// 		$(".stream2").removeClass("highlight_stream");
// 		$(".stream3").removeClass("highlight_stream");
// 		$(".stream3").addClass("highlight_stream");
// 	});
// });

// $("p").click(function () {
// 	$("p").css("color", "red");
// });

// $("h2").hover(function () {
// 	$("h2").css("background", "lightblue");
// });

// $(".card-panel").mouseenter(function () {
// 	$("body").css("background-color", "black");
// });

// $(".card-panel").mouseleave(function () {
// 	$("body").css("background-color", "#e1e2e2");
// });

// $("#card-panel-1").click(function () {
// 	$("#card-panel-1").hide("slow");
// });

// $("#card-panel-2").click(function () {
// 	$("#card-panel-2").hide("medium");
// });

// $("#card-panel-3").click(function () {
// 	$("#card-panel-3").hide("fast");
// });

// $("#card-panel-4").click(function () {
// 	$("#card-panel-4").hide(3000);
// });

// $("#test").click(() => {
// 	$("body").append("<p>This is a click Event</p>");
// });

// $("#test").dblclick(() => {
// 	$("body").append("<p>This is a double click Event</p>");
// });

// $("input").change(function () {
// 	alert("The text has been changed.");
// });

// $(":header").click(function () {
// 	$(this).hide();
// });

// $("p").dblclick(function () {
// 	$(this).toggleClass("colour");
// });

// $("button").mouseenter(function () {
// 	$("button").removeClass("make-red").addClass("make-border");
// });

// $("button").mouseleave(function () {
// 	$("button").removeClass("make-border").addClass("make-red");
// });

// $(document).ready(function () {
// 	$(".box").on("click", function () {
// 		/**
// 		 * When we click on an element that has
// 		 * a 'box' class, this event will be fired.
// 		 */
// 		var classNames = $(this).attr("class").split(" ");
// 		$("." + classNames[1]).css("background-color", "red");
// 	});
// });

// $(document).ready(function () {
// 	$(".box").on("click", function () {
// 		/**
// 		 * When we click on an element that has
// 		 * a 'box' class, this event will be fired.
// 		 */
// 		var classNames = $(this).attr("class").split(" ");
// 		var boxClass = classNames[0];
// 		var className = classNames[1];
// 		if ($(this).css("background-color") == "rgb(255, 0, 0)") {
// 			// If this object is already red, turn it black
// 			$("." + className).css("background-color", "#000");
// 		} else {
// 			// Else turn all elements with a box class black
// 			// and then change the color of all elements
// 			// with the same class name as the clicked element
// 			// to red.
// 			$("." + boxClass).css("background-color", "#000");
// 			$("." + className).css("background-color", "red");
// 		}
// 	});
// });

// $("p").click(function () {
// 	$(this).children("a").css("background-color", "yellow");
// });

// $("button").click(function () {
// 	$(this).next().slideToggle("slow");
// });

//$( "#Mash" ).siblings( "red" );
$("#Mash").siblings()[0].addClass("red");

$("#reset").click(function () {
	$(this)
		.siblings()
		.children()
		.removeClass("red")
		.removeClass("yellow")
		.removeClass("green")
		.removeClass("large-font");
});

$("#card-btn-1").click(function () {
	$(this).siblings("span").addClass("yellow");
});

$("#card-btn-2").click(function () {
	$(this).siblings("#card-par-1").addClass("red");
});

$("#card-btn-3").click(function () {
	$(this).siblings().addClass("large-font");
});
