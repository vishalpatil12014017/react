import React from 'react'

function Form({ children, onSubmit }) {
    return (
        <form
            style={
                {
                    border: "1px solid #fff",
                    borderRadius: "3%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "column",
                    width: "50%",
                    margin: "0 auto",
                    marginTop: 10,
                    padding: "15px",
                    backgroundColor: "wheat"

                }
            }
            onSubmit={onSubmit}>
            {children}
        </form>
    )
}

export default Form
