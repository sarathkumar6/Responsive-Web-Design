$(document).ready(function () {

    const scrollBehavior = {
            block: "start",
            behavior: "smooth"
        },
        places = {
            barcelona: '#barcelona-places',
            dublin: '#dublin-places',
            florence: '#florence-places',
            lisbon: '#lisbon-places',
            paris: '#paris-places',
            rome: '#rome-places',
            santorini: '#santorini-places',
            vienna: '#vienna-places',
        },
        getBarcelona = $('#barcelona'),
        getDublin = $('#dublin'),
        getFlorence = $('#florence'),
        getLisbon = $('#lisbon'),
        getParis = $('#paris'),
        getRome = $('#rome'),
        getSantorini = $('#santorini'),
        getVienna = $('#vienna'),
        getMisc = $('#misc'),
        getMiscMenu = $('#main-menu'),
        getSong = $('#song');
    
    console.log(getSong);

    $(getBarcelona).on('click', (e) => scrollIntoView(e, places.barcelona));

    $(getDublin).on('click', (e) => scrollIntoView(e, places.dublin));

    $(getFlorence).on('click', (e) => scrollIntoView(e, places.florence));

    $(getLisbon).on('click', (e) => scrollIntoView(e, places.lisbon));

    $(getParis).on('click', (e) => scrollIntoView(e, places.paris));

    $(getRome).on('click', (e) => scrollIntoView(e, places.rome));

    $(getSantorini).on('click', (e) => scrollIntoView(e, places.santorini));

    $(getVienna).on('click', (e) => scrollIntoView(e, places.vienna));
    
    $(getMisc).on('click', (e) => {
        window.location = '/misc.html';
    });
    
    $(getSong).on('click', (e) => printSinger());
    /**
     * @description Scrolls into the respective view smoothly
     * @param ele element clicked
     * @param id the view id
     * @returns {void | jQuery}
     */
    function scrollIntoView(ele, id) {
        ele.preventDefault();
        return $(id).get(0).scrollIntoView(scrollBehavior);
    }
    
class song {
    constructor (){
        this.name = 'Hello';
    }
    singer() {
        console.log(`${this.name} sung by Jager`);
    }
}

    const cheapThrills = new song();
    
    var printSinger = function printSinger() {
        console.log(cheapThrills.singer());
    }
});