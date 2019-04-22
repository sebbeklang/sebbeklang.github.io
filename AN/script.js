 

$(function() {
    var shipTypes = [{id: 1, class: 'Fighters', cv:0, scalar:5, theta:4,hubs:2, brc:2},
    {id: 2, class: 'Gunships', cv:0, scalar:4, theta:3,hubs:3, brc:3},
    {id: 3, class: 'Frigate', cv:3, scalar:3, theta:4,hubs:4, brc:5},
    {id: 4, class: 'Destroyer', cv:4, scalar:3, theta:3,hubs:6, brc:8},
    {id: 5, class: 'Cruiser', cv:5, scalar:2, theta:2,hubs:8, brc:11},
    {id: 6, class: 'Battleship', cv:6, scalar:2, theta:1,hubs:10, brc:14},
    {id: 7, class: 'Dreadnought', cv:6, scalar:1, theta:0,hubs:12, brc:17}];
    
    var hubs =  [{id:1, type:'movement', name: 'Auxiliary Engines', description:'Increase scalar with the ships base value, then roll a die – on 4+ the hub is crippled.', rc: 0},
    {id:2, type:'movement', name: 'Thrusters', description:'Increase theta with the ships base value, then roll a die – on 4+ the hub is crippled.', rc: 0},
    {id:3, type:'movement', name: 'Gyroscope', description:'Increase scalar or theta by one.', rc: 0},
    {id:4, type:'movement', name: 'Vortex Jump [E]', description:'Before moving, cripple this hub to move as many inches as with a targeting roll towards a point (declared before rolling) without changing direction – place the inertia point one inch in front of the ship. A failed targeting roll means that the ship doesn’t make the jump and is moved normally, without crippling the hub.', rc: 2},
    {id:5, type:'movement', name: 'Ionic Boosters [M]', description:'After moving, the ship may rotate in any direction. Roll a die, on 4+ the hub is crippled.', rc: 1},
    {id:6, type:'movement', name: 'Solar Sails [P]', description:'After moving, the ship may move its inertia point up to as many inch as the ships current theta.', rc: 0},
    {id:7, type:'protection', name: 'Armor Plating', description:'Up to two incoming damage dice hits this hub with a -1 modifier, even if the damage should be random.', rc: 1},
    {id:8, type:'protection', name: 'Reflex Screen [P]', description:'Halve an incoming damage die or force an incoming damage die to be rerolled.', rc: 1},
    {id:9, type:'protection', name: 'Shields [M]', description:'Lower all incoming damage dice by 1. This cannot take a damage die below 1.', rc: 2},
    {id:10, type:'protection', name: 'Cloaking Device* [M]', description:'Incoming targeting dies are halved, then roll a die – on 4+ the hub is crippled. *Affects deployment.', rc: 2},
    {id:11, type:'protection', name: 'Jammers & ECM* [G]', description:'Roll a D6, remove all targeting dice with the same value. *Affects deployment.', rc: 1},
    {id:12, type:'protection', name: 'Flares & Chaff [A]', description:'For each range die above 3D6 a incoming weapon uses, it gains a -1 modifier on damage.', rc: 1},
    {id:13, type:'targeting', name: 'Fire Control', description:'Add two dice to a targeting roll.', rc: 1},
    {id:14, type:'targeting', name: 'Subspace Radar* [H]', description:'Add points to the targeting roll (to any dice in as you chose, not taking any dice above 6) as many as the targets ship class theta. *Affects deployment.', rc: 0},
    {id:15, type:'targeting', name: 'Probes* [E]', description:'The ship may relocate and combine targeting dices as the player chooses during the whole phase, which can effect multiple targeting rolls. A targeting die cannot exceed 6. *Affects deployment.', rc: 0},
    {id:16, type:'support', name: 'Command & Control', description:'Activate to gain +1 on the initiative roll. Only ships may have this hub.', rc: 3},
    {id:17, type:'support', name: 'Hull & Cargo', description:'Used for any hubs where no other hub were chosen. May be specified during scenarios, for example "orbital bombardment", "tanks and ground troops" etc.', rc: 0},
    {id:18, type:'support', name: 'Launch Bays', description:'May launch a fighters or gunships unit. Activate to fully recover the EV of a fighter or gunship unit. Only ships may have this hub.', rc: 1},
    {id:19, type:'support', name: 'Proximity Mines*', description:'During deployment, could deploy a 3” minefield as described in the scenario rules. Activate the hub while moving through a minefield to remove it from the game. *Affects deployment.', rc: 1},
    {id:20, type:'support', name: 'Marking Array [A]', description:'Make a successful targeting roll on an enemy ship which is in LOS of an friendly ship that also has LOS to the enemy ship. The friendly ship may use the targeting roll instead of making an own (and any other effects). The distance is still measured from the firing ship, only the targeting roll is replaced.', rc: 2},
    {id:21, type:'support', name: 'Backup Systems [H]', description:'Choose a crippled hub and roll a D6. If a successful 4+ roll is made, the crippled hub is activated as if it wasn\'t damaged. If the roll is unsuccessful, another roll can be done with another hub as target (only one attempt per hub and phase).', rc: 2},
    {id:22, type:'support', name: 'Tractor Beams [G]', description:'If a targeting roll is successful, ignoring any theta – the smallest of the two ships move its inertia marker towards the bigger ship as many inch steps between the ships base size, then add 1.', rc: 1},
    {id:23, type:'support', name: 'Holding Crane [A]', description:'R: 1. Ignores theta. Make a repair attempt on any hub or critical situation on the targeted ship, then roll a die – on 4+ the hub is crippled.', rc: 1},
    {id:24, type:'weapon', name: 'Kinetic (bow)', description:'R: 3. D: 1D6+1. Bow.', rc: 2},
    {id:25, type:'weapon', name: 'Kinetic (broadside)', description:'R: 3. D: 1D6. May be used during two different targeting rolls in starboard and/or portside.', rc: 2},
    {id:26, type:'weapon', name: 'Kinetic (turreted)', description:'R: 3. D: 1D6. Bow, starboard and portside.', rc: 2},
    {id:27, type:'weapon', name: 'Blast (area)', description:'R: 3. D: 1D6-2 area attack on one chosen point (full damage in centre, with one less damage for each inch away from the centre). Ignores Theta. A failed targeting roll is an unsuccessful attack. If a terrain piece is fully covered by the blast, it is removed.', rc: 3},
    {id:28, type:'weapon', name: 'Marines', description:'R: 1 D: 2D6. Roll a die – on 4+ the hub is crippled. Ignores theta. All sides.', rc: 1},
    {id:29, type:'weapon', name: 'Torpedoes (bow)', description:'R: 2. D: 2D6, with -1 on each die. Bow.', rc: 1},
    {id:30, type:'weapon', name: 'Torpedoes (broadside)', description:'R: 2. D: 2D6, with -1 on each die. May be used during two different targeting rolls in starboard and/or portside', rc: 1},
    {id:31, type:'weapon', name: 'Point Defense System', description:'R: 2. D: 4D6, with -4 on each die. Halves theta. May be used to roll and removing a damage point – one at the time, on the highest incoming missile/torpedo/marine die. All sides.', rc: 1},
    {id:32, type:'weapon', name: 'Aegis System [H]', description:'R: 2. D: 3D6, with -4 on each die. Halves theta. May be used to roll and removing a damage point – one at the time, on the highest incoming missile/torpedo/marine die. Can be used by a friendly ship within if a successful Targeting roll is made to the same ship. All sides.', rc: 1},
    {id:33, type:'weapon', name: 'Missile Launcher [E]', description:'R: 4. D: 2D6, with -2 on each die. Bow, starboard or portside.', rc: 1},
    {id:34, type:'weapon', name: 'Rocket Rack [E]', description:'R: 5. D: 4D6, with -3 on each die. Bow, starboard or portside.', rc: 1},
    {id:35, type:'weapon', name: 'Laser (bow) [G]', description:'R: 5. D: 1D6-1. Bow. Halves theta.', rc: 2},
    {id:36, type:'weapon', name: 'Laser (broadside) [G]', description:'R: 5. D: 1D6-1. May be used during two different targeting rolls in starboard and/or portside. Halves theta.', rc: 2},
    {id:37, type:'weapon', name: 'Laser (turreted) [G]', description:'R: 5. D: 1D6-1. For, Starboard and portside. Halves theta.', rc: 3},
    {id:38, type:'weapon', name: 'Particle Emitter [A]', description:'R: 5 D: 5D6, with -4 on each die. For. Halves theta. Each die that damages also removes a CV, if able.', rc: 2}];



    function generateHubItem(name, rc){
        return "<div class='hubContainerItem' draggable='true'><span class='hubName'>" + name + "</span><span class='hubRC'>" + rc + "</span></div>"
        //return "<div class='hubItem' draggable='true'>" + name + "</div>"; 
    }
    function generateShipClassItem(item){
        return "<option value='" + item.id + "'>" + item.class + "</option>"; 
    }
    function generateShipItem(){
        return $("#shipTemplate")[0].innerHTML;
    }
    function generateHubContainer(){
        return "<div class='hubContainerItem'><span class='hubName'>Add hub</span><span class='hubRC'>0</span></div>"
    }

    function calculateShipRC(ship){
        
        var BRC = ship.find(".brcContainer")[0].innerHTML;
        var RC = parseInt(BRC);
        var hubContainer = ship.find(".hubContainerItem");
        hubContainer.each(function(element) {
            var hubRC = $(this).find(".hubRC")[0].innerHTML;
            RC += parseInt(hubRC);
        });
        ship.find(".trcContainer")[0].innerHTML = RC;

    }

    function addShip(){
        $('#ships').append(generateShipItem());
        $('#ships .types').last().change();
        calculateShipRC($('#ships .ship').last());
    }
    function populateShipInfo(ship,shipclassId){
        var shipClass = shipTypes.find(x => x.id == shipclassId);

        var brcContainer = ship.find(".brcContainer")[0];
        brcContainer.innerHTML = shipClass.brc;
        var cvContainer = ship.find(".cvContainer")[0];
        cvContainer.innerHTML = shipClass.cv;
        var scalarContainer = ship.find(".scalarContainer")[0];
        scalarContainer.innerHTML = shipClass.scalar;
        var thetaContainer = ship.find(".thetaContainer")[0];
        thetaContainer.innerHTML = shipClass.theta;

        var hubContainer = ship.find(".hubContainer");
        while (hubContainer[0].firstChild) {
            hubContainer[0].removeChild(hubContainer[0].firstChild);
        }
        for (i = 0; i < shipClass.hubs; i++){
           hubContainer.append(generateHubContainer());
        }
        hubContainer.children().each(function(element) {
            $(this).on("dragover",function(e){
                $(this).addClass("drag");
                e.preventDefault();
                });
            $(this).on("drop",function(e){
                e.preventDefault();
                $(this).removeClass("drag");                
                var data=e.originalEvent.dataTransfer.getData("Text");
                e.target.innerHTML=  data;
                calculateShipRC(ship);
                });
        }, this);
        calculateShipRC(ship);  
    };




    shipTypes.forEach(function(element) {
        $('.types').append(generateShipClassItem(element));
    }, this);

    hubs.forEach(function(element) {
        $('#hubs').append(generateHubItem(element.name, element.rc));
    }, this);
    $('#hubs').children().each(function(element) {
        $(this).on("dragstart",function(e){
        e.originalEvent.dataTransfer.setData("Text",e.target.innerHTML);
        });    
    }, this);

    $("#addShip").click(function() {addShip()});
    $('#ships').on('change','.types',function(){ 
        var ship = $(this).parent().parent();
        var shipclassId = $(this)[0].value;
        populateShipInfo(ship, shipclassId);
    });
});