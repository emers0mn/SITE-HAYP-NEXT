import React from "react";
import Modal from 'react-bootstrap/Modal'

export const HomeCepCheckSuccess = (props) => {
    return(
        <>
            <Modal
              show={props.isOpen}
              onHide={props.toggle}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Body>
                  <h5>OLA MUNDO@</h5>
              </Modal.Body>
            </Modal>
        </>
    )
}