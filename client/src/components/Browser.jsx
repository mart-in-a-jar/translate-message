const Browser = ({ children }) => {
    return (
        <div className="mockup-browser bg-base-300 lg:w-full max-w-screen-xl">
            <div className="mockup-browser-toolbar">
                <div className="input max-w-[200px] sm:max-w-none">https://boligadm.ssn.no</div>
            </div>
            <div className="flex gap-3 flex-col px-4 pt-4 pb-8 bg-base-200">
                {children}
            </div>
        </div>
    );
};

export default Browser;
