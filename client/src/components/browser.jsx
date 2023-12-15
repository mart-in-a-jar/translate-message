const browser = ({ children }) => {
    return (
        <div className="mockup-browser bg-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">https://boligadm.ssn.no</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-base-200">
                {children}
            </div>
        </div>
    );
};

export default browser;
