var arrayReponse = [];
var reponse = ["7","2","4","3","6","8","4","3","4","9"]

var rotationValue= 0;
var limite = 0;
var angle;
var moveFwd = false;
var canInput = true;


$(".cadran-input").click(function(){
    if(canInput == true){

        if( $(this).attr("val") == reponse[arrayReponse.length]){
            arrayReponse.push($(this).attr("val"));
            console.log(arrayReponse);
        }else{
            arrayReponse = [];
        }

        canInput = false;
        moveFwd = false;

        if($(this).attr("val")=="1"){
            limite = -1.1;
        }else if($(this).attr("val")=="2"){
            limite = -1.6;
        }else if($(this).attr("val")=="3"){
            limite = -2.2;
        }else if($(this).attr("val")=="4"){
            limite = -2.6;
        }else if($(this).attr("val")=="5"){
            limite = -3;
        }else if($(this).attr("val")=="6"){
            limite = -3.6;
        }else if($(this).attr("val")=="7"){
            limite = -4.2;
        }else if($(this).attr("val")=="8"){
            limite = -4.7;
        }else if($(this).attr("val")=="9"){
            limite = -5.2;
        }else if($(this).attr("val")=="0"){
            limite = -5.7;
        }
    }

})

scene.registerAfterRender(function () {

    if(scene.getMeshByID("cadran")){

        if(rotationValue > limite && moveFwd == false){
            angle = -0.04
            rotationValue = rotationValue -0.04;
            scene.getMeshByID("cadran").rotate(BABYLON.Axis.Y, angle, BABYLON.Space.LOCAL)
        }else if(rotationValue < limite && moveFwd == false){
            moveFwd = true;
        }else if(moveFwd == true && rotationValue < 0){
            angle = 0.04
            rotationValue = rotationValue + 0.04;
            scene.getMeshByID("cadran").rotate(BABYLON.Axis.Y, angle, BABYLON.Space.LOCAL);
            canInput = true;
        }

    }
});
