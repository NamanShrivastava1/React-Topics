import { PRESET_PROMPTS } from "../../../shared/types";
import { useAppDispatch, useAppSelector } from "../../../shared/hooks";
import { setPrompt } from "../state/workbench.slice";

const PresetChips = () => {
  const dispatch = useAppDispatch();
  const currentPrompt = useAppSelector((s) => s.workbench.prompt);

  return (
    <div className="flex flex-wrap gap-2">
      {PRESET_PROMPTS.map((preset) => {
        const isActive = currentPrompt === preset;
        return (
          <button
            key={preset}
            type="button"
            onClick={() => dispatch(setPrompt(preset))}
            className={`
              text-xs px-3 py-1.5 rounded-full border transition-all duration-150
              ${
                isActive
                  ? "border-neutral-800 bg-neutral-800 text-white"
                  : "border-neutral-200 bg-white text-neutral-600 hover:border-neutral-400 hover:bg-neutral-50"
              }
            `}
          >
            {preset.length > 55 ? preset.slice(0, 55) + "…" : preset}
          </button>
        );
      })}
    </div>
  );
};

export default PresetChips;
