/* Portfolios */
const PORTFOLIOS = [{
        id: 1,
        title: 'Threads',
        summary: 'Illustration',
        imagepath: 'img/portfolio/01-thumbnail.jpg',
        description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facilis! Quam aspernatur neque optio odio soluta adipisci asperiores dolorum blanditiis, omnis esse illum facilis qui beatae cupiditate earum! Culpa, incidunt?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum. Eligendi, odit sit ipsam voluptate iste repudiandae minima dolor a! Quo fuga sapiente officiis labore vero ratione! Sunt, perferendis consectetur.</p>`
    }, 
    {
        id: 2,
        title: 'Explore',
        summary: 'Graphic Design',
        imagepath: 'img/portfolio/02-thumbnail.jpg',
        description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam vel quis aperiam optio molestias repellat voluptates natus perspiciatis quos voluptas ipsa, accusamus reiciendis deleniti dicta vero, expedita facilis pariatur.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo eaque repudiandae numquam corrupti cumque tempora minima ab velit tempore veritatis fugiat consequuntur, ad nisi! Temporibus reiciendis eligendi doloribus eos.</p>`
    }, 
    {
        id: 3,
        title: 'Finish',
        summary: 'Identity',
        imagepath: 'img/portfolio/03-thumbnail.jpg',
        description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda reprehenderit officia eveniet rerum ipsum praesentium minima quaerat voluptates quibusdam expedita non aliquam soluta explicabo voluptate, debitis provident officiis labore.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia culpa eveniet est at nostrum inventore itaque fuga a, ad voluptates rem id beatae accusantium quo placeat voluptatum iusto ullam!</p>`
    }
];

function getAllPortfolio() {
    let data = PORTFOLIOS;
    return data;
}

function getPortfolioById(id) {
    let data = PORTFOLIOS.filter(item => item.id == id);
    return data;
}

/* Members */
const MEMBERS = [{
    id: 1,
    fullname: 'Kay Garland',
    position: 'Lead Designer',
    imagepath: 'img/team/1.jpg',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, facilis! Quam aspernatur neque optio odio soluta adipisci asperiores dolorum blanditiis, omnis esse illum facilis qui beatae cupiditate earum! Culpa, incidunt?</p>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, ipsum. Eligendi, odit sit ipsam voluptate iste repudiandae minima dolor a! Quo fuga sapiente officiis labore vero ratione! Sunt, perferendis consectetur.</p>`
}, 
{
    id: 2,
    fullname: 'Larry Parker',
    position: 'Lead Marketer',
    imagepath: 'img/team/2.jpg',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime magnam vel quis aperiam optio molestias repellat voluptates natus perspiciatis quos voluptas ipsa, accusamus reiciendis deleniti dicta vero, expedita facilis pariatur.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illo eaque repudiandae numquam corrupti cumque tempora minima ab velit tempore veritatis fugiat consequuntur, ad nisi! Temporibus reiciendis eligendi doloribus eos.</p>`
}, 
{
    id: 3,
    fullname: 'Diana Pertersen',
    position: 'IdLead Developerentity',
    imagepath: 'img/team/3.jpg',
    description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda reprehenderit officia eveniet rerum ipsum praesentium minima quaerat voluptates quibusdam expedita non aliquam soluta explicabo voluptate, debitis provident officiis labore.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui mollitia culpa eveniet est at nostrum inventore itaque fuga a, ad voluptates rem id beatae accusantium quo placeat voluptatum iusto ullam!</p>`
}
];

function getAllMember() {
    let data = MEMBERS;
    return data;
}

function getMemberById(id) {
    let data = MEMBERS.filter(item => item.id == id);
    return data;
}