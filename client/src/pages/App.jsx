import { useEffect, useState } from "react";
import Browser from "../components/Browser";
import Button from "../components/Button";
import Input from "../components/Input";
import Subject from "../components/Subject";
import Toggle from "../components/Toggle";

function App() {
    const [input, setInput] = useState("");
    const [subject, setSubject] = useState("");
    const [outputGoogle, setOutputGoogle] = useState("");
    const [outputAi, setOutputAi] = useState("");
    const [subjectAi, setSubjectAi] = useState("");
    const [subjectGoogle, setSubjectGoogle] = useState("");
    const [showAi, setShowAi] = useState(true);
    const [showGoogle, setShowGoogle] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    // Make sure at least one option is picked
    useEffect(() => {
        if (!showAi && !showGoogle) {
            setShowGoogle(true);
        }
    }, [showAi]);

    useEffect(() => {
        if (!showAi && !showGoogle) {
            setShowAi(true);
        }
    }, [showGoogle]);

    const translate = async (input, method) => {
        try {
            const res = await fetch(`/api/translate/${method}`, {
                method: "POST",
                body: JSON.stringify({ input }),
                headers: { "Content-Type": "application/json" },
            });

            const fetchedData = await res.json();

            if (!res.ok) {
                throw new Error(fetchedData.error || res.statusText);
            }

            return fetchedData.data;
        } catch (err) {
            throw new Error(`Translation error (${method}): ${err.message}`);
        }
    };

    const handleTranslate = async () => {
        setError(null);
        setIsLoading(true);
        setSubjectAi("");
        setSubjectGoogle("");
        setOutputAi("");
        setOutputGoogle("");

        try {
            const [aiSubject, googleSubject, aiText, googleText] =
                await Promise.allSettled([
                    translate(subject, "ai"),
                    translate(subject, "google"),
                    translate(input, "ai"),
                    translate(input, "google"),
                ]);

            setSubjectAi(
                aiSubject.status === "fulfilled" ? aiSubject.value : "",
            );
            setSubjectGoogle(
                googleSubject.status === "fulfilled" ? googleSubject.value : "",
            );
            setOutputAi(aiText.status === "fulfilled" ? aiText.value : "");
            setOutputGoogle(
                googleText.status === "fulfilled" ? googleText.value : "",
            );

            // Spread to set to avoid duplicates
            const errors = [...new Set(
                [aiSubject, googleSubject, aiText, googleText]
                    .filter((result) => result.status === "rejected")
                    .map((result) => result.reason.message)
            )];

            if (errors.length > 0) {
                setError(errors.join(", "));
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-10">
            <Browser>
                <div className="toggles self-start">
                    <Toggle value={showAi} onChange={setShowAi} label="Ai" />
                    <Toggle
                        value={showGoogle}
                        onChange={setShowGoogle}
                        label="Google translate"
                    />
                </div>
                <h1 className="mb-4 self-center text-xl">Epost</h1>
                {error && (
                    <div
                        className="relative mb-4 rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
                        role="alert"
                    >
                        <span className="block sm:inline">{error}</span>
                    </div>
                )}
                <div className="norsk flex flex-col gap-3 lg:w-[700px] lg:self-center">
                    <h2>Norsk</h2>
                    <Subject value={subject} onChange={setSubject} />
                    <Input value={input} onChange={setInput}></Input>
                </div>
                <Button
                    onClick={handleTranslate}
                    classes={"btn-secondary w-40 self-center"}
                    loading={isLoading}
                    text={"Oversett"}
                />
                <div className="output flex w-full flex-col justify-center gap-3 lg:flex-row">
                    {showAi && (
                        <div className="engelsk flex max-w-[700px] flex-1 flex-col gap-3">
                            <h2>Engelsk (ai)</h2>
                            <Subject
                                loading={isLoading}
                                value={subjectAi}
                                onChange={setSubjectAi}
                            />
                            <Input
                                loading={isLoading}
                                value={outputAi}
                                onChange={setOutputAi}
                            ></Input>
                        </div>
                    )}
                    {showGoogle && (
                        <div className="engelsk flex max-w-[700px] flex-1 flex-col gap-3">
                            <h2>Engelsk (google)</h2>
                            <Subject
                                loading={isLoading}
                                value={subjectGoogle}
                                onChange={setSubjectGoogle}
                            />
                            <Input
                                loading={isLoading}
                                value={outputGoogle}
                                onChange={setOutputGoogle}
                            ></Input>
                        </div>
                    )}
                </div>
                <Button
                    classes={"btn-primary"}
                    text={"Send e-post"}
                    loading={isLoading}
                />
            </Browser>
        </div>
    );
}

export default App;
