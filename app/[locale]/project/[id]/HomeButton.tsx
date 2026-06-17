"use client";

import { useTranslations } from "next-intl";

import { useRouter } from "@/i18n/navigation";

const HomeButton = () => {
  const t = useTranslations("Project");
  const router = useRouter();

  const moveHome = () => {
    router.replace("/");
  };

  return (
    <button
      onClick={moveHome}
      className="w-full mt-8 md:mt-12 py-4 rounded-md bg-foreground/5 text-foreground/75 hover:bg-foreground/10 hover:text-foreground"
    >
      {t("backToHome")}
    </button>
  );
};

export default HomeButton;
