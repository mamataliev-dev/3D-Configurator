// JavaScript source code





/*
 */

// share functional implementation
document.addEventListener("DOMContentLoaded", function (event) {

    // Uses sharer.js
    //  https://ellisonleao.github.io/sharer.js/#twitter
    var shareUrl = window.location.href;
    var shareTitle = document.title;
    var shareSubject = "Read this good article";
    var shareImage = "yourTwitterUsername";
    var shareDescription = "yourTwitterUsername";


    //facebook
    $('#share-fb').attr('data-url', shareUrl).attr('data-sharer', 'facebook');
    //twitter
    $('#share-tw').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', 'twitter');
    //linkedin
    $('#share-li').attr('data-url', shareUrl).attr('data-sharer', 'linkedin');
    // google plus
    $('#share-pn').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-sharer', 'pinterest');
    // email
    $('#share-em').attr('data-url', shareUrl).attr('data-title', shareTitle).attr('data-subject', shareSubject).attr('data-sharer', 'email');
    window.Sharer.init();


});



var is_dropdown_menu_showed = 0;

function show_dropdown_menu() {
    if (is_dropdown_menu_showed == 0) {
        // show close button
        $("#btn_close").addClass("visible");
        $("#decor_name_MenuButton").dropdown('toggle');
        is_dropdown_menu_showed = 1;
    }

    $("#decor_name_MenuButton").parents('.dropdown').find(".dropdown-menu li.active").parent()[0].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center"
    });
}

// dropdown menu close btn
$('#btn_close').click(function () {
    $(this).parents('.dropdown').find('button.dropdown-toggle').dropdown('toggle');
    $("#btn_close").removeClass("visible");
    is_dropdown_menu_showed = 0;
});




// add cart button processing (temp)
function add_cart_click() {
    alert("Cart is being on maintenance")
}


class Overlay_popup_class {

    #
    modalCl;#
    overlayCl;#
    btns;#
    img;#
    img_data;#
    title;#
    loading_dots;

    constructor() {

        this.#modalCl = document.querySelector('#modal').classList;
        this.#overlayCl = document.querySelector('#overlay_m');
        this.#btns = document.getElementById("overlay_btns");
        this.#img = document.getElementById("overlay_img");
        this.#title = document.getElementById("overlay_title");
        this.#loading_dots = $(".loading_dots")[0];
    }


    show() {
        this.#overlayCl.classList.remove('hidden')
        setTimeout(() => {
            this.#modalCl.remove('opacity-0');
            this.#modalCl.remove('-translate-y-full');
            this.#modalCl.remove('scale-150');
            this.btns_hide();
            this.loading_show();
        }, 100);
    };

    hide() {

        this.#modalCl.add('-translate-y-full')
        setTimeout(() => {
            this.#modalCl.add('opacity-0')
            this.#modalCl.add('scale-150')
        }, 100);
        setTimeout(() => {
            this.#overlayCl.classList.add('hidden');
            this.loading_show();
            this.btns_hide();
            this.set_img("");
        }, 300);
    };

    btns_hide() {
        this.#btns.classList.add('hide');
    };

    btns_show() {
        this.#btns.classList.remove('hide');
    };

    loading_show() {
        this.#loading_dots.classList.remove('hide');
    };

    loading_hide() {
        this.#loading_dots.classList.add('hide');
    };

    set_img(data) {
        if (data === "")
            this.#img.setAttribute("src", "");
        else
            this.#img.setAttribute("src", `data:image/jpeg;base64,${data}`);

        this.#img_data = data;
    };

    img_download() {
        if (!(this.#img_data === undefined)) {
            // text is base64 decoded string
            const byteCharacters = atob(this.#img_data);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);

            this.#download(byteArray, "fantom_studio", "image/jpeg");
        }
    }

    set_title(text) {
        this.#title.innerText = text;
    };



    // Function to download data to a file
    #
    download(data, filename, type) {
        var file = new Blob([data], {
            type: type
        });
        if (window.navigator.msSaveOrOpenBlob) // IE10+
            window.navigator.msSaveOrOpenBlob(file, filename);
        else { // Others
            var a = document.createElement("a"),
                url = URL.createObjectURL(file);
            a.href = url;
            a.download = filename;
            document.body.appendChild(a);
            a.click();
            setTimeout(function () {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);
            }, 0);
        }
    }
};



class Panels_set_class {
    A;
    B;
    C;
    active;
    constructor() {
        this.A = new this.#Panel_instance('Black', 'M00');
        this.B = new this.#Panel_instance('Hanoi', 'M00');
        this.C = new this.#Panel_instance('Red', 'F00');
        this.active = 'B';

    }


    # Panel_instance = class {
        constructor(decor_name_, tile_pattern_) {
            this.decor_name = decor_name_;
            this.tile_pattern = tile_pattern_;
        }
    }


    set_active(active_, that) {
        // update radio button state
        $(`#option_${this.active}`).prop('checked', false).parent().removeClass('active');

        this.active = active_;
        this.highlight_area(active_);

        // update radio button state
        //document.querySelector(`input[id='option_${active_}']`).checked = true;
        $(`#option_${active_}`).prop('checked', true).parent().addClass('active');


        //
        // update decor name button
        // ( need to compare with function decor_name_onclick(e) )
        //

        // update button content
        var obj = document.getElementById("decor_name_MenuButton");
        obj.innerHTML = $('#' + this[active_].decor_name)[0].innerHTML;

        // remove old selection (if exists)
        var qs_list = document.querySelector('#decor_name_list');
        var item = qs_list.querySelector('.active');
        if (item != null)
            item.classList.remove("active");

        // add new selection
        item = $('#' + this[active_].decor_name)[0];
        if (item != null)
            item.classList.add("active");

        //
        // update tile name button
        // ( need to compare with function tile_pattern_onclick(e) )
        //

        // load tiles

        that.update_tiles(this[active_].decor_name, this[active_].tile_pattern, 0);




    }


    set_decor_name(decor_name_) {
        this[this.active].decor_name = decor_name_;
    }

    set_tile_pattern(tile_pattern_) {
        this[this.active].tile_pattern = tile_pattern_;
    }


    // highlight selected area
    highlight_area(id) {
        let overlay_id = 'overlay-' + id;
        document.getElementById(overlay_id).addEventListener('transitionend',
            function (e) {
                this.classList.remove('visible');
            },
            false);
        document.getElementById(overlay_id).classList.add('visible');
    }



}


class Configurator_class {

    constructor() {
        // nested class for showing popup window



        this.Overlay_popup = new Overlay_popup_class();
        this.Panels_set = new Panels_set_class();

        // loading real items from database

        let host = "https://www.romanprog.com/0/";
        let ajax = new XMLHttpRequest();

        let scene = "NO_Market_2400";

        ajax.open("GET", `${host}server_side.php?cmd=load_decor_list&scene=${scene}`,
            true);
        // (CORS issue) solving Cross Domain AJAX Request
        // https://zinoui.com/blog/cross-domain-ajax-request
        //ajax.setRequestHeader('X-PINGOTHER', 'pingpong');
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(this.responseText);
                let data = JSON.parse(ajax.responseText);
                //console.log(data);
                for (let a = 0; a < data.length; a++) {
                    let path = data[a].path;
                    let color_name = data[a].color_name;
                    this.add_items("decor_name_list", path, color_name);
                    //this.add_items("decor_name_list", "/images/region/" + region + "/Preview/" + color_code + "_" + color_name + ".jpg", color_name);

                    // first selection
                    // decor name
                    let qs_list = document.querySelector('#decor_name_list');
                    let item = qs_list.querySelector('#Hanoi');
                    if (item != null)
                        item.classList.add("active");
                }
            } else {
                //console.log('something is wrong. items were not loaded');
            }
        };

        ajax.send();

        document.addEventListener("DOMContentLoaded", () => {

            // adding clickable areas
            var map = document.querySelector('map');
            map.addEventListener("click", (e) => {
                e.preventDefault();
                if (e.target != e.currentTarget) {
                    var clicked = e.target.alt;
                    console.log('click event triggered at ' + clicked);
                    this.set_active(clicked);
                    $(this.doc).ready(function () {
                        //$("#decor_name_MenuButton").click();
                        show_dropdown_menu();
                    });
                }
                e.stopPropagation();
            }, false);

            // resizing clickable areas
            const ImageMap = function () {
                    var n,
                        areas = document.getElementById('iMap').getElementsByTagName('area'),
                        len = areas.length,
                        coords = [],
                        previousWidth = 1600;
                    for (n = 0; n < len; n++) {
                        coords[n] = areas[n].coords.split(',');
                    }

                    this.resize = function () {
                        var n, m, clen,
                            // x = document.body.clientWidth / previousWidth;
                            x = document.getElementById('pic_B').clientWidth / previousWidth;

                        for (n = 0; n < len; n++) {
                            clen = coords[n].length;
                            for (m = 0; m < clen; m++) {
                                coords[n][m] *= x;
                            }
                            areas[n].coords = coords[n].join(',');
                        }
                        //previousWidth = document.body.clientWidth;
                        previousWidth = document.getElementById('pic_B').clientWidth;
                        console.log("clickable areas resized: " + x);
                        return true;
                    };

                    window.onresize = this.resize;
                },
                imageMap = new ImageMap(this.doc);
            imageMap.resize();

        });

    };

    set_active(active_) {
        // dropdown focus on selected
        $(".dropdown").find(".dropdown-menu li active").focus();
        this.Panels_set.set_active(active_, this);



    }

    set_tab(evt, tab) {

        // Declare all variables
        var i, tabcontent, tablinks;

        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.zIndex = 1;
        }

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tab).style.zIndex = 2;
        if (evt)
            evt.currentTarget.className += " active";

    }


    set_scene(scene) {
        this.set_tab(null, "Configurator_tab");
    }


    update_image(decor_name, tile_pattern) {

        var host = "https://www.romanprog.com/0/";
        var ajax = new XMLHttpRequest();
        ajax.open("GET", host + "server_side.php?cmd=get_details&cn=" + decor_name + "&dc=" + tile_pattern,
            true);
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //console.log(this.responseText);
                var data = JSON.parse(ajax.responseText);
                //console.log(data);

                // update price title
                //document.getElementById("price_title").innerText = "$" + data[0].price;

                // update pic
                let ps = this.Panels_set;
                document.getElementById("pic_" + ps.active).setAttribute("src", "images/scene/" + data[0].path);

                // update description
                let txt = `${ps.active}: ${ps[ps.active].decor_name}  ${ps[ps.active].tile_pattern} (high x width)`;

                //document.getElementById("description_" + ps.active).innerHTML = txt;

            }
        };

        ajax.send();
    }


    update_tiles(decor_name, cover_button_item = "0", update_image_ = 0) {
        if (decor_name == null) return;

        var host = "https://www.romanprog.com/0/";
        var ajax = new XMLHttpRequest();
        ajax.open("GET", host + "server_side.php?cmd=get_tiles&cn=" + decor_name,
            true);
        ajax.onreadystatechange = (e) => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //console.log(this.responseText);
                var data = JSON.parse(ajax.responseText);
                //console.log(data);

                // clear old items
                var obj = document.getElementById("tile_pattern_list");
                obj.innerHTML = "";

                // loading new ones
                for (var a = 0; a < data.length; a++) {
                    var decor_code = data[a].decor_code;
                    this.add_items("tile_pattern_list", "/images/types/" + decor_code + ".jpg", decor_code);
                }

                // update cover-button
                if (cover_button_item == "0") { // first child
                    document.getElementById("tile_pattern_MenuButton").innerHTML = obj.querySelector(":first-child").innerHTML;
                } else { // choose from items
                    document.getElementById("tile_pattern_MenuButton").innerHTML = obj.querySelector('#' + cover_button_item).innerHTML;
                }


                // update_image_and_price
                if (update_image_ == 1) {
                    var decor_name = document.querySelector("#decor_name_MenuButton").innerText;
                    var tile_pattern = document.querySelector("#tile_pattern_MenuButton").innerText;
                    this.update_image(decor_name, tile_pattern);
                }


            }
        };

        ajax.send();

    }

    // adding items dynamically
    add_items(id, img, txt) {
        var demolist = document.getElementById(id);

        var option = document.createElement("li");
        option.innerHTML = ` <li class="dropdown-item p-0 text-truncate" href="#" id=${txt}>
                <div class="col m-0 justify-content-md-start">
                    <div class="col col-md-auto p-0">
                        <img src=${img}
                        width="150" height="150"
                        class="btn_image rounded"
                        style="object-fit: contain">
                    </div>
                    <div class="col col-md-auto text-left text-truncate" style="display:flex; align-items: center;">
                        <h7 class="btn_text text-align: left;" id="item_btn">
                            ${txt}
                        </h7>
                    </div>
                </div>
            </li>`
        if (id == "decor_name_list")
            option.setAttribute("onclick", "Configurator.decor_name_onclick(this)");
        else
            option.setAttribute("onclick", "Configurator.tile_pattern_onclick(this)");

        demolist.appendChild(option);

    }

    tile_pattern_onclick(e) {
        //console.log(e);

        // update button content
        var obj = document.getElementById("tile_pattern_MenuButton");
        obj.innerHTML = e.innerHTML;

        // remove old selection (if exists)
        var qs_list = document.querySelector('#tile_pattern_list');
        var item = qs_list.querySelector('.active');
        if (item != null)
            item.classList.remove("active");

        // add new selection
        var id = e.querySelector('#item_btn').innerText;
        item = qs_list.querySelector('#' + id);
        if (item != null)
            item.classList.add("active");

        // update variabe
        this.Panels_set.set_tile_pattern(id);

        // update_image_and_price
        var decor_name = document.querySelector("#decor_name_MenuButton").innerText;
        var tile_pattern = document.querySelector("#tile_pattern_MenuButton").innerText;
        this.update_image(decor_name, tile_pattern);

    };


    decor_name_onclick(e) {

        // update button content
        var obj = document.getElementById("decor_name_MenuButton");
        obj.innerHTML = e.innerHTML;

        // remove old selection (if exists)
        var qs_list = document.querySelector('#decor_name_list');
        var item = qs_list.querySelector('.active');
        if (item != null)
            item.classList.remove("active");

        // add new selection
        var id = e.querySelector('#item_btn').innerText;
        item = qs_list.querySelector('#' + id);
        if (item != null)
            item.classList.add("active");

        // update variabe
        this.Panels_set.set_decor_name(id);

        // Update tile pattern list
        this.update_tiles(id, 0, 1);

    };

    // download button realization 
    // Define the function 
    // to screenshot the div
    btn_download_click() {

        // show overlay window with loading effect dots
        this.Overlay_popup.show();
        this.Overlay_popup.set_title("In process...");

        var host = "https://www.romanprog.com/0/";
        let decor_name_A = this.Panels_set.A.decor_name;
        let tile_pattern_A = this.Panels_set.A.tile_pattern;
        let decor_name_B = this.Panels_set.B.decor_name;
        let tile_pattern_B = this.Panels_set.B.tile_pattern;
        let decor_name_C = this.Panels_set.C.decor_name;
        let tile_pattern_C = this.Panels_set.C.tile_pattern;


        fetch(`${host}get_image.php?cna=${decor_name_A}&dca=${tile_pattern_A}&cnb=${decor_name_B}&dcb=${tile_pattern_B}&cnc=${decor_name_C}&dcc=${tile_pattern_C}`)

            .then((response) => {
                // Our handler throws an error if the request did not succeed.
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                // Otherwise (if the response succeeded), our handler fetches the response
                // as text by calling response.text(), and immediately returns the promise
                // returned by `response.text()`.
                return response.text();
            })
            // When response.text() has succeeded, the `then()` handler is called with
            // the text, and we copy it into the `poemDisplay` box.
            .then((text) => {
                this.Overlay_popup.loading_hide();
                this.Overlay_popup.set_img(text);
                this.Overlay_popup.set_title("Here we are!");
                this.Overlay_popup.btns_show();

            })
            // Catch any errors that might happen, and display a message
            // in the `poemDisplay` box.
            .catch((error) => console.log(`Could not fetch verse: ${error}`));

    };

    // function print shot ()       
    btn_print_click() {
        window.print();
    };

    // function share image
    btn_share_click() {
        this.btn_download_click();
    };






};