// scrollUtils.ts
export const scrollToSection = (id: string, offset: number) => {
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - offset,
      behavior: 'smooth',
    });
  }
};
