import './LogOutModal.module.css';

export default function LogOutModal(props) {
  if (!props.call) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div
        className="modal-content"
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <button className="close" onClick={props.onClose}>
          ×
        </button>
        <h2>Log out</h2>
        <p>Do you really want to leave??</p>
        <div className="btn">
          <button className="accept" type="button">
            Log out
          </button>
          <button className="reject" type="button">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
