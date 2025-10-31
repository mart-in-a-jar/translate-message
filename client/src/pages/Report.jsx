const Report = () => {
    document.title = "Styrerapport - SSN";

    return (
        <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
            <iframe
                title="PowerBI SSN - Styrerapportering"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiMWExOGE0YjYtZDQ1Yy00MzEwLTkyMDAtMTI2NWE3ODQ1YzUxIiwidCI6IjQ1YjEwNTAzLTA4YTUtNGU1Yi04NGYzLTYxZmNmMDJjYTkyYyIsImMiOjh9"
                allowFullScreen={true}
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Report;