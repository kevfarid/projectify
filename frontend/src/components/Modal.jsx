import React from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal">
      <div className="modal--content">
        <div className="modal--btn-close" onClick={onClose}>
          x
        </div>
        {children}
      </div>
    </div>
  )
}

export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById('root')
  )
}
