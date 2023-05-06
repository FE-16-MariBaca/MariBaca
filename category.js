function loadData() {
  fetch('https://6450ab64a3221969114ef555.mockapi.io/category')
    .then((response) => response.json())
    .then((data) => {
      let output = '';

      data.forEach((el) => {
        output += `
          <div class="col">
          <div class="card">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${el.category_img}" class="img-fluid rounded-start w-100" alt="${el.category_title}" />
              </div>
              <div class="col-md-8">
                <div class="card-body h-100 d-flex align-items-center justify-content-center">
                  <a href="all-category.html" class="fw-medium fs-3 text-decoration-none">${el.category_title}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
            `;
      });
      document.querySelector('.list-category').innerHTML = output;
    });
}
loadData();
