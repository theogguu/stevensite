import './Modal.css';
import IconButton from '../IconButton/IconButton';
// https://codebuckets.com/2021/08/08/bootstrap-modal-dialog-in-react-without-jquery/

const Modal = ({open, close, children}) => (
  <div
    className={`modal ${open ? 'modal-show' : ''}`}
    tabIndex="-1"
    role="dialog"
    onClick={(evt) => { if (evt.target === evt.currentTarget) close(); }}
  >
    {console.log({children})}
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
            <h2 id="modal-title">{children.title}</h2>
            <IconButton
                icon="bi bi-x"
                onClick={close}
            />
        </div>
        <div className="modal-body">
          {children.body}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;