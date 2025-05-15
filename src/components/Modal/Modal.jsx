

const Modal = ({ isOpen, onClose, bookID, bookData}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {}
                <h2>{bookTitle}</h2>
                <p><strong>Author:</strong> {bookAuthor}</p>
                <p>{bookDescription}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;