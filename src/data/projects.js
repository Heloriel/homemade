/* eslint-disable import/no-anonymous-default-export */
const imgPath = './images/project_images/';

export default [
    {
        id: 1,
        pName: 'Topaz - Notepad Extended',
        pImage: imgPath + 'topaz.jpg',
        desc: 'Pequeno protótipo de bloco de notas com recursos extras desenvolvido em Electron.',
        repo: 'topaz-notepad-extended',
        stack:
        {
            stk1:
            {
                name: "ElectronJS",
                imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/electron/electron-original.svg",
            },
            stk2:
            {
                name: "Sass",
                imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
            }
        }      
    },
    {
        id: 2,
        pName: 'Amethyst - Gestão de Licitações',
        pImage: imgPath + 'amethyst.jpg',
        desc: 'Protótipo de aplicação para gestão de licitações públicas, desenvolvido em Laravel.',
        repo: 'Amethyst',
        stack:
        {
            stk1:
            {
                name: "Laravel 8",
                imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-plain.svg",
            },
            stk2:
            {
                name: "Bootstrap",
                imgUrl: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
            }
        } 
    }
]