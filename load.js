// Create the scene space
var canvas = document.getElementById("canvas");
var engine = new BABYLON.Engine(canvas, true, {})

var scene = new BABYLON.Scene(engine);

scene.createDefaultEnvironment({
    environmentTexture: "objet/environment.env"
});

scene.createDefaultSkybox(scene.environmentTexture);

scene.getNodeByName("BackgroundHelper").dispose();

// Create camera
var camera = new BABYLON.UniversalCamera("Camera", new BABYLON.Vector3(0., 0., 0.), scene);
camera.position = new BABYLON.Vector3(-7.36, 0.46, 1.19);
camera.target = new BABYLON.Vector3(-6.40, 0.24, 1.35);
camera.minZ = 0.1
camera.fov = 0.5;
scene.activeCamera = camera;

var glassMat = new BABYLON.PBRMaterial("glassMat", scene);
glassMat.metallic = 0.0;
glassMat.roughness = 0.1;
glassMat.subSurface.isTranslucencyEnabled = true;
glassMat.subSurface.tintColor = BABYLON.Color3.Teal();
glassMat.alpha = 0.7;
glassMat.subSurface.tintColor.g = 0.03;
glassMat.subSurface.tintColor.b = glassMat.subSurface.tintColor.g;
glassMat.subSurface.tintColor.r = glassMat.subSurface.tintColor.g;

var phoneBlackMat = new BABYLON.PBRMaterial("phoneBlackMat", scene);
phoneBlackMat.metallic = 0.0;
phoneBlackMat.roughness = 0.1;
phoneBlackMat.subSurface.isTranslucencyEnabled = true;
phoneBlackMat.albedoColor = new BABYLON.Color3(0.01,0.01,0.01);
phoneBlackMat.subSurface.tintColor = BABYLON.Color3.Teal();
phoneBlackMat.subSurface.tintColor.g = 0.01;
phoneBlackMat.subSurface.tintColor.b = phoneBlackMat.subSurface.tintColor.g;
phoneBlackMat.subSurface.tintColor.r = phoneBlackMat.subSurface.tintColor.g;

var cursorMat = new BABYLON.PBRMaterial("cursorMat", scene);
cursorMat.metallic = 1;
cursorMat.roughness = 0.1;
cursorMat.subSurface.isTranslucencyEnabled = true;
cursorMat.albedoColor = new BABYLON.Color3(0.1,0.1,0.1);
cursorMat.subSurface.tintColor = BABYLON.Color3.Teal();
cursorMat.subSurface.tintColor.g = 1;
cursorMat.subSurface.tintColor.b = cursorMat.subSurface.tintColor.g;
cursorMat.subSurface.tintColor.r = cursorMat.subSurface.tintColor.g;

var cadranMat = new BABYLON.PBRMaterial("cadranMat", scene);
cadranMat.albedoTexture = new BABYLON.Texture("objet/telephone/cadran.png", scene);
cadranMat.roughness = 0.6;

var bureauMat = new BABYLON.PBRMaterial("bureauMat", scene);
bureauMat.albedoTexture = new BABYLON.Texture("objet/telephone/wood.png", scene);
bureauMat.roughness = 0.9;

var murMat = new BABYLON.PBRMaterial("murMat", scene);
murMat.albedoTexture = new BABYLON.Texture("objet/telephone/murDiffuse.png", scene);
murMat.albedoTexture.uScale = 10;
murMat.albedoTexture.vScale = 10;
murMat.roughness = 0.7;
murMat.reflexionTexture = new BABYLON.Texture("objet/telephone/murSpecular.png", scene);
murMat.reflexionTexture.uScale = 10;
murMat.reflexionTexture.vScale = 10;


var pivot = new BABYLON.TransformNode("root");
pivot = new BABYLON.Vector3(6.19, 0.218, 1.409);

BABYLON.SceneLoader.Append("objet/telephone/", "telephone.glb", scene, function(){
    scene.getMeshByID("telephone").material = phoneBlackMat;
    scene.getMeshByID("cadran").material = glassMat;
    scene.getMeshByID("numero").material = cadranMat;
    scene.getMeshByID("cursor").material = cursorMat;
    scene.getMeshByID("burreau").material = bureauMat;
    scene.getMeshByID("mur").material = murMat;

    scene.getMeshByID("numero").position = new BABYLON.Vector3(6.193, 0.206, 1.414);
    scene.getMeshByID("numero").rotation = new BABYLON.Vector3(0, 0, -1.1);

    scene.getMeshByID("cadran").position = new BABYLON.Vector3(6.19, 0.218, 1.409);
    scene.getMeshByID("cadran").rotation = new BABYLON.Vector3(0, 0, -1.1);
});


// Render Loop
engine.runRenderLoop(function() {
    scene.render();
});

// Auto Resize
window.addEventListener("resize", function() {
    engine.resize();
});
