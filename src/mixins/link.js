export default {
  // Todo: add exact prop
  props: {
    to: {
      type: String,
      default: "/"
    },
    linkStyle: {
      type: String,
      default: "simple"
    },
    target: {
      type: String,
      default: "__blank"
    }
  },
  computed: {
    classes() {
      return [...this[this.linkStyle]];
    },
    simple() {
      return ["text-gray-700", "transition--all"];
    },
    avatar() {
      return [
        "flex",
        "items-center",
        "justify-center",
        "w-12",
        "h-12",
        "rounded-full",
        "hover:bg-gray-300",
        "transition--all"
      ];
    }
  }
};
