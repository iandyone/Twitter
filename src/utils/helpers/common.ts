export function getLikesList(likes: string[], uid: string) {
  if (!likes) {
    return [uid];
  }

  const isAledyLikes = likes.includes(uid);

  return isAledyLikes ? likes.filter((id) => id !== uid) : [...likes, uid];
}

export function setPageScroll(flag: boolean) {
  document.body.style.position = flag ? 'static' : 'fixed';
}
