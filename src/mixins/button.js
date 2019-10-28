export default {
  computed: {
    base() {
      return [
        "inline-flex",
        "items-center",
        "justify-center",
        "rounded",
        "h-mdc-button",
        "min-w-mdc-button",
        "px-3",
        "text-gray-900",
        "uppercase",
        "font-medium",
        "text-sm",
        "tracking-widest",
        "transition--all"
      ];
    },
    text() {
      return [...this.base];
    },
    outline() {
      return [...this.base, "border", "border-gray-900"];
    },
    icon() {
      return [
        "flex",
        "items-center",
        "justify-center",
        "text-gray-700",
        "w-12",
        "h-12",
        "rounded-full",
        "hover:bg-gray-300",
        "transition--all"
      ];
    },
    fab() {
      return [
        "fab",
        "flex",
        "items-center",
        "justify-center",
        "bg-gray-400",
        "text-black",
        "w-14",
        "h-14",
        "rounded-full",
        "fixed",
        "bottom-1",
        "right-1",
        "shadow-md"
      ];
    }
  }
};
