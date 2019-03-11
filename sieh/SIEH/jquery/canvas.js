// JavaScript Document
$(document).on("ready",configurarApp);

function configurarApp ()
{
	var canvas = document.getElementById("miCanvas");
	var ctx = canvas.getContext("2d");
	canvas.width = screen.availWidth;
	
	dibujafooter(canvas,ctx)
}
function dibujafooter(canvas,contexto)
{
	contexto.moveTo(0,0);
	contexto.quadraticCurveTo(100,0,canvas.width,canvas.height);
	contexto.fill();	
}