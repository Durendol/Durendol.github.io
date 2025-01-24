const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.TiledBg,
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Behaviors.bound,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Plugins.Keyboard,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Behaviors.solid.Acts.SetEnabled,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Plugins.Sprite.Acts.SetMirrored
	];
};
self.C3_JsPropNameTable = [
	{TiledBackground: 0},
	{ScrollTo: 0},
	{"8Direction": 0},
	{BoundToLayout: 0},
	{Player: 0},
	{Door: 0},
	{red: 0},
	{Blue: 0},
	{Purple: 0},
	{Solid: 0},
	{wall: 0},
	{Wall2: 0},
	{Wall3: 0},
	{Text: 0},
	{Sprite: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Text2: 0},
	{Text3: 0},
	{Keyboard: 0}
];

self.InstanceType = {
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Player: class extends self.ISpriteInstance {},
	Door: class extends self.ISpriteInstance {},
	red: class extends self.ISpriteInstance {},
	Blue: class extends self.ISpriteInstance {},
	Purple: class extends self.ISpriteInstance {},
	wall: class extends self.ISpriteInstance {},
	Wall2: class extends self.ISpriteInstance {},
	Wall3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text2: class extends self.ITextInstance {},
	Text3: class extends self.ITextInstance {},
	Keyboard: class extends self.IInstance {}
}