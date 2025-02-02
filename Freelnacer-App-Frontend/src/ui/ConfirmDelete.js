
function ConfirmDelete({ resourceName, onClose, disabled, onConfirm }) {
    return (
      <div>
        <h2 className="font-bold text-base mb-8 text-secondary-700">
            Are you sure you want to delete {resourceName}?
        </h2>
        <div className="flex justify-between items-center gap-x-16">
          <button className="btn btn--primary flex-1" onClick={onClose} disabled={disabled}>
            Cancel
          </button>
          <button onClick={onConfirm} disabled={disabled} className="btn btn--danger flex-1 py-3">
            Confirmation
          </button>
        </div>
      </div>
    );
  }
  export default ConfirmDelete;
  