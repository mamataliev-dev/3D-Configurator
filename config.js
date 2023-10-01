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
    constructor(a_code, a_color, a_pattern, a_path, b_code, b_color, b_pattern, b_path, c_code, c_color, c_pattern, c_path) {

        this.A = new this.#Panel_instance(a_code, a_color, a_pattern, a_path);
        this.B = new this.#Panel_instance(b_code, b_color, b_pattern, b_path);
        this.C = new this.#Panel_instance(c_code, c_color, c_pattern, c_path);
        this.active = 'B';

    }


    # Panel_instance = class {
        constructor(color_code_, color_name_, tile_pattern_, path_) {
            this.color_code = color_code_;
            this.color_name = color_name_;
            this.tile_pattern = tile_pattern_;
            this.path = path_;
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
        // ( need to compare with function color_name_onclick(e) )
        //

        // update button content
        var obj = document.getElementById("decor_name_MenuButton");
        obj.innerHTML = $('#' + this[this.active].color_name)[0].innerHTML;


        // remove old selection (if exists)
        var qs_list = document.querySelector('#decor_name_list');
        var item = qs_list.querySelector('.active');
        if (item != null)
            item.classList.remove("active");

        // add new selection
        item = $('#' + this[active_].color_name)[0];
        if (item != null)
            item.classList.add("active");

        //
        // update tile name button
        // ( need to compare with function tile_pattern_onclick(e) )
        //

        // load tiles

        that.update_tiles(this[active_].color_name, this[active_].tile_pattern, 0);




    }


    set_decor_name(color_name_) {
        this[this.active].color_name = color_name_;
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

        // getting our url location
        let loc = document.URL;
        this.host = loc.substring(0, loc.lastIndexOf('/'));

        console.log(`Host is: ${this.host}`)


        // nested class for showing popup window
        this.Overlay_popup = new Overlay_popup_class();

    };

    AJAX_Get_old(URL) {

        let ajax = new XMLHttpRequest();
        ajax.open("GET", URL, true);

        // (CORS issue) solving Cross Domain AJAX Request
        // https://zinoui.com/blog/cross-domain-ajax-request
        //ajax.setRequestHeader('X-PINGOTHER', 'pingpong');
        ajax.onreadystatechange = () => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                console.log(this.responseText);
                let data = JSON.parse(ajax.responseText);
                //console.log(data);
                for (let a = 0; a < data.length; a++) {
                    let path = this.host + data[a].path;
                    let color_name = data[a].color_name;


                    // checking if the path follow to exists file
                    let request = new XMLHttpRequest();
                    request.open('GET', path, false);
                    request.send(); // there will be a 'pause' here until the response to come.
                    // the object request will be actually modified
                    if (request.status === 404) {
                        console.log(`"${path}" is not available.`);
                        continue;
                    }



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



    };

    AJAX_Get(URL, func) {

        fetch(URL, {
                method: "GET"
            })

            .then((response) => {
                // Our handler throws an error if the request did not succeed.
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                // Otherwise (if the response succeeded), our handler fetches the response
                // as text by calling response.text(), and immediately returns the promise
                // returned by `response.text()`.
                //console.log(response.text());
                return response.text();
            })

            // Catch any errors that might happen, and display a message
            // in the `poemDisplay` box.
            .catch((error, response) => console.log(`Could not fetch verse: ${error}. \n Url is "${URL}" \n Response is "${response}"`))

            // When response.text() has succeeded, the `then()` handler is called with
            // the text, and we copy it into the `poemDisplay` box.
            .then((text) => {
                //console.log(text);
                func(text, this);

            });

    };

    clickable_areas() {

        document.getElementById("pic_B").onload = null;
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
            },
            false);

        // resizing clickable areas
        const ImageMap = function (maps_) {


                this.resize = function () {
                    var maps = maps_;
                    document.getElementById("iMap").innerHTML = maps;
                    var n,
                        areas = document.getElementById('iMap').getElementsByTagName('area'),
                        len = areas.length,
                        coords = [],
                        previousWidth = 1600;
                    for (n = 0; n < len; n++) {
                        coords[n] = areas[n].coords.split(',');
                    }

                    var n, m, clen,
                        x = document.getElementById('pic_B').clientWidth / previousWidth;

                    for (n = 0; n < len; n++) {
                        clen = coords[n].length;
                        for (m = 0; m < clen; m++) {
                            coords[n][m] *= x;
                        }
                        areas[n].coords = coords[n].join(',');
                    }
                    //previousWidth = document.body.clientWidth;
                    //previousWidth = document.getElementById('pic_B').clientWidth;

                    console.log(`clickable areas resized: ${x} \nclient width ${document.getElementById('pic_B').clientWidth } \noriginal width ${previousWidth}`);
                    return true;
                };

                window.onresize = this.resize;
            },
            imageMap = new ImageMap(this.maps);
        imageMap.resize();
    };

    initialization() {

        // get defaults
        fetch(`${this.host}/server_side.php?cmd=get_defaults&scene=${this.scene}`)

            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.text();
            })

            .catch((error, response) => console.log(`Could not fetch verse: ${error}. \n Url is "${URL}" \n Response is "${response}"`))

            .then((text) => {
                let data = JSON.parse(text);
                //console.log(data);

                if (data.length != 3) {
                    console.log(`Error. Something wrong with defaults of ${this.scene} scene. Amount: ${data.length}.`);
                    this.Panels_set = new Panels_set_class();
                } else {

                    let a, b, c;

                    data.forEach(el => {

                        switch (el.default_p) {
                            case "A":
                                a = el;
                                break;
                            case "B":
                                b = el;
                                break;
                            case "C":
                                c = el;
                                break;
                        }
                    });
                    if (a == null || b == null || c == null) {
                        console.log(`Error. Something wrong with defaults of ${this.scene} scene. a, b or c is undefined.`);
                    } else {
                        this.Panels_set = new Panels_set_class(a.color_code, a.color_name, a.decor_code, a.path, b.color_code, b.color_name, b.decor_code, b.path, c.color_code, c.color_name, c.decor_code, c.path);
                    }
                }
                //
                let a = this.Panels_set.A;
                let b = this.Panels_set.B;
                let c = this.Panels_set.C;
                console.log(`this.Panels_set.active:  ${this.Panels_set.active}`);
                console.log(`a :  ${a.color_code} ${a.color_name} ${a.tile_pattern} `);
                console.log(`b :  ${b.color_code} ${b.color_name} ${b.tile_pattern} `);
                console.log(`c :  ${c.color_code} ${c.color_name} ${c.tile_pattern} `);



                // fill pics and fields
                document.getElementById("decor_name_MenuButton_img").setAttribute("src", `${this.host}/images/scene/${this.scene}/Preview/${b.color_code}_${b.color_name}.jpg`);
                document.querySelector("#decor_name_MenuButton #item_btn").innerText = b.color_name;

                document.getElementById("tile_pattern_MenuButton_img").setAttribute("src", `${this.host}/images/types/${b.tile_pattern}.jpg`);
                document.querySelector("#tile_pattern_MenuButton #item_btn").innerText = b.tile_pattern;

                this.update_tiles(b.color_name);

                document.getElementById("description_img").setAttribute("src", `${this.host}/images/scene/${this.scene}/${this.scene}_scene.jpg`);

                document.getElementById("pic_B").setAttribute("src", `${this.host}/images/scene/${this.scene}/Web/${b.path}`);


                document.getElementById("pic_A").setAttribute("src", `${this.host}/images/scene/${this.scene}/Web/${a.path}`);

                document.getElementById("pic_C").setAttribute("src", `${this.host}/images/scene/${this.scene}/Web/${c.path}`);

                document.getElementById("overlay_img_a").setAttribute("src", `${this.host}/images/scene/${this.scene}/${this.scene}_A.png`);

                document.getElementById("overlay_img_b").setAttribute("src", `${this.host}/images/scene/${this.scene}/${this.scene}_B.png`);

                document.getElementById("overlay_img_c").setAttribute("src", `${this.host}/images/scene/${this.scene}/${this.scene}_C.png`);

                $('.mask_A').css('mask-image', `url('${this.host}/images/scene/${this.scene}/${this.scene}_mask_A.png')`);
                $('.mask_A').css('-webkit-mask-image', `url('${this.host}/images/scene/${this.scene}/${this.scene}_mask_A.png')`);

                $('.mask_C').css('mask-image', `url('${this.host}/images/scene/${this.scene}/${this.scene}_mask_C.png')`);
                $('.mask_C').css('-webkit-mask-image', `url('${this.host}/images/scene/${this.scene}/${this.scene}_mask_C.png')`);


                //console.log(`img url:  ${this.host}/images/scene/${this.scene}/Web/${b.path}`);









                /*let ps = this.Panels_set;
                document.getElementById("pic_" + ps.active).setAttribute("src", "images/scene/" + data[0].path);*/
            })

            .then(

                // loading real items from database
                fetch(`${this.host}/server_side.php?cmd=load_decor_list&scene=${this.scene}`)

                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
                    return response.text();
                })

                .catch((error, response) => console.log(`Could not fetch verse: ${error}. \n Url is "${URL}" \n Response is "${response}"`))

                .then((text) => {
                    //console.log(text);
                    let data = JSON.parse(text);

                    for (let a = 0; a < data.length; a++) {
                        let path = this.host + data[a].path;
                        let color_name = data[a].color_name;
                        let id = data[a].id;

                        // checking if the path follow to exists file
                        fetch(path)

                            .then(() => {
                                this.add_items("decor_name_list", path, color_name, id);

                            })

                            .catch(() => console.log(`"${path}" is not available.`));
                    }
                    // first selection
                    // decor name
                    let qs_list = document.querySelector('#decor_name_list');

                    let item = qs_list.querySelector(`#${this.Panels_set[this.Panels_set.active].color_name}`);
                    if (item != null)
                        item.classList.add("active");

                })

            )

            .then(() => {
                // loading clickable maps
                fetch(`${this.host}/server_side.php?cmd=get_maps&scene=${this.scene}`)

                    .then((response) => {
                        if (!response.ok) {
                            throw new Error(`HTTP error: ${response.status}`);
                        }
                        return response.text();
                    })

                    .catch((error, response) => console.log(`Could not fetch verse: ${error}. \n Url is "${URL}" \n Response is "${response}"`))

                    .then((text) => {
                        let data = JSON.parse(text);
                        if (!data.length) {
                            console.log(`Error. Clickable aps are not loaded!`)
                        } else {
                            document.getElementById("iMap").innerHTML = data[0].maps;
                            this.maps = data[0].maps;

                            let image = document.getElementById("pic_B");
                            let isLoaded = image.complete && image.naturalHeight !== 0;
                            if (isLoaded == true)
                                this.clickable_areas();
                            else
                                image.onload = () => this.clickable_areas();
                        }
                    })

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


    set_scene(scene_) {

        this.scene = scene_;

        console.log(`set_scene. scene is ${this.scene}`);

        this.initialization();





        this.set_tab(null, "Configurator_tab");
    }


    update_image(color_name, tile_pattern) {

        var ajax = new XMLHttpRequest();
        ajax.open("GET", `${this.host}/server_side.php?cmd=get_details&scene=${this.scene}&cn=${color_name}&dc=${tile_pattern}`,
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
                document.getElementById("pic_" + ps.active).setAttribute("src", `${this.host}/images/scene/${this.scene}/Web/${data[0].path}`);

                console.log(`img url: ${this.host}/images/scene/${this.scene}/Web/${data[0].path}`)

                // update description
                //let txt = `${ps.active}: ${ps[ps.active].color_name}  ${ps[ps.active].tile_pattern} (high x width)`;

                //document.getElementById("description_" + ps.active).innerHTML = txt;

            }
        };

        ajax.send();
    }

    ImageExist(url) {
        var img = new Image();
        img.src = url;
        img.onerror = function () {
            alert(`"${url}" is not available. ${img.onerror}`);
        };
        return img.height != 0;
    }


    update_tiles(color_name, cover_button_item = "0", update_image_ = 0, tag_id = "0") {
        if (color_name == null) return;

        var ajax = new XMLHttpRequest();
        ajax.open("GET", `${this.host}/server_side.php?cmd=get_tiles&scene=${this.scene}&cn=${color_name}&id=${tag_id}`,
            true);
        ajax.onreadystatechange = (e) => {
            if (ajax.readyState == 4 && ajax.status == 200) {
                //console.log(this.responseText);
                let data = JSON.parse(ajax.responseText);
                //console.log(data);

                // clear old items
                let obj = document.getElementById("tile_pattern_list");
                obj.innerHTML = "";

                // loading new ones
                for (let a = 0; a < data.length; a++) {
                    let decor_code = data[a].decor_code;
                    let path = `${this.host}/images/types/${decor_code}.jpg`;


                    // checking if the path follow to exists file
                    // Open a log file

                    this.ImageExist(path);



                    this.add_items("tile_pattern_list", path, decor_code);
                }

                // update cover-button
                if (cover_button_item == "0") { // first child
                    document.getElementById("tile_pattern_MenuButton").innerHTML = obj.querySelector(":first-child").innerHTML;
                } else { // choose from items
                    document.getElementById("tile_pattern_MenuButton").innerHTML = obj.querySelector('#' + cover_button_item).innerHTML;
                }


                // update_image_and_price
                if (update_image_ == 1) {
                    let color_name = document.querySelector("#decor_name_MenuButton").innerText;
                    let tile_pattern = document.querySelector("#tile_pattern_MenuButton").innerText;
                    this.update_image(color_name, tile_pattern);
                }


            }
        };

        ajax.send();

    }

    // adding items dynamically
    add_items(id, img, txt, tag_id = "0") {
        var demolist = document.getElementById(id);

        var option = document.createElement("li");
        option.innerHTML = ` <li class="dropdown-item p-0 text-truncate" href="#" id=${txt}>
                <div class="col m-0 justify-content-md-start">
                    <div class="col col-md-auto p-0">
                        <img src=${img} class="btn_image rounded dropdown_button_img">
                    </div>
                    <div class="col col-md-auto text-left text-truncate" style="display:flex; align-items: center;">
                        <h7 class="btn_text text-align: left;" id="item_btn" tag_id="${tag_id}">
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
        var color_name = document.querySelector("#decor_name_MenuButton").innerText;
        var tile_pattern = document.querySelector("#tile_pattern_MenuButton").innerText;
        this.update_image(color_name, tile_pattern);

    };


    decor_name_onclick(e) {

        // update button content
        let obj = document.getElementById("decor_name_MenuButton");
        obj.innerHTML = e.innerHTML;

        // remove old selection (if exists)
        let qs_list = document.querySelector('#decor_name_list');
        let item = qs_list.querySelector('.active');
        if (item != null)
            item.classList.remove("active");

        // add new selection
        let id = e.querySelector('#item_btn').innerText;
        item = qs_list.querySelector('#' + id);
        if (item != null)
            item.classList.add("active");

        // update variabe
        this.Panels_set.set_decor_name(id);

        // Update tile pattern list
        let tag_id = e.querySelector('#item_btn').getAttribute("tag_id");
        this.update_tiles(id, 0, 1, tag_id);

    };

    // download button realization 
    // Define the function 
    // to screenshot the div
    btn_download_click() {

        // show overlay window with loading effect dots
        this.Overlay_popup.show();
        this.Overlay_popup.set_title("In process...");

        let color_name_A = this.Panels_set.A.color_name;
        let tile_pattern_A = this.Panels_set.A.tile_pattern;
        let color_name_B = this.Panels_set.B.color_name;
        let tile_pattern_B = this.Panels_set.B.tile_pattern;
        let color_name_C = this.Panels_set.C.color_name;
        let tile_pattern_C = this.Panels_set.C.tile_pattern;


        fetch(`${this.host}/get_image.php?scene=${this.scene}&cna=${color_name_A}&dca=${tile_pattern_A}&cnb=${color_name_B}&dcb=${tile_pattern_B}&cnc=${color_name_C}&dcc=${tile_pattern_C}`)

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