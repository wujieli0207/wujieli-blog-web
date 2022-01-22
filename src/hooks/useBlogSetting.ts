import { computed } from "vue";
import {
  BLOG_TITLE,
  BLOG_SUB_TITLE,
  GITHUB_URL,
  JUEJIN_URL,
  MAIL_URL,
  LINKEDIN_URL,
} from "/@/settings/blogSetting";

export function useBlogSetting() {
  const blogTitle = computed(() => {
    return BLOG_TITLE;
  });
  const blogSubTitle = BLOG_SUB_TITLE;
  const githubUrl = GITHUB_URL;
  const JuejinUrl = JUEJIN_URL;
  const mailUrl = MAIL_URL;
  const linkedInUrl = LINKEDIN_URL;

  return {
    blogTitle,
    blogSubTitle,
    githubUrl,
    JuejinUrl,
    mailUrl,
    linkedInUrl,
  };
}
