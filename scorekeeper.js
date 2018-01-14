var p1Button  = document.querySelector("#p1");
var p2Button  = document.getElementById("p2");
var reset     = document.getElementById("reset");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var numInput  = document.querySelector("input");
var winninScoreDisplay  = document.querySelector("p span");
var p1Score   = 0;
var p2Score   = 0;
var gameOver  = false;
var cap       = 5;

p1Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p1Score++;
		p1Display.textContent = p1Score;
		if(p1Score === cap)
		{
			gameOver = true;
			p1Display.style.color = "green";
		}
	}
});

p2Button.addEventListener("click",function(){
	if(!gameOver)
	{
		p2Score++;
		p2Display.textContent = p2Score;
		if(p2Score === cap)
		{
			gameOver = true;
			p2Display.style.color = "green";
		}
	}
});

numInput.addEventListener("change",function(){
	if(numInput.value < 1) alert("Enter a value greater than 0");
	winninScoreDisplay.textContent = numInput.value;
	cap = Number(numInput.value());
});

reset.addEventListener("click",function()
{
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1Display.textContent = p1Score;
	p2Display.textContent = p2Score;
	p1Display.style.color = "black";
	p2Display.style.color = "black";


});
