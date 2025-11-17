import { ref, computed } from "vue";
import { OPTIONS, ROUTES, CDNs, comfyApp, postTextData } from "./constants";

export function useState() {
    const notePath = ref("");
    const mdContent = ref("");
    const isModalShown = ref(false);
    const scrollTopVal = ref(0);
    const unsaveMark = ref(false);
    const needSaving = ref(false);
    const dialogTitle = computed(() => {
        return unsaveMark.value ? `${notePath.value}*` : notePath.value;
    });
    const cdnToUse = computed(() => {
        if (comfyApp.extensionManager.setting.get(OPTIONS.useLocalCDN)) {
            // 发送当前选定的远程CDN
            postTextData(comfyApp, ROUTES.setCDN, comfyApp.extensionManager.setting.get(OPTIONS.cdnSwitch)).then();
            return CDNs.localCachedCDN;
        } else {
            return comfyApp.extensionManager.setting.get(OPTIONS.cdnSwitch) as string;
        }
    });

    return {
        notePath,
        mdContent,
        isModalShown,
        scrollTopVal,
        unsaveMark,
        needSaving,
        dialogTitle,
        cdnToUse,
    }
}
