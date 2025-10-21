const Report = () => {

    return (
        <div style={{ width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
            <iframe
                title="Saker fra Devops"
                width="100%"
                height="100%"
                src="https://app.powerbi.com/view?r=eyJrIjoiYjk2OWE0MGQtNjFhNC00ZWE2LTg4NDAtNzdlMjgwMTYzYzgzIiwidCI6IjQ1YjEwNTAzLTA4YTUtNGU1Yi04NGYzLTYxZmNmMDJjYTkyYyIsImMiOjh9"
                allowFullScreen={true}
                style={{ border: 'none' }}
            />
        </div>
    );
};

export default Report;
