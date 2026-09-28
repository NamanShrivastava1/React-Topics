import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { setPrompt } from "../state/workbench.slice";
import PresetChips from "./PresetChips";

const PromptPanel = () => {
  const dispatch = useAppDispatch();
  const prompt = useAppSelector((s) => s.workbench.prompt);

  return (
    <div className="space-y-3">
      <textarea
        id="analysis-prompt"
        rows={4}
        value={prompt}
        onChange={(e) => dispatch(setPrompt(e.target.value))}
        placeholder="Describe what you want to analyse across the uploaded documents…"
        className="
          w-full rounded-lg border border-neutral-300 px-3.5 py-2.5 text-[0.8125rem]
          text-neutral-800 placeholder-neutral-400 resize-y bg-white
          focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:border-neutral-400
          transition-shadow duration-150
        "
        maxLength={2000}
      />

      <div className="flex items-center justify-between">
        <span className="text-xs text-neutral-400">{prompt.length} / 2000</span>
      </div>

      <div>
        <p className="text-xs text-neutral-500 mb-2">Or pick a preset:</p>
        <PresetChips />
      </div>
    </div>
  );
};

export default PromptPanel;
