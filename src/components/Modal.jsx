import React from 'react';

export default function Modal({
  title, children, showModal, onCloseModal
}) {
  return (
    <section className={showModal ? 'modal show' : 'modal'} tabIndex={-1}>
      <div className="modal-dialog">
        <div className="modal-content">
          <section className="modal-header">
            <h2 className="modal-header__title">{title}</h2>
            <button type="button" className="modal-header__close" onClick={onCloseModal}>X</button>
          </section>
          <section className="modal-body">
            {children}
          </section>
        </div>
      </div>
    </section>
  );
}
