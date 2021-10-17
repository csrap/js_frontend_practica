

export function announcementView(announcement) {

    if (announcement === null) {
        return `<div class="notads">
        <h5>Dont  ADS</h5>
        </div>`
    }

    return ` <a  href= "announcement_detail.html?id=${announcement.id}">
                    <div class="container">
                        <article class ="card">
                                <div class="card-photo">
                                <img src="${announcement.photo}">
                                </div> 
                                    <div class="card-name">
                                        <h5 class="name">${announcement.name}</h5>
                                    </div>
                                        <div class="card-price">
                                            <h5 class="price">${announcement.price}<span>€</span></h5>
                                            <h5 class="sale">${announcement.saleOrbuy}</h5>
                                            
                                        </div>                
                        </article>
                    </div>
            </a >`;
}

export function errorView(message) {
    return `<div class="error">
        ${message}
        <button>Cerrar</button>
    </div>`;
}

export function successView(message) {
    return `<div class="success">
        ${message}
        <button>Cerrar</button>
    </div>`;
}



export function announcementDetailView(announcement) {

    if (announcement === null) {
        return ` <div class="card-not">
        <p>
        Without ads, add one to continue....</p>
    </div> `
    }

    let button = ''
    if (announcement.canDelete) {
        button = '<button class="delete">Borrar</button>'
    }

    return `
    <div class="container">
                    <article class ="card">
                        <div class="card-photo">
                            <img src="${announcement.photo}">
                        </div> 
                            <div class="card-name">
                                <h5 class="name">${announcement.name}</h5>
                            </div> 
                                <div class="card-price">
                                    <h5 class="price">${announcement.price} <span>€</span></h5>
                                </div> 
                                <div class="card-sale">
                                <h5 class="sale">${announcement.saleOrbuy}</h5>
                                </div>
                                <div class="card-button">
                                ${button}
                                </div>
                                
                    </article>`
}

export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
}

