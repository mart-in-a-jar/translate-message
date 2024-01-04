import { useState } from "react";

const Chat = () => {
    const [showChat, setShowChat] = useState(true);
    return (
        <div className="absolute bottom-2 right-2">
            {showChat ? (
                <>
                    <iframe
                        className="h-[500px] w-96 "
                        src="https://copilotstudio.microsoft.com/environments/Default-45b10503-08a5-4e5b-84f3-61fcf02ca92c/bots/cr513_chatbotSsn/webchat?__version__=2"
                    ></iframe>
                    <span
                        className="absolute -top-9 right-2 text-8xl cursor-pointer"
                        onClick={() => {
                            setShowChat(false);
                        }}
                    >
                        -
                    </span>
                </>
            ) : (
                <button
                    className="btn-circle btn h-20 w-20 btn-accent flex items-center"
                    onClick={() => {
                        setShowChat(true);
                    }}
                >
                    <span>CHAT</span>
                </button>
            )}
        </div>
    );
};

export default Chat;
