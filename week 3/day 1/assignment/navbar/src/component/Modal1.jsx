import React from 'react'
import { useContext } from 'react'
import { AuthContext } from './AuthContext'
function Modal1() {
    const { Token } = useContext(AuthContext)
    return (
        <div>
            <div className="modal fade p-4" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content p-4">
                        <div className="modal-header border-0">
                            <h5 className="modal-title mx-auto h2" id="staticBackdropLabel">Login Details</h5>
                            <div> <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div>

                        </div>
                      {
                          Token?  <div className="modal-body">
                          <p>Login is Successful</p>
                           <p>Token Number is {Token}</p>
                       </div>:  <div className="modal-body">
                           <p>Please Login</p>
                        </div>
                      }
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal1
