function searchImages() {
    var searchTerm = document.getElementById("searchInput").value;
    var flickrAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
    var searchURL = flickrAPI + "&tags=" + searchTerm + "&format=json";

    // Limpar galeria de imagens anterior
    document.getElementById("imageGallery").innerHTML = "";

    // Requisição AJAX para o Flickr API
    $.getJSON(searchURL, function(data) {
        data.items.forEach(function(item) {
            var img = document.createElement("img");
            img.setAttribute("src", item.media.m);
            img.setAttribute("class", "imageResult");
            document.getElementById("imageGallery").appendChild(img);
        });
    });
}
