import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';

export const ListItem = ({ data, onDelete }) => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleApprove = () => {
        onDelete(data.id);
        closeModal();
    };

    return (
        <div className="mt-3">
            <Modal show={showModal} onClose={closeModal} onApprove={handleApprove} />
            <li className="list-group-item list-group-item-primary d-flex justify-content-between align-items-center">
                <span>{data.title}</span>
                <button className="btn" onClick={openModal}>
                    <i className="bi bi-file-earmark-x" style={{ color: "red" }}></i>
                </button>
            </li>
        </div>
    )
}
