function loadData() {
  fetch('https://6450ab64a3221969114ef555.mockapi.io/all_category')
    .then((response) => response.json())
    .then((data) => {
      let output = '';

      data.forEach((el) => {
        output += `
        <div class="col-12 col-md-6 col-lg-4">
        <div class="card card-category mb-4" style="width: 18rem">
          <img src="${el.img}" class="card-img-top" alt="${el.title}" />
          <div class="card-body">
            <h5 class="card-title">${el.title}</h5>
            <p class="card-text my-3">${el.synopsis}</p>
            <div class="text-end">
              <a href="detailbuku.html" class="btn btn-read px-4 mt-4">Baca</a>
            </div>
          </div>
        </div>
      </div>
              `;
      });
      document.querySelector('.list-books').innerHTML = output;
    });
}
loadData();
