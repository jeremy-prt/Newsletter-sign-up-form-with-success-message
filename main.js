$(document).ready(function () {
  $("#subscribe-button").click(function () {
    // Récupérer la valeur de l'input email
    var email = $("#email-input").val();

    // Vérifier si l'email est valide (contient "@" et se termine par ".com")
    if (isValidEmail(email)) {
      // L'email est valide, masquer le message d'erreur
      $(".mail-error").hide();
      $(".container").hide();
      $(".container.succes").css("display", "flex");
      // Mettre à jour le contenu du span avec la valeur de l'input
      $("#confirmation-email").text(email);
      $(".mail input").removeClass("error");
    } else {
      // L'email n'est pas valide, afficher le message d'erreur
      $(".mail-error").show();
      $(".mail input").addClass("error"); // Ajout de la classe erreur à l'input
    }
  });

  // Fonction pour valider l'email
  function isValidEmail(email) {
    // Utiliser une expression régulière simple pour la validation de base
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  $("#dismiss-button").click(function () {
    $(".container").css("display", "grid");
    $(".container.succes").hide();
    $("#email-input").val("");
  });
});
