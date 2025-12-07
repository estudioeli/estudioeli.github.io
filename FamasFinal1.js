(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"FamasFinal1_atlas_", frames: [[0,1019,1415,346],[1015,0,125,177],[0,0,1013,1017]]}
];


// symbols:



(lib.CachedTexturedBitmap_1 = function() {
	this.initialize(img.CachedTexturedBitmap_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3012,1017);


(lib.CachedTexturedBitmap_2 = function() {
	this.initialize(ss["FamasFinal1_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_3 = function() {
	this.initialize(img.CachedTexturedBitmap_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3006,1011);


(lib.CachedTexturedBitmap_4 = function() {
	this.initialize(ss["FamasFinal1_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedTexturedBitmap_5 = function() {
	this.initialize(ss["FamasFinal1_atlas_"]);
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
	this.instance = new lib.CachedTexturedBitmap_3();
	this.instance.parent = this;
	this.instance.setTransform(61.3,50.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_Cuadricula, null, null);


(lib.cuadrado_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_5();
	this.instance.parent = this;
	this.instance.setTransform(-245.35,-245.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cuadrado_Capa_1, null, null);


(lib.ch_Capa_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa_1
	this.instance = new lib.CachedTexturedBitmap_4();
	this.instance.parent = this;
	this.instance.setTransform(-22.2,-79.75,0.5675,0.5675);

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
	this.Capa_1.setTransform(13.2,-29.6,1,1,0,0,0,13.2,-29.6);
	this.Capa_1.depth = 0;
	this.Capa_1.isAttachedToCamera = 0
	this.Capa_1.isAttachedToMask = 0
	this.Capa_1.layerDepth = 0
	this.Capa_1.layerIndex = 0
	this.Capa_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Capa_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.ch, new cjs.Rectangle(-22.2,-79.7,71,100.4), null);


(lib.Escena_1_clips = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// clips
	this.cuadrado = new lib.cuadrado();
	this.cuadrado.name = "cuadrado";
	this.cuadrado.parent = this;
	this.cuadrado.setTransform(1067,55.1,1,1,0,0,0,-239.3,-241.5);

	this.cuadrado_1 = new lib.cuadrado();
	this.cuadrado_1.name = "cuadrado_1";
	this.cuadrado_1.parent = this;
	this.cuadrado_1.setTransform(565.8,55.1,1,1,0,0,0,-239.3,-241.5);

	this.instance = new lib.CachedTexturedBitmap_2();
	this.instance.parent = this;
	this.instance.setTransform(463.6,556.8,0.5,0.5);

	this.movieClip_6 = new lib.ch();
	this.movieClip_6.name = "movieClip_6";
	this.movieClip_6.parent = this;
	this.movieClip_6.setTransform(791.45,180,0.8759,0.8752,0,0,0,13.3,-29.7);

	this.movieClip_5 = new lib.ch();
	this.movieClip_5.name = "movieClip_5";
	this.movieClip_5.parent = this;
	this.movieClip_5.setTransform(382.35,362.65,0.8759,0.8752,75.0004,0,0,13.3,-29.6);

	this.movieClip_4 = new lib.ch();
	this.movieClip_4.name = "movieClip_4";
	this.movieClip_4.parent = this;
	this.movieClip_4.setTransform(916.4,320.75,0.8759,0.881,-90,0,0,13.5,-29.6);

	this.movieClip_3 = new lib.ch();
	this.movieClip_3.name = "movieClip_3";
	this.movieClip_3.parent = this;
	this.movieClip_3.setTransform(1058.05,195.35,0.8759,0.881,-44.9993,0,0,13.3,-29.7);

	this.movieClip_2 = new lib.ch();
	this.movieClip_2.name = "movieClip_2";
	this.movieClip_2.parent = this;
	this.movieClip_2.setTransform(382.35,154.3,0.8759,0.881,-90,0,0,13.3,-29.6);

	this.movieClip_1 = new lib.ch();
	this.movieClip_1.name = "movieClip_1";
	this.movieClip_1.parent = this;
	this.movieClip_1.setTransform(583.45,305.15,0.8759,0.881,180,0,0,13.3,-29.6);

	this.cuadrado_2 = new lib.cuadrado();
	this.cuadrado_2.name = "cuadrado_2";
	this.cuadrado_2.parent = this;
	this.cuadrado_2.setTransform(66.05,55.1,1,1,0,0,0,-239.3,-241.5);

	this.instance_1 = new lib.CachedTexturedBitmap_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(60.95,51.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.cuadrado_2},{t:this.movieClip_1},{t:this.movieClip_2},{t:this.movieClip_3},{t:this.movieClip_4},{t:this.movieClip_5},{t:this.movieClip_6},{t:this.instance},{t:this.cuadrado_1},{t:this.cuadrado}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Escena_1_clips, null, null);


// stage content:
(lib.FamasFinal1 = function(mode,startPosition,loop) {
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
		this.cuadrado = this.clips.cuadrado;
		this.cuadrado = this.clips.cuadrado;
		// ====================================================================
		// 1. CONFIGURACIÓN Y VARIABLES GLOBALES
		// ====================================================================
		
		// --- LÍMITES ZONA 1 (Derecha: Clips 1-6) ---
		var LIMITE_DERECHO = 1555;
		var LIMITE_IZQUIERDO = 80;
		var LIMITE_INFERIOR = 540;
		var LIMITE_SUPERIOR = 70;
		
		// --- INSTANCIAS DE OBJETOS (¡Esto faltaba!) ---
		var mc1 = this.movieClip_1;
		var mc2 = this.movieClip_2;
		var mc3 = this.movieClip_3;
		var mc4 = this.movieClip_4;
		var mc5 = this.movieClip_5;
		var mc6 = this.movieClip_6;
		
		// --- VELOCIDADES GLOBALES ---
		var vx1 = 8; var vy1 = 6;
		var vx2 = -5; var vy2 = 4;
		var vx3 = 7; var vy3 = -3;
		var vx4 = -9; var vy4 = -5;
		var vx5 = 6; var vy5 = 8;
		var vx6 = -4; var vy6 = -7;
		
		// --- DIMENSIONES FIJAS ---
		var ANCHO = 50;
		var ALTO = 50;
		
		// --- INICIO DE LA ANIMACIÓN ---
		// CORRECCIÓN: Cambiado mc18 por mc6
		if (mc1 && mc6) { 
		    this.addEventListener("tick", fl_AnimateInBounds.bind(this));
		} else {
		    console.error("Error: Faltan instancias de movieClips.");
		}
		
		// ====================================================================
		// 2. FUNCIÓN PRINCIPAL DEL BUCLE
		// ====================================================================
		
		function fl_AnimateInBounds() {
		
		    // --- GRUPO 1 ---
		    var res1 = manejarMovimiento(mc1, vx1, vy1, ANCHO, ALTO);
		    vx1 = res1.vx; vy1 = res1.vy;
		    
		    var res2 = manejarMovimiento(mc2, vx2, vy2, ANCHO, ALTO);
		    vx2 = res2.vx; vy2 = res2.vy;
		    
		    var res3 = manejarMovimiento(mc3, vx3, vy3, ANCHO, ALTO);
		    vx3 = res3.vx; vy3 = res3.vy;
		    
		    var res4 = manejarMovimiento(mc4, vx4, vy4, ANCHO, ALTO);
		    vx4 = res4.vx; vy4 = res4.vy;
		    
		    var res5 = manejarMovimiento(mc5, vx5, vy5, ANCHO, ALTO);
		    vx5 = res5.vx; vy5 = res5.vy;
		    
		    var res6 = manejarMovimiento(mc6, vx6, vy6, ANCHO, ALTO);
		    vx6 = res6.vx; vy6 = res6.vy;
		
		    // --- COLISIONES ---
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
		}
		
		// ====================================================================
		// 3. FUNCIONES AUXILIARES
		// ====================================================================
		
		function manejarMovimiento(clip, vx, vy, ancho, alto) {
		
		    clip.x += vx;
		    clip.y += vy;
		
		    var mitadAncho = ancho / 2;
		    var mitadAlto = alto / 2;
		
		    // Límites fijos (ya no necesitamos 'zona' porque solo hay una)
		    var limiteXMaximo = LIMITE_DERECHO - mitadAncho;
		    var limiteXMinimo = LIMITE_IZQUIERDO + mitadAncho;
		    var limiteYMaximo = LIMITE_INFERIOR - mitadAlto;
		    var limiteYMinimo = LIMITE_SUPERIOR + mitadAlto;
		
		    // --- Rebote Horizontal ---
		    if (clip.x >= limiteXMaximo) {
		        clip.x = limiteXMaximo;
		        vx *= -1;
		    } else if (clip.x <= limiteXMinimo) {
		        clip.x = limiteXMinimo;
		        vx *= -1;
		    }
		
		    // --- Rebote Vertical ---
		    if (clip.y >= limiteYMaximo) {
		        clip.y = limiteYMaximo;
		        vy *= -1;
		    } else if (clip.y <= limiteYMinimo) {
		        clip.y = limiteYMinimo;
		        vy *= -1;
		    }
		
		    return { vx: vx, vy: vy };
		}
		
		function detectarColision(clipA, clipB, indexA, indexB, ancho) {
		
		    var dx = clipA.x - clipB.x;
		    var dy = clipA.y - clipB.y;
		    var distancia = Math.sqrt(dx * dx + dy * dy);
		
		    var radio = ancho / 2;
		    var sumaRadios = radio * 2;
		
		    if (distancia < sumaRadios) {
		        // 1. INVERTIR DIRECCIONES A
		        switch (indexA) {
		            case 1: vx1 *= -1; vy1 *= -1; break;
		            case 2: vx2 *= -1; vy2 *= -1; break;
		            case 3: vx3 *= -1; vy3 *= -1; break;
		            case 4: vx4 *= -1; vy4 *= -1; break;
		            case 5: vx5 *= -1; vy5 *= -1; break;
		            case 6: vx6 *= -1; vy6 *= -1; break;
		        }
		
		        // 1. INVERTIR DIRECCIONES B
		        switch (indexB) {
		            case 1: vx1 *= -1; vy1 *= -1; break;
		            case 2: vx2 *= -1; vy2 *= -1; break;
		            case 3: vx3 *= -1; vy3 *= -1; break;
		            case 4: vx4 *= -1; vy4 *= -1; break;
		            case 5: vx5 *= -1; vy5 *= -1; break;
		            case 6: vx6 *= -1; vy6 *= -1; break;
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
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// clips_obj_
	this.clips = new lib.Escena_1_clips();
	this.clips.name = "clips";
	this.clips.parent = this;
	this.clips.setTransform(813.7,390.5,1,1,0,0,0,813.7,390.5);
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
	this.Cuadricula.setTransform(812.8,303.7,1,1,0,0,0,812.8,303.7);
	this.Cuadricula.depth = 0;
	this.Cuadricula.isAttachedToCamera = 0
	this.Cuadricula.isAttachedToMask = 0
	this.Cuadricula.layerDepth = 0
	this.Cuadricula.layerIndex = 1
	this.Cuadricula.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Cuadricula).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(905,411,662.5,318.79999999999995);
// library properties:
lib.properties = {
	id: '9186097CE7D8A84083C5BA05F1C1B9BC',
	width: 1690,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedTexturedBitmap_1.png?1765066026408", id:"CachedTexturedBitmap_1"},
		{src:"images/CachedTexturedBitmap_3.png?1765066026408", id:"CachedTexturedBitmap_3"},
		{src:"images/FamasFinal1_atlas_.png?1765066026395", id:"FamasFinal1_atlas_"}
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