"use client";
import LoaderUI from "@/components/LoaderUI";
import MeetingRoom from "@/components/MeetingRoom";
import MeetingSetup from "@/components/MeetingSetup";
import { useGetCallById } from "@/hooks/useGetCallById";
import { useUser } from "@clerk/nextjs";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const MeetingPage = () => {
  const { id } = useParams();
  const { isLoaded } = useUser();

  const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);

  const {call, isCallLoading} = useGetCallById(id);

  if (!isLoaded || isCallLoading) return <LoaderUI />;

  if (!call) {
    return (
        <div className="h-screen flex items-center justify-center">
            <p className="text-2xl font-semibold">Meeting not found</p>
        </div>
    )
  }

  return (
    <StreamCall call={call}>
        <StreamTheme>
            {isSetupComplete ? (
                <MeetingRoom />
            ) : (
                <MeetingSetup onSetupComplete={() => setIsSetupComplete(true)} />
            )}
        </StreamTheme>
    </StreamCall>
  );
};

export default MeetingPage;
