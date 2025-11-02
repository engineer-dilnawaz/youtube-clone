import { useState } from "react";
import { EN_LOCALE } from "~/constants";

type DescriptionProps = {
  text: string;
};

export const Description = ({ text = "" }: DescriptionProps) => {
  const [expanded, setExpanded] = useState(false);

  const formattedText = text
    // Detect URLs
    .replace(
      /(https?:\/\/[^\s]+)/g,
      `<a href="$1" target="_blank" class="text-blue-300 hover:underline break-all">$1</a>`
    )
    // Detect hashtags
    .replace(
      /#(\w+)/g,
      `<a href="https://www.youtube.com/hashtag/$1" target="_blank" class="text-blue-300 hover:underline">#$1</a>`
    )
    // Detect mentions (optional)
    .replace(
      /@(\w+)/g,
      `<a href="https://www.youtube.com/@$1" target="_blank" class="text-blue-300 hover:underline">@$1</a>`
    );

  return (
    <div className="text-sm leading-relaxed text-gray-200">
      <div className="relative">
        <div
          className={`whitespace-pre-wrap overflow-hidden transition-all duration-500 ease-in-out ${
            expanded ? "max-h-[2000px]" : "max-h-12"
          }`}
          dangerouslySetInnerHTML={{ __html: formattedText }}
        />
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
        )}
      </div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-white mt-1 cursor-pointer hover:underline transition-all duration-200 ease-in-out"
      >
        {expanded ? EN_LOCALE.SHOW_LESS : EN_LOCALE.SHOW_MORE}
      </button>
    </div>
  );
};
