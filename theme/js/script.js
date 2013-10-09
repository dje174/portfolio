/* HEPL RIA 2013 - Cours
 *
 * JS Document - /js/script.js
 *
 * coded by Jérôme Poucet
 * started at 23.09.13
 */

/* jshint boss: true, curly: true, eqeqeq: true, eqnull: true, immed: true, latedef: true, newcap: true, noarg: true, browser: true, jquery: true, noempty: true, sub: true, undef: true, unused: true, white: false */

// start your work here.
//CORRECTION
(function( $ ){
	"use strict";

	var iTrombiDelay = 3000,
	$trombiPhotos

	var trombinext = function(){
		var $current, $next;
		($current = $trombiPhotos.filter(":visible")).delay(iTrombiDelay).fadeOut(function(){
			(($next = $current.next()).size() ? $next : $trombiPhotos.first() ).fadeIn(trombinext);
		})
	};
	/*au début, la variable current vaut visible qui recout la méthode delay avec une valeur en milliseconde avec laquelle il va faire une pause. On ajoute ensuite le fadeOut sur la current
		Dans la fonction, on va devoir sélectionner la suivante mais il faut vérifier qu'il y en a bien une avec la méthode .size qui retourne le nombre d'éléments sélectionnés. Et si size est vrai alors on utilise next, sinon on sélectionne la première image avec la variable .first. Et le fadeIn apporte l'image*/

	$(function(){ //cette fonction sera apellé au moment ou le dom est prêt et seulement quand il est prêt
		//1. liens externes
		$('a[rel="external"]').attr("target","_new");//on ajoute un attribut target a tous les liens où rel=external

		//2. trombino
		($trombiPhotos = $("#trombino figure")).not(":first").hide();//on a nos trois figure et on utilise le filtre .not pour cacher toutes celles qui ne sont pas la première
		/* OU
		$trombiPhotos = $("#trombino figure");
		$trombiPhotos.not(":first").hide();*/
		trombinext();
	});
	

}).call(this,jQuery); //Fonction anonyme dites contenaire qu'on appelle avec call avec comme paramètre jQuery pour appelé jQuery quand on apelle la fonction qui contient les variables. 
//Ainsi on est sur que $ vaut jQuery pendant toute la durée de la fonction.