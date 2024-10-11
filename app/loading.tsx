import { Loader2 } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex size-full items-center justify-center">
      <div>
        <Loader2 className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
