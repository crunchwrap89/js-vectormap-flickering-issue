<script setup lang="ts">
import { useInitMap } from "@/composables/useInitMap";

const { initMap } = useInitMap();
const map = await initMap();

</script>
