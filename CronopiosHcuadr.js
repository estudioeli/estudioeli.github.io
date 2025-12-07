(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"CronopiosHcuadr_atlas_", frames: [[0,1019,997,262],[0,1283,81,81],[0,0,1013,1017]]}
];


// symbols:



(lib.CachedTexturedBitmap_52 = function() {
	this.initialize(img.CachedTexturedBitmap_52);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2077,507);


(lib.CachedTexturedBitmap_53 = function() {
	this.initialize(ss["CronopiosHcuadr_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_54 = function() {
	this.initialize(img.CachedTexturedBitmap_54);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3152,1010);


(lib.CachedTexturedBitmap_55 = function() {
	this.initialize(ss["CronopiosHcuadr_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_56 = function() {
	this.initialize(ss["CronopiosHcuadr_atlas_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Escena_1_Cuadricula = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Cuadricula
	this.instance = new lib.CachedTexturedBitmap_54();
	this.instance.parent = this;
	this.instance.setTransform(61.5,55.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Cuadricula, null, null);


(lib.cuadrado_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_56();
	this.instance.parent = this;
	this.instance.setTransform(-245.35,-245.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado_Capa_1, null, null);


(lib.ch_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_55();
	this.instance.parent = this;
	this.instance.setTransform(-22.25,-25.55,0.5675,0.5675);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch_Capa_1, null, null);


(lib.cuadrado = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.cuadrado_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(7.9,8.9,1,1,0,0,0,7.9,8.9);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado, new cjs.Rectangle(-245.3,-245.3,506.5,508.5), null);


(lib.ch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1_obj_
	this.Capa_1 = new lib.ch_Capa_1();
	this.Capa_1.name = "Capa_1";
	this.Capa_1.parent = this;
	this.Capa_1.setTransform(0.7,-2.6,1,1,0,0,0,0.7,-2.6);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch, new cjs.Rectangle(-22.2,-25.5,45.9,45.9), null);


(lib.Escena_1_clips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clips
	this.instance = new lib.CachedTexturedBitmap_53();
	this.instance.parent = this;
	this.instance.setTransform(1139.15,61.2,0.5,0.5);

	this.movieClip_18 = new lib.ch();
	this.movieClip_18.name = "movieClip_18";
	this.movieClip_18.parent = this;
	this.movieClip_18.setTransform(414.25,480.15,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_17 = new lib.ch();
	this.movieClip_17.name = "movieClip_17";
	this.movieClip_17.parent = this;
	this.movieClip_17.setTransform(324.8,474.45,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_16 = new lib.ch();
	this.movieClip_16.name = "movieClip_16";
	this.movieClip_16.parent = this;
	this.movieClip_16.setTransform(123.2,474.45,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_15 = new lib.ch();
	this.movieClip_15.name = "movieClip_15";
	this.movieClip_15.parent = this;
	this.movieClip_15.setTransform(385.6,353,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_14 = new lib.ch();
	this.movieClip_14.name = "movieClip_14";
	this.movieClip_14.parent = this;
	this.movieClip_14.setTransform(222.9,353,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_13 = new lib.ch();
	this.movieClip_13.name = "movieClip_13";
	this.movieClip_13.parent = this;
	this.movieClip_13.setTransform(375.25,226.65,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_12 = new lib.ch();
	this.movieClip_12.name = "movieClip_12";
	this.movieClip_12.parent = this;
	this.movieClip_12.setTransform(229.75,209.5,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_11 = new lib.ch();
	this.movieClip_11.name = "movieClip_11";
	this.movieClip_11.parent = this;
	this.movieClip_11.setTransform(139.25,238.45,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_10 = new lib.ch();
	this.movieClip_10.name = "movieClip_10";
	this.movieClip_10.parent = this;
	this.movieClip_10.setTransform(441.7,116.95,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_9 = new lib.ch();
	this.movieClip_9.name = "movieClip_9";
	this.movieClip_9.parent = this;
	this.movieClip_9.setTransform(324.8,116.95,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_8 = new lib.ch();
	this.movieClip_8.name = "movieClip_8";
	this.movieClip_8.parent = this;
	this.movieClip_8.setTransform(243.45,103.2,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_7 = new lib.ch();
	this.movieClip_7.name = "movieClip_7";
	this.movieClip_7.parent = this;
	this.movieClip_7.setTransform(131.2,122.95,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_6 = new lib.ch();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.parent = this;
	this.movieClip_6.setTransform(942.2,111.4,0.8759,0.8752);

	this.movieClip_5 = new lib.ch();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(687.55,244.35,0.8759,0.8752);

	this.movieClip_4 = new lib.ch();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(896.45,226.55,0.8759,0.881);

	this.movieClip_3 = new lib.ch();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(1002.3,192.8,0.8759,0.881,0,0,0,0.1,0);

	this.movieClip_2 = new lib.ch();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(698.85,140.4,0.8759,0.881,0,0,0,0.1,0.1);

	this.movieClip_1 = new lib.ch();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(792.05,122.85,0.8759,0.881);

	this.cuadrado = new lib.cuadrado();
	this.cuadrado.name = "cuadrado";
	this.cuadrado.parent = this;
	this.cuadrado.setTransform(305.35,298.45);

	this.instance_1 = new lib.CachedTexturedBitmap_52();
	this.instance_1.parent = this;
	this.instance_1.setTransform(598.6,54.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.cuadrado},{t:this.movieClip_1},{t:this.movieClip_2},{t:this.movieClip_3},{t:this.movieClip_4},{t:this.movieClip_5},{t:this.movieClip_6},{t:this.movieClip_7},{t:this.movieClip_8},{t:this.movieClip_9},{t:this.movieClip_10},{t:this.movieClip_11},{t:this.movieClip_12},{t:this.movieClip_13},{t:this.movieClip_14},{t:this.movieClip_15},{t:this.movieClip_16},{t:this.movieClip_17},{t:this.movieClip_18},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_clips, null, null);


// stage content:
(lib.CronopiosHcuadr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.cuadrado = this.clips.cuadrado;
		this.movieClip_1 = this.clips.movieClip_1;
		this.movieClip_2 = this.clips.movieClip_2;
		this.movieClip_3 = this.clips.movieClip_3;
		this.movieClip_4 = this.clips.movieClip_4;
		this.movieClip_5 = this.clips.movieClip_5;
		this.movieClip_6 = this.clips.movieClip_6;
		this.movieClip_7 = this.clips.movieClip_7;
		this.movieClip_8 = this.clips.movieClip_8;
		this.movieClip_9 = this.clips.movieClip_9;
		this.movieClip_10 = this.clips.movieClip_10;
		this.movieClip_11 = this.clips.movieClip_11;
		this.movieClip_12 = this.clips.movieClip_12;
		this.movieClip_13 = this.clips.movieClip_13;
		this.movieClip_14 = this.clips.movieClip_14;
		this.movieClip_15 = this.clips.movieClip_15;
		this.movieClip_16 = this.clips.movieClip_16;
		this.movieClip_17 = this.clips.movieClip_17;
		this.movieClip_18 = this.clips.movieClip_18;
		// ====================================================================
		// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
		// ====================================================================
		
		// --- LÍMITES ZONA 1 (Derecha: Clips 1-6) ---
		var LIMITE_DERECHO = 1100;
		var LIMITE_IZQUIERDO = 597;
		var LIMITE_INFERIOR = 310;
		var LIMITE_SUPERIOR = 55;
		
		// --- LÍMITES ZONA 2 (Izquierda: Clips 7-18) ---
		var LIMITE_DERECHO18 = 564;
		var LIMITE_IZQUIERDO18 = 59;
		var LIMITE_INFERIOR18 = 562;
		var LIMITE_SUPERIOR18 = 55;
		
		// --- INSTANCIAS DE OBJETOS ---
		var mc1 = this.movieClip_1; var mc2 = this.movieClip_2; var mc3 = this.movieClip_3;
		var mc4 = this.movieClip_4; var mc5 = this.movieClip_5; var mc6 = this.movieClip_6;
		var mc7 = this.movieClip_7; var mc8 = this.movieClip_8; var mc9 = this.movieClip_9;
		var mc10 = this.movieClip_10; var mc11 = this.movieClip_11; var mc12 = this.movieClip_12;
		var mc13 = this.movieClip_13; var mc14 = this.movieClip_14; var mc15 = this.movieClip_15;
		var mc16 = this.movieClip_16; var mc17 = this.movieClip_17; var mc18 = this.movieClip_18;
		
		// --- VELOCIDADES GLOBALES ---
		var vx1 = 8; var vy1 = 6;
		var vx2 = -5; var vy2 = 4;
		var vx3 = 7; var vy3 = -3;
		var vx4 = -9; var vy4 = -5;
		var vx5 = 6; var vy5 = 8;
		var vx6 = -4; var vy6 = -7;
		var vx7 = 7; var vy7 = -5;
		var vx8 = -9; var vy8 = 6;
		var vx9 = 1; var vy9 = -9;
		var vx10 = -9; var vy10 = -5;
		var vx11 = 9; var vy11 = 3;
		var vx12 = -6; var vy12 = -4;
		var vx13 = -2; var vy13 = -3;
		var vx14 = -6; var vy14 = 5;
		var vx15 = 6; var vy15 = 8;
		var vx16 = -7; var vy16 = -7;
		var vx17 = -8; var vy17 = 8;
		var vx18 = -4; var vy18 = -1;
		
		// --- DIMENSIONES FIJAS ---
		var ANCHO = 50;
		var ALTO = 50;
		
		// --- INICIO DE LA ANIMACIÓN ---
		if (mc1 && mc18) { // Verificación rápida del primero y el último
		    this.addEventListener("tick", fl_AnimateInBounds.bind(this));
		} else {
		    console.error("Error: Faltan instancias de movieClips.");
		}
		
		// ====================================================================
		// 2. FUNCIÓN PRINCIPAL DEL BUCLE
		// ====================================================================
		
		function fl_AnimateInBounds() {
		
		    // --- GRUPO 1 (Zona Derecha) ---
		    // Pasamos el parámetro extra '1' al final para indicar la Zona 1
		    var res1 = manejarMovimiento(mc1, vx1, vy1, ANCHO, ALTO, 1); vx1 = res1.vx; vy1 = res1.vy;
		    var res2 = manejarMovimiento(mc2, vx2, vy2, ANCHO, ALTO, 1); vx2 = res2.vx; vy2 = res2.vy;
		    var res3 = manejarMovimiento(mc3, vx3, vy3, ANCHO, ALTO, 1); vx3 = res3.vx; vy3 = res3.vy;
		    var res4 = manejarMovimiento(mc4, vx4, vy4, ANCHO, ALTO, 1); vx4 = res4.vx; vy4 = res4.vy;
		    var res5 = manejarMovimiento(mc5, vx5, vy5, ANCHO, ALTO, 1); vx5 = res5.vx; vy5 = res5.vy;
		    var res6 = manejarMovimiento(mc6, vx6, vy6, ANCHO, ALTO, 1); vx6 = res6.vx; vy6 = res6.vy;
		
		    // --- GRUPO 2 (Zona Izquierda) ---
		    // Pasamos el parámetro extra '2' al final para indicar la Zona 2
		    var res7 = manejarMovimiento(mc7, vx7, vy7, ANCHO, ALTO, 2); vx7 = res7.vx; vy7 = res7.vy;
		    var res8 = manejarMovimiento(mc8, vx8, vy8, ANCHO, ALTO, 2); vx8 = res8.vx; vy8 = res8.vy;
		    var res9 = manejarMovimiento(mc9, vx9, vy9, ANCHO, ALTO, 2); vx9 = res9.vx; vy9 = res9.vy;
		    var res10 = manejarMovimiento(mc10, vx10, vy10, ANCHO, ALTO, 2); vx10 = res10.vx; vy10 = res10.vy;
		    var res11 = manejarMovimiento(mc11, vx11, vy11, ANCHO, ALTO, 2); vx11 = res11.vx; vy11 = res11.vy;
		    var res12 = manejarMovimiento(mc12, vx12, vy12, ANCHO, ALTO, 2); vx12 = res12.vx; vy12 = res12.vy;
		    var res13 = manejarMovimiento(mc13, vx13, vy13, ANCHO, ALTO, 2); vx13 = res13.vx; vy13 = res13.vy;
		    var res14 = manejarMovimiento(mc14, vx14, vy14, ANCHO, ALTO, 2); vx14 = res14.vx; vy14 = res14.vy;
		    var res15 = manejarMovimiento(mc15, vx15, vy15, ANCHO, ALTO, 2); vx15 = res15.vx; vy15 = res15.vy;
		    var res16 = manejarMovimiento(mc16, vx16, vy16, ANCHO, ALTO, 2); vx16 = res16.vx; vy16 = res16.vy;
		    var res17 = manejarMovimiento(mc17, vx17, vy17, ANCHO, ALTO, 2); vx17 = res17.vx; vy17 = res17.vy;
		    var res18 = manejarMovimiento(mc18, vx18, vy18, ANCHO, ALTO, 2); vx18 = res18.vx; vy18 = res18.vy;
		
		    // --- COLISIONES GRUPO 1 ---
		    detectarColision(mc1, mc2, 1, 2, ANCHO);
		    detectarColision(mc1, mc3, 1, 3, ANCHO);
		    detectarColision(mc1, mc4, 1, 4, ANCHO);
		    detectarColision(mc1, mc5, 1, 5, ANCHO);
		    detectarColision(mc1, mc6, 1, 6, ANCHO);
		
		    detectarColision(mc2, mc3, 2, 3, ANCHO);
		    detectarColision(mc2, mc4, 2, 4, ANCHO);
		    detectarColision(mc2, mc5, 2, 5, ANCHO);
		    detectarColision(mc2, mc6, 2, 6, ANCHO);
		
		    detectarColision(mc3, mc4, 3, 4, ANCHO);
		    detectarColision(mc3, mc5, 3, 5, ANCHO);
		    detectarColision(mc3, mc6, 3, 6, ANCHO);
		
		    detectarColision(mc4, mc5, 4, 5, ANCHO);
		    detectarColision(mc4, mc6, 4, 6, ANCHO);
		
		    detectarColision(mc5, mc6, 5, 6, ANCHO);
		
		    // --- COLISIONES GRUPO 2 ---
		    detectarColision(mc7, mc8, 7, 8, ANCHO);
		    detectarColision(mc7, mc9, 7, 9, ANCHO);
		    detectarColision(mc7, mc10, 7, 10, ANCHO);
		    detectarColision(mc7, mc11, 7, 11, ANCHO);
		    detectarColision(mc7, mc12, 7, 12, ANCHO);
		    detectarColision(mc7, mc13, 7, 13, ANCHO);
		    detectarColision(mc7, mc14, 7, 14, ANCHO);
		    detectarColision(mc7, mc15, 7, 15, ANCHO);
		    detectarColision(mc7, mc16, 7, 16, ANCHO);
		    detectarColision(mc7, mc17, 7, 17, ANCHO);
		    detectarColision(mc7, mc18, 7, 18, ANCHO);
		
		    detectarColision(mc8, mc9, 8, 9, ANCHO);
		    detectarColision(mc8, mc10, 8, 10, ANCHO);
		    detectarColision(mc8, mc11, 8, 11, ANCHO);
		    detectarColision(mc8, mc12, 8, 12, ANCHO);
		    detectarColision(mc8, mc13, 8, 13, ANCHO);
		    detectarColision(mc8, mc14, 8, 14, ANCHO);
		    detectarColision(mc8, mc15, 8, 15, ANCHO);
		    detectarColision(mc8, mc16, 8, 16, ANCHO);
		    detectarColision(mc8, mc17, 8, 17, ANCHO);
		    detectarColision(mc8, mc18, 8, 18, ANCHO);
		
		    detectarColision(mc9, mc10, 9, 10, ANCHO);
		    detectarColision(mc9, mc11, 9, 11, ANCHO);
		    detectarColision(mc9, mc12, 9, 12, ANCHO);
		    detectarColision(mc9, mc13, 9, 13, ANCHO);
		    detectarColision(mc9, mc14, 9, 14, ANCHO);
		    detectarColision(mc9, mc15, 9, 15, ANCHO);
		    detectarColision(mc9, mc16, 9, 16, ANCHO);
		    detectarColision(mc9, mc17, 9, 17, ANCHO);
		    detectarColision(mc9, mc18, 9, 18, ANCHO);
		
		    detectarColision(mc10, mc11, 10, 11, ANCHO);
		    detectarColision(mc10, mc12, 10, 12, ANCHO);
		    detectarColision(mc10, mc13, 10, 13, ANCHO);
		    detectarColision(mc10, mc14, 10, 14, ANCHO);
		    detectarColision(mc10, mc15, 10, 15, ANCHO);
		    detectarColision(mc10, mc16, 10, 16, ANCHO);
		    detectarColision(mc10, mc17, 10, 17, ANCHO);
		    detectarColision(mc10, mc18, 10, 18, ANCHO);
		
		    detectarColision(mc11, mc12, 11, 12, ANCHO);
		    detectarColision(mc11, mc13, 11, 13, ANCHO);
		    detectarColision(mc11, mc14, 11, 14, ANCHO);
		    detectarColision(mc11, mc15, 11, 15, ANCHO);
		    detectarColision(mc11, mc16, 11, 16, ANCHO);
		    detectarColision(mc11, mc17, 11, 17, ANCHO);
		    detectarColision(mc11, mc18, 11, 18, ANCHO);
		
		    detectarColision(mc12, mc13, 12, 13, ANCHO);
		    detectarColision(mc12, mc14, 12, 14, ANCHO);
		    detectarColision(mc12, mc15, 12, 15, ANCHO);
		    detectarColision(mc12, mc16, 12, 16, ANCHO);
		    detectarColision(mc12, mc17, 12, 17, ANCHO);
		    detectarColision(mc12, mc18, 12, 18, ANCHO);
		
		    detectarColision(mc13, mc14, 13, 14, ANCHO);
		    detectarColision(mc13, mc15, 13, 15, ANCHO);
		    detectarColision(mc13, mc16, 13, 16, ANCHO);
		    detectarColision(mc13, mc17, 13, 17, ANCHO);
		    detectarColision(mc13, mc18, 13, 18, ANCHO);
		
		    detectarColision(mc14, mc15, 14, 15, ANCHO);
		    detectarColision(mc14, mc16, 14, 16, ANCHO);
		    detectarColision(mc14, mc17, 14, 17, ANCHO);
		    detectarColision(mc14, mc18, 14, 18, ANCHO);
		
		    detectarColision(mc15, mc16, 15, 16, ANCHO);
		    detectarColision(mc15, mc17, 15, 17, ANCHO);
		    detectarColision(mc15, mc18, 15, 18, ANCHO);
		
		    detectarColision(mc16, mc17, 16, 17, ANCHO);
		    detectarColision(mc16, mc18, 16, 18, ANCHO);
		
		    detectarColision(mc17, mc18, 17, 18, ANCHO);
		}
		
		// ====================================================================
		// 3. FUNCIONES AUXILIARES
		// ====================================================================
		
		/**
		 * Recibe un nuevo parametro 'zona' (1 o 2) para decidir los límites
		 */
		function manejarMovimiento(clip, vx, vy, ancho, alto, zona) {
		
		    clip.x += vx;
		    clip.y += vy;
		
		    var mitadAncho = ancho / 2;
		    var mitadAlto = alto / 2;
		
		    var limitesUsados = {};
		
		    // Asignamos límites según la ZONA que pasamos como parámetro
		    if (zona === 1) {
		        limitesUsados.der = LIMITE_DERECHO;
		        limitesUsados.izq = LIMITE_IZQUIERDO;
		        limitesUsados.inf = LIMITE_INFERIOR;
		        limitesUsados.sup = LIMITE_SUPERIOR;
		    } else {
		        limitesUsados.der = LIMITE_DERECHO18;
		        limitesUsados.izq = LIMITE_IZQUIERDO18;
		        limitesUsados.inf = LIMITE_INFERIOR18;
		        limitesUsados.sup = LIMITE_SUPERIOR18;
		    }
		
		    // --- Rebote Horizontal (Eje X) ---
		    var limiteXMaximo = limitesUsados.der - mitadAncho;
		    var limiteXMinimo = limitesUsados.izq + mitadAncho;
		
		    if (clip.x >= limiteXMaximo) {
		        clip.x = limiteXMaximo;
		        vx *= -1;
		    } else if (clip.x <= limiteXMinimo) {
		        clip.x = limiteXMinimo;
		        vx *= -1;
		    }
		
		    // --- Rebote Vertical (Eje Y) ---
		    var limiteYMaximo = limitesUsados.inf - mitadAlto;
		    var limiteYMinimo = limitesUsados.sup + mitadAlto;
		
		    if (clip.y >= limiteYMaximo) {
		        clip.y = limiteYMaximo;
		        vy *= -1;
		    } else if (clip.y <= limiteYMinimo) {
		        clip.y = limiteYMinimo;
		        vy *= -1;
		    }
		
		    return { vx: vx, vy: vy };
		}
		
		/**
		 * Comprueba colisión e invierte velocidades globales.
		 */
		function detectarColision(clipA, clipB, indexA, indexB, ancho) {
		
		    var dx = clipA.x - clipB.x;
		    var dy = clipA.y - clipB.y;
		    var distancia = Math.sqrt(dx * dx + dy * dy);
		
		    var radio = ancho / 2;
		    var sumaRadios = radio * 2;
		
		    if (distancia < sumaRadios) {
		        // 1. INVERTIR DIRECCIONES
		        switch (indexA) {
		            case 1: vx1 *= -1; vy1 *= -1; break;
		            case 2: vx2 *= -1; vy2 *= -1; break;
		            case 3: vx3 *= -1; vy3 *= -1; break;
		            case 4: vx4 *= -1; vy4 *= -1; break;
		            case 5: vx5 *= -1; vy5 *= -1; break;
		            case 6: vx6 *= -1; vy6 *= -1; break;
		            case 7: vx7 *= -1; vy7 *= -1; break;
		            case 8: vx8 *= -1; vy8 *= -1; break;
		            case 9: vx9 *= -1; vy9 *= -1; break;
		            case 10: vx10 *= -1; vy10 *= -1; break;
		            case 11: vx11 *= -1; vy11 *= -1; break;
		            case 12: vx12 *= -1; vy12 *= -1; break;
		            case 13: vx13 *= -1; vy13 *= -1; break;
		            case 14: vx14 *= -1; vy14 *= -1; break;
		            case 15: vx15 *= -1; vy15 *= -1; break;
		            case 16: vx16 *= -1; vy16 *= -1; break;
		            case 17: vx17 *= -1; vy17 *= -1; break;
		            case 18: vx18 *= -1; vy18 *= -1; break;
		        }
		
		        switch (indexB) {
		            case 1: vx1 *= -1; vy1 *= -1; break;
		            case 2: vx2 *= -1; vy2 *= -1; break;
		            case 3: vx3 *= -1; vy3 *= -1; break;
		            case 4: vx4 *= -1; vy4 *= -1; break;
		            case 5: vx5 *= -1; vy5 *= -1; break;
		            case 6: vx6 *= -1; vy6 *= -1; break;
		            case 7: vx7 *= -1; vy7 *= -1; break;
		            case 8: vx8 *= -1; vy8 *= -1; break;
		            case 9: vx9 *= -1; vy9 *= -1; break;
		            case 10: vx10 *= -1; vy10 *= -1; break;
		            case 11: vx11 *= -1; vy11 *= -1; break;
		            case 12: vx12 *= -1; vy12 *= -1; break;
		            case 13: vx13 *= -1; vy13 *= -1; break;
		            case 14: vx14 *= -1; vy14 *= -1; break;
		            case 15: vx15 *= -1; vy15 *= -1; break;
		            case 16: vx16 *= -1; vy16 *= -1; break;
		            case 17: vx17 *= -1; vy17 *= -1; break;
		            case 18: vx18 *= -1; vy18 *= -1; break;
		        }
		
		        // 2. SEPARAR PARA EVITAR PEGADO
		        var overlap = sumaRadios - distancia;
		        var angle = Math.atan2(dy, dx);
		        clipA.x += Math.cos(angle) * overlap * 0.5;
		        clipA.y += Math.sin(angle) * overlap * 0.5;
		        clipB.x -= Math.cos(angle) * overlap * 0.5;
		        clipB.y -= Math.sin(angle) * overlap * 0.5;
		    }
		}
		/**
		 * Comprueba la colisión entre dos clips y actualiza las variables globales de velocidad.
		 */
		function detectarColision(clipA, clipB, indexA, indexB, ancho) {
		
			var dx = clipA.x - clipB.x;
			var dy = clipA.y - clipB.y;
			var distancia = Math.sqrt(dx * dx + dy * dy);
		
			var radio = ancho / 2;
			var sumaRadios = radio * 2;
		
			if (distancia < sumaRadios) {
				// 1. INVERTIR DIRECCIONES (Accediendo a las variables globales por nombre)
		
				switch (indexA) {
					case 1:
						vx1 *= -1;
						vy1 *= -1;
						break;
					case 2:
						vx2 *= -1;
						vy2 *= -1;
						break;
					case 3:
						vx3 *= -1;
						vy3 *= -1;
						break;
					case 4:
						vx4 *= -1;
						vy4 *= -1;
						break;
					case 5:
						vx5 *= -1;
						vy5 *= -1;
						break;
					case 6:
						vx6 *= -1;
						vy6 *= -1;
						break;
					case 7:
						vx7 *= -1;
						vy7 *= -1;
						break;
					case 8:
						vx8 *= -1;
						vy8 *= -1;
						break;
					case 9:
						vx9 *= -1;
						vy9 *= -1;
						break;
					case 10:
						vx10 *= -1;
						vy10 *= -1;
						break;
					case 11:
						vx11 *= -1;
						vy11 *= -1;
						break;
					case 12:
						vx12 *= -1;
						vy12 *= -1;
						break;
					case 13:
						vx13 *= -1;
						vy13 *= -1;
						break;
					case 14:
						vx14 *= -1;
						vy14 *= -1;
						break;
					case 15:
						vx15 *= -1;
						vy15 *= -1;
						break;
					case 16:
						vx16 *= -1;
						vy16 *= -1;
						break;
					case 17:
						vx17 *= -1;
						vy17 *= -1;
						break;
					case 18:
						vx18 *= -1;
						vy18 *= -1;
						break;
		
				}
		
				switch (indexB) {
					case 1:
						vx1 *= -1;
						vy1 *= -1;
						break;
					case 2:
						vx2 *= -1;
						vy2 *= -1;
						break;
					case 3:
						vx3 *= -1;
						vy3 *= -1;
						break;
					case 4:
						vx4 *= -1;
						vy4 *= -1;
						break;
					case 5:
						vx5 *= -1;
						vy5 *= -1;
						break;
					case 6:
						vx6 *= -1;
						vy6 *= -1;
						break;
					case 7:
						vx7 *= -1;
						vy7 *= -1;
						break;
					case 8:
						vx8 *= -1;
						vy8 *= -1;
						break;
					case 9:
						vx9 *= -1;
						vy9 *= -1;
						break;
					case 10:
						vx10 *= -1;
						vy10 *= -1;
						break;
					case 11:
						vx11 *= -1;
						vy11 *= -1;
						break;
					case 12:
						vx12 *= -1;
						vy12 *= -1;
						break;
					case 13:
						vx13 *= -1;
						vy13 *= -1;
						break;
					case 14:
						vx14 *= -1;
						vy14 *= -1;
						break;
					case 15:
						vx15 *= -1;
						vy15 *= -1;
						break;
					case 16:
						vx16 *= -1;
						vy16 *= -1;
						break;
					case 17:
						vx17 *= -1;
						vy17 *= -1;
						break;
					case 18:
						vx18 *= -1;
						vy18 *= -1;
						break;
				}
		
				// 2. AJUSTE DE POSICIÓN (Separación)
				var overlap = sumaRadios - distancia;
				var angle = Math.atan2(dy, dx);
		
				clipA.x += Math.cos(angle) * overlap * 0.5;
				clipA.y += Math.sin(angle) * overlap * 0.5;
				clipB.x -= Math.cos(angle) * overlap * 0.5;
				clipB.y -= Math.sin(angle) * overlap * 0.5;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clips_obj_
	this.clips = new lib.Escena_1_clips();
	this.clips.name = "clips";
	this.clips.parent = this;
	this.clips.setTransform(848.8,307.4,1,1,0,0,0,848.8,307.4);
	this.clips.depth = 0;
	this.clips.isAttachedToCamera = 0
	this.clips.isAttachedToMask = 0
	this.clips.layerDepth = 0
	this.clips.layerIndex = 0
	this.clips.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.clips).wait(1));

	// Cuadricula_obj_
	this.Cuadricula = new lib.Escena_1_Cuadricula();
	this.Cuadricula.name = "Cuadricula";
	this.Cuadricula.parent = this;
	this.Cuadricula.setTransform(849.5,307.7,1,1,0,0,0,849.5,307.7);
	this.Cuadricula.depth = 0;
	this.Cuadricula.isAttachedToCamera = 0
	this.Cuadricula.isAttachedToMask = 0
	this.Cuadricula.layerDepth = 0
	this.Cuadricula.layerIndex = 1
	this.Cuadricula.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cuadricula).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(905,413.1,732.7,148.5);
// library properties:
lib.properties = {
	id: '9186097CE7D8A84083C5BA05F1C1B9BC',
	width: 1690,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_52.png?1765068937750", id:"CachedTexturedBitmap_52"},
		{src:"images/CachedTexturedBitmap_54.png?1765068937750", id:"CachedTexturedBitmap_54"},
		{src:"images/CronopiosHcuadr_atlas_.png?1765068937739", id:"CronopiosHcuadr_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['9186097CE7D8A84083C5BA05F1C1B9BC'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;