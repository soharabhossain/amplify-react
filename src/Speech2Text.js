import React, { useEffect } from "react";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";

function displayText(text){
    console.log(text);
}

const Speech2Text = () => {
  const {transcript, resetTranscript} = useSpeechRecognition();

  displayText(transcript)

  useEffect(() => {
    return () => { 
                  resetTranscript();
                 };
                 }, []);
  return (
    <div>
      <br/>
      <div>
        <button onClick={SpeechRecognition.startListening()}>Start</button>
        <button onClick={SpeechRecognition.stopListening()}>Stop</button>
        <p>{transcript}</p>
      </div>
      <br/>
    </div>
  );
};
export default Speech2Text;
