
$("#print").click(function(){
	window.print();
});

$(function() {
	var i = 1;

	var spells = [
		{ id:'crumble',name: 'Crumble', school:'Chronomancer', cv:'10'},
		{ id:'decay',name: 'Decay', school:'Chronomancer', cv:'12'},
		{ id:'fast_act',name: 'Fast Act', school:'Chronomancer', cv:'8'},
		{ id:'fleet_feet',name: 'Fleet Feet', school:'Chronomancer', cv:'10'},
		{ id:'petrify',name: 'Petrify', school:'Chronomancer', cv:'12'},
		{ id:'slow',name: 'Slow', school:'Chronomancer', cv:'12'},
		{ id:'time_store',name: 'Time Store', school:'Chronomancer', cv:'14'},
		{ id:'time_walk',name: 'Time Walk', school:'Chronomancer', cv:'18'},
		{ id:'animate_construct',name: 'Animate Construct', school:'Enchanter', cv:'8'},
		{ id:'control_construct',name: 'Control Construct', school:'Enchanter', cv:'12'},
		{ id:'embed_enchant',name: 'Embed Enchant.', school:'Enchanter', cv:'12'},
		{ id:'enchant_armour',name: 'Enchant Armour', school:'Enchanter', cv:'8'},
		{ id:'enchant_weapon',name: 'Enchant Weapon', school:'Enchanter', cv:'8'},
		{ id:'grenade',name: 'Grenade', school:'Enchanter', cv:'10'},
		{ id:'strength',name: 'Strength', school:'Enchanter', cv:'10'},
		{ id:'telekinesis',name: 'Telekinesis', school:'Enchanter', cv:'8'},
		{ id:'bone_dart',name: 'Bone Dart', school:'Necromancer', cv:'8'},
		{ id:'bones_of_the_earth',name: 'Bones of the Earth', school:'Necromancer', cv:'10'},
		{ id:'control_undead',name: 'Control Undead', school:'Necromancer', cv:'12'},
		{ id:'raise_zombie',name: 'Raise Zombie', school:'Necromancer', cv:'8'},
		{ id:'reveal_death',name: 'Reveal Death', school:'Necromancer', cv:'12'},
		{ id:'spell_eater',name: 'Spell Eater', school:'Necromancer', cv:'12'},
		{ id:'steal_health',name: 'Steal Health', school:'Necromancer', cv:'10'},
		{ id:'strike_dead',name: 'Strike Dead', school:'Necromancer', cv:'18'},
		{ id:'awareness',name: 'Awareness', school:'Soothsayer', cv:'8'},
		{ id:'combat_awaren',name: 'Combat Awaren.', school:'Soothsayer', cv:'12'},
		{ id:'forget_spell',name: 'Forget Spell', school:'Soothsayer', cv:'12'},
		{ id:'mind_control',name: 'Mind Control', school:'Soothsayer', cv:'12'},
		{ id:'reveal_invisible',name: 'Reveal Invisible', school:'Soothsayer', cv:'8'},
		{ id:'reveal_secret',name: 'Reveal Secret', school:'Soothsayer', cv:'12'},
		{ id:'will_power',name: 'Will Power', school:'Soothsayer', cv:'10'},
		{ id:'wizard_eye',name: 'Wizard Eye', school:'Soothsayer', cv:'8'},
		{ id:'banish',name: 'Banish', school:'Thaumaturge', cv:'10'},
		{ id:'blinding_light',name: 'Blinding Light', school:'Thaumaturge', cv:'10'},
		{ id:'circle_of_prot',name: 'Circle of Prot.', school:'Thaumaturge', cv:'12'},
		{ id:'dispel',name: 'Dispel', school:'Thaumaturge', cv:'12'},
		{ id:'heal',name: 'Heal', school:'Thaumaturge', cv:'8'},
		{ id:'miraculous_cure',name: 'Miraculous Cure', school:'Thaumaturge', cv:'12'},
		{ id:'restore_life',name: 'Restore Life', school:'Thaumaturge', cv:'20'},
		{ id:'shield',name: 'Shield', school:'Thaumaturge', cv:'10'},
		{ id:'call_storm',name: 'Call Storm', school:'Elementalist', cv:'12'},
		{ id:'dest_sphere',name: 'Dest. Sphere', school:'Elementalist', cv:'12'},
		{ id:'elemental_ball',name: 'Elemental Ball', school:'Elementalist', cv:'12'},
		{ id:'elemental_bolt',name: 'Elemental Bolt', school:'Elementalist', cv:'12'},
		{ id:'element_hammer',name: 'Element Hammer', school:'Elementalist', cv:'10'},
		{ id:'element_shield',name: 'Element Shield', school:'Elementalist', cv:'10'},
		{ id:'scatter_shot',name: 'Scatter Shot', school:'Elementalist', cv:'12'},
		{ id:'wall',name: 'Wall', school:'Elementalist', cv:'10'},
		{ id:'beauty',name: 'Beauty', school:'Illusionist', cv:'10'},
		{ id:'fools_gold',name: 'Fools Gold', school:'Illusionist', cv:'8'},
		{ id:'glow',name: 'Glow', school:'Illusionist', cv:'10'},
		{ id:'illus_soldier',name: 'Illus. Soldier', school:'Illusionist', cv:'12'},
		{ id:'invisibility',name: 'Invisibility', school:'Illusionist', cv:'12'},
		{ id:'monstrous_form',name: 'Monstrous Form', school:'Illusionist', cv:'8'},
		{ id:'teleport',name: 'Teleport', school:'Illusionist', cv:'10'},
		{ id:'transpose',name: 'Transpose', school:'Illusionist', cv:'12'},
		{ id:'absorb_knowledge',name: 'Absorb Knowledge', school:'Sigilist', cv:'8'},
		{ id:'create_grimoire',name: 'Create Grimoire', school:'Sigilist', cv:'12'},
		{ id:'draining_word',name: 'Draining Word', school:'Sigilist', cv:'14'},
		{ id:'explosive_rune',name: 'Explosive Rune', school:'Sigilist', cv:'10'},
		{ id:'furious_quill',name: 'Furious Quill', school:'Sigilist', cv:'10'},
		{ id:'power_word',name: 'Power Word', school:'Sigilist', cv:'14'},
		{ id:'push',name: 'Push', school:'Sigilist', cv:'8'},
		{ id:'write_scroll',name: 'Write Scroll', school:'Sigilist', cv:'12'},
		{ id:'bind_demon',name: 'Bind Demon', school:'Summoner', cv:'10'},
		{ id:'imp',name: 'Imp', school:'Summoner', cv:'10'},
		{ id:'leap',name: 'Leap', school:'Summoner', cv:'8'},
		{ id:'plague_of_insects',name: 'Plague of Insects', school:'Summoner', cv:'12'},
		{ id:'planar_tear',name: 'Planar Tear', school:'Summoner', cv:'12'},
		{ id:'plane_walk',name: 'Plane Walk', school:'Summoner', cv:'14'},
		{ id:'possess',name: 'Possess', school:'Summoner', cv:'12'},
		{ id:'summon_demon',name: 'Summon Demon', school:'Summoner', cv:'12'},
		{ id:'animal_comp',name: 'Animal Comp.', school:'Witch', cv:'8'},
		{ id:'brew_potion',name: 'Brew Potion', school:'Witch', cv:'12'},
		{ id:'control_animal',name: 'Control Animal', school:'Witch', cv:'12'},
		{ id:'curse',name: 'Curse', school:'Witch', cv:'10'},
		{ id:'familiar',name: 'Familiar', school:'Witch', cv:'8'},
		{ id:'fog',name: 'Fog', school:'Witch', cv:'8'},
		{ id:'mud',name: 'Mud', school:'Witch', cv:'10'},
		{ id:'poison_dart',name: 'Poison Dart', school:'Witch', cv:'10'}

	];
	
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
				result += "<div class='image'><img src='images/";
				result += $(this).attr('id');
				result += ".PNG' /></div>";
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
