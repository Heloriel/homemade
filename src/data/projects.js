/* eslint-disable import/no-anonymous-default-export */
const imgPath = './images/project_images/';

export default [
    {
        id: 1,
        pName: 'Topaz',
        pImage: imgPath + 'topaz.jpg',
        desc: 'Bloco de notas com recursos extras criado do 0 com Electron.',
        repo: 'topaz-notepad-extended',
        stack:
        {
            stk1:
            {
                name: "ElectronJS",
                imgUrl: "./images/stacks/electron-original.svg",
            },
            stk2:
            {
                name: "Sass",
                imgUrl: "./images/stacks/sass-original.svg",
            }
        }      
    },
    {
        id: 2,
        pName: 'Amethyst',
        pImage: imgPath + 'amethyst.jpg',
        desc: 'Protótipo de aplicação para gestão de participação da empresa em licitações públicas, desenvolvido com Laravel para estudo do framework.',
        repo: 'Amethyst',
        stack:
        {
            stk1:
            {
                name: "Laravel 8",
                imgUrl: "./images/stacks//laravel-plain.svg",
            },
            stk2:
            {
                name: "Bootstrap",
                imgUrl: "./images/stacks/bootstrap-plain.svg",
            }
        } 
    },
    {
        id: 2,
        pName: 'Meu Portfólio',
        pImage: imgPath + 'scriplex.jpg',
        desc: 'Esse é meu site portfólio que você esta acessando no momento.',
        repo: 'homemade',
        stack:
        {
            stk1:
            {
                name: "React",
                imgUrl: "./images/stacks/react-original.svg",
            },
            stk2:
            {
                name: "Sass",
                imgUrl: "./images/stacks/sass-original.svg",
            }
        } 
    }
]