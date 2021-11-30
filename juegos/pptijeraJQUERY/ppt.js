$(function() {
    $('input[type="radio"]').click(function(){
        var elemento = $('input:radio[name=elemento]:checked').val();
        var aleatorio=Math.floor(Math.random()*3);
		
        if (aleatorio == 0)
			elemento_contra = "piedra";
		
        else if (aleatorio == 1)
			elemento_contra = "papel";
        else
			elemento_contra = "tijera";
		
		
        var ganador;
		
        if (elemento == elemento_contra)
			ganador = "empate";
        else if ((elemento == "piedra" && elemento_contra == "tijera") || (elemento == "papel" && elemento_contra == "piedra") || (elemento == "tijera" && elemento_contra == "papel")) {
            ganador = "Player Wins";
            var actual = parseInt($('.usuario').html());
            actual += parseInt(1);
            $('.usuario').html(actual);
        }else {
            ganador = "Computer Wins";
            var actual = parseInt($('.ordenador').html());
            actual += parseInt(1);
            $('.ordenador').html(actual);
        }
        $('#resultado').html("Player have " + elemento + " - Computer have " + elemento_contra + "<br> Result is " + ganador);
         
    });
});