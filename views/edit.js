const editTemplate = (dash) => /*html*/ `
<form hx-put="/dashes/${dash.id}" hx-target="closest li" hx-swap="outerHTML">
    <input type="text" name="content" placeholder="content" required value="${dash.content}" />
    <button>Dash me</button>
</form>
`;

export default editTemplate;
