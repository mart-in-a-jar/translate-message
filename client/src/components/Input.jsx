const Input = ({ value, onChange, children, loading }) => {
    return (
        <div className="relative">
            <textarea
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                className="textarea textarea-bordered min-h-[200px] w-full"
            >
                {children}
            </textarea>
            {loading && (
                <div className="flex flex-col gap-4 w-full absolute top-8 left-2">
                    <div className="skeleton bg-base-200 h-5 w-11/12"></div>
                    <div className="skeleton bg-base-200 h-5 w-2/3"></div>
                    <div className="skeleton bg-base-200 h-5 w-4/5"></div>
                </div>
            )}
        </div>
    );
};

export default Input;
