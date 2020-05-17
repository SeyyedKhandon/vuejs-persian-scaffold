import { onMounted } from "@vue/composition-api";
import { useThemeManager } from "@/hooks/hook_theme";

export const useThemeInitialize = () => {
  const { loadTheme } = useThemeManager();
  onMounted(loadTheme);
};
