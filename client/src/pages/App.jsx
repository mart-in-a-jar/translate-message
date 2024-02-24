import { useEffect, useState } from "react";
import Browser from "../components/Browser";
import Input from "../components/Input";
import Subject from "../components/Subject";
import Toggle from "../components/Toggle";
import Button from "../components/Button";
import Chat from "../components/Chat";

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
        const res = await fetch(`/api/translate/${method}`, {
            method: "POST",
            body: JSON.stringify({ input }),
            headers: { "Content-Type": "application/json" },
        });
        const fetchedData = await res.json();
        return fetchedData.data;
    };

    const handleTranslate = async () => {
        setIsLoading(true);
        setSubjectAi("");
        setSubjectGoogle("");
        setOutputAi("");
        setOutputGoogle("");
        const [aiSubject, googleSubject, aiText, googleText] =
            await Promise.all([
                translate(subject, "ai"),
                translate(subject, "google"),
                translate(input, "ai"),
                translate(input, "google"),
            ]);
        setSubjectAi(aiSubject);
        setSubjectGoogle(googleSubject);
        setOutputAi(aiText);
        setOutputGoogle(googleText);
        setIsLoading(false);
    };

    return (
        <div className="flex items-center justify-center p-10 flex-col">
            <Browser>
                <div className="toggles self-start">
                    <Toggle value={showAi} onChange={setShowAi} label="Ai" />
                    <Toggle
                        value={showGoogle}
                        onChange={setShowGoogle}
                        label="Google translate"
                    />
                </div>
                <h1 className="self-center text-xl mb-4">Epost</h1>
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
                <div className="output flex gap-3 flex-col lg:flex-row w-full justify-center">
                    {showAi && (
                        <div className="engelsk flex flex-col gap-3 flex-1 max-w-[700px]">
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
                        <div className="engelsk flex flex-col gap-3 flex-1 max-w-[700px]">
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
            <Chat />
        </div>
    );
}

export default App;
