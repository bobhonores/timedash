import dashTemplate from './dash.js';

const listTemplate = (dashes) => /*html*/ `
<ul>
    ${dashes.map((dash) => dashTemplate(dash)).join('')}
</ul>
`;

export default listTemplate;
