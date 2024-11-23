// Code based on example provided by AWS
// https://github.com/aws-samples/amazon-transcribe-streaming-example-webapp-audiostream

import { TranscribeStreamingClient } from "@aws-sdk/client-transcribe-streaming";

export interface Transcript {
  channel: string;
  partial?: boolean;
  text?: string;
}

export interface LiveTranscriptionProps {
  mediaRecorder: AudioWorkletNode | undefined;
  setMediaRecorder: (m: AudioWorkletNode) => void;
  setTranscriptionClient: (a: TranscribeStreamingClient) => void;
  transcriptionClient: TranscribeStreamingClient | null;
  transcribeStatus: boolean;
  setTranscript: (t: Transcript) => void;
}

export type RecordingProperties = {
  numberOfChannels: number;
  sampleRate: number;
  maxFrameCount: number;
};

export type MessageDataType = {
  message: string;
  buffer: Array<Float32Array>;
  recordingLength: number;
};

export type AudioSourceType = "Microphone" | "ScreenCapture";
