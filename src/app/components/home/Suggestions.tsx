"use client";

interface SuggestionsProps {
  suggestions: string[];
  onSelectSuggestion: (suggestion: string) => void;
}

const Suggestions = ({ suggestions, onSelectSuggestion }: SuggestionsProps) => {
  return (
    suggestions.length > 0 && (
      <ul className="mt-1 border border-[#404040] rounded-[5px] bg-white max-w-[800px] w-full mx-auto">
        {suggestions.map((suggestion, index) => (
          <li
            key={index}
            onClick={() => onSelectSuggestion(suggestion)}
            className="p-2 cursor-pointer hover:bg-gray-200 text-[12px] sm:text-[20px]"
          >
            {suggestion}
          </li>
        ))}
      </ul>
    )
  );
};

export default Suggestions;
