export const scrollTo = (
  id: string,
  setMobileMenuOpen?: (value: boolean) => void,
) => {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }

  if (setMobileMenuOpen) {
    setMobileMenuOpen(false);
  }
};