/**
 * Projet Final Phtociti
 * Étudiant: Rafael De Mendonça
 * Date: 2020-04-10
 */


var characters = [];
//click button
$("#buttonGo").click(function () {
    createWord()
});

//keypress enter
$('#mots').keypress(function (e) {
    if (e.which == 13) {
        createWord();
    }
});

// Validation de la quantité de caractères et caractère spéciaux avec *
function createWord() {
    characters = $("#mots").val().toUpperCase().split('');
    for (var i = 0; i < characters.length; i++) {
        if (characters[i] === 'É' || characters[i] === 'È' || characters[i] === 'Ë' || characters[i] === 'Ê') {
            characters[i] = 'E';
        }
        if (characters[i] === 'À') {
            characters[i] = 'A';
        }
        if (characters[i] === 'Ú') {
            characters[i] = 'U';
        }

        if (characters[i] === '*') {
            characters[i] = 'CS';
        }

    }
    if (characters.length < 3 || characters.length > 12)
        alert('Vous devez choisir une mot avec le minimun 3 et maximun 12 character');
    else
        addImg(characters);
}

//Function pour transformer le mot en images
function addImg(characters) {
    var word = [];

    //Créer var pour valider la quantité de col affichés, plusieurs essais mais...
    var wordCol;
    if (characters.length == 3) wordCol = '4';
    if (characters.length == 4) wordCol = '3';
    if (characters.length == 5 || characters.length == 6) wordCol = '2';
    if (characters.length >= 7) wordCol = '1';

    //Ajouter de la liste d'images dans le HTML
    $("#imgList").empty(); // repete pas le mot saisie
    $(characters).each(function (index, item) { //Pour chaque item rétrouvé c'est crée un <li> avec un id specifique
        word = '<li class="imgWords col-' + wordCol + '" id="' + item + '' + index + '" data-toggle="modal" data-target="#exampleModal"><img class="img-thumbnail" src="Letters/' + item + '/' + item + '1' + '.jpg"' + ' ></li>';
        $("#imgList").append(word);
    });

    // Function pour visualizer le modal
    var idImage;
    $('.imgWords').off('click');
    $('.imgWords').on('click', function () {
        idImage = $(this).attr('id');

        //Constructions des images dans le modal
        var pathFolder;
        if (idImage.search('CS') != -1) pathFolder = idImage.slice(0, 2);
        else pathFolder = idImage.slice(0, 1);

        $('.carousel-inner').empty();
        $('.carousel-inner').append('<div class="carousel-item active">' +
            '   <img class="d-block w-100 clickon" id="' + pathFolder + '1" src="Letters/' + pathFolder + '/' + pathFolder + '1.jpg' + '" >' +
            '</div>' +

            '<div class="carousel-item ">' +
            '   <img class="d-block w-100 clickon" id="' + pathFolder + '2" src="Letters/' + pathFolder + '/' + pathFolder + '2.jpg' + '" >' +
            '</div>' +

            '<div class="carousel-item ">' +
            '   <img class="d-block w-100 clickon" id="' + pathFolder + '3" src="Letters/' + pathFolder + '/' + pathFolder + '3.jpg' + '" >' +
            '</div>' +

            '</div>' + '<div class="carousel-item ">' +
            '   <img class="d-block w-100 clickon" id="' + pathFolder + '4" src="Letters/' + pathFolder + '/' + pathFolder + '4.jpg' + '" >' +
            '</div>' +

            '<div class="carousel-item ">' +
            '   <img class="d-block w-100 clickon" id="' + pathFolder + '5" src="Letters/' + pathFolder + '/' + pathFolder + '5.jpg' + '" >' +
            '</div>'
        );

        //Enregistre l'image choisie au carousel dans le modal
        $('.clickon').off('click');
        $('.clickon').on('click', function () {
            var idImageCarousel = $(this).attr('id');
            var letter = idImageCarousel.slice(0,1)

            $('#' + idImage).empty().append('<img class="img-thumbnail" src="Letters/' + letter + '/' +idImageCarousel + '.jpg"' + ' >');
        });

    });

    // Fermer / hide le Modal
    $("#myBtn").click(function () {
        $("#myModal").modal("hide");
    });


    $('.close').off('click');
    $('.close').on('click', function () {
        $('.modal').addClass('hide')
    });
}

/*Couleur de fond du cadre - background-color quadro*/
$("#blanc").click(function(){
    $(".cadre").css("background-color", "white");
});
$("#bleu").click(function(){
    $(".cadre").css("background-color", "cornflowerblue");
});
$("#navy").click(function(){
    $(".cadre").css("background-color", "navy");
});
$("#noir").click(function(){
    $(".cadre").css("background-color", "black");
});
$("#gris").click(function(){
    $(".cadre").css("background-color", "lightslategrey");
});
$("#dark").click(function(){
    $(".cadre").css("background-color", "#343a40");
});
$("#rose").click(function(){
    $(".cadre").css("background-color", "rosybrown");
});
$("#rouge").click(function(){
    $(".cadre").css("background-color", "red");
});

//Function print apliqué avec la class d-print-none

$(".printMe").click(function(){
    $(".cadre").show();
    window.print();
});









