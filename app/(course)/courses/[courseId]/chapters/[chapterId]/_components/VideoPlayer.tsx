/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import axios from "axios";
import MuxPlayer from "@mux/mux-player-react";
import { Loader2, Lock } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useConfettiStore } from "@/hooks/use-confetti-store";
import toast from "react-hot-toast";

interface VideoPlayerProps {
  playbackId: string;
  courseId: string;
  chapterId: string;
  nextChapterId: string;
  isLocked: boolean;
  completeOnEnd: boolean;
  title: string;
}
const VideoPlayer = ({
  playbackId,
  courseId,
  chapterId,
  nextChapterId,
  isLocked,
  completeOnEnd,
  title,
}: VideoPlayerProps) => {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();
  const confetti = useConfettiStore();

  // const onEnd = async () => {
  //   try {
  //     if (completeOnEnd) {
  //       await axios.put(
  //         `/api/courses/${courseId}/chapters/${chapterId}/progress`,
  //         {
  //           isCompleted: true,
  //         }
  //       );
  //       if (!nextChapterId) {
  //         confetti.onOpen();
  //       }
  //       toast.success("Progress Updated");
  //       router.refresh();

  //       if (nextChapterId) {
  //         router.push(`/courses/${courseId}/chapters/${chapterId}`);
  //       }
  //     }
  //   } catch {
  //     toast.error("Something went wrong");
  //   }
  // };
  // NOT WORKING BECAUSE CHROME HAS DEPERACTED THIS FEATURE

  return (
    <div className="relative aspect-video">
      {!isReady && !isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800">
          <Loader2 className="size-8 animate-spin text-secondary" />
        </div>
      )}
      {isLocked && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-800 flex-col gap-y-2 text-secondary">
          <Lock className="size-8" />
          <p className="text-sm">This chapter is locked</p>
        </div>
      )}
      {!isLocked && (
        <MuxPlayer
          title={title}
          className={cn(!isReady && "hidden")}
          onCanPlay={() => setIsReady(true)}
          // onEnded={onEnd}
          autoPlay
          playbackId={playbackId}
        />
      )}
    </div>
  );
};

export default VideoPlayer;
