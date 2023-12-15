const Button = ({ onClick, classes, loading, text }) => {
    return (
        <button
            onClick={onClick}
            className={`btn ${classes} ${loading ? "cursor-not-allowed" : ""}`}
        >
            {loading ? (
                <span className="loading loading-spinner loading-md opacity-50"></span>
            ) : (
                text
            )}
        </button>
    );
};

export default Button;
