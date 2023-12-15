const Subject = ({ value, onChange, loading }) => {
    return (
        <div className="relative">
            <input
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                type="text"
                placeholder="Emne"
                className="input input-bordered w-full"
            />
            {loading && (
                <div className="absolute top-4 left-4 skeleton bg-base-200 h-5 w-2/4"></div>
            )}
        </div>
    );
};

export default Subject;
