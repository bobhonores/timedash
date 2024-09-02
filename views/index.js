const homePageTemplate = () => /*html*/ `
<html>
<head>
    <title>timeDash</title>
    <script src="https://unpkg.com/htmx.org@2.0.2" integrity="sha384-Y7hw+L/jvKeWIRRkqWYfPcvVxHzVzn5REgzbawhxAuQGwX1XWe70vji+VSeHOThJ" crossorigin="anonymous"></script>
</head>
<body>
    <header>
        <h1>Dashes</h1>
    </header>
    <main>
        <div style="text-align: center">
            <input 
                type="search" 
                name="search" 
                placeholder="search your dash.." 
                hx-post="/dashes/search"
                hx-trigger="keyup changed delay:300ms"
                hx-target=".dash-list" />
        </div>
        <div>
            <button hx-get="/dashes" hx-target=".dash-list" hx-trigger="dblclick">Load</button>
        </div>
        <div class="dash-list"></div>
        <div class="add-form">
            <h2>What do you want to say?</h2>
            <form hx-post="/dashes"
                hx-on::after-request="document.querySelector('form').reset()"
                hx-target=".dash-list ul" hx-swap="beforeend">
                <input type="text" name="content" placeholder="content" required />
                <button>Dash me</button>
            </form>
        </div>
    
    </main>
</body>
</html>
`;

export default homePageTemplate;
