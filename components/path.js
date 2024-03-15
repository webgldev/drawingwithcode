const GITHUB_REPOSITORY = '/drawingwithcode';

export function updateLinkHref(link, originalHref, location) {
  const basePath = location.href.includes(GITHUB_REPOSITORY) ? GITHUB_REPOSITORY : '';
  const absoluteHref = new URL(basePath + originalHref.substring(2), location.origin).href;
  link.href = absoluteHref;
}

export function highlightActiveLink(links, currentPath) {
  links.forEach(link => {
    const linkPath = new URL(link.href, location.origin).pathname;
    link.classList.toggle('active-link', linkPath === currentPath);
  });
}