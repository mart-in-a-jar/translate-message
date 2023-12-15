const Toggle = ({ value, onChange, label }) => {
    return (
        <div className="form-control">
            <label className="label cursor-pointer gap-2 justify-start">
                <input
                    id="ai"
                    type="checkbox"
                    className="toggle"
                    checked={value}
                    onChange={() => {
                        onChange(!value);
                    }}
                />
                <span className="label-text">{label}</span>
            </label>
        </div>
    );
};

export default Toggle;
