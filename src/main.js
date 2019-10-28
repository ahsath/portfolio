import "typeface-roboto";
import "@/assets/css/tailwind.css";
import TheHeading from "@/components/TheHeading.vue";
import BaseIcon from "@/components/BaseIcon.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseContainer from "@/components/BaseContainer.vue";
import BaseExternalLink from "@/components/BaseExternalLink.vue";
import BaseInternalLink from "@/components/BaseInternalLink.vue";
import BaseCard from "@/components/BaseCard.vue";
import BaseCardTitle from "@/components/BaseCardTitle.vue";
import BaseCardText from "@/components/BaseCardText.vue";
import BaseCardActions from "@/components/BaseCardActions.vue";
import BaseGrid from "@/components/BaseGrid.vue";
import BaseGridTrack from "@/components/BaseGridTrack.vue";

import "aos/dist/aos.css";
// Add web app manifest

export default function(Vue, { router, head, isClient }) {
  Vue.component("TheHeading", TheHeading);
  Vue.component("BaseButton", BaseButton);
  Vue.component("BaseIcon", BaseIcon);
  Vue.component("BaseContainer", BaseContainer);
  Vue.component("BaseExternalLink", BaseExternalLink);
  Vue.component("BaseInternalLink", BaseInternalLink);
  Vue.component("BaseCard", BaseCard);
  Vue.component("BaseCardTitle", BaseCardTitle);
  Vue.component("BaseCardText", BaseCardText);
  Vue.component("BaseCardActions", BaseCardActions);
  Vue.component("BaseGrid", BaseGrid);
  Vue.component("BaseGridTrack", BaseGridTrack);
}
