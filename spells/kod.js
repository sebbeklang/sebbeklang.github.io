
$("#print").click(function(){
	window.print();
});

$(function() {
	var i = 1;

	spells.sort(SortBySchool);
	init(); 
	
	$("#clear").click(function(){
		$(".selected").toggleClass( "unselected" )
		$(".selected").toggleClass( "selected" )
	});
	
	$("#nameSort").click(function(){
		spells.sort(SortByName);
		init();
	});
	$("#schoolSort").click(function(){
		spells.sort(SortBySchool);
		init();
	});
		$("#cvSort").click(function(){
		spells.sort(SortByCV);
		init();
	});
	function SortByName(a, b){
	  var aName = a.name.toLowerCase();
	  var bName = b.name.toLowerCase(); 
	  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	}
	function SortBySchool(a, b){
	  var aName = a.school.toLowerCase();
	  var bName = b.school.toLowerCase(); 
	  return ((aName < bName) ? -1 : ((aName > bName) ? 1 : 0));
	}
	function SortByCV(a, b){
	  var aName = a.cv.toLowerCase();
	  var bName = b.cv.toLowerCase(); 
	  return ((aName - bName));
	}

	function GetPositionByID(id){
		return $.grep(spells, function(e){ return e.id == id; })[0].pos;
	}
	
	function init(){
		
		var list = "";
	
		$(spells).each(function(){
			list += "<div class='spell col-lg-3 col-md-3 col-sm-4 col-xs-12 "
			list += this.school
			list += " unselected' id='"
			list += this.id
			list += "'>"
			list += "<span>"
			
			list += "<span class='schoolName'>"
			list += this.school;
			list += ": </span>"
			
			list += "<span class='spellName'>"
			list += this.name;
			list += "</span>"
			
			list += "<span class='castingValue'>"
			list += " (CV:"
			list += this.cv;
			list += ")</span>"
			
			list += "</span>"
			list += "</div>";
			i++;
		});
		$("#result").html($(list))
		
		$(".spell").click(function(){
			$(this).toggleClass( "selected" )
			$(this).toggleClass( "unselected" )
				
			var result = "";
			var i = 0;
			$(".selected").each(function(){
				if(i%2 == 0){
					result += "<div class='imageContainer'>"
				}
				result += "<div class='image'><img src='images/img_trans.png' "
				result += "style='width:456;height:326;background: url(images/spell_sprite.PNG) ";
				result += GetPositionByID($(this).attr('id'));
				result += ";' /></div>";
				if(i%2 != 0){
					result += "</div>"
				}
				i++;
			})
			if(i%2 != 0){
				result += "</div>"
			}
			$("#printresult").html(result);
		});
	} 
});
