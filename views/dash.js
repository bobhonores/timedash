const dashTemplate = (dash) => /*html*/ `
<li data-id="${dash.id}">
    <div hx-get="/dashes/edit/${dash.id}" hx-target="closest li">
        <p>${dash.content}</p>
    </div>
    <button hx-delete="/dashes/${dash.id}" hx-target="closest li" hx-swap="outerHTML">Throw it</button>
</li>
`;

export default dashTemplate;
