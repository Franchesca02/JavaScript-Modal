var modalWrap = null;
const showModal = (title, description) => {
  if (modalWrap !== null) {
    modalWrap.remove();
  }

  modalWrap = document.createElement("div");
  modalWrap.innerHTML = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title text-success" id="exampleModalLabel">${title}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body text-warning">
          <p>${description}</p>
        </div>
        <div class="modal-footer bg-primary">
          <button type="button" class="btn btn-dark text-white" data-dismiss="modal">Ok</button>
        </div>
      </div>
    </div>
  </div>`;
  document.body.append(modalWrap);
  var modal = new bootstrap.Modal(modalWrap.querySelector(".modal"));
  // Gotten from Bootstrap 4
  modal.show();
};
