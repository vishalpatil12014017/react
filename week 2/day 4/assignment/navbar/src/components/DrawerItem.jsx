function DrawerItem({ label }) {
    return (
        <button style={{
            margin: "8px 25px",
            border: "none",
            backgroundColor: "#585a5a",
            height: "30px",
            width: "80px",
            color: "white",
            borderRadius: "5px",
            boxShadow: "2px 1px 5px black"
        }}>{label}</button>
    )
}

export { DrawerItem };