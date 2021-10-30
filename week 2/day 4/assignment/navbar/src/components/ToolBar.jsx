function ToolBar({children}) {
    return ( 
    <form style={{
        backgroundColor: "#0d0d0e",
        display: "flex",
        justifyContent: "space-between",
    }}>
        {children}
    </form>
    )
}

export { ToolBar };