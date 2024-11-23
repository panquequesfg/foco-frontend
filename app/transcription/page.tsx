"use client";

// Code based on example provided by AWS
// https://github.com/aws-samples/amazon-transcribe-streaming-example-webapp-audiostream

import { useEffect, useState } from "react";
import { TranscribeStreamingClient } from "@aws-sdk/client-transcribe-streaming";
import LiveTranscriptions from "./LiveTranscription";
import { Transcript } from "./types";

function App() {
  const [transcriptionClient, setTranscriptionClient] =
    useState<TranscribeStreamingClient | null>(null);
  const [transcribeStatus, setTranscribeStatus] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<Transcript>();
  const [lines, setLines] = useState<Transcript[]>([]);
  const [currentLine, setCurrentLine] = useState<Transcript[]>([]);
  const [mediaRecorder, setMediaRecorder] = useState<AudioWorkletNode>();

  useEffect(() => {
    if (transcript) {
      setTranscript(transcript);
      if (transcript.partial) {
        setCurrentLine([transcript]);
      } else {
        setLines((prev) => [...prev, transcript]);
        setCurrentLine([]);
      }
    }
  }, [transcript]);

  const handleTranscribe = async () => {
    setTranscribeStatus((prev) => !prev);
    if (transcribeStatus) {
      console.log("Stopping transcription");
    } else {
      console.log("Starting transcription");
    }
    return transcribeStatus;
  };

  return (
    <>
      <LiveTranscriptions
        mediaRecorder={mediaRecorder}
        setMediaRecorder={setMediaRecorder}
        setTranscriptionClient={setTranscriptionClient}
        transcriptionClient={transcriptionClient}
        transcribeStatus={transcribeStatus}
        setTranscript={setTranscript}
      />
      <div>
        <button type="button" onClick={handleTranscribe}>
          {transcribeStatus ? "Stop Transcription" : "Start Transcription"}
        </button>
      </div>
      <div style={{ height: "663px" }} className={"transcriptionContainer"}>
        {lines.map((line, index) => {
          return (
            <div key={index}>
              <strong>Channel {line.channel}</strong>: {line.text}
              <br />
            </div>
          );
        })}
        {currentLine.length > 0 &&
          currentLine.map((line, index) => {
            return (
              <div key={index}>
                <strong>Channel {line.channel}</strong>: {line.text}
                <br />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
