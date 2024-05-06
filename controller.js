document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('kransButton');
    if(button) {
        button.addEventListener('click', function() {
            window.location.href = 'page2.html';
        });
    }

    const dropdownButton = document.querySelector(".dropbtn");
    if(dropdownButton) {
        dropdownButton.addEventListener("click", function() {
            document.getElementById("myDropdown").classList.toggle("show");
        });
    }

});

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function togglePopupWindow() {
    var popupWindow = document.getElementById("popupWindow");
    if (popupWindow.style.display === "none") {
        popupWindow.style.display = "block";
    } else {
        popupWindow.style.display = "none";
    }
}
function animateKrans() {
    var krans = document.getElementById("krans");
    krans.classList.add("animate");
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('settned');
    if(button) {
        button.addEventListener('click', function() {
            this.style.visibility = 'hidden';
        });
    }
});