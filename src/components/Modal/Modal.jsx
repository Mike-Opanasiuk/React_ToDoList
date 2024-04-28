import React from 'react';

export const Modal = ({ show, onClose, onApprove }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal show" style={{ display: 'block' }} id="exampleModal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Please, confirm deletion</h5>
                        <button type="button" className="btn-close" onClick={onClose} aria-label="Close">
                            <span aria-hidden="true"></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Do you really wanna delete this task?</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={onApprove}>Yes</button>
                        <button type="button" className="btn btn-secondary" onClick={onClose}>No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
