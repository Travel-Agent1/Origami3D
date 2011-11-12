Origami.world = {
	
	raycasting:{
		tile:{
			w:512, 
			l:512,
			h:512
		},
		step: 4,
		map:[
			["a","b","a","a","a","a","a","a","a"],
			["b", 0 , 0 , 0 , 0 , 0 , 0 , 0 ,"b"],
			["a", 0 , 0 ,"d", 0 , 0 , 0 , 0 ,"v"],
			["a", 0 , 0 ,"d", 0 , 0 , 0 , 0 ,"w"],
			["a", 0 , 0 ,"d", 0 , 0 , 0 , 0 ,"a"],
			["a", 0 , 0 ,"d", 0 , 0 ,"a", 0 ,"a"],
			["a", 0 , 0 , 0 , 0 , 0 ,"a", 0 ,"a"],
			["a","b","a","a","a", 0 ,"a","a","a"],
			["a", 0 , 0 , 0 , 0 , 0 , 0 , 0 ,"a"],
			["a", 0 , 0 ,"d","c","c","c", 0 ,"a"],
			["a", 0 , 0 ,"d", 0 , 0 ,"c", 0 ,"a"],
			["a", 0 , 0 ,"d", 0 , 0 , 0 , 0 ,"a"],
			["a", 0 , 0 ,"d", 0 , 0 ,"a", 0 ,"a"],
			["a", 0 , 0 , 0 , 0 , 0 ,"a", 0 ,"a"],
			["a","b","a","a","a","a","a","a","a"],
		]
	},
	shapes:[
		{
			type:"3DSprite",
			x:512*2.5, 
			y:0, 
			z:512*8.5, 
			ry:Math.PI,
			sides:8,
			texture:"character1"
		},
		{
			type:"2DSprite",
			x:512*7, 
			y:0, 
			z:512*3, 
			ry:Math.PI,
			texture:"tablechairs"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*6, 
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*4, 
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*2, 
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*5, 
			y:0, 
			z:512*2, 
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*7, 
			y:0, 
			z:512*2, 
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*5, 
			y:0, 
			z:512*6,
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*9,
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*11,
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*2, 
			y:0, 
			z:512*13,
			ry:Math.PI,
			texture:"lamp"
		},
		{
			type:"2DSprite",
			x:512*7.5, 
			y:0, 
			z:512*6.9,
			ry:Math.PI,
			texture:"armor"
		},
		{
			type:"2DSprite",
			x:512*4.5, 
			y:0, 
			z:512*10.5,

			ry:Math.PI,
			texture:"plant"
		}
	],
	textures:{
		"a":{
			image:"walls",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:0,
			dy:0
		},
		"b":{
			image:"walls",
			w:64,
			h:64,
			sx:0,
			sy:64,
			dx:0,
			dy:0
		},
		"c":{
			image:"walls",
			w:64,
			h:64,
			sx:0,
			sy:128,
			dx:0,
			dy:0
		},
		"d":{
			image:"walls",
			w:64,
			h:64,
			sx:0,
			sy:192,
			dx:0,
			dy:0
		},
		"v":{
			image:"walls",
			canvas:"video",
			w:427,
			h:480,
			sx:0,
			sy:0,
			dx:0,
			dy:0
		},
		"w":{
			image:"walls",
			canvas:"video",
			w:427,
			h:480,
			sx:427,
			sy:0,
			dx:0,
			dy:0
		},
		"character1":{
			image:"character1",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:-32,
			dy:-64,
			s:4
		},
		"tablechairs":{
			image:"tablechairs",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:-32,
			dy:-64,
			s:5
		},
		"lamp":{
			image:"lamp",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:-32,
			dy:-64,
			s:8
		},
		"armor":{
			image:"armor",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:-32,
			dy:-64,
			s:6
		},
		"plant":{
			image:"plant",
			w:64,
			h:64,
			sx:0,
			sy:0,
			dx:-32,
			dy:-64,
			s:6
		},
	},
	images: {
		"walls":{
			url:"gfx/walls.png"
		},
		"character1":{
			url:"gfx/character1.png"
		},
		"tablechairs":{
			url:"gfx/tablechairs.png"
		},
		"armor":{
			url:"gfx/armor.png"
		},
		"plant":{
			url:"gfx/plantgreen.png"
		},
		"lamp":{
			url:"gfx/lamp.png"
		},
		"video":{
			url:"gfx/video.png"
		}
	},
	canvas:{
		"video":{
			width:854,
			height:480,
			image:"video"
		}
	},
	videos:[
		{
			url:[
				{
					src:"videos/big_buck_bunny_480p_stereo.ogg",
					type:"video/ogg"
				},
				{
					src:"videos/big_buck_bunny_480p_h264.mov"
				}
			],
			width:854,
			height:480,
		},
	]
};
Origami.cam = {
	x:Origami.world.raycasting.tile.w*1.5, 
	y:256, 
	z:Origami.world.raycasting.tile.l*1.5, 
	rx:0, 
	ry:Math.PI/2, 
	rz:0, 
	r:300, //What is this? can it be deleted?
	horizon:120, 
	depth:350
};
