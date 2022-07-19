// program to convert first letter of a string to uppercase
function upperCaseString(str) {

    // converting first letter to uppercase
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);

    return capitalized;
}

function removeArrowFromString(str) {
    const newString = str.replace("", " ");

    return newString;
}

function generator() {
    for (let id = 1; id <= 151; id++) {
        createCards(id);

    }
}

function createCards(id) {
    poke_id = id

    //CREATING ELEMENTS
    let pkm_card_container = document.createElement("div");
    pkm_card_container.classList.add("pokemon-card-container");

    let poke_card = document.createElement("div");
    poke_card.classList.add("card", "poke-card")
    poke_card.setAttribute('id', "poke-card" + id)

    let card_body = document.createElement("div");
    card_body.classList.add("card-body");

    let card_title = document.createElement("h5");
    let title = document.createTextNode("Pokemon Name");
    card_title.appendChild(title)
    card_title.classList.add("card-title");
    card_title.setAttribute('id', "name" + id);

    let type_logo = document.createElement('img');
    type_logo.classList.add('type-logo');
    type_logo.setAttribute('id', 'poketype' + id)

    let pokemon_pic = document.createElement('img');
    pokemon_pic.setAttribute('id', "pic" + id);

    let pokemon_desc = document.createElement('p');
    pokemon_desc.classList.add("card-text");
    pokemon_desc.setAttribute('id', "desc" + id);
    
    let div_button_more = document.createElement('div');
    div_button_more.classList.add('container-btn-plus')
    let button_more = document.createElement('button');
    button_more.classList.add('btn-plus','fa','fa-plus');

    //APPENDING
    let element = document.getElementById("pokemon-creation");
    element.appendChild(pkm_card_container);
    pkm_card_container.appendChild(poke_card);
    poke_card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(type_logo);
    card_body.appendChild(pokemon_pic);
    card_body.appendChild(pokemon_desc);
    card_body.appendChild(div_button_more);
    div_button_more.appendChild(button_more);


    async function init(id) {

        //Making connection with pokeapi and fetching data into json
        let url = "https://pokeapi.co/api/v2/pokemon/" + id
        let response = await fetch(url)
        let data = await response.json()

        //Pokemon data getting into html
        let name = data.name
        name = upperCaseString(name) + " - Nº " + id
        document.getElementById("name" + id).innerHTML = name

        let picture = data.sprites.front_default
        document.getElementById("pic" + id).src = picture

        desc_url = "https://pokeapi.co/api/v2/pokemon-species/" + id
        desc_response = await fetch(desc_url)
        desc_data = await desc_response.json()

        let desc = desc_data.flavor_text_entries[3].flavor_text
        desc = removeArrowFromString(desc)
        document.getElementById("desc" + id).innerHTML = desc

        let type = data.types[0].type.name
        switch (type) {
            case 'fire':
                const fire = document.querySelector("#poke-card" + id)
                fire.style.backgroundColor = "#F08030"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/512px-Pok%C3%A9mon_Fire_Type_Icon.svg.png?20200511092324'
                break;
            case 'normal':
                const normal = document.querySelector("#poke-card" + id)
                normal.style.backgroundColor = "#A8A878"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Pok%C3%A9mon_Normal_Type_Icon.svg/1024px-Pok%C3%A9mon_Normal_Type_Icon.svg.png'
                break;
            case "water":
                const water = document.querySelector("#poke-card" + id)
                water.style.backgroundColor = "#6890F0"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png'
                break;
            case 'grass':
                const grass = document.querySelector("#poke-card" + id)
                grass.style.backgroundColor = "#78C850"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1024px-Pok%C3%A9mon_Grass_Type_Icon.svg.png'
                break;
            case 'electric':
                const electric = document.querySelector("#poke-card" + id)
                electric.style.backgroundColor = "#f4c300"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Pok%C3%A9mon_Electric_Type_Icon.svg/1024px-Pok%C3%A9mon_Electric_Type_Icon.svg.png'
                break;
            case 'ice':
                const ice = document.querySelector("#poke-card" + id)
                ice.style.backgroundColor = "#98D8D8"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Pok%C3%A9mon_Ice_Type_Icon.svg/1024px-Pok%C3%A9mon_Ice_Type_Icon.svg.png'
                break;
            case 'fighting':
                const fighting = document.querySelector("#poke-card" + id)
                fighting.style.backgroundColor = "#C03028"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Pok%C3%A9mon_Fighting_Type_Icon.svg/1024px-Pok%C3%A9mon_Fighting_Type_Icon.svg.png'
                break;
            case 'poison':
                const poison = document.querySelector("#poke-card" + id)
                poison.style.backgroundColor = "#A040A0"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1024px-Pok%C3%A9mon_Poison_Type_Icon.svg.png'
                break;
            case 'ground':
                const ground = document.querySelector("#poke-card" + id)
                ground.style.backgroundColor = "#E0C068"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pok%C3%A9mon_Ground_Type_Icon.svg/1024px-Pok%C3%A9mon_Ground_Type_Icon.svg.png'
                break;
            case 'flying':
                const flying = document.querySelector("#poke-card" + id)
                flying.style.backgroundColor = "#A78FEF"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1024px-Pok%C3%A9mon_Flying_Type_Icon.svg.png'
                break;
            case 'psychic':
                const psychic = document.querySelector("#poke-card" + id)
                psychic.style.backgroundColor = "#F85888"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Pok%C3%A9mon_Psychic_Type_Icon.svg/1024px-Pok%C3%A9mon_Psychic_Type_Icon.svg.png'
                break;
            case 'bug':
                const bug = document.querySelector("#poke-card" + id)
                bug.style.backgroundColor = "#A8B820"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Pok%C3%A9mon_Bug_Type_Icon.svg/1024px-Pok%C3%A9mon_Bug_Type_Icon.svg.png'
                break;
            case 'rock':
                const rock = document.querySelector("#poke-card" + id)
                rock.style.backgroundColor = "#B8A038"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pok%C3%A9mon_Rock_Type_Icon.svg/1024px-Pok%C3%A9mon_Rock_Type_Icon.svg.png'
                break;
            case 'ghost':
                const ghost = document.querySelector("#poke-card" + id)
                ghost.style.backgroundColor = "#705898"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pok%C3%A9mon_Ghost_Type_Icon.svg/1024px-Pok%C3%A9mon_Ghost_Type_Icon.svg.png'
                break;
            case 'dark':
                const dark = document.querySelector("#poke-card" + id)
                dark.style.backgroundColor = "#705848"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pok%C3%A9mon_Dark_Type_Icon.svg/1024px-Pok%C3%A9mon_Dark_Type_Icon.svg.png'
                break;
            case 'dragon':
                const dragon = document.querySelector("#poke-card" + id)
                dragon.style.backgroundColor = "#7038F8"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pok%C3%A9mon_Dragon_Type_Icon.svg/1024px-Pok%C3%A9mon_Dragon_Type_Icon.svg.png'
                break;
            case 'steel':
                const steel = document.querySelector("#poke-card" + id)
                steel.style.backgroundColor = "#B8B8D0"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Pok%C3%A9mon_Steel_Type_Icon.svg/1024px-Pok%C3%A9mon_Steel_Type_Icon.svg.png'
                break;
            case 'fairy':
                const fairy = document.querySelector("#poke-card" + id)
                fairy.style.backgroundColor = "#F0B6BC"
                document.getElementById("poketype" + id).src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Pok%C3%A9mon_Fairy_Type_Icon.svg/1024px-Pok%C3%A9mon_Fairy_Type_Icon.svg.png'
                break;
        }
    }

    init(poke_id);

}

generator();