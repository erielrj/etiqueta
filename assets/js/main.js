const queryParams = new URLSearchParams(window.location.search);

for (const param of queryParams) {
    assignField(param[0]);
}

function assignField(elId) {

    const el = document.querySelector(`#${elId}`);

    if (queryParams.has(elId)) {
        el.textContent = queryParams.get(elId);
    }
}